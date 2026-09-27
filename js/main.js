/* ─── Dark mode ─────────────────────────────────── */
(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (stored === 'dark' || (!stored && prefersDark)) root.setAttribute('data-theme', 'dark');

  document.addEventListener('click', e => {
    const btn = e.target.closest('#themeToggle');
    if (!btn) return;
    const isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) { root.removeAttribute('data-theme'); localStorage.setItem('theme', 'light'); }
    else { root.setAttribute('data-theme', 'dark'); localStorage.setItem('theme', 'dark'); }
  });
})();

/* ─── Scroll progress bar ──────────────────────── */
const bar = document.getElementById('logicBar');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  bar.style.transform = `scaleX(${pct})`;
});

/* ─── Reveal on scroll ─────────────────────────── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

/* Hero reveal on load */
document.querySelectorAll('.hero-left, .hero-right').forEach((el, i) => {
  setTimeout(() => el.classList.add('visible'), 100 + i * 150);
});

/* ─── Projects Carousel ────────────────────────── */
(function () {
  const track  = document.getElementById('carouselTrack');
  const dots   = document.querySelectorAll('.carousel-dot');
  const btnPrev = document.getElementById('carouselPrev');
  const btnNext = document.getElementById('carouselNext');
  if (!track) return;

  const total = document.querySelectorAll('.proj-slide').length;
  let current = 0;

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  btnPrev.addEventListener('click', () => goTo(current - 1));
  btnNext.addEventListener('click', () => goTo(current + 1));
  dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.index)));

  /* Touch / swipe */
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
  });

  /* Keyboard */
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') goTo(current + 1);
    if (e.key === 'ArrowLeft')  goTo(current - 1);
  });
})();
