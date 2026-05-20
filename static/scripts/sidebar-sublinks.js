document.addEventListener("DOMContentLoaded", () => {
  const sidebarLinksWithSublinks = document.querySelectorAll(
    ".sidebar-link-with-sublinks",
  );

  sidebarLinksWithSublinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const clickedOnTheLink = e.target.closest("a");
      if (clickedOnTheLink) return;
      const sublinkList = document.querySelector("#sublink-list");
      if (!sublinkList) {
        console.error("No sublink content in link in sidebar.");
        return;
      }
      const isHidden = sublinkList.classList.contains("hidden");
      const classToRemove = isHidden ? "hidden" : "block";
      const classToAdd = isHidden ? "block" : "hidden";
      sublinkList.classList.remove(classToRemove);
      sublinkList.classList.add(classToAdd);
    });
  });
});
