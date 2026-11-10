document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('form.js-form').forEach((form) => {
  const status = form.querySelector('.form-status');
  const successText = form.dataset.success ||
    "Thanks! Your inquiry has been sent — I'll be in touch soon.";
  const eventName = form.dataset.event || 'inquiry-form-submitted';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Sending...';
    status.className = 'form-status';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Form submission failed');

      form.reset();
      status.textContent = successText;
      status.className = 'form-status success';
      if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({ path: eventName, title: eventName, event: true });
      }
    } catch (err) {
      status.textContent = 'Something went wrong. Please try again.';
      status.className = 'form-status error';
    }
  });
});
