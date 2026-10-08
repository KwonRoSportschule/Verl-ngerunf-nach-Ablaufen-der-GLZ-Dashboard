"use strict";

/* =====================================================================
   PREISE – hier ändern, wenn eine neue Preisliste kommt.
   flex   = Flex-Preis (1 Monat, monatlich kündbar)
   offers = Laufzeit-Angebote: months, price (Monatsbeitrag),
            after (Beitrag nach Ablauf laut Preisliste), discount
   Stand: Preislisten vom 01.11.2026
   ===================================================================== */
const ALL_INCLUSIVE = {
  price: 39,
  text: "Zu jedem Taekwondo-, Kickboxen- und Boxen-Tarif zubuchbar · monatlich kündbar",
  details: [
    "Action: jede enthaltene Zusatzstunde 1× pro Woche",
    "Master: alle enthaltenen Zusatzstunden, so oft sie stattfinden"
  ]
};

const SPORTS = {
  tkd: {
    label: "Taekwondo",
    allInclusive: "Taekwondo → Kickboxen, Boxen und Functional Fitness",
    tariffs: [
      { name: "Action", desc: "Training 1× wöchentlich · Mu-Ki: 1× wöchentlich ein Elternteil mit Kind", flex: 139,
        offers: [{ months: 15, price: 99, after: 139, discount: "ca. 30 %" }, { months: 9, price: 119, after: 139, discount: "ca. 15 %" }] },
      { name: "Master", desc: "Kinder 2× wöchentlich · Erwachsene: alle angebotenen Stunden", flex: 149,
        offers: [{ months: 15, price: 119, after: 149, discount: "ca. 20 %" }, { months: 9, price: 129, after: 149, discount: "ca. 15 %" }] },
      { name: "ActionFamily", family: true, desc: "Training 1× wöchentlich · Mu-Ki: weiteres Familienmitglied in anderer Gruppe", flex: 119,
        offers: [{ months: 15, price: 79, after: 139, discount: "ca. 30 %" }, { months: 9, price: 99, after: 139, discount: "ca. 15 %" }] },
      { name: "MasterFamily", family: true, desc: "Kinder 2× wöchentlich · Erwachsene: alle angebotenen Stunden", flex: 129,
        offers: [{ months: 15, price: 99, after: 139, discount: "ca. 20 %" }, { months: 9, price: 109, after: 139, discount: "ca. 15 %" }] }
    ],
    packages: [
      { name: "Startpaket Mu-Ki", price: 99, items: ["Check-in-Karte", "Trainings-T-Shirt für 1 Elternteil und 1 Kind"], excluded: ["Zweites Kind: T-Shirt lt. Preisliste"] },
      { name: "Panda-Kids | Tiger-Kids", price: 159, items: ["Check-in-Karte", "Kampfanzug und Gürtel, Trainings-T-Shirt", "UTTC-Verbandsmitgliedschaft im Jahr der Anmeldung", "Schul- und Verbandsabzeichen, Verbandsausweis*"], excluded: ["Gürtelprüfungen"] },
      { name: "Warrior-Tigers | Jugend-Erwachsene", price: 199, items: ["Check-in-Karte", "Kampfanzug, Gürtel, Trainings-T-Shirt, Safetie-Paket", "Schul- und Verbandsabzeichen, Verbandsausweis", "UTTC-Verbandsmitgliedschaft im Jahr der Anmeldung"], excluded: ["Gürtelprüfungen"] }
    ],
    notes: [
      "* Family: 1 Erwachsener + mind. 1 Kind/Jugendlicher oder ab 2 Kinder/Jugendliche je nach Programm, zzgl. Gebühr für Gürtelprüfungen.",
      "Alle Preise sind Durchschnittspreise, auch fällig bei Betriebsferien · Preise in € inkl. MwSt. · Abbuchung monatlich im Voraus."
    ]
  },

  kbx: {
    label: "Kickboxen & Boxen",
    allInclusive: "Kickboxen → Boxen und Functional Fitness · Boxen → Kickboxen und Functional Fitness",
    highlight: "<b>Family-Rabatt:</b> Bei Anmeldung jedes weiteren Familienmitglieds für Kickboxen oder Boxen entfällt die Gebühr für das Startpaket.",
    tariffs: [
      { name: "Action", desc: "Training 1× wöchentlich · Mu-Ki: 1× wöchentlich ein Elternteil mit Kind", flex: 119,
        offers: [{ months: 15, price: 79, after: 139, discount: "ca. 30 %" }, { months: 9, price: 99, after: 139, discount: "ca. 15 %" }] },
      { name: "Master", desc: "Kinder 2× wöchentlich · Erwachsene: alle angebotenen Stunden", flex: 129,
        offers: [{ months: 15, price: 99, after: 149, discount: "ca. 20 %" }, { months: 9, price: 109, after: 149, discount: "ca. 15 %" }] }
    ],
    packages: [
      { name: "Startpaket Kickboxen", price: 159, items: ["Check-in-Karte", "Kickbox-Hose und Trainings-T-Shirt", "Safetie-Paket", "UTTC-Verbandsmitgliedschaft im Jahr der Anmeldung"], excluded: ["Gürtelprüfungen"] },
      { name: "Startpaket Boxen", price: 159, items: ["Check-in-Karte", "Box-Hose und Trainings-T-Shirt", "Safetie-Paket Boxen", "UTTC-Verbandsmitgliedschaft im Jahr der Anmeldung"], excluded: [] }
    ],
    notes: [
      "Alle Preise sind Durchschnittspreise, auch fällig bei Betriebsferien · Preise in € inkl. MwSt. · Abbuchung monatlich im Voraus."
    ]
  },

  ff: {
    label: "Functional Fitness",
    tariffs: [
      { name: "Single Performance", desc: "Alle angebotenen Stunden", flex: 59, offers: [],
        pitch: "Functional Fitness kostet 59 € im Monat. Damit können Sie alle angebotenen Stunden besuchen, und es ist monatlich kündbar." },
      { name: "Family + Couple Performance", family: true, desc: "Alle angebotenen Stunden · günstiger, wenn ein Familienmitglied oder die Partnerin bzw. der Partner bereits bei KwonRo trainiert. Dessen Vertrag bleibt unverändert. Gilt in Verbindung mit jeder bestehenden Mitgliedschaft.", flex: 39, offers: [],
        pitch: "Weil schon jemand aus Ihrer Familie bei uns trainiert, zahlen Sie für Functional Fitness nur 39 € im Monat, für alle angebotenen Stunden und monatlich kündbar. Der bestehende Vertrag bleibt dabei ganz normal bestehen." }
    ],
    packages: [
      { name: "Startpaket Functional Fitness", price: 79, items: ["Check-in-Karte", "Trainings-T-Shirt", "Handtuch", "UTTC-Verbandsmitgliedschaft im Jahr der Anmeldung"], excluded: [] }
    ],
    notes: [
      "Alle Preise sind Durchschnittspreise, auch fällig bei Betriebsferien · Preise in € inkl. MwSt. · Abbuchung monatlich im Voraus."
    ]
  }
};

/* ===================================================================== */

const euro = (n) => n.toLocaleString("de-DE") + " €";
const savings = (tariff, offer) => (tariff.flex - offer.price) * offer.months;
const perWeek = (price) => Math.round((price * 12) / 52);

const content = document.getElementById("pricing-content");
const pitchText = document.getElementById("pitch-text");
const pitchExtra = document.getElementById("pitch-extra");
const tabs = document.querySelectorAll(".sport-tabs [data-sport]");

let currentSport = "tkd";

function offerCard(tariffIndex, offer, tariff, recommended) {
  return `
    <button type="button" class="price-card${recommended ? " price-card--recommended" : ""}"
            data-tariff="${tariffIndex}" data-months="${offer.months}" aria-pressed="false">
      <span class="price-card__top">
        <span class="duration">${offer.months} Monate</span>
        ${recommended ? '<span class="badge badge--rec">Empfehlung</span>' : `<span class="badge">${offer.discount}</span>`}
      </span>
      <span class="was">${euro(tariff.flex)}</span>
      <span class="price">${offer.price}<small> € / Monat</small></span>
      <span class="save">spart ${euro(savings(tariff, offer))}</span>
      <span class="after">ab ${offer.months + 1}. Monat ${euro(offer.after)}</span>
    </button>`;
}

function flexCard(tariffIndex, tariff, only) {
  return `
    <button type="button" class="price-card price-card--flex${only ? " price-card--single" : ""}"
            data-tariff="${tariffIndex}" data-months="1" aria-pressed="false">
      <span class="price-card__top"><span class="duration">${only ? "Monatlich" : "Flex · 1 Monat"}</span></span>
      <span class="price">${tariff.flex}<small> € / Monat</small></span>
      <span class="after">monatlich kündbar</span>
    </button>`;
}

function renderSport(key) {
  const sport = SPORTS[key];
  const tariffs = sport.tariffs.map((t, i) => {
    const cards = t.offers.length
      ? t.offers.map((o, j) => offerCard(i, o, t, j === 0)).join("") + flexCard(i, t, false)
      : flexCard(i, t, true);
    return `
      <section class="tariff${t.family ? " tariff--family" : ""}">
        <div class="tariff__intro">
          <h3>${t.name}${t.family ? ' <span class="tag">Family</span>' : ""}</h3>
          <p>${t.desc}</p>
        </div>
        <div class="price-grid${t.offers.length ? "" : " price-grid--single"}">${cards}</div>
      </section>`;
  }).join("");

  const allInclusive = sport.allInclusive ? `
    <div class="addon">
      <div>
        <h3>All-Inclusive <span class="tag tag--green">Upgrade</span></h3>
        <p>${ALL_INCLUSIVE.text}</p>
        <p class="addon__route">${sport.allInclusive}</p>
        <ul>${ALL_INCLUSIVE.details.map((d) => `<li>${d}</li>`).join("")}</ul>
      </div>
      <p class="addon__price">+${ALL_INCLUSIVE.price}<small> € / Monat</small></p>
    </div>` : "";

  const packages = `
    <details class="starter-packages">
      <summary>Startpakete <span aria-hidden="true">+</span></summary>
      <div class="package-grid">
        ${sport.packages.map((p) => `
          <article>
            <h4>${p.name}<strong>einmalig ${euro(p.price)}</strong></h4>
            <ul>
              ${p.items.map((x) => `<li>${x}</li>`).join("")}
              ${p.excluded.map((x) => `<li class="excluded">${x}</li>`).join("")}
            </ul>
          </article>`).join("")}
      </div>
    </details>`;

  content.innerHTML = `
    ${sport.highlight ? `<p class="highlight">${sport.highlight}</p>` : ""}
    <div class="tariff-list">${tariffs}</div>
    ${allInclusive}
    ${packages}
    <div class="pricing-notes">${sport.notes.map((n) => `<p>${n}</p>`).join("")}</div>`;

  currentSport = key;
  resetPitch();
}

function resetPitch() {
  pitchText.textContent = "Klick auf eine Preiskarte. Hier erscheint dann der passende Satz mit Preis und Ersparnis.";
  pitchExtra.textContent = "";
  document.querySelector(".pitch").classList.remove("pitch--active");
}

function updatePitch(tariff, months) {
  const offer = tariff.offers.find((o) => o.months === months);
  let text;
  let extra = "";

  if (offer) {
    text = `„Mit ${tariff.name} und ${offer.months} Monaten Laufzeit zahlen Sie ${euro(offer.price)} statt ${euro(tariff.flex)} im Monat. Über die ganze Laufzeit sparen Sie damit rund ${euro(savings(tariff, offer))}.“`;
    extra = `Auf die Woche gerechnet: ca. ${euro(perWeek(offer.price))} · Ab dem ${offer.months + 1}. Monat laut Preisliste ${euro(offer.after)} monatlich.`;
  } else if (tariff.pitch) {
    text = `„${tariff.pitch}“`;
  } else {
    const best = tariff.offers[0];
    text = `„${tariff.name} flexibel kostet ${euro(tariff.flex)} im Monat und ist monatlich kündbar.“`;
    if (best) {
      extra = `Zum Vergleich: Mit ${best.months} Monaten wären es ${euro(best.price)}, also ${euro(tariff.flex - best.price)} weniger pro Monat.`;
    }
  }

  pitchText.textContent = text;
  pitchExtra.textContent = extra;
  document.querySelector(".pitch").classList.add("pitch--active");
}

content.addEventListener("click", (event) => {
  const card = event.target.closest(".price-card");
  if (!card) return;
  content.querySelectorAll(".price-card").forEach((c) => c.setAttribute("aria-pressed", String(c === card)));
  const tariff = SPORTS[currentSport].tariffs[Number(card.dataset.tariff)];
  updatePitch(tariff, Number(card.dataset.months));
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.setAttribute("aria-selected", String(t === tab)));
    renderSport(tab.dataset.sport);
  });
});

renderSport("tkd");

/* ---------- Leitfaden: Schritt-Navigation ---------- */
const guideScroll = document.querySelector(".guide-scroll");
const navLinks = document.querySelectorAll(".step-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === "#" + entry.target.id));
    });
  }, { root: guideScroll, rootMargin: "0px 0px -70% 0px" });

  document.querySelectorAll(".guide-step[id]").forEach((step) => observer.observe(step));
}
