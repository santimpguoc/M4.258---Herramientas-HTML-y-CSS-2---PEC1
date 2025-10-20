// assets/scripts/menu.js
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("[data-nav]");
  const btn = nav?.querySelector(".navbar__toggle");
  const menu = nav?.querySelector(".navbar__menu");

  if (!btn || !menu) return;

  const closeMenu = () => {
    btn.setAttribute("aria-expanded", "false");
    menu.setAttribute("hidden", "");
    menu.removeAttribute("data-open");
  };

  const openMenu = () => {
    btn.setAttribute("aria-expanded", "true");
    menu.removeAttribute("hidden");
    menu.setAttribute("data-open", "true");
  };

  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  });

  // Cierra al navegar (solo móvil)
  menu.addEventListener("click", (e) => {
    if (e.target.closest(".navbar__link")) closeMenu();
  });

  // Cierra si se redimensiona a escritorio
  const mql = window.matchMedia(`(min-width: ${getComputedStyle(document.documentElement).getPropertyValue('--bp-lg') || '1024px'})`);
  const onResize = () => { if (mql.matches) closeMenu(); };
  mql.addEventListener?.("change", onResize);
});
