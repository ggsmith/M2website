---
layout: default
title: Search
---

{::options parse_block_html="false" /}

<nav class="headline-wrapper flex flex-col gap-3 bg-[#eee] px-4 py-2 md:grid md:grid-cols-[minmax(0,4fr)_minmax(14rem,1fr)] md:items-center">
  <div class="flex flex-wrap items-center justify-between gap-2">
    <span class="headline text-lg">Search Results</span>
    <span class="flex items-center gap-2">
      <button class="rounded border border-gray-300 bg-white px-2 py-1 text-sm hover:bg-gray-50" onclick="p -= 1; updateSearch()">prev</button>
      <button class="rounded border border-gray-300 bg-white px-2 py-1 text-sm hover:bg-gray-50" onclick="p += 1; updateSearch()">next</button>
    </span>
  </div>
  <form class="search w-full" id="x-search" role="search">
    <input class="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" id="x-search-query" type="text" name="q" placeholder="Search" />
  </form>
</nav>

<div class="main-wrapper">
{% if page.layout == "entry" %}
  {%- include docs-sidebar.html  -%}
{%- endif %}

  <main class="main-content" id="main">
    <article class="main-page-content">
      <div id="content">
	<section class="outline-section">
	  <ul class="outline-list">
            <!-- <li class="outline-item">
		 <a class="outline-link" href="/url#hash">text</a>
            </li> -->
	  </ul>
	</section>
      </div>
    </article>
  </main>
</div>

<script src="{{ site.url }}{{ site.baseurl }}/static/packages.js"></script>
<script>
var p = 0;
function updateSearch(input) {
    if (input) results = input;
    var m = Math.floor(window.innerHeight / 35);
    $('.outline-list').html(
	results.slice(p * m, (p + 1) * m).map(elt => `
        <li class="outline-item">
          <a class="outline-link" href="{{ site.baseurl }}/help/#${encodeTag(database.get(elt.item))}">${elt.item}</a>
        </li>`).join(''));
}

$.getJSON(bucket+version+'/fullindex.json', function(index) {
    database = new Map(Object.entries(index));
    fuse.setCollection(Array.from(database.keys()));
    if (urlParams.has("q")) {
	var query = decodeTag(urlParams.get("q"));
	searchBox.val(query);
	doSearch(query);
    };
});
</script>
