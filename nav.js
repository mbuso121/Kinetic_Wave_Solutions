/* nav.js — inject nav + footer + scroll behaviour */
(function () {

const NAV = `
<nav id="nav" class="transparent">
  <a class="nav-logo" href="index.html"><strong>Kinetic</strong> Wave Solutions</a>
  <ul class="nav-links">
    <li><a href="index.html"    data-p="index">Home</a></li>
    <li><a href="about.html"    data-p="about">About</a></li>
    <li><a href="services.html" data-p="services">Services</a></li>
    <li><a href="gallery.html"  data-p="gallery">Gallery</a></li>
    <li><a href="projects.html" data-p="projects">Projects</a></li>
    <li><a href="contact.html"  data-p="contact">Contact</a></li>
  </ul>
  <a class="nav-cta" href="contact.html">Get a Quote</a>
  <button class="ham" onclick="toggleDrawer()" id="ham"><span></span><span></span><span></span></button>
</nav>
<div id="drawer">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="services.html">Services</a>
  <a href="gallery.html">Gallery</a>
  <a href="projects.html">Projects</a>
  <a href="contact.html">Contact</a>
</div>`;

const FOOTER = `
<footer>
  <div class="footer-grid">
    <div>
      <div class="footer-brand-name"><strong>Kinetic</strong> Wave Solutions</div>
      <p class="footer-tagline">A modern energy business driven by entrepreneurship. Excellence and innovation built into every design.</p>
      <div class="footer-reg">Reg No: 2017/296488/07<br/>Tax No: 90160599272<br/>CSD: MAAA0505139</div>
    </div>
    <div class="footer-col">
      <h4>Navigate</h4>
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="services.html">Services</a>
      <a href="gallery.html">Gallery</a>
      <a href="projects.html">Projects</a>
      <a href="contact.html">Contact</a>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <a href="services.html">Electrical Installation</a>
      <a href="services.html">Electrical Maintenance</a>
      <a href="services.html">Off-Grid Solar</a>
      <a href="services.html">LED Lighting</a>
      <a href="services.html">Generator Install</a>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <p>3248 Titanium Street<br/>Finetown, Gauteng 1826</p>
      <a href="tel:0843826567">084 382 6567</a>
      <a href="mailto:info@kineticwavesolutions.co.za">info@kineticwavesolutions.co.za</a>
      <p style="margin-top:0.8rem">FNB &bull; Acc: 62709684874<br/>Branch: 254005</p>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="footer-copy">&copy; 2024 Kinetic Wave Solutions</p>
    <p class="footer-copy">Quality &bull; Reliability &bull; Professionalism &bull; Accessibility</p>
  </div>
</footer>
<div class="footer-nav-bar">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="services.html">Services</a>
  <a href="gallery.html">Gallery</a>
  <a href="projects.html">Projects</a>
  <a href="contact.html">Contact</a>
</div>`;

document.body.insertAdjacentHTML('afterbegin', NAV);
document.body.insertAdjacentHTML('beforeend', FOOTER);

// active link
const page = document.body.dataset.page || '';
document.querySelectorAll('.nav-links a[data-p]').forEach(a => {
  if (a.dataset.p === page) a.classList.add('active');
});

// nav scroll behaviour
const nav = document.getElementById('nav');
function updateNav() {
  if (window.scrollY > 60) { nav.classList.add('solid'); nav.classList.remove('transparent'); }
  else { nav.classList.remove('solid'); nav.classList.add('transparent'); }
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// if page has no hero photo, always solid
if (document.body.dataset.solidnav === '1') {
  nav.classList.add('solid'); nav.classList.remove('transparent');
}

// drawer
window.toggleDrawer = function() {
  const d = document.getElementById('drawer');
  d.style.display = d.style.display === 'flex' ? 'none' : 'flex';
};

// reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('up'); });
}, { threshold: 0.07 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

})();
