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
    blog: [
      { tag: "eBay Tips", title: "5 eBay Title Mistakes That Kill Your Sales", excerpt: "Titles decide whether buyers ever see your product. Here are the five mistakes we fix first in almost every store audit.", body: "Your title is the first thing a buyer sees — and the first thing eBay's search reads. The mistakes we see most often:\n\n1. Wasting words on 'hot', 'sale' or 'best quality' instead of what the product actually is.\n2. No size, material or compatibility — the exact words buyers type.\n3. Keywords stuffed in a random order, so the title reads badly and gets skipped.\n4. Copying a competitor's title, which buries you under their listing.\n5. Forgetting the sold-listing check: titles of items that actually sold tell you which words work.\n\nFix these five and the same product usually gets more clicks without spending a penny on ads. Our Trial Pack rewrites 5 listings with keyword titles built from sold-listing research." },
      { tag: "Research", title: "How Winning-Product Research Actually Works", excerpt: "Winning products are found in sold data, not in guesswork. A look inside the research process behind our packages.", body: "Guesswork is expensive. Real product research follows a simple chain:\n\nFirst, we look at sold listings — not active ones. An item listed 500 times but sold 3 times is a trap, not a trend.\n\nSecond, we check the sell-through rate and the average sold price, so the margin survives fees, shipping and returns.\n\nThird, we study the top sellers of that product: their titles, photos and shipping offers show the standard you have to beat.\n\nOnly then does a product earn a place on the shortlist. This is exactly the research inside our Best Seller and Store Growth packages — you get the report, not just listings." },
      { tag: "Guides", title: "Amazon, eBay or Walmart: Where Should You Start?", excerpt: "Traffic, fees, rules and competition are different on each platform. A plain-English way to pick your first one.", body: "There is no single best marketplace — there is a best first marketplace for your situation.\n\neBay is the fastest place to start: low entry cost, every category welcome, and quick feedback on what sells.\n\nAmazon brings the biggest traffic, but it demands more — brand rules, FBA logistics and stricter account health.\n\nWalmart sits in between: less competition than Amazon, serious buyers, and WFS fulfilment once you are approved.\n\nOur honest advice: start where your product already fits, prove the sales, then expand. VeerCommerce manages all three — plus Shopify, Etsy, TikTok Shop and Wayfair — so your growth plan can stay with one team." }
    ],
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
    window.__veerWhatsApp = s.whatsapp || "";
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

    var posClasses = ["fp1", "fp2", "fp3", "fp4", "fp5", "fp6", "fp7"];
    setHTML("[data-hero-logos]", (d.platforms || []).map(function (p, i) { var lg = logoFor(p); return lg ? '<span class="float-chip ' + posClasses[i % posClasses.length] + '" style="animation-delay:' + (i * 0.45) + 's"><img src="' + lg + '" alt="' + esc(p) + ' logo">' + esc(p) + "</span>" : ""; }).join(""));

    setHTML("[data-blog]", (d.blog || []).map(function (b, i) {
      return '<article class="svc blog-card"><span class="blog-tag">' + esc(b.tag) + "</span><h3>" + esc(b.title) + "</h3><p>" + esc(b.excerpt) + '</p><a href="#" data-read="' + i + '">Read More →</a></article>';
    }).join(""));
    document.querySelectorAll("[data-read]").forEach(function (a) {
      a.addEventListener("click", function (ev) {
        ev.preventDefault();
        var b = (d.blog || [])[parseInt(a.getAttribute("data-read"), 10)]; if (!b) return;
        setText("[data-reader-tag]", b.tag || "Blog");
        setText("[data-reader-title]", b.title || "");
        setHTML("[data-reader-body]", String(b.body || "").split(/\n\n+/).map(function (p) { return "<p>" + esc(p).replace(/\n/g, "<br>") + "</p>"; }).join(""));
        var r = document.querySelector("[data-reader]"); if (r) { r.hidden = false; document.body.style.overflow = "hidden"; }
      });
    });

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
    var menuBtn = document.querySelector("[data-menu-btn]");
    var nav = document.querySelector(".main-nav");
    if (menuBtn && nav) {
      menuBtn.addEventListener("click", function () { nav.classList.toggle("open"); });
      nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); }); });
    }
    var closeBtn = document.querySelector("[data-reader-close]");
    var reader = document.querySelector("[data-reader]");
    function closeReader() { if (reader) { reader.hidden = true; document.body.style.overflow = ""; } }
    if (closeBtn) closeBtn.addEventListener("click", closeReader);
    if (reader) reader.addEventListener("click", function (e) { if (e.target === reader) closeReader(); });
    var form = document.querySelector("[data-quote-form]");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var fd = new FormData(form);
        var lines = ["Hello VeerCommerce, I want a free quote.", "Name: " + (fd.get("qname") || ""), "Contact: " + (fd.get("qcontact") || ""), "Platform: " + (fd.get("qplatform") || ""), "Package: " + (fd.get("qpackage") || ""), "About my store: " + (fd.get("qmsg") || "")];
        var num = (window.__veerWhatsApp || "923019256824");
        window.open("https://wa.me/" + num + "?text=" + encodeURIComponent(lines.join("\n")), "_blank");
      });
    }
    initTilt();
    initHeroParallax();
  });

  function initTilt() {
    if (!window.matchMedia || !window.matchMedia("(pointer:fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.querySelectorAll(".svc, .price-card").forEach(function (card) {
      card.classList.add("tilt");
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = "perspective(900px) rotateY(" + (x * 7).toFixed(2) + "deg) rotateX(" + (-y * 7).toFixed(2) + "deg) translateY(-3px)";
      });
      card.addEventListener("pointerleave", function () { card.style.transform = ""; });
    });
  }

  function initHeroParallax() {
    if (!window.matchMedia || !window.matchMedia("(pointer:fine)").matches) return;
    var visual = document.querySelector(".hero-visual");
    var img = document.querySelector(".hero-img");
    if (!visual || !img) return;
    visual.addEventListener("pointermove", function (e) {
      var r = visual.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      img.style.transform = "rotateY(" + (x * 6).toFixed(2) + "deg) rotateX(" + (-y * 6).toFixed(2) + "deg)";
      document.querySelectorAll(".float-chip").forEach(function (chip, i) {
        var depth = 6 + i * 3;
        chip.style.translate = (x * depth).toFixed(1) + "px " + (y * depth).toFixed(1) + "px";
      });
    });
    visual.addEventListener("pointerleave", function () {
      img.style.transform = "";
      document.querySelectorAll(".float-chip").forEach(function (chip) { chip.style.translate = ""; });
    });
  }

  render(FALLBACK);
  fetch("content.json", { cache: "no-store" })
    .then(function (r) { if (!r.ok) throw new Error("bad"); return r.json(); })
    .then(render)
    .catch(function () { /* fallback already rendered */ });
})();
