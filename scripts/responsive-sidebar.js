document.addEventListener("DOMContentLoaded", () => {
  const sidebarHiddenSheet = document.querySelector("#sidebar-hidden-sheet");
  const sidebarButton = document.querySelector("#sidebar-toggle-button");
  const sidebarElement = document.querySelector("#responsive-sidebar");

  sidebarButton.addEventListener("click", () => {
    const isClosed = sidebarElement.classList.contains("-translate-x-full");
    const classToRemove = isClosed ? "-translate-x-full" : "translate-x-0";
    const classToAdd = isClosed ? "translate-x-0" : "-translate-x-full";
    sidebarElement.classList.remove(classToRemove);
    sidebarElement.classList.add(classToAdd);
    sidebarHiddenSheet.classList.remove("opacity-0");
    sidebarHiddenSheet.classList.remove("pointer-events-none");
    sidebarHiddenSheet.classList.add("opacity-20");
    sidebarHiddenSheet.classList.add("pointer-events-auto");
  });

  sidebarHiddenSheet.addEventListener("click", () => {
    sidebarElement.classList.remove("translate-x-0");
    sidebarElement.classList.add("-translate-x-full");
    sidebarHiddenSheet.classList.remove("opacity-20");
    sidebarHiddenSheet.classList.remove("pointer-events-auto");
    sidebarHiddenSheet.classList.add("opacity-0");
    sidebarHiddenSheet.classList.add("pointer-events-none");
  });
});
