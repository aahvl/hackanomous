// script.js — updated to support multiple star buttons (slack + back)
(function () {
  // set orb offsetPath for every star button (keeps orb animation working)
  const allBtns = document.querySelectorAll('.star-btn');
  allBtns.forEach(btn => {
    const orb = btn.querySelector('.star-btn__orb');
    function setOrbPath() {
      const w = Math.max(1, btn.offsetWidth);
      const h = Math.max(1, btn.offsetHeight);
      if (orb) orb.style.offsetPath = `path('M 0 0 H ${w} V ${h} H 0 Z')`;
    }
    setOrbPath();
    window.addEventListener('resize', setOrbPath);
  });

  // helper to draw tiny dots on a given button's canvas
  function drawDotsOnButton(btn, seedCount = 22, color = 'rgba(0,0,0,0.35)') {
    if (!btn) return;
    const canvas = btn.querySelector('.star-btn__bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    function resizeAndDraw() {
      const w = Math.max(1, btn.offsetWidth);
      const h = Math.max(1, btn.offsetHeight);
      // account for devicePixelRatio for crispness
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = color;
      for (let i = 0; i < seedCount; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 1.4 + 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    resizeAndDraw();
    window.addEventListener('resize', resizeAndDraw);
  }

  // draw dots for Slack button (existing id) and Back button (id back-home)
  drawDotsOnButton(document.getElementById('cta-slack'), 22, 'rgba(0,0,0,0.35)');
  drawDotsOnButton(document.getElementById('back-home'), 18, 'rgba(0,0,0,0.28)');
})();