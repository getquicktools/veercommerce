/* VeerCommerce — renders the page from content.json (editable via /admin).
   A built-in fallback copy keeps the page working if the JSON cannot load. */
(function () {
  "use strict";
  var FALLBACK = {
    site: { name: "VeerCommerce", tagline: "Grow • Manage • Succeed", email: "Veercommerce744@gmail.com", phoneDisplay: "+92 301 9256824", whatsapp: "923019256824", ceoName: "Sajjad Hussain", ceoPhoto: "images/ceo.jpg", ceoTitle: "CEO & Founder", topbarNote: "Grow Your Business Globally" },
    hero: { badge: "Your Trusted eCommerce Growth Partner", slides: [
      { titleA: "Scale Your", titleB: "eCommerce Business", titleC: "with VeerCommerce", subtitle: "Expert eBay, Amazon, Walmart & multi-platform solutions for higher sales, better visibility and long-term success." },
      { titleA: "We Manage Your", titleB: "Amazon, eBay & Walmart", titleC: "Stores End-to-End", subtitle: "Listings, pricing, orders and growth handled by specialists — you focus on your business." },
      { titleA: "Research. Optimize.", titleB: "Grow Faster", titleC: "On Every Platform", subtitle: "Winning-product research and SEO listings that turn searches into sales." }
    ] },
    platforms: ["Amazon", "eBay", "Walmart", "Shopify", "Etsy", "TikTok Shop", "Wayfair"],
    trustBar: [
      { icon: "🛡️", text: "Trusted by Global Sellers" },
      { icon: "📈", text: "Proven Growth Strategies" },
      { icon: "🎧", text: "Dedicated Support 24/7" },
      { icon: "🤝", text: "Your Success, Our Priority" }
    ],
    whyChoose: [
      { icon: "🎯", title: "Platform Specialists", text: "A focused team for Amazon, eBay, Walmart, Shopify, Etsy, TikTok Shop and Wayfair." },
      { icon: "💲", title: "Transparent Pricing", text: "Published packages from $10 — no hidden charges, ever." },
      { icon: "⚡", title: "Fast Turnaround", text: "Trial Pack delivered in 1 day; most packages inside 5 days." },
      { icon: "🎧", title: "24/7 Support", text: "Message us any time on WhatsApp — real humans, quick replies." }
    ],
    services: [
      { icon: "a", color: "#ff9900", title: "Amazon Growth Strategies", text: "Boost sales with proven strategies." },
      { icon: "e", color: "#0064d2", title: "eBay Store Management", text: "Optimize & grow your eBay business." },
      { icon: "✹", color: "#0071ce", title: "Walmart Marketplace Management", text: "Expand your brand on Walmart." },
      { icon: "S", color: "#5e8e3e", title: "Shopify Store Development", text: "Build & scale your eCommerce store." },
      { icon: "E", color: "#f1641e", title: "Etsy Store Optimization", text: "Get more visibility and sales." },
      { icon: "♪", color: "#111111", title: "TikTok Shop Management", text: "Grow your brand on TikTok Shop." },
      { icon: "W", color: "#7b2d8b", title: "Wayfair Solutions", text: "List & grow on Wayfair." }
    ],
    stats: [
      { icon: "👥", value: "500+", label: "Happy Clients" },
      { icon: "🛒", value: "1M+", label: "Sales Generated" },
      { icon: "🌍", value: "50+", label: "Countries Served" },
      { icon: "⭐", value: "98%", label: "Client Satisfaction" }
    ],
    process: [
      { title: "Contact Us", text: "Reach out on WhatsApp or email — tell us about your store and your goals." },
      { title: "Planning", text: "We study your market, competitors and listings to find the gaps." },
      { title: "Final Strategy", text: "You get a clear, platform-specific plan before any work begins." },
      { title: "Implementation", text: "Our team executes — listings, optimization and store management." },
      { title: "Control", text: "We monitor results and keep improving, with regular updates to you." }
    ],
    pricing: [
      { name: "Trial Pack", price: "$10", delivery: "1-day delivery", popular: false, features: ["5 SEO-optimized eBay listings", "Keyword-rich titles", "Full item specifics", "Price research included"] },
      { name: "Best Seller", price: "$35", delivery: "3-day delivery", popular: true, features: ["25 SEO-optimized eBay listings", "Winning-product research (10 products)", "Competitor price check", "Full item specifics"] },
      { name: "Store Growth", price: "$75", delivery: "5-day delivery", popular: false, features: ["60 SEO-optimized eBay listings", "Deep research report (25 products)", "Full listing optimization", "Store cleanup + priority support"] }
    ],
    about: { title: "Your Growth Partner in eCommerce", text: "We are a dedicated eCommerce agency helping businesses grow on eBay, Amazon, Walmart and more with expert strategies, data-driven solutions and professional support.", points: ["Proven Track Record", "24/7 Support", "100% Client Satisfaction", "Results-Driven Strategies"] },
    faqs: [
      { q: "Which platforms do you manage?", a: "Amazon, eBay, Walmart, Shopify, Etsy, TikTok Shop and Wayfair — from listing creation and optimization to full store management." },
      { q: "How do we start?", a: "Message us on WhatsApp or email with your store link and goals. We reply with a short plan and the right package — no obligation." },
      { q: "What do you need from me?", a: "Your product photos or links, your store access method, and your niche. We handle the research, listings and optimization." },
      { q: "How fast is delivery?", a: "Trial Pack in 1 day, Best Seller in 3 days and Store Growth in 5 days, as listed in the pricing section." }
    ]
  };

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  var LOGOS = { "Amazon": "images/logos/amazon.svg", "eBay": "images/logos/ebay.svg", "Walmart": "images/logos/walmart.svg", "Shopify": "images/logos/shopify.svg", "Etsy": "images/logos/etsy.svg", "TikTok Shop": "images/logos/tiktok.svg", "TikTok": "images/logos/tiktok.svg", "Wayfair": "images/logos/wayfair.svg" };
  function logoFor(name) { if (LOGOS[name]) return LOGOS[name]; for (var k in LOGOS) { if (String(name).indexOf(k) === 0) return LOGOS[k]; } return null; }
  function setText(sel, txt) { document.querySelectorAll(sel).forEach(function (el) { el.textContent = txt; }); }
  function setHTML(sel, html) { document.querySelectorAll(sel).forEach(function (el) { el.innerHTML = html; }); }

  function render(d) {
    var s = d.site || {};
    var wa = "https://wa.me/" + (s.whatsapp || "") + "?text=" + encodeURIComponent("Hello VeerCommerce, I want a free consultation about my store.");
    document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = wa; });
    document.querySelectorAll("[data-mail]").forEach(function (a) { a.href = "mailto:" + (s.email || ""); a.textContent = "✉️ " + (s.email || ""); });
    document.querySelectorAll("[data-tel]").forEach(function (a) { a.href = "https://wa.me/" + (s.whatsapp || ""); if (/301/.test(a.textContent)) a.textContent = "📞 " + (s.phoneDisplay || ""); });
    setText("[data-tagline]", s.tagline || "");
    setText("[data-topbar-note]", (s.topbarNote || "") + " 📈");
    setText("[data-ceo-name]", s.ceoName || "");
    setText("[data-ceo-title]", s.ceoTitle || "");
    var initials = (s.ceoName || "VC").split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join("");
    if (s.ceoPhoto) {
      setHTML("[data-ceo-initials]", '<img src="' + esc(s.ceoPhoto) + '" alt="' + esc(s.ceoName || "CEO") + '">');
    } else {
      setText("[data-ceo-initials]", initials);
    }

    var h = d.hero || {};
    setText("[data-hero-badge]", h.badge || "");
    var slides = (h.slides && h.slides.length) ? h.slides : [{ titleA: h.titleA, titleB: h.titleB, titleC: h.titleC, subtitle: h.subtitle }];
    setHTML("[data-slides]", slides.map(function (sl, i) {
      return '<div class="slide' + (i === 0 ? " on" : "") + '"><h1>' + esc(sl.titleA) + ' <span class="accent">' + esc(sl.titleB) + "</span> " + esc(sl.titleC) + "</h1><p>" + esc(sl.subtitle) + "</p></div>";
    }).join(""));
    setHTML("[data-slide-dots]", slides.map(function (_, i) { return '<button type="button" data-dot="' + i + '" class="' + (i === 0 ? "on" : "") + '" aria-label="Slide ' + (i + 1) + '"></button>'; }).join(""));
    startSlider(slides.length);

    var chips = (d.platforms || []).map(function (p) { var lg = logoFor(p); return '<span class="chip">' + (lg ? '<img src="' + lg + '" alt="' + esc(p) + ' logo">' : "") + esc(p) + "</span>"; }).join("");
    setHTML("[data-chips]", chips);
    setHTML("[data-chips-mini]", chips);

    var mqItems = (d.platforms || []).map(function (p) { var lg = logoFor(p); return lg ? '<span class="mq-item"><img src="' + lg + '" alt="' + esc(p) + ' logo"></span>' : ""; }).join("");
    setHTML("[data-marquee]", mqItems + mqItems);

    setHTML("[data-why]", (d.whyChoose || []).map(function (w) {
      return '<article class="svc"><div class="svc-icon" style="background:var(--navy)">' + esc(w.icon || "•") + "</div><h3>" + esc(w.title) + "</h3><p>" + esc(w.text) + "</p></article>";
    }).join(""));

    setHTML("[data-trustbar]", (d.trustBar || []).map(function (t) {
      return '<div class="trust-item"><span class="ti">' + esc(t.icon) + "</span>" + esc(t.text) + "</div>";
    }).join(""));

    setHTML("[data-services]", (d.services || []).map(function (sv) {
      var lg = logoFor(sv.title);
      var head = lg ? '<div class="svc-logo"><img src="' + lg + '" alt="' + esc(sv.title) + ' logo"></div>' : '<div class="svc-icon" style="--c:' + esc(sv.color || "#0a1f44") + ";background:" + esc(sv.color || "#0a1f44") + '">' + esc(sv.icon || "•") + "</div>";
      return '<article class="svc">' + head + "<h3>" + esc(sv.title) + "</h3><p>" + esc(sv.text) + '</p><a href="#" data-wa-card>Learn More →</a></article>';
    }).join(""));
    document.querySelectorAll("[data-wa-card]").forEach(function (a) { a.href = wa; a.target = "_blank"; a.rel = "noopener"; });

    setHTML("[data-stats]", (d.stats || []).map(function (st) {
      return '<div class="stat"><span class="ic">' + esc(st.icon) + '</span><span class="num" data-count="' + esc(st.value) + '">' + esc(st.value) + '</span><span class="lbl">' + esc(st.label) + "</span></div>";
    }).join(""));
    animateCounters();

    setHTML("[data-process]", (d.process || []).map(function (p, i) {
      return '<div class="step"><span class="n">' + (i + 1) + "</span><h3>" + esc(p.title) + "</h3><p>" + esc(p.text) + "</p></div>";
    }).join(""));

    setHTML("[data-pricing]", (d.pricing || []).map(function (p) {
      var feats = (p.features || []).map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("");
      return '<div class="price-card' + (p.popular ? " popular" : "") + '">' + (p.popular ? '<span class="pop-badge">MOST POPULAR</span>' : "") + "<h3>" + esc(p.name) + '</h3><div class="amount">' + esc(p.price) + '</div><div class="del">' + esc(p.delivery) + "</div><ul>" + feats + '</ul><a class="btn' + (p.popular ? "" : " btn-outline") + '" href="' + wa + '" target="_blank" rel="noopener">Get Started</a></div>';
    }).join(""));

    var ab = d.about || {};
    setText("[data-about-title]", ab.title || "");
    setText("[data-about-text]", ab.text || "");
    setHTML("[data-about-points]", (ab.points || []).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join(""));

    setHTML("[data-faqs]", (d.faqs || []).map(function (f) {
      return "<details><summary>" + esc(f.q) + "</summary><p>" + esc(f.a) + "</p></details>";
    }).join(""));

    var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
  }

  var slideTimer = null, slideIdx = 0;
  function showSlide(n, total) {
    var slides = document.querySelectorAll(".slide");
    if (!slides.length) return;
    slideIdx = ((n % total) + total) % total;
    slides.forEach(function (el, i) { el.classList.toggle("on", i === slideIdx); });
    document.querySelectorAll("[data-dot]").forEach(function (el, i) { el.classList.toggle("on", i === slideIdx); });
  }
  function startSlider(total) {
    if (slideTimer) { clearInterval(slideTimer); slideTimer = null; }
    slideIdx = 0;
    if (total < 2) return;
    slideTimer = setInterval(function () { showSlide(slideIdx + 1, total); }, 5000);
    var prev = document.querySelector("[data-slide-prev]"), next = document.querySelector("[data-slide-next]");
    if (prev) prev.onclick = function () { showSlide(slideIdx - 1, total); };
    if (next) next.onclick = function () { showSlide(slideIdx + 1, total); };
    document.querySelectorAll("[data-dot]").forEach(function (el) { el.onclick = function () { showSlide(parseInt(el.getAttribute("data-dot"), 10), total); }; });
    var hero = document.querySelector(".hero");
    if (hero) { hero.onmouseenter = function () { if (slideTimer) clearInterval(slideTimer); }; hero.onmouseleave = function () { if (slideTimer) clearInterval(slideTimer); slideTimer = setInterval(function () { showSlide(slideIdx + 1, total); }, 5000); }; }
  }

  function animateCounters() {
    var els = document.querySelectorAll("[data-count]");
    if (!els.length || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target; io.unobserve(el);
        var raw = el.getAttribute("data-count") || "";
        var m = raw.match(/^(\d+)(.*)$/); if (!m) return;
        var target = parseInt(m[1], 10), suffix = m[2], t0 = null;
        function tick(ts) { if (!t0) t0 = ts; var p = Math.min((ts - t0) / 1300, 1); el.textContent = Math.round(target * p) + suffix; if (p < 1) requestAnimationFrame(tick); }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { io.observe(el); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var top = document.querySelector("[data-top]");
    if (top) {
      top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
      window.addEventListener("scroll", function () { top.classList.toggle("show", window.scrollY > 500); }, { passive: true });
    }
  });

  render(FALLBACK);
  fetch("content.json", { cache: "no-store" })
    .then(function (r) { if (!r.ok) throw new Error("bad"); return r.json(); })
    .then(render)
    .catch(function () { /* fallback already rendered */ });
})();
