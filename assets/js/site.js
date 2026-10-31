/* El Castillo Commissary — website concept by ARO Solutions */
(function () {
  'use strict';

  var PHONE = '+13462542525';
  var TZ = 'America/Chicago';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- Spanish copy (English lives in the HTML) ---------- */
  var ES = {
    skip: 'Saltar al contenido',
    concept: 'Concepto de sitio web por ARO Solutions para El Castillo Commissary. No es el sitio oficial.',
    utilOpen: 'Abierto ahora · 24/7',
    langGroup: 'Idioma', navLabel: 'Principal', menuOpen: 'Abrir menú', mapLabel: 'Mapa: El Castillo Commissary en Skyline Dr cerca de W Greenridge Dr, Houston', dockLabel: 'Acciones rápidas',
    navServices: 'Servicios', navHours: '24/7', navPlans: 'Planes', navBuilds: 'Construcción', navFaq: 'Preguntas', navVisit: 'Visítanos', navCta: 'Reserva tu lugar',
    h1a: 'La base', h1b: 'de los food', h1c: 'trucks en Houston.',
    heroSub: 'Comisaría aprobada por la Ciudad de Houston en Skyline Drive. Recarga propano, lleva hielo e insumos, lava tu unidad a fondo, dale servicio o construye un food truck nuevo desde cero. A la hora que llegues.',
    cta1: 'Reserva tu lugar', cta2: 'Llama al (346) 254-2525',
    proof1: 'Comisaría aprobada', proof2: '4.6 en Google · 22 reseñas', proof3: 'Abierto 24 horas · 7 días',
    t1: 'Propano', t2: 'Hielo', t3: 'Abarrotes', t4: 'Lavado profundo', t5: 'Servicio', t6: 'Construcción', t7: 'Abierto 24/7',
    bay: 'Bahía', bay1: 'Lo básico', bay2: 'A cualquier hora', bay3: 'Servicios', bay4: 'Planes', bay5: 'Construcción', bay6: 'Preguntas', bay7: 'Visítanos',
    q1: '¿Qué es una comisaría para food trucks?',
    a1: 'Una comisaría es una base aprobada por el departamento de salud donde los vendedores móviles preparan comida, guardan insumos, recargan agua y propano, desechan residuos y limpian sus unidades entre turnos.',
    a2: 'Houston exige que las unidades móviles de comida operen desde una comisaría aprobada. El Castillo está en la lista oficial de la Ciudad de Houston y, a diferencia de la mayoría, nunca cerramos.',
    factStatusK: 'Estatus', factStatusV: 'Aprobada — Ciudad de Houston', factHoursK: 'Horario', factHoursV: 'Abierto 24 horas · 7 días', factAddrK: 'Dirección', factPhoneK: 'Teléfono',
    photoCaption: 'Área de lavado techada · 6345 Skyline Dr',
    hoursH1: 'Escoge una hora.', hoursH2: 'Estamos abiertos.',
    hoursIntro: 'Los food trucks no trabajan de nueve a cinco. Los de desayuno preparan antes del amanecer, los de noche cierran después de las 2 AM, y Texas exige que las unidades del condado de Harris pasen por su comisaría dentro de las 24 horas antes de operar. Por eso nunca cerramos.',
    now: 'Ahora', openWord: 'Abierto', hourLabel: 'Hora del día', dialFoot: 'Recorre el día. El letrero nunca cambia.',
    servicesH: 'Todo lo que tu truck necesita. Un solo lugar.', servicesIntro: 'Olvídate de dar vueltas por la ciudad. Llega, resuelve y sal, a las 2 de la tarde o a las 2 de la mañana.',
    s1t: 'Recarga de propano', s1d: 'Llena tus tanques aquí antes del turno. Sin desviarte a otro lugar.',
    s2t: 'Hielo', s2d: 'Hielo en bolsa listo cuando cargues, de día o de noche.',
    s3t: 'Abarrotes e insumos', s3d: 'Surte lo esencial antes de salir.',
    s4t: 'Lavado profundo', s4d: 'Lavado completo y limpieza profunda bajo techo.',
    s5t: 'Servicio al truck', s5d: 'Servicio mecánico y de equipo para mantener tu unidad en la calle.',
    s6t: 'Construcción de trucks', s6d: 'De una van vacía a una cocina completa, hecha a la medida de tu menú.', s6link: 'Ver construcción',
    plansH: 'Precios claros. Sin tanta llamada.', plansIntro: 'La mayoría de las comisarías en Houston te hacen llamar solo para saber el precio. Nosotros lo ponemos aquí.',
    p1k: 'Sin membresía', p1t: 'Visita', p1price: 'Paga al momento', p1a: 'Recarga de propano', p1b: 'Hielo, abarrotes e insumos', p1c: 'Lavado y limpieza profunda', p1cta: 'Ven cuando quieras',
    p2k: 'Tu base', p2t: 'Membresía de comisaría', perMonth: '/ mes', priceNote: 'Aquí va tu precio mensual', priceTbd: 'precio por definir',
    p2a: 'Base aprobada para tu permiso', p2b: 'Acceso 24/7, los 365 días', p2c: 'Propano, hielo e insumos aquí', p2d: 'Área de lavado y limpieza', p2cta: 'Reserva tu lugar',
    p3k: 'Desde cero', p3t: 'Construcción', p3price: 'Cotización a medida', p3a: 'Diseño de cocina y distribución', p3b: 'Construcción completa', p3c: 'Equipo y acabados', p3cta: 'Iniciar proyecto',
    buildsH: 'Construye tu truck. Y opéralo desde aquí.', buildsIntro: 'Construimos food trucks desde cero para emprendedores de Houston, diseñados según tu concepto, tu menú y tu forma de cocinar.',
    b1t: 'Plan', b1d: 'Concepto, menú y distribución de la cocina.', b2t: 'Construcción', b2d: 'Estructura, acero inoxidable, plomería y electricidad.',
    b3t: 'Equipo', b3d: 'Línea de cocina, refrigeración, campana y acabados.', b4t: 'A la calle', b4d: 'Entrega, y tu base en El Castillo.',
    buildsCta: 'Inicia tu proyecto', callA: 'Ventana de servicio', callB: 'Línea de cocina', callC: 'Campana y ventilación', blueprintL: 'Step van · unidad base',
    reviewsK: 'Lo que dicen', reviewsCount: '22 reseñas en Google',
    faqH: 'Respuestas directas.', faqIntro: '¿Tienes otra pregunta? Llámanos a cualquier hora:',
    fq1: '¿Los food trucks en Houston necesitan una comisaría?', fa1: 'Sí. La Ciudad de Houston exige que las unidades móviles de comida operen desde una comisaría aprobada por el departamento de salud, y la ley de Texas exige que las unidades en condados grandes como Harris regresen a su comisaría dentro de las 24 horas antes de operar. El Castillo está en la lista oficial de la Ciudad de Houston.',
    fq2: '¿De verdad abren las 24 horas?', fa2: 'Sí. El Castillo abre 24 horas al día, 7 días a la semana, para que atiendas tu truck antes del turno de desayuno o después de cerrar en la madrugada.',
    fq3: '¿Puedo recargar propano en El Castillo?', fa3: 'Sí. Recargamos propano aquí mismo, en 6345 Skyline Dr, Houston, TX 77057.',
    fq4: '¿Construyen food trucks?', fa4: 'Sí. Construimos food trucks a la medida desde cero (distribución, cocina y equipo) según tu concepto y tu menú.',
    fq5: '¿Dónde está El Castillo Commissary?', fa5: 'En 6345 Skyline Dr, Houston, TX 77057, en la zona Mid West de Houston, a unos minutos de la Galleria.',
    fq6: '¿Cuánto cuesta la membresía?', fa6: 'Los precios de la membresía están en los planes de arriba. Para cualquier otra cosa, llama al (346) 254-2525.',
    visitSub: 'Houston, TX 77057 · Zona Mid West, a unos minutos de la Galleria. Abierto 24 horas, 7 días a la semana.', directions: 'Cómo llegar',
    formH: 'Reserva tu lugar', formSub: 'Dinos qué necesitas. Nos llega como mensaje de texto.',
    fName: 'Nombre', errName: 'Escribe tu nombre.', fPhone: 'Teléfono', errPhone: 'Escribe un teléfono para devolverte la llamada.',
    fNeed: 'Necesito', o1: 'Membresía de comisaría', o2: 'Propano, hielo e insumos', o3: 'Lavado y limpieza', o4: 'Servicio al truck', o5: 'Construir un food truck',
    fLang: 'Idioma preferido', fSubmit: 'Enviar solicitud',
    sentK: 'Ya casi', sentH: 'Tu mensaje está listo.', sentP: 'Tócalo para enviarlo desde tu teléfono. Te devolvemos la llamada.', sentBtn: 'Abrir mensaje de texto', sentBack: 'Editar solicitud',
    fNote: '¿Prefieres hablar? Llama al',
    footerTag: 'La comisaría 24/7 de los food trucks en Houston. Propano, hielo, insumos, lavado, servicio y construcción en Skyline Drive.',
    madeBy: 'Concepto de sitio web por',
    dockCall: 'Llamar', dockDir: 'Cómo llegar', dockReserve: 'Reservar'
  };

  var STR = {
    en: {
      night: 'Night shift', day: 'Day shift',
      clock: function (t) { return "It's " + t + ' in Houston'; },
      clockFallback: 'Open now in Houston',
      menuOpen: 'Open menu', menuClose: 'Close menu',
      scenes: [
        [0, 'Late-night crews closing out: clean up, wash down, park.'],
        [4, 'Breakfast trucks prepping and loading up before sunrise.'],
        [7, 'Morning crews restocking supplies on the way out.'],
        [11, 'Lunch rush. Quick refills between stops.'],
        [14, 'Afternoon service, maintenance and prep for dinner.'],
        [17, 'Dinner trucks loading out for the evening.'],
        [21, 'Closing time: empty tanks, deep-clean, get ready for tomorrow.']
      ],
      sms: function (d) { return 'Hi El Castillo! This is ' + d.name + ' (' + d.phone + ').\nI need: ' + d.need + '.\nPreferred language: ' + d.lang + '.\n— sent from your website'; }
    },
    es: {
      night: 'Turno de noche', day: 'Turno de día',
      clock: function (t) { return 'Son las ' + t + ' en Houston'; },
      clockFallback: 'Abierto ahora en Houston',
      menuOpen: 'Abrir menú', menuClose: 'Cerrar menú',
      scenes: [
        [0, 'Equipos de madrugada cerrando: limpiar, lavar y estacionar.'],
        [4, 'Trucks de desayuno preparando y cargando antes del amanecer.'],
        [7, 'Equipos de la mañana surtiendo insumos antes de salir.'],
        [11, 'Hora del almuerzo. Recargas rápidas entre paradas.'],
        [14, 'Servicio, mantenimiento y preparación para la cena.'],
        [17, 'Trucks de cena cargando para la noche.'],
        [21, 'Hora de cerrar: vaciar tanques, limpiar a fondo y prepararse para mañana.']
      ],
      sms: function (d) { return '¡Hola El Castillo! Soy ' + d.name + ' (' + d.phone + ').\nNecesito: ' + d.need + '.\nIdioma preferido: ' + d.lang + '.\n— enviado desde su sitio web'; }
    }
  };

  var lang = 'en';
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  };

  /* ---------- i18n ---------- */
  function applyLang(next) {
    lang = next === 'es' ? 'es' : 'en';
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
      el.innerHTML = lang === 'es' && ES[key] !== undefined ? ES[key] : el.dataset.en;
    });
    $$('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (el.dataset.enAria === undefined) el.dataset.enAria = el.getAttribute('aria-label') || '';
      el.setAttribute('aria-label', lang === 'es' && ES[key] ? ES[key] : el.dataset.enAria);
    });
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    store.set('elc-lang', lang);
    tickClock();
    renderDial();
    syncMenuLabel();
  }

  /* ---------- Houston clock + day/night shift ---------- */
  function houstonNow() {
    try {
      var parts = new Intl.DateTimeFormat('en-US', { timeZone: TZ, hour: 'numeric', minute: '2-digit', hour12: true }).formatToParts(new Date());
      var hour24 = Number(new Intl.DateTimeFormat('en-US', { timeZone: TZ, hour: 'numeric', hourCycle: 'h23' }).format(new Date()));
      var text = parts.map(function (p) { return p.value; }).join('');
      return { text: text, hour: hour24 };
    } catch (e) { return null; }
  }
  function tickClock() {
    var now = houstonNow();
    var s = STR[lang];
    var line = $('[data-clock-line]');
    var shift = $('[data-shift-label]');
    if (!now) { if (line) line.textContent = s.clockFallback; return; }
    var night = now.hour >= 19 || now.hour < 6;
    document.documentElement.setAttribute('data-shift', night ? 'night' : 'day');
    if (shift) shift.textContent = night ? s.night : s.day;
    if (line) line.textContent = s.clock(now.text);
  }

  /* ---------- 24-hour dial ---------- */
  var ACTIVITY = [30, 24, 20, 22, 40, 62, 78, 70, 58, 55, 66, 92, 100, 88, 60, 52, 58, 76, 90, 84, 70, 58, 46, 36];
  var dialInput = $('[data-dial-input]');
  var dialBars = $('[data-dial-bars]');
  var nowHour = null;
  function fmtHour(h) { return (h % 12 || 12) + ':00 ' + (h < 12 ? 'AM' : 'PM'); }
  function sceneFor(h) {
    var list = STR[lang].scenes, out = list[0][1];
    list.forEach(function (row) { if (h >= row[0]) out = row[1]; });
    return out;
  }
  function buildDial() {
    if (!dialBars || !dialInput) return;
    ACTIVITY.forEach(function (v, h) {
      var i = document.createElement('i');
      i.style.setProperty('--h', v + '%');
      if (h < 5 || h > 20) i.className = 'is-night';
      dialBars.appendChild(i);
    });
    var now = houstonNow();
    if (now) { nowHour = now.hour; dialInput.value = String(now.hour); }
    dialInput.addEventListener('input', renderDial);
  }
  function renderDial() {
    if (!dialInput || !dialBars) return;
    var h = Number(dialInput.value);
    $$('i', dialBars).forEach(function (bar, idx) {
      bar.classList.toggle('is-on', idx === h);
      bar.classList.toggle('is-now', idx === nowHour);
    });
    var t = fmtHour(h);
    $('[data-dial-time]').textContent = t;
    $('[data-dial-scene]').textContent = sceneFor(h);
    var badge = $('[data-dial-now]');
    if (badge) badge.hidden = h !== nowHour;
    dialInput.setAttribute('aria-valuetext', t + ' — ' + (lang === 'es' ? 'Abierto' : 'Open'));
  }

  /* ---------- nav: solid on scroll, active link, drawer ---------- */
  var nav = $('#nav');
  var menuBtn = $('.nav__menu');
  var drawer = $('#drawer');
  function onScroll() { if (nav) nav.classList.toggle('is-solid', window.scrollY > 40); }
  function syncMenuLabel() {
    if (!menuBtn) return;
    var open = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-label', open ? STR[lang].menuClose : STR[lang].menuOpen);
  }
  function setMenu(open) {
    if (!menuBtn || !drawer) return;
    menuBtn.setAttribute('aria-expanded', String(open));
    drawer.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
    syncMenuLabel();
    if (open) { var first = $('a', drawer); if (first) first.focus(); }
  }
  if (menuBtn) menuBtn.addEventListener('click', function () { setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'); });
  if (drawer) drawer.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menuBtn && menuBtn.getAttribute('aria-expanded') === 'true') { setMenu(false); menuBtn.focus(); }
  });
  window.addEventListener('resize', function () { if (window.innerWidth > 1080) setMenu(false); });

  /* ---------- reveal, counters, active section ---------- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    if (reduceMotion || !target) return;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / 1400, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(1);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        var c = $('[data-count]', en.target);
        if (c) countUp(c);
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    $$('.reveal, .map, .blueprint').forEach(function (el) { io.observe(el); });

    var links = $$('.nav__links a');
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(function (s) { spy.observe(s); });
  } else {
    $$('.reveal, .map, .blueprint').forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- marquee: duplicate for a seamless loop ---------- */
  var track = $('[data-marquee]');
  if (track) {
    $$('span', track).forEach(function (s) {
      var c = s.cloneNode(true);
      c.removeAttribute('data-i18n');
      c.setAttribute('data-i18n-clone', s.getAttribute('data-i18n'));
      track.appendChild(c);
    });
  }
  function syncMarquee() {
    $$('[data-i18n-clone]').forEach(function (c) {
      var src = $('[data-i18n="' + c.getAttribute('data-i18n-clone') + '"]', track);
      if (src) c.innerHTML = src.innerHTML;
    });
  }

  /* ---------- flashlight on the services grid ---------- */
  var grid = $('[data-flashlight]');
  if (grid && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    grid.addEventListener('pointermove', function (e) {
      var r = grid.getBoundingClientRect();
      grid.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      grid.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
    grid.addEventListener('pointerleave', function () { grid.style.setProperty('--mx', '-999px'); grid.style.setProperty('--my', '-999px'); });
  }

  /* ---------- parallax on the wide photo ---------- */
  var para = $('[data-parallax]');
  var paraImg = para ? $('img', para) : null;
  var ticking = false;
  function parallax() {
    ticking = false;
    if (!para || !paraImg) return;
    var r = para.getBoundingClientRect();
    var vh = window.innerHeight;
    if (r.bottom < 0 || r.top > vh) return;
    var p = (r.top + r.height) / (vh + r.height);
    paraImg.style.transform = 'translate3d(0,' + (-p * 16).toFixed(2) + '%,0)';
  }
  window.addEventListener('scroll', function () {
    onScroll();
    if (!reduceMotion && !ticking) { ticking = true; requestAnimationFrame(parallax); }
  }, { passive: true });

  /* ---------- FAQ: one open at a time ---------- */
  $$('.qa').forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) $$('.qa').forEach(function (o) { if (o !== d) o.open = false; });
    });
  });

  /* ---------- reserve form → prefilled text message ---------- */
  var form = $('[data-reserve]');
  var sent = $('[data-sent]');
  if (form && sent) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.elements.name, phone = form.elements.phone;
      var ok = true;
      [[name, 'errName'], [phone, 'errPhone']].forEach(function (pair) {
        var input = pair[0];
        var err = $('[data-i18n="' + pair[1] + '"]', form);
        var bad = !input.value.trim() || (input === phone && input.value.replace(/\D/g, '').length < 7);
        input.setAttribute('aria-invalid', String(bad));
        if (err) { err.hidden = !bad; if (bad) input.setAttribute('aria-describedby', err.id || (err.id = 'err-' + input.id)); }
        if (bad && ok) { input.focus(); ok = false; }
      });
      if (!ok) return;
      var checked = $('input[name="lang"]:checked', form);
      var msg = STR[lang].sms({
        name: name.value.trim(),
        phone: phone.value.trim(),
        need: form.elements.need.options[form.elements.need.selectedIndex].text,
        lang: checked ? checked.value : 'English'
      });
      $('[data-sent-msg]').textContent = msg;
      $('[data-sent-sms]').setAttribute('href', 'sms:' + PHONE + '?&body=' + encodeURIComponent(msg));
      form.hidden = true;
      sent.hidden = false;
      sent.focus();
    });
    $('[data-sent-back]').addEventListener('click', function () {
      sent.hidden = true;
      form.hidden = false;
      form.elements.name.focus();
    });
  }

  /* ---------- boot ---------- */
  $$('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.dataset.lang); syncMarquee(); });
  });
  buildDial();
  var param = null;
  try { param = new URLSearchParams(window.location.search).get('lang'); } catch (e) { /* old browser */ }
  applyLang(param || store.get('elc-lang') || 'en');
  syncMarquee();
  onScroll();
  parallax();
  setInterval(function () { tickClock(); var n = houstonNow(); if (n && n.hour !== nowHour) { nowHour = n.hour; renderDial(); } }, 30000);
})();
