// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Active nav link highlight on scroll
const links = [...document.querySelectorAll('.nav-link')];
const sections = links.map(a => document.querySelector(a.getAttribute('href')));
const setActive = () => {
  const y = window.scrollY + 100; // offset for sticky header
  sections.forEach((sec, idx) => {
    const top = sec.offsetTop, bottom = top + sec.offsetHeight;
    if (y >= top && y < bottom) {
      links.forEach(l => l.classList.remove('active'));
      links[idx].classList.add('active');
    }
  });
};
window.addEventListener('scroll', setActive);
window.addEventListener('load', setActive);

// Mobile drawer
const drawer = document.getElementById('drawer');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('drawerClose');
const toggleDrawer = (open) => {
  drawer.classList[open ? 'add' : 'remove']('open');
  drawer.setAttribute('aria-hidden', String(!open));
  document.body.style.overflow = open ? 'hidden' : '';
};
menuBtn.addEventListener('click', () => toggleDrawer(true));
closeBtn.addEventListener('click', () => toggleDrawer(false));
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleDrawer(false)));