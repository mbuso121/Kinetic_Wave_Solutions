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
    '  <a href="tel:+27843826567" style="color:#1a1a1a;font-size:1rem;letter-spacing:0;text-transform:none;font-family:sans-serif;font-weight:600">+27 84 382 6567</a>',
    '  <a href="https://wa.me/27843826567" target="_blank" style="color:#25D366;letter-spacing:0;text-transform:none;font-family:sans-serif;font-weight:600">WhatsApp Us</a>',
    '  <a href="contact.html" style="background:#7DC527;color:#fff;margin:1rem;border-radius:999px;text-align:center;letter-spacing:0;text-transform:none;font-family:sans-serif;font-weight:600">Get a Quote</a>',
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
    '      <h4>Contact Us</h4>',
    '      <p>5142 Balkan Street, Ext 04<br/>Lenasia South, Gauteng 1829</p>',
    '      <a href="tel:+27843826567">+27 84 382 6567</a>',
    '      <a href="https://wa.me/27843826567" target="_blank" style="color:#25D366">WhatsApp: +27 84 382 6567</a>',
    '      <a href="mailto:info@kineticwavesolutions.co.za">info@kineticwavesolutions.co.za</a>',
    '      <p style="margin-top:0.8rem">FNB &bull; Acc: 62709684874<br/>Branch: 254005</p>',
    '    </div>',
    '  </div>',
    '  <div class="footer-bottom">',
    '    <p class="footer-copy">&copy; 2025 Kinetic Wave Solutions &bull; All rights reserved</p>',
    '    <p class="footer-copy">Powered by <a href="https://www.balanceitafrica.co.za" target="_blank" style="color:#7DC527;text-decoration:none">www.balanceitafrica.co.za</a></p>',
    '  </div>',
    '</footer>',
    '<div class="footer-nav-bar">',
    '  <a href="index.html">Home</a>',
    '  <a href="about.html">About</a>',
    '  <a href="services.html">Services</a>',
    '  <a href="gallery.html">Gallery</a>',
    '  <a href="projects.html">Projects</a>',
    '  <a href="contact.html">Contact</a>',
    '  <a href="https://www.balanceitafrica.co.za" target="_blank" style="color:#7DC527">balanceitafrica.co.za</a>',
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

  /* Hamburger — animates to X */
  var btn    = document.getElementById('ham-btn');
  var drawer = document.getElementById('nav-drawer');
  var isOpen = false;

  function openDrawer()  { isOpen = true;  drawer.classList.add('open');    animateHam(true);  }
  function closeDrawer() { isOpen = false; drawer.classList.remove('open'); animateHam(false); }

  function animateHam(active) {
    if (!btn) return;
    var spans = btn.querySelectorAll('span');
    if (active) {
      spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  }

  if (btn && drawer) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (isOpen) closeDrawer(); else openDrawer();
    });
    drawer.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', closeDrawer);
    });
    document.addEventListener('click', function(e) {
      if (isOpen && !drawer.contains(e.target) && e.target !== btn) closeDrawer();
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

  /* ── FLOATING WHATSAPP BUTTON ── */
  var waBtn = document.createElement('a');
  waBtn.href = 'https://wa.me/27843826567?text=Hi%20Kinetic%20Wave%20Solutions%2C%20I%20would%20like%20to%20get%20a%20quote.';
  waBtn.target = '_blank';
  waBtn.setAttribute('aria-label', 'Chat on WhatsApp');
  waBtn.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  waBtn.style.cssText = 'position:fixed;bottom:1.5rem;right:1.5rem;z-index:8000;width:58px;height:58px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(37,211,102,0.45);transition:transform 0.2s,box-shadow 0.2s;text-decoration:none;-webkit-tap-highlight-color:transparent';
  waBtn.addEventListener('mouseenter', function() {
    waBtn.style.transform = 'scale(1.1)';
    waBtn.style.boxShadow = '0 6px 28px rgba(37,211,102,0.6)';
  });
  waBtn.addEventListener('mouseleave', function() {
    waBtn.style.transform = '';
    waBtn.style.boxShadow = '0 4px 20px rgba(37,211,102,0.45)';
  });
  document.body.appendChild(waBtn);

})();
