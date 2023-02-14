/*==================== SHOW MENU ====================*/
const primaryNav = document.getElementById("primary-navigation"),
  navToggle = document.getElementById("js-nav-toggle"),
  navIcon = document.getElementById("js-nav-icon");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-label", "Close navigation");
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-label", "Open navigation");
    navToggle.setAttribute("aria-expanded", false);
  }
});
