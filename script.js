/* Dark Mode */
const body = document.body;
const toggle = document.getElementById('darkToggle');
let dark = false;

toggle.addEventListener('click', () => {
  dark = !dark;
  body.classList.toggle('dark', dark);
  toggle.textContent = dark ? '☀️' : '🌙';
});

/* Hamburger */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* Close nav on link click */
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* Scroll reveal */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

/* Form submit */
function handleSubmit() {
  const name  = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const brand = document.getElementById('brand').value.trim();

  if (!name || !phone || !brand) {
    alert('من فضلك املأ الحقول المطلوبة: الاسم، الهاتف، واسم البراند.');
    return;
  }

  // Success feedback
  const btn = event.target;
  btn.textContent = '✅ تم إرسال طلبك!';
  btn.style.background = '#56c271';
  btn.style.color = '#ffffff';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = '🍋 أرسل طلبك الآن';
    btn.style.background = '';
    btn.style.color = '';
    btn.disabled = false;
  }, 4000);
}

/* Smooth navbar shadow on scroll */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.12)';
  } else {
    navbar.style.boxShadow = '0 1px 12px rgba(0,0,0,0.07)';
  }
});

    //!_____Footer year _____________________
    document.getElementById("year").textContent=new Date().getFullYear();
