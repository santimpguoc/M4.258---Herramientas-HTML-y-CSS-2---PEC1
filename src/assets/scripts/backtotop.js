/**
 * Botón "Volver arriba"
 * Muestra un botón para volver al inicio de la página cuando se hace scroll hacia abajo.
 */

(() => {
  const btn = document.getElementById('backtotop');
  if (!btn) return;

  // px de scroll para mostrar el botón
  const SHOW_AT = 400;

  const onScroll = () => {
    if (window.scrollY > SHOW_AT) {
      btn.classList.add('c-backtotop--visible');
    } else {
      btn.classList.remove('c-backtotop--visible');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // estado inicial

  // Mejora: scroll suave si el usuario no pide reducir movimiento
  btn.addEventListener('click', (e) => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const target = document.getElementById('intro');
    if (target && !prefersReduced) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      target.focus?.({ preventScroll: true });
    }
  });
})();
