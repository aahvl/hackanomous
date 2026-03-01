(function () {
  const btn = document.querySelector('.star-btn');
  if (!btn) return;

  const orb = btn.querySelector('.star-btn__orb');
  const canvas = btn.querySelector('.star-btn__bg');
  const ctx = canvas.getContext('2d');

  function resize() {
    const w = btn.offsetWidth;
    const h = btn.offsetHeight;
    canvas.width  = w;
    canvas.height = h;
    orb.style.offsetPath = `path('M 0 0 H ${w} V ${h} H 0 Z')`;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    for (let i = 0; i < 22; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 1.4 + 0.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  resize();
  window.addEventListener('resize', resize);
})();
