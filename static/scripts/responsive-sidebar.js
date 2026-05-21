document.addEventListener("DOMContentLoaded", () => {
  const sidebarHiddenSheet = document.querySelector("#sidebar-hidden-sheet");
  const sidebarButton = document.querySelector("#sidebar-toggle-button");
  const responsiveSidebar = document.querySelector("#responsive-sidebar");
  const logoLetters = responsiveSidebar.querySelector("#logo-letters");
  const logoText = responsiveSidebar.querySelector("#logo-text");
  const desktopQuery = window.matchMedia("(min-width: 768px)");

  const showSheet = () => {
    sidebarHiddenSheet.classList.remove("opacity-0", "pointer-events-none");
    sidebarHiddenSheet.classList.add("opacity-20", "pointer-events-auto");
  };

  const hideSheet = () => {
    sidebarHiddenSheet.classList.remove("opacity-20", "pointer-events-auto");
    sidebarHiddenSheet.classList.add("opacity-0", "pointer-events-none");
  };

  const adjustLettersDown = () => {
    logoLetters.classList.add("!text-2xl");
    logoText.classList.add("!text-3xl");
  };

  const adjustLettersUp = () => {
    logoLetters.classList.remove("!text-2xl");
    logoText.classList.remove("!text-3xl");
  };

  const openSidebar = () => {
    responsiveSidebar.classList.remove(
      "sidebar-collapsed-desktop",
      "sidebar-collapsed-mobile",
    );
    responsiveSidebar.classList.add(
      desktopQuery.matches ? "sidebar-open-desktop" : "sidebar-open-mobile",
    );

    if (!desktopQuery.matches) {
      adjustLettersDown();
      showSheet();
    }
  };

  const closeSidebar = () => {
    responsiveSidebar.classList.remove(
      "sidebar-open-desktop",
      "sidebar-open-mobile",
    );
    responsiveSidebar.classList.add(
      desktopQuery.matches
        ? "sidebar-collapsed-desktop"
        : "sidebar-collapsed-mobile",
    );

    adjustLettersUp();
    hideSheet();
  };

  const sidebarIsClosed = () =>
    responsiveSidebar.classList.contains("sidebar-collapsed-desktop") ||
    responsiveSidebar.classList.contains("sidebar-collapsed-mobile");

  const syncSidebarToBreakpoint = () => {
    adjustLettersUp();
    hideSheet();
    responsiveSidebar.classList.remove(
      "sidebar-collapsed-desktop",
      "sidebar-collapsed-mobile",
      "sidebar-open-desktop",
      "sidebar-open-mobile",
    );
    responsiveSidebar.classList.add(
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
