(function () {

  var NAV_HTML = [
    '<nav id="nav" class="is-transparent">',
    '  <a class="nav-logo" href="index.html"><strong>Kinetic</strong>&nbsp;Wave&nbsp;Solutions</a>',
    '  <ul class="nav-links">',
    '    <li><a href="index.html"    data-p="index">Home</a></li>',
    '    <li><a href="about.html"    data-p="about">About</a></li>',
    '    <li><a href="services.html" data-p="services">Services</a></li>',
    '    <li><a href="gallery.html"  data-p="gallery">Gallery</a></li>',
    '    <li><a href="projects.html" data-p="projects">Projects</a></li>',
    '    <li><a href="contact.html"  data-p="contact">Contact</a></li>',
    '  </ul>',
    '  <div class="nav-right">',
    '    <a class="nav-cta" href="contact.html">Get a Quote</a>',
    '    <button class="ham" id="ham-btn" aria-label="Open menu">',
    '      <span></span><span></span><span></span>',
    '    </button>',
    '  </div>',
    '</nav>',
    '<div id="nav-drawer">',
    '  <a href="index.html">Home</a>',
    '  <a href="about.html">About</a>',
    '  <a href="services.html">Services</a>',
    '  <a href="gallery.html">Gallery</a>',
    '  <a href="projects.html">Projects</a>',
    '  <a href="contact.html">Contact</a>',
    '  <a href="contact.html">Get a Quote</a>',
    '</div>'
  ].join('\n');

  var FOOTER_HTML = [
    '<footer>',
    '  <div class="footer-grid">',
    '    <div>',
    '      <div class="footer-brand-name"><strong>Kinetic</strong> Wave Solutions</div>',
    '      <p class="footer-tagline">A modern energy business driven by entrepreneurship. Excellence and innovation built into every design.</p>',
    '      <div class="footer-reg">',
    '        Reg No: 2017/296488/07<br/>',
    '        Tax No: 90160599272<br/>',
    '        CSD Supplier: MAAA0505139',
    '      </div>',
    '    </div>',
    '    <div class="footer-col">',
    '      <h4>Navigate</h4>',
    '      <a href="index.html">Home</a>',
    '      <a href="about.html">About Us</a>',
    '      <a href="services.html">Services</a>',
    '      <a href="gallery.html">Gallery</a>',
    '      <a href="projects.html">Projects</a>',
    '      <a href="contact.html">Contact</a>',
    '    </div>',
    '    <div class="footer-col">',
    '      <h4>Services</h4>',
    '      <a href="services.html">Electrical Installation</a>',
    '      <a href="services.html">Electrical Maintenance</a>',
    '      <a href="services.html">Off-Grid Solar</a>',
    '      <a href="services.html">LED Lighting</a>',
    '      <a href="services.html">Generator Install</a>',
    '    </div>',
    '    <div class="footer-col">',
    '      <h4>Contact</h4>',
    '      <p>3248 Titanium Street<br/>Finetown, Gauteng 1826</p>',
    '      <a href="tel:0843826567">084 382 6567</a>',
    '      <a href="mailto:info@kineticwavesolutions.co.za">info@kineticwavesolutions.co.za</a>',
    '      <p style="margin-top:0.8rem">FNB &bull; Acc: 62709684874<br/>Branch: 254005</p>',
    '    </div>',
    '  </div>',
    '  <div class="footer-bottom">',
    '    <p class="footer-copy">&copy; 2024 Kinetic Wave Solutions &bull; All rights reserved</p>',
    '    <p class="footer-copy">Quality &bull; Reliability &bull; Professionalism &bull; Accessibility</p>',
    '  </div>',
    '</footer>',
    '<div class="footer-nav-bar">',
    '  <a href="index.html">Home</a>',
    '  <a href="about.html">About</a>',
    '  <a href="services.html">Services</a>',
    '  <a href="gallery.html">Gallery</a>',
    '  <a href="projects.html">Projects</a>',
    '  <a href="contact.html">Contact</a>',
    '</div>'
  ].join('\n');

  /* Inject */
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  /* Active link */
  var pg = document.body.dataset.page || '';
  document.querySelectorAll('.nav-links a[data-p]').forEach(function(a) {
    if (a.getAttribute('data-p') === pg) a.classList.add('active');
  });

  /* Scroll behaviour */
  var nav = document.getElementById('nav');
  var solid = document.body.dataset.solidnav === '1';

  function updateNav() {
    if (solid || window.scrollY > 60) {
      nav.classList.add('is-solid');
      nav.classList.remove('is-transparent');
    } else {
      nav.classList.remove('is-solid');
      nav.classList.add('is-transparent');
    }
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* Hamburger */
  var btn = document.getElementById('ham-btn');
  var drawer = document.getElementById('nav-drawer');
  var open = false;
  if (btn && drawer) {
    btn.addEventListener('click', function() {
      open = !open;
      if (open) { drawer.classList.add('open'); }
      else { drawer.classList.remove('open'); }
    });
    drawer.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        open = false; drawer.classList.remove('open');
      });
    });
  }

  /* Scroll reveal */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) e.target.classList.add('up');
      });
    }, { threshold: 0.07 });
    document.querySelectorAll('.reveal').forEach(function(el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el) { el.classList.add('up'); });
  }

})();
