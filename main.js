// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');
if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Event filters
const filterButtons = document.querySelectorAll('.chip');
const eventCards = document.querySelectorAll('.event-card');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const type = btn.getAttribute('data-filter');
    eventCards.forEach(card => {
      const match = type === 'all' || card.getAttribute('data-type') === type;
      card.style.display = match ? '' : 'none';
    });
  });
});

// Lightbox (simple)
document.querySelectorAll('.gallery-item').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const url = link.getAttribute('href');
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.8);display:flex;align-items:center;justify-content:center;z-index:80;padding:20px;';
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Gallery image';
    img.style.maxWidth = '96%';
    img.style.maxHeight = '90%';
    overlay.appendChild(img);
    overlay.addEventListener('click', () => document.body.removeChild(overlay));
    document.body.appendChild(overlay);
  });
});

// Contact form (demo: client-side only)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    formStatus.textContent = 'Sending...';
    const formData = new FormData(contactForm);
    const payload = Object.fromEntries(formData.entries());
    // simulate async request
    await new Promise(r => setTimeout(r, 800));
    // success message (replace with real endpoint later)
    formStatus.textContent = 'Thanks! We will reach out soon.';
    contactForm.reset();
  });
}

// Year in footer
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

// Newsletter form
const newsletterForm = document.getElementById('newsletterForm');
const newsletterStatus = document.getElementById('newsletterStatus');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', async e => {
    e.preventDefault();
    if (newsletterStatus) newsletterStatus.textContent = 'Subscribing...';
    const formData = new FormData(newsletterForm);
    const email = formData.get('email');
    await new Promise(r => setTimeout(r, 600));
    if (newsletterStatus) newsletterStatus.textContent = 'Thanks for subscribing!';
    newsletterForm.reset();
  });
}


