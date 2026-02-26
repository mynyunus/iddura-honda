const WHATSAPP_NUMBER = "60137001007";
const WHATSAPP_BASE = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=`;

const SALES_METRICS = [
  {
    icon: "groups",
    value: "300+",
    label: "Pelanggan Dibantu",
    note: "Sejak 2013 di kawasan Johor Bahru",
  },
  {
    icon: "workspace_premium",
    value: "10+ Tahun",
    label: "Pengalaman Jualan",
    note: "Pengalaman automotif sejak 2009",
  },
  {
    icon: "speed",
    value: "1-3 Hari",
    label: "Semakan Loan",
    note: "Bergantung profil dan dokumen",
  },
];

const QUALIFIER_DEFAULTS = {
  model: "Belum pasti",
  budget: "Belum pasti",
  tradeIn: "Belum pasti",
  loanStatus: "Belum pasti",
  timeline: "Belum pasti",
};

const GALLERY_IMAGES = [
  "assets/gallery/06010772-3147-4a1f-ab08-6b633cbd74b1.jpeg",
  "assets/gallery/09fa3670-230e-45a9-819a-9d29a4049fd7.jpeg",
  "assets/gallery/1fa33a21-5758-4836-b073-863bdb4a5d0c.jpeg",
  "assets/gallery/54d69005-a258-43dc-bace-2d639b62add6.jpeg",
  "assets/gallery/5e37ec04-33be-46da-952b-91b3a4962c06.jpeg",
  "assets/gallery/65dc331e-922c-4a23-a420-60f1365eaea1.jpeg",
  "assets/gallery/847476cc-d9fd-4d6c-8986-4d8c3dc0e4d6.jpeg",
  "assets/gallery/d452c51f-fae9-4e03-af47-38eb0c699811.jpeg",
  "assets/gallery/d570d45a-2e53-4a52-b88d-06ebc13a1731.jpeg",
  "assets/gallery/f18ed600-ac2d-44f0-a90b-0f6225a1f965.jpeg",
  "assets/gallery/f49496cb-86a6-4ac1-9bb1-a0c6e5396fa8.jpeg",
];

const models = [
  {
    name: "City",
    image: "assets/cars/hondacity.png",
    brochure: "assets/brochures/hondacity.pdf",
    price: "From RM 84,900.00",
    badge: "Top Seller",
    badgeStyle: "bg-primary/10 text-primary",
    highlights: ["Sedan popular untuk keluarga", "Komitmen bulanan seimbang", "Sesuai kegunaan harian"],
  },
  {
    name: "City Hatchback",
    image: "assets/cars/hondacityhatchback.png",
    brochure: "assets/brochures/hondacityhatchback.pdf",
    price: "From RM 85,900.00",
    badge: "Sporty",
    badgeStyle: "bg-slate-100 text-slate-600",
    highlights: ["Rekaan hatchback lebih dinamik", "Praktikal untuk pemanduan bandar", "Ruang kargo fleksibel"],
  },
  {
    name: "Civic",
    image: "assets/cars/hondacivic.png",
    brochure: "assets/brochures/hondacivic.pdf",
    price: "From RM 133,900.00",
    badge: "Premium Sedan",
    badgeStyle: "bg-slate-100 text-slate-600",
    highlights: ["Imej sporty dan premium", "Prestasi pemanduan mantap", "Teknologi moden dalam kabin"],
  },
  {
    name: "CR-V",
    image: "assets/cars/hondacrv.png",
    brochure: "assets/brochures/hondacrv.pdf",
    price: "From RM 159,900.00",
    badge: "SUV Family",
    badgeStyle: "bg-slate-100 text-slate-600",
    highlights: ["SUV luas untuk keluarga", "Keselesaan premium perjalanan jauh", "Ciri keselamatan lengkap"],
  },
  {
    name: "HR-V",
    image: "assets/cars/hondahrv.png",
    brochure: "assets/brochures/hondahrv.pdf",
    price: "From RM 115,900.00",
    badge: "Popular SUV",
    badgeStyle: "bg-slate-100 text-slate-600",
    highlights: ["SUV kompak moden", "Sesuai untuk keluarga muda", "Praktikal untuk harian dan hujung minggu"],
  },
  {
    name: "WR-V",
    image: "assets/cars/hondawrv.png",
    brochure: "assets/brochures/hondawrv.pdf",
    price: "From RM 89,900.00",
    badge: "Value Pick",
    badgeStyle: "bg-slate-100 text-slate-600",
    highlights: ["SUV kompak harga berbaloi", "Mudah dikendalikan di bandar", "Pilihan sesuai untuk pembeli pertama"],
  },
];

const currencyFormatter = new Intl.NumberFormat("en-MY", {
  style: "currency",
  currency: "MYR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function createWhatsAppUrl(message) {
  return `${WHATSAPP_BASE}${encodeURIComponent(message)}`;
}

function formatCurrency(value) {
  return currencyFormatter.format(Number.isFinite(value) ? value : 0);
}

function parsePositiveNumber(value) {
  const parsed = Number.parseFloat(value);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return 0;
  }
  return parsed;
}

function buildModelMessage(modelName) {
  return `Hi Iddura, saya berminat dengan Honda ${modelName}. Boleh bantu semak harga terkini, promosi semasa, dan kelayakan loan saya?`;
}

function renderModelCards() {
  const modelGrid = document.getElementById("modelGrid");
  if (!modelGrid) {
    return;
  }

  const fragment = document.createDocumentFragment();

  models.forEach((model) => {
    const card = document.createElement("article");
    card.className =
      "card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl";

    const imageWrap = document.createElement("div");
    imageWrap.className = "group aspect-[16/10] overflow-hidden bg-slate-100";

    const image = document.createElement("img");
    image.src = model.image;
    image.alt = `Paparan model Honda ${model.name}`;
    image.loading = "lazy";
    image.className = "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110";

    const fallback = document.createElement("div");
    fallback.className = "hidden h-full w-full flex-col items-center justify-center gap-2 bg-slate-100 p-4 text-center";
    fallback.innerHTML = `
      <img src="assets/icons/car.png" alt="" aria-hidden="true" class="h-9 w-9" />
      <p class="font-bold text-slate-700">Honda ${model.name}</p>
      <small class="text-xs text-slate-500">Gambar terkini dikongsi melalui WhatsApp</small>
    `;

    image.addEventListener("error", () => {
      image.style.display = "none";
      fallback.style.display = "flex";
    });

    imageWrap.append(image, fallback);

    const content = document.createElement("div");
    content.className = "flex h-full flex-1 flex-col p-8";

    const topRow = document.createElement("div");
    topRow.className = "mb-4 flex min-h-[96px] items-start justify-between gap-3";

    const titleBlock = document.createElement("div");
    titleBlock.className = "min-h-[72px]";
    titleBlock.innerHTML = `
      <h3 class="text-2xl font-black leading-tight text-slate-900">Honda ${model.name}</h3>
      <p class="text-sm font-bold text-primary">${model.price}</p>
    `;

    const badge = document.createElement("span");
    badge.className = `${model.badgeStyle} rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider`;
    badge.textContent = model.badge;

    topRow.append(titleBlock, badge);

    const list = document.createElement("ul");
    list.className = "mb-8 flex-1 space-y-2 text-sm text-slate-500";

    model.highlights.forEach((item) => {
      const li = document.createElement("li");
      li.className = "flex items-center gap-2";
      li.innerHTML = `<span class="material-symbols-outlined text-lg text-primary">check_circle</span>${item}`;
      list.appendChild(li);
    });

    const actions = document.createElement("div");
    actions.className = "mt-auto grid gap-3";

    const priceCta = document.createElement("a");
    priceCta.className =
      "inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-center font-bold text-white transition-all hover:bg-primary/90";
    priceCta.target = "_blank";
    priceCta.rel = "noopener noreferrer";
    priceCta.href = createWhatsAppUrl(buildModelMessage(model.name));
    priceCta.textContent = "Semak Harga & Pakej";
    priceCta.setAttribute("aria-label", `Semak harga ${model.name} dengan saya di WhatsApp`);

    const brochureCta = document.createElement("a");
    brochureCta.className =
      "inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-center font-bold text-slate-700 transition-all hover:border-primary hover:text-primary";
    brochureCta.href = model.brochure;
    brochureCta.target = "_blank";
    brochureCta.rel = "noopener noreferrer";
    brochureCta.setAttribute("aria-label", `Download brochure Honda ${model.name}`);
    brochureCta.innerHTML = `<span class="material-symbols-outlined text-base" aria-hidden="true">download</span>Download Brochure`;

    actions.append(priceCta, brochureCta);
    content.append(topRow, list, actions);
    card.append(imageWrap, content);
    fragment.appendChild(card);
  });

  modelGrid.innerHTML = "";
  modelGrid.appendChild(fragment);
}

function setupProofStrip() {
  const proofStrip = document.getElementById("proofStrip");
  if (!proofStrip) {
    return;
  }

  const fragment = document.createDocumentFragment();

  SALES_METRICS.forEach((metric) => {
    const card = document.createElement("article");
    card.className =
      "rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm";
    card.innerHTML = `
      <span class="material-symbols-outlined mb-2 text-4xl text-primary">${metric.icon}</span>
      <p class="text-3xl font-black text-slate-900">${metric.value}</p>
      <p class="text-xs font-semibold uppercase tracking-widest text-slate-500">${metric.label}</p>
      <p class="mt-2 text-xs text-slate-500">${metric.note}</p>
    `;
    fragment.appendChild(card);
  });

  proofStrip.innerHTML = "";
  proofStrip.appendChild(fragment);
}

function setupMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuToggle || !mobileMenu) {
    return;
  }

  const closeMenu = () => {
    menuToggle.classList.remove("is-open");
    mobileMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  });

  mobileMenu.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth >= 768) {
      return;
    }

    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }

    if (!mobileMenu.contains(target) && !menuToggle.contains(target)) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });
}

function setupRevealAnimation() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length || !("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

function setupGalleryCarousel() {
  const track = document.getElementById("galleryTrack");
  const dotsWrap = document.getElementById("galleryDots");
  const prevButton = document.getElementById("galleryPrev");
  const nextButton = document.getElementById("galleryNext");
  const counter = document.getElementById("galleryCounter");

  if (!track || !dotsWrap || !prevButton || !nextButton) {
    return;
  }

  if (!GALLERY_IMAGES.length) {
    track.innerHTML = '<p class="p-6 text-center text-sm text-slate-500">Galeri akan dikemas kini tidak lama lagi.</p>';
    prevButton.hidden = true;
    nextButton.hidden = true;
    return;
  }

  const imageFragment = document.createDocumentFragment();
  const dotFragment = document.createDocumentFragment();
  const total = GALLERY_IMAGES.length;
  const maxVisibleDots = 5;
  const visibleDotCount = Math.min(total, maxVisibleDots);

  GALLERY_IMAGES.forEach((src, index) => {
    const slide = document.createElement("figure");
    slide.className = "gallery-slide";

    const image = document.createElement("img");
    image.src = src;
    image.alt = `Galeri pelanggan Honda ${index + 1}`;
    image.loading = index === 0 ? "eager" : "lazy";
    image.decoding = "async";
    image.className = "gallery-image";

    slide.appendChild(image);
    imageFragment.appendChild(slide);
  });

  for (let index = 0; index < visibleDotCount; index += 1) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "gallery-dot";
    dot.setAttribute("aria-label", `Pergi ke gambar ${index + 1}`);
    dot.dataset.index = String(index);
    dotFragment.appendChild(dot);
  }

  track.innerHTML = "";
  dotsWrap.innerHTML = "";
  track.appendChild(imageFragment);
  dotsWrap.appendChild(dotFragment);

  const dots = Array.from(dotsWrap.querySelectorAll(".gallery-dot"));
  let currentIndex = 0;
  let startX = null;

  const update = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    const start =
      total <= visibleDotCount
        ? 0
        : Math.min(Math.max(currentIndex - Math.floor(visibleDotCount / 2), 0), total - visibleDotCount);

    dots.forEach((dot, slot) => {
      const realIndex = start + slot;
      dot.dataset.index = String(realIndex);
      dot.setAttribute("aria-label", `Pergi ke gambar ${realIndex + 1}`);
      dot.classList.toggle("is-active", realIndex === currentIndex);
      const edgeHint =
        total > visibleDotCount &&
        ((slot === 0 && start > 0) || (slot === visibleDotCount - 1 && start < total - visibleDotCount));
      dot.classList.toggle("is-edge", edgeHint);
    });
    if (counter) {
      counter.textContent = `${currentIndex + 1} / ${total}`;
    }
  };

  const goTo = (index) => {
    currentIndex = (index + total) % total;
    update();
  };

  prevButton.addEventListener("click", () => goTo(currentIndex - 1));
  nextButton.addEventListener("click", () => goTo(currentIndex + 1));

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const targetIndex = Number.parseInt(dot.dataset.index || "0", 10);
      goTo(Number.isNaN(targetIndex) ? 0 : targetIndex);
    });
  });

  const viewport = track.parentElement;
  if (viewport) {
    const handleSwipeEnd = (endX) => {
      if (startX === null) {
        return;
      }
      const deltaX = endX - startX;
      startX = null;
      if (Math.abs(deltaX) > 40) {
        goTo(deltaX < 0 ? currentIndex + 1 : currentIndex - 1);
      }
    };

    if ("PointerEvent" in window) {
      viewport.addEventListener(
        "pointerdown",
        (event) => {
          if (event.pointerType === "touch" || event.pointerType === "pen") {
            startX = event.clientX;
          }
        },
        { passive: true }
      );

      viewport.addEventListener(
        "pointerup",
        (event) => {
          if (event.pointerType === "touch" || event.pointerType === "pen") {
            handleSwipeEnd(event.clientX);
          }
        },
        { passive: true }
      );

      viewport.addEventListener(
        "pointercancel",
        () => {
          startX = null;
        },
        { passive: true }
      );
    } else {
      viewport.addEventListener(
        "touchstart",
        (event) => {
          startX = event.changedTouches[0].clientX;
        },
        { passive: true }
      );

      viewport.addEventListener(
        "touchend",
        (event) => {
          handleSwipeEnd(event.changedTouches[0].clientX);
        },
        { passive: true }
      );
    }
  }

  update();
}

function setupBackToTop() {
  const button = document.getElementById("backToTop");
  if (!button) {
    return;
  }

  const updateVisibility = () => {
    const shouldShow = window.innerWidth < 768 && window.scrollY > 420;
    button.classList.toggle("is-visible", shouldShow);
  };

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", updateVisibility, { passive: true });
  window.addEventListener("resize", updateVisibility);
  updateVisibility();
}

function setupLoanCalculator() {
  const elements = {
    carPrice: document.getElementById("carPrice"),
    downPayment: document.getElementById("downPayment"),
    interestRate: document.getElementById("interestRate"),
    loanTenure: document.getElementById("loanTenure"),
    includeExtraToggle: document.getElementById("includeExtraToggle"),
    extraCosts: document.getElementById("extraCosts"),
    loanAmount: document.getElementById("loanAmount"),
    monthlyPayment: document.getElementById("monthlyPayment"),
    totalPayable: document.getElementById("totalPayable"),
    totalInterest: document.getElementById("totalInterest"),
    sendEstimateWa: document.getElementById("sendEstimateWa"),
  };

  if (Object.values(elements).some((item) => !item)) {
    return;
  }

  let latestEstimate = null;

  const calculate = () => {
    const price = parsePositiveNumber(elements.carPrice.value);
    const downPayment = parsePositiveNumber(elements.downPayment.value);
    const rate = parsePositiveNumber(elements.interestRate.value);
    const years = parsePositiveNumber(elements.loanTenure.value);
    const includeExtras = elements.includeExtraToggle.checked;
    const extras = includeExtras ? parsePositiveNumber(elements.extraCosts.value) : 0;

    const loanAmount = Math.max(price - downPayment, 0);
    const totalInterest = loanAmount * (rate / 100) * years;
    const baseTotal = loanAmount + totalInterest;
    const totalPayable = baseTotal + extras;
    const monthlyPayment = years > 0 ? totalPayable / (years * 12) : 0;

    elements.loanAmount.textContent = formatCurrency(loanAmount);
    elements.monthlyPayment.textContent = formatCurrency(monthlyPayment);
    elements.totalPayable.textContent = formatCurrency(totalPayable);
    elements.totalInterest.textContent = formatCurrency(totalInterest);

    latestEstimate = {
      price,
      downPayment,
      rate,
      years,
      extras,
      includeExtras,
      loanAmount,
      monthlyPayment,
    };
  };

  const toggleExtrasInput = () => {
    const enabled = elements.includeExtraToggle.checked;
    elements.extraCosts.disabled = !enabled;
    if (!enabled) {
      elements.extraCosts.value = "0";
    }
    calculate();
  };

  const sendEstimate = () => {
    if (!latestEstimate) {
      return;
    }

    const messageLines = [
      "Hi Iddura, saya nak semak anggaran loan Honda ini:",
      `Harga Kereta: ${formatCurrency(latestEstimate.price)}`,
      `Deposit: ${formatCurrency(latestEstimate.downPayment)}`,
      `Kadar Faedah: ${latestEstimate.rate.toFixed(2)}% setahun`,
      `Tempoh Loan: ${latestEstimate.years} tahun`,
      `Jumlah Loan: ${formatCurrency(latestEstimate.loanAmount)}`,
      `Anggaran Bulanan: ${formatCurrency(latestEstimate.monthlyPayment)}`,
    ];

    if (latestEstimate.includeExtras) {
      messageLines.push(`Anggaran Insurans/Roadtax: ${formatCurrency(latestEstimate.extras)}`);
    }

    messageLines.push("Mohon kongsikan pakej terkini dan pilihan kelayakan yang paling sesuai untuk saya.");
    window.open(createWhatsAppUrl(messageLines.join("\n")), "_blank", "noopener,noreferrer");
  };

  [elements.carPrice, elements.downPayment, elements.interestRate, elements.loanTenure, elements.extraCosts].forEach(
    (input) => {
      input.addEventListener("input", calculate);
      input.addEventListener("change", calculate);
    }
  );

  elements.includeExtraToggle.addEventListener("change", toggleExtrasInput);
  elements.sendEstimateWa.addEventListener("click", sendEstimate);

  calculate();
}

function setupQualifierForm() {
  const qualifierForm = document.getElementById("qualifierForm");
  const qModel = document.getElementById("qModel");
  const qBudget = document.getElementById("qBudget");
  const qTradeIn = document.getElementById("qTradeIn");
  const qLoanStatus = document.getElementById("qLoanStatus");
  const qTimeline = document.getElementById("qTimeline");
  const sendQualifierWa = document.getElementById("sendQualifierWa");

  if (!qualifierForm || !qModel || !qBudget || !qTradeIn || !qLoanStatus || !qTimeline || !sendQualifierWa) {
    return;
  }

  const getValue = (field, fallbackValue) => {
    const value = String(field.value || "").trim();
    return value || fallbackValue;
  };

  const sendQualifier = () => {
    const model = getValue(qModel, QUALIFIER_DEFAULTS.model);
    const budget = getValue(qBudget, QUALIFIER_DEFAULTS.budget);
    const tradeIn = getValue(qTradeIn, QUALIFIER_DEFAULTS.tradeIn);
    const loanStatus = getValue(qLoanStatus, QUALIFIER_DEFAULTS.loanStatus);
    const timeline = getValue(qTimeline, QUALIFIER_DEFAULTS.timeline);

    const messageLines = [
      "Hi Iddura, saya nak semak kelayakan dan offer Honda.",
      "",
      "Maklumat ringkas saya:",
      `Model sasaran: ${model}`,
      `Bajet bulanan: ${budget}`,
      `Status Trade-In: ${tradeIn}`,
      `Status loan semasa: ${loanStatus}`,
      `Jangka masa beli: ${timeline}`,
      "",
      "Mohon kongsikan cadangan model, anggaran bayaran, dan dokumen yang saya perlu sediakan.",
    ];

    window.open(createWhatsAppUrl(messageLines.join("\n")), "_blank", "noopener,noreferrer");
  };

  qualifierForm.addEventListener("submit", (event) => event.preventDefault());
  sendQualifierWa.addEventListener("click", sendQualifier);
}

function initializePage() {
  renderModelCards();
  setupGalleryCarousel();
  setupProofStrip();
  setupQualifierForm();
  setupMobileMenu();
  setupRevealAnimation();
  setupBackToTop();
  setupLoanCalculator();
}

document.addEventListener("DOMContentLoaded", initializePage);
