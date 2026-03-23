/* ─── Cursor ───────────────────────────────────── */
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function animCursor() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();

  document.querySelectorAll('a, button, .proj-card, .stat-card, .contact-link-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  /* ─── Logic Bar ────────────────────────────────── */
  const bar = document.getElementById('logicBar');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    bar.style.height = pct + '%';
  });

  /* ─── Reveal on scroll ─────────────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  reveals.forEach(r => observer.observe(r));

  /* Hero reveal on load */
  document.querySelectorAll('.hero-left, .hero-right').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 + i * 200);
  });