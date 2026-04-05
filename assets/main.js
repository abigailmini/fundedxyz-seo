// FundedXYZ - Main JS
document.addEventListener('DOMContentLoaded', () => {
  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    if (q) q.addEventListener('click', () => {
      const wasActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        const a = i.querySelector('.faq-answer');
        if (a) a.style.maxHeight = null;
      });
      if (!wasActive) {
        item.classList.add('active');
        const a = item.querySelector('.faq-answer');
        if (a) a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  // Scroll fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Sticky header CTA show on scroll
  const header = document.getElementById('header');
  const headerCta = document.getElementById('headerCta');
  if (header && headerCta) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 120) {
        header.classList.add('scrolled');
        headerCta.classList.add('show');
      } else {
        header.classList.remove('scrolled');
        headerCta.classList.remove('show');
      }
    }, { passive: true });
  }
});
