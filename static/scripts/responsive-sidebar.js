document.addEventListener("DOMContentLoaded", () => {
  const sidebarHiddenSheet = document.querySelector("#sidebar-hidden-sheet");
  const sidebarButton = document.querySelector("#sidebar-toggle-button");
  const sidebarElement = document.querySelector("#responsive-sidebar");
  const desktopQuery = window.matchMedia("(min-width: 768px)");

  const showSheet = () => {
    sidebarHiddenSheet.classList.remove("opacity-0", "pointer-events-none");
    sidebarHiddenSheet.classList.add("opacity-20", "pointer-events-auto");
  };

  const hideSheet = () => {
    sidebarHiddenSheet.classList.remove("opacity-20", "pointer-events-auto");
    sidebarHiddenSheet.classList.add("opacity-0", "pointer-events-none");
  };

  const openSidebar = () => {
    sidebarElement.classList.remove(
      "sidebar-collapsed-desktop",
      "sidebar-collapsed-mobile",
    );
    sidebarElement.classList.add(
      desktopQuery.matches ? "sidebar-open-desktop" : "sidebar-open-mobile",
    );

    if (!desktopQuery.matches) showSheet();
  };

  const closeSidebar = () => {
    sidebarElement.classList.remove(
      "sidebar-open-desktop",
      "sidebar-open-mobile",
    );
    sidebarElement.classList.add(
      desktopQuery.matches
        ? "sidebar-collapsed-desktop"
        : "sidebar-collapsed-mobile",
    );

    hideSheet();
  };

  const sidebarIsClosed = () =>
    sidebarElement.classList.contains("sidebar-collapsed-desktop") ||
    sidebarElement.classList.contains("sidebar-collapsed-mobile");

  const syncSidebarToBreakpoint = () => {
    hideSheet();
    sidebarElement.classList.remove(
      "sidebar-collapsed-desktop",
      "sidebar-collapsed-mobile",
      "sidebar-open-desktop",
      "sidebar-open-mobile",
    );
    sidebarElement.classList.add(
      desktopQuery.matches
        ? "sidebar-open-desktop"
        : "sidebar-collapsed-mobile",
    );
  };

  syncSidebarToBreakpoint();

  sidebarButton.addEventListener("click", () => {
    if (sidebarIsClosed()) {
      openSidebar();
    } else {
      closeSidebar();
    }
  });

  sidebarHiddenSheet.addEventListener("click", closeSidebar);

  desktopQuery.addEventListener("change", syncSidebarToBreakpoint);
});
