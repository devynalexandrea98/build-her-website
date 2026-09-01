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

const form = document.getElementById('inquiry-form');
const status = document.getElementById('form-status');

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

    if (response.ok) {
      form.reset();
      status.textContent = "Thanks! Your inquiry has been sent — I'll be in touch soon.";
      status.className = 'form-status success';
    } else {
      throw new Error('Form submission failed');
    }
  } catch (err) {
    status.textContent = 'Something went wrong. Please try again or email me directly.';
    status.className = 'form-status error';
  }
});
