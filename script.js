"use strict";

/* =====================================================================
   PREISE – hier ändern, wenn eine neue Preisliste kommt.
   flex   = Flex-Preis (1 Monat, monatlich kündbar)
   offers = Laufzeit-Angebote: months, price (Monatsbeitrag),
            after (Beitrag nach Ablauf laut Preisliste), discount
   Stand: Preislisten vom 01.11.2026 (überarbeitet am 20.10.2026)
   ===================================================================== */
const ADDON_PRICE = 39;
const STUDENT_DISCOUNT = 10;
const STUDENT_TEXT = "Gegen Vorlage eines gültigen Nachweises wird jede Mitgliedschaft bis zum Ende der Ausbildung/des Studiums um 10,- günstiger.";
const BASE_NOTE = "Alle Preise sind Durchschnittspreise, auch fällig bei Betriebsferien · Preisangaben in € inkl. MwSt. · Abbuchung monatlich im Voraus.";
const PARENT_NOTE = "* Eltern Mitgliedschaft: 1 Erwachsener + mind. 1 Kind/Jugendlicher oder ab 2 Kinder/Jugendliche je nach Programm. Voraussetzung ist die Abbuchung über gleiches Konto.";

const SPORTS = {
  tkd: {
    label: "Taekwondo",
    allInclusive: "Zu deiner persönlichen Taekwondo Mitgliedschaft buchbar. Enthalten: Kickboxen-, Boxen- und Functional Fitness-Stunden, so oft sie stattfinden.",
    student: STUDENT_TEXT,
    tariffs: [
      { name: "Action", desc: "Training einmal wöchentlich · Mu-Ki: einmal wöchentlich ein Elternteil mit Kind", flex: 139,
        offers: [{ months: 15, price: 99, after: 139, discount: "ca. 30 %" }, { months: 9, price: 119, after: 139, discount: "ca. 15 %" }] },
      { name: "Master", desc: "Kindertraining zweimal wöchentlich · Erwachsene: alle angebotenen Stunden", flex: 149,
        offers: [{ months: 15, price: 119, after: 149, discount: "ca. 20 %" }, { months: 9, price: 129, after: 149, discount: "ca. 15 %" }] },
      { name: "Eltern Mitgliedschaft Action*", tag: "Eltern", desc: "Training einmal wöchentlich · Mu-Ki: weiteres Familienmitglied in anderer Gruppe", flex: 119,
        offers: [{ months: 15, price: 79, after: 139, discount: "ca. 30 %" }, { months: 9, price: 99, after: 139, discount: "ca. 15 %" }] },
      { name: "Eltern Mitgliedschaft Master*", tag: "Eltern", desc: "Kindertraining zweimal wöchentlich · Erwachsene: alle angebotenen Stunden", flex: 129,
        offers: [{ months: 15, price: 99, after: 139, discount: "ca. 20 %" }, { months: 9, price: 109, after: 139, discount: "ca. 15 %" }] }
    ],
    packages: [
      { name: "Startpaket Mu-Ki", price: 99, items: ["Check-in Karte", "Trainings-T-Shirt für 1 Elternteil und 1 Kind", "UTTC-Verbandsmitgliedschaft im Jahr der Anmeldung"], excluded: [] },
      { name: "Startpaket Panda-Kids | Tiger-Kids*", price: 159, items: ["Check-in Karte", "Kampfanzug und Gürtel, Trainings-T-Shirt", "UTTC-Verbandsmitgliedschaft im Jahr der Anmeldung", "Schulabzeichen und Verbandsabzeichen, *Verbandsausweis"], excluded: ["Gürtelprüfungen"] },
      { name: "Startpaket Warrior-Tigers | Jugend-Erwachsene", price: 199, items: ["Check-in Karte", "Kampfanzug, Gürtel, Trainings-T-Shirt, Safetie-Paket", "Schulabzeichen und Verbandsabzeichen, Verbandsausweis", "UTTC-Verbandsmitgliedschaft im Jahr der Anmeldung"], excluded: ["Gürtelprüfungen"] }
    ],
    notes: [
      PARENT_NOTE + " Preise für Gürtelprüfungen siehe Preisliste Prüfungen/Ausstattung.",
      BASE_NOTE
    ]
  },

  kbx: {
    label: "Kickboxen & Boxen",
    allInclusive: "Zu deiner persönlichen Kickboxen oder Boxen Mitgliedschaft buchbar. Enthalten: Kickboxen- oder Boxen- (je nach Standardmitgliedschaft) und Functional Fitness-Stunden, so oft sie stattfinden.",
    student: STUDENT_TEXT,
    tariffs: [
      { name: "Action", desc: "Training einmal wöchentlich · Mu-Ki: einmal wöchentlich ein Elternteil mit Kind", flex: 119,
        offers: [{ months: 15, price: 79, after: 139, discount: "ca. 30 %" }, { months: 9, price: 99, after: 139, discount: "ca. 15 %" }] },
      { name: "Master", desc: "Kindertraining zweimal wöchentlich · Erwachsene: alle angebotenen Stunden", flex: 129,
        offers: [{ months: 15, price: 99, after: 149, discount: "ca. 20 %" }, { months: 9, price: 109, after: 149, discount: "ca. 15 %" }] }
    ],
    packages: [
      { name: "Startpaket Kickboxen", price: 159, items: ["Check-in Karte", "Kickbox-Hose und Trainings-T-Shirt", "Safetie-Paket (Boxhandschuhe/Fußschützer/Zahnschutz/Desinfektionsmittel)", "UTTC-Verbandsmitgliedschaft im Jahr der Anmeldung"], excluded: ["Gürtelprüfungen"] },
      { name: "Startpaket Boxen", price: 159, items: ["Check-in Karte", "Box-Hose und Trainings-T-Shirt", "Safetie-Paket Boxen (Boxhandschuhe/Bandagen/Zahnschutz/Desinfektionsmittel)", "UTTC-Verbandsmitgliedschaft im Jahr der Anmeldung"], excluded: [] }
    ],
    notes: [BASE_NOTE]
  },

  ff: {
    label: "Functional Fitness",
    tariffs: [
      { name: "Functional Fitness", desc: "Alle angebotenen Stunden.", flex: 59, offers: [],
        pitch: "Functional Fitness kostet 59 € im Monat. Damit können Sie alle angebotenen Stunden besuchen, und es ist monatlich kündbar." },
      { name: "Studenten/Azubis", tag: "Nachweis", desc: "Gegen Vorlage eines gültigen Nachweises wird die Mitgliedschaft bis zum Ende der Ausbildung/des Studiums um 10,- günstiger.", flex: 49, offers: [],
        pitch: "In Ausbildung oder Studium zahlen Sie mit einem gültigen Nachweis nur 49 € im Monat, bis zum Ende der Ausbildung bzw. des Studiums. Monatlich kündbar." },
      { name: "Eltern Mitgliedschaft*", tag: "Eltern", desc: "Alle angebotenen Stunden. Günstigerer Beitrag, wenn mindestens eines der eigenen Kinder bereits bei KwonRo trainiert. Dessen Mitgliedschaft bleibt unverändert. Gilt in Verbindung mit jeder Mitgliedschaft im Taekwondo- und Kickboxen-/Boxen-Bereich.", flex: 39, offers: [],
        pitch: "Weil Ihr Kind schon bei uns trainiert, zahlen Sie für Functional Fitness nur 39 € im Monat, für alle angebotenen Stunden und monatlich kündbar. Die Mitgliedschaft Ihres Kindes bleibt dabei ganz normal bestehen." }
    ],
    packages: [
      { name: "Startpaket Functional-Fitness", price: 79, items: ["Check-in Karte", "Trainings-T-Shirt", "Handtuch", "UTTC-Verbandsmitgliedschaft im Jahr der Anmeldung"], excluded: [] }
    ],
    notes: [PARENT_NOTE, BASE_NOTE]
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
      <span class="save">${recommended ? `${offer.discount} · ` : ""}spart ${euro(savings(tariff, offer))}</span>
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
      <section class="tariff${t.tag ? " tariff--family" : ""}">
        <div class="tariff__intro">
          <h3>${t.name}${t.tag ? ` <span class="tag">${t.tag}</span>` : ""}</h3>
          <p>${t.desc}</p>
        </div>
        <div class="price-grid${t.offers.length ? "" : " price-grid--single"}">${cards}</div>
      </section>`;
  }).join("");

  const allInclusive = sport.allInclusive ? `
    <div class="addon">
      <div>
        <h3>All-Inclusive <span class="tag tag--green">Upgrade</span></h3>
        <p>${sport.allInclusive}</p>
        <p class="addon__route">monatlich kündbar</p>
      </div>
      <p class="addon__price">+${ADDON_PRICE}<small> € / Monat</small></p>
    </div>` : "";

  const student = sport.student ? `
    <div class="student">
      <div>
        <h3>Studenten/Azubis <span class="tag">Nachweis</span></h3>
        <p>${sport.student}</p>
      </div>
      <p class="student__price">−${STUDENT_DISCOUNT}<small> € / Monat</small></p>
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
    <div class="tariff-list">${tariffs}</div>
    ${allInclusive}
    ${student}
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
  const name = tariff.name.replace("*", "");
  const student = SPORTS[currentSport].student;
  let text;
  let extra = "";

  if (offer) {
    text = `„Mit ${name} und ${offer.months} Monaten Laufzeit zahlen Sie ${euro(offer.price)} statt ${euro(tariff.flex)} im Monat. Über die ganze Laufzeit sparen Sie damit rund ${euro(savings(tariff, offer))}.“`;
    extra = `Auf die Woche gerechnet: ca. ${euro(perWeek(offer.price))} · Ab dem ${offer.months + 1}. Monat laut Preisliste ${euro(offer.after)} monatlich.`;
  } else if (tariff.pitch) {
    text = `„${tariff.pitch}“`;
  } else {
    const best = tariff.offers[0];
    text = `„${name} flexibel kostet ${euro(tariff.flex)} im Monat und ist monatlich kündbar.“`;
    if (best) {
      extra = `Zum Vergleich: Mit ${best.months} Monaten wären es ${euro(best.price)}, also ${euro(tariff.flex - best.price)} weniger pro Monat.`;
    }
  }

  if (student) {
    extra += `${extra ? " · " : ""}In Ausbildung/Studium? Mit gültigem Nachweis ${euro(STUDENT_DISCOUNT)} günstiger.`;
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
