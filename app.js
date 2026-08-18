// ===== Dados centrais da viagem — edite aqui para atualizar o site inteiro =====
const CONFIG = {
  trip: {
    title: "Viagem para a Chapada dos Veadeiros",
    subtitle: "Retiro para não perder o réu primário",
    dateLabel: "Sexta, 02 de outubro — Domingo, 04 de outubro de 2026",
    guests: 8,
  },

  lodgings: [
    {
      id: "barata",
      badge: "Mais barata",
      name: "Viagem barata",
      location: "Alto Paraíso de Goiás",
      routeSet: "altoParaiso",
      total: 929,
      link: "https://www.airbnb.com.br/rooms/745062444003812524",
      photos: [
        { src: "images/barato-geral.png", caption: "Geral" },
        { src: "images/barato-localizacao.png", caption: "Localização" },
        { src: "images/barato-quartos.png", caption: "Quartos" },
        { src: "images/barato-quintal.png", caption: "Quintal" },
      ],
    },
    {
      id: "barata2",
      badge: "Menos gasolina",
      name: "Viagem barata 02",
      location: "São Jorge",
      routeSet: "saoJorge",
      total: 1020,
      link: "https://www.airbnb.com.br/rooms/1581209780199628073",
      photos: [
        { src: "images/barata-02-geral.png", caption: "Geral" },
        { src: "images/barata-02-localizacao.png", caption: "Localização" },
        { src: "images/barata-02-quartos.png", caption: "Quartos" },
        { src: "images/barata-02-quintal.png", caption: "Quintal" },
      ],
    },
    {
      id: "ideal",
      badge: "Escolha equilibrada",
      name: "Viagem ideal",
      location: "Alto Paraíso de Goiás",
      routeSet: "altoParaiso",
      total: 1858,
      link: "https://www.airbnb.com.br/rooms/1408940796117281906",
      photos: [
        { src: "images/ideal-hidro.png", caption: "Hidro" },
        { src: "images/ideal-localizacao.png", caption: "Localização" },
        { src: "images/ideal-quadras-lazer.png", caption: "Quadras / Lazer" },
        { src: "images/ideal-quartos.png", caption: "Quartos" },
      ],
    },
    {
      id: "cara",
      badge: "Top de linha",
      name: "Viagem cara",
      location: "Alto Paraíso de Goiás",
      routeSet: "altoParaiso",
      total: 2879,
      link: "https://www.airbnb.com.br/rooms/1114486706277617874",
      photos: [
        { src: "images/caro-geral.png", caption: "Geral" },
        { src: "images/caro-localizacao.png", caption: "Localização" },
        { src: "images/caro-piscina.png", caption: "Piscina" },
        { src: "images/caro-quartos.png", caption: "Quartos" },
      ],
    },
  ],

  // Distâncias aproximadas (km) — ver plano/README para fontes; ajuste se necessário.
  // Duas malhas de rota: hospedagens em Alto Paraíso x a hospedagem em São Jorge
  // (mais perto da Cachoeira do Segredo e do Vale da Lua, logo com menos km rodado).
  routeSets: {
    altoParaiso: {
      label: "Alto Paraíso (Barata, Ideal, Cara)",
      routes: [
        {
          from: "Brasília (Rodoviária / Asa Sul)",
          to: "Alto Paraíso de Goiás",
          km: 224,
          roundTrip: false,
          note: "Saída sexta-feira, 14h.",
        },
        {
          from: "Alto Paraíso de Goiás",
          to: "Cachoeira do Segredo",
          km: 53,
          roundTrip: true,
          note: "Ida e volta no sábado — entrada 8h–13h, trilha de 3,5 km.",
        },
        {
          from: "Alto Paraíso de Goiás",
          to: "Vale da Lua",
          km: 35,
          roundTrip: false,
          note: "Domingo de manhã cedo — aberto das 8h15 às 16h.",
        },
        {
          from: "Vale da Lua",
          to: "Brasília",
          km: 259,
          roundTrip: false,
          note: "Volta direta para casa no domingo.",
        },
      ],
    },
    saoJorge: {
      label: "São Jorge (Barata 02)",
      routes: [
        {
          from: "Brasília (Rodoviária / Asa Sul)",
          to: "São Jorge",
          km: 255,
          roundTrip: false,
          note: "Saída sexta-feira, 14h.",
        },
        {
          from: "São Jorge",
          to: "Cachoeira do Segredo",
          km: 16,
          roundTrip: true,
          note: "Ida e volta no sábado — entrada 8h–13h, trilha de 3,5 km.",
        },
        {
          from: "São Jorge",
          to: "Vale da Lua",
          km: 9,
          roundTrip: false,
          note: "Domingo de manhã cedo — aberto das 8h15 às 16h.",
        },
        {
          from: "Vale da Lua",
          to: "Brasília",
          km: 246,
          roundTrip: false,
          note: "Volta direta para casa no domingo (aprox., saindo perto de São Jorge).",
        },
      ],
    },
  },

  fuelDefaults: {
    pricePerLiter: 6.5,
    kmPerLiter: 10,
    cars: 2,
  },

  attractions: [
    { name: "Cachoeira do Segredo", pricePerPerson: 70 },
    { name: "Vale da Lua", pricePerPerson: 50 },
  ],

  itinerary: [
    {
      time: "Sexta, 14h",
      title: "Saída de Brasília",
      text: "Encontro na Rodoviária de Brasília ou na Asa Sul. Rumo a Alto Paraíso de Goiás (~224 km).",
    },
    {
      time: "Sexta à noite",
      title: "Curtir o lugar",
      text: "Chegada, churrasco/comida combinada, bebida com moderação — saída cedo amanhã (9h).",
    },
    {
      time: "Sábado, 9h",
      title: "Cachoeira do Segredo",
      text: "Saída cedo para a cachoeira. Entrada permitida das 8h às 13h, trilha de 3,5 km, R$70 por pessoa. Almoço: sanduíches de frango no local.",
    },
    {
      time: "Domingo, cedo",
      title: "Vale da Lua",
      text: "Visita ao Vale da Lua (aberto das 8h15 às 16h, R$50 por pessoa) e depois seguir viagem de volta.",
    },
    {
      time: "Domingo, na volta",
      title: "Valle das Pedras",
      text: "Opcional: saindo do Vale da Lua, dá pra parar para conhecer e almoçar à beira do Rio São Miguel. Entrada R$30/pessoa, almoço R$60/pessoa (à vontade, comida caseira). Aberto das 8h às 17h — pagamento só em dinheiro. Valores encontrados em pesquisa, vale confirmar antes.",
      link: "https://www.instagram.com/valledaspedras",
      linkLabel: "@valledaspedras",
      optional: true,
    },
  ],

  food: [
    {
      title: "Café da manhã",
      items: ["2 caixas de ovos", "Tapioca", "Queijo mussarela"],
    },
    {
      title: "Almoço de sábado (na cachoeira)",
      items: ["Sanduíches de frango"],
    },
    {
      title: "Sexta à noite",
      items: ["Comida a combinar (talvez churrasco)"],
    },
    {
      title: "Bebidas",
      items: ["Cada um leva algo da sua preferência"],
    },
  ],
};

// ===== Helpers =====
const fmtBRL = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const totalKmPerCar = (routeSetKey) =>
  CONFIG.routeSets[routeSetKey].routes.reduce(
    (sum, r) => sum + (r.roundTrip ? r.km * 2 : r.km),
    0
  );

const attractionsPerPerson = () =>
  CONFIG.attractions.reduce((sum, a) => sum + a.pricePerPerson, 0);

let activeRouteSet = "altoParaiso";

// ===== Render: Hospedagem =====
function renderLodgings() {
  const grid = document.getElementById("lodging-grid");
  const cheapest = Math.min(...CONFIG.lodgings.map((l) => l.total));

  grid.innerHTML = CONFIG.lodgings
    .map((l) => {
      const perPerson = l.total / CONFIG.trip.guests;
      const diff = l.total - cheapest;
      return `
      <article class="card lodging-card" data-lodging="${l.id}">
        <div class="lodging-photos">
          ${l.photos
            .map(
              (p, i) => `
            <button class="photo-thumb" data-src="${p.src}" data-caption="${p.caption}" aria-label="Ampliar foto: ${p.caption}">
              <img src="${p.src}" alt="${l.name} — ${p.caption}" loading="lazy"
                   onerror="this.closest('.photo-thumb').classList.add('photo-missing'); this.remove();">
              <span class="photo-caption">${p.caption}</span>
            </button>`
            )
            .join("")}
        </div>
        <div class="lodging-body">
          <span class="badge">${l.badge}</span>
          <h3>${l.name}</h3>
          <p class="lodging-location">📍 ${l.location}</p>
          <p class="lodging-total">${fmtBRL(l.total)} <span>total / ${CONFIG.trip.guests} pessoas</span></p>
          <p class="lodging-per-person">${fmtBRL(perPerson)} <span>por pessoa</span></p>
          ${diff > 0 ? `<p class="lodging-diff">+ ${fmtBRL(diff)} vs. mais barata</p>` : `<p class="lodging-diff lodging-diff--best">A opção mais barata</p>`}
          <a class="btn btn-outline" href="${l.link}" target="_blank" rel="noopener">Ver no Airbnb</a>
        </div>
      </article>`;
    })
    .join("");

  renderComparisonTable(cheapest);
  renderChart();
  attachLightbox();
}

function renderComparisonTable(cheapest) {
  const tbody = document.getElementById("comparison-tbody");
  tbody.innerHTML = CONFIG.lodgings
    .map((l) => {
      const perPerson = l.total / CONFIG.trip.guests;
      const diff = l.total - cheapest;
      return `
      <tr>
        <td>${l.name}</td>
        <td>${fmtBRL(l.total)}</td>
        <td>${fmtBRL(perPerson)}</td>
        <td>${diff > 0 ? "+ " + fmtBRL(diff) : "—"}</td>
      </tr>`;
    })
    .join("");
}

function renderChart() {
  const chart = document.getElementById("cost-chart");
  const perPersonValues = CONFIG.lodgings.map(
    (l) => l.total / CONFIG.trip.guests
  );
  const max = Math.max(...perPersonValues);
  // rampa sequencial verde validada (claro -> escuro = custo crescente, 4 níveis)
  const ramp = ["#96c189", "#7fae73", "#5c8f4f", "#2f5233"];
  const sorted = [...CONFIG.lodgings].sort((a, b) => a.total - b.total);

  chart.innerHTML = sorted
    .map((l, i) => {
      const perPerson = l.total / CONFIG.trip.guests;
      const heightPct = Math.max(6, Math.round((perPerson / max) * 100));
      return `
      <div class="bar-col">
        <div class="bar-value">${fmtBRL(perPerson)}</div>
        <div class="bar" style="height:${heightPct}%; background:${ramp[i]}"></div>
        <div class="bar-label">${l.name}</div>
      </div>`;
    })
    .join("");
}

function attachLightbox() {
  const overlay = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");

  document.querySelectorAll(".photo-thumb").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("photo-missing")) return;
      img.src = btn.dataset.src;
      caption.textContent = btn.dataset.caption;
      overlay.classList.add("open");
    });
  });

  overlay.addEventListener("click", () => overlay.classList.remove("open"));
}

// ===== Render: Rotas =====
function mapsEmbedSrc(from, to) {
  const q = encodeURIComponent(`${from} to ${to}`);
  return `https://www.google.com/maps?saddr=${encodeURIComponent(
    from
  )}&daddr=${encodeURIComponent(to)}&output=embed`;
}
function mapsLinkHref(from, to) {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    from
  )}&destination=${encodeURIComponent(to)}`;
}

function renderRouteTabs() {
  const tabs = document.getElementById("route-tabs");
  tabs.innerHTML = Object.entries(CONFIG.routeSets)
    .map(
      ([key, rs]) => `
      <button class="route-tab${key === activeRouteSet ? " active" : ""}" data-set="${key}">
        ${rs.label}
      </button>`
    )
    .join("");

  tabs.querySelectorAll(".route-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.set === activeRouteSet) return;
      activeRouteSet = btn.dataset.set;
      renderRouteTabs();
      renderRoutesGrid();
      calcFuel();
    });
  });
}

function renderRoutesGrid() {
  const grid = document.getElementById("routes-grid");
  grid.innerHTML = CONFIG.routeSets[activeRouteSet].routes
    .map((r) => {
      const distanceLabel = r.roundTrip
        ? `${r.km} km (ida) · ${r.km * 2} km ida e volta`
        : `${r.km} km`;
      return `
      <article class="card route-card">
        <h3>${r.from} → ${r.to}</h3>
        <p class="route-note">${r.note}</p>
        <div class="route-map">
          <iframe src="${mapsEmbedSrc(r.from, r.to)}" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Mapa: ${r.from} até ${r.to}"></iframe>
        </div>
        <div class="route-footer">
          <span class="route-distance">${distanceLabel}</span>
          <a class="btn btn-outline btn-small" href="${mapsLinkHref(
            r.from,
            r.to
          )}" target="_blank" rel="noopener">Abrir no Google Maps</a>
        </div>
      </article>`;
    })
    .join("");
}

// ===== Calculadora de combustível =====
function calcFuel() {
  const price = parseFloat(document.getElementById("fuel-price").value) || 0;
  const kml = parseFloat(document.getElementById("fuel-kml").value) || 1;
  const cars = parseInt(document.getElementById("fuel-cars").value) || 1;

  const fuelPerPersonBySet = {};

  Object.keys(CONFIG.routeSets).forEach((key) => {
    const kmPerCar = totalKmPerCar(key);
    const liters = (kmPerCar / kml) * cars;
    const total = liters * price;
    fuelPerPersonBySet[key] = total / CONFIG.trip.guests;

    if (key === activeRouteSet) {
      document.getElementById("fuel-km-total").textContent = `${kmPerCar} km`;
      document.getElementById("fuel-liters").textContent = `${liters.toFixed(1)} L`;
      document.getElementById("fuel-total").textContent = fmtBRL(total);
      document.getElementById("fuel-per-person").textContent = fmtBRL(
        fuelPerPersonBySet[key]
      );
    }
  });

  document.getElementById(
    "fuel-calc-context"
  ).textContent = `Calculando para a malha de rota: ${CONFIG.routeSets[activeRouteSet].label}.`;

  renderSummary(fuelPerPersonBySet);
}

// ===== Resumo total por pessoa (hospedagem + combustível + ingressos) =====
function renderSummary(fuelPerPersonBySet) {
  const tbody = document.getElementById("summary-tbody");
  const ingressos = attractionsPerPerson();

  tbody.innerHTML = CONFIG.lodgings
    .map((l) => {
      const lodgingPerPerson = l.total / CONFIG.trip.guests;
      const fuelPerPerson = fuelPerPersonBySet[l.routeSet];
      const total = lodgingPerPerson + fuelPerPerson + ingressos;
      return `
      <tr>
        <td>${l.name}</td>
        <td>${fmtBRL(lodgingPerPerson)}</td>
        <td>${fmtBRL(fuelPerPerson)}</td>
        <td>${fmtBRL(ingressos)}</td>
        <td class="summary-total">${fmtBRL(total)}</td>
      </tr>`;
    })
    .join("");
}

// ===== Render: Roteiro =====
function renderItinerary() {
  const list = document.getElementById("itinerary-list");
  list.innerHTML = CONFIG.itinerary
    .map(
      (it) => `
      <li class="timeline-item${it.optional ? " timeline-item--optional" : ""}">
        <span class="timeline-time">${it.time}</span>
        <div class="timeline-body">
          <h3>${it.title}${it.optional ? ' <span class="optional-badge">Opcional</span>' : ""}</h3>
          <p>${it.text}</p>
          ${it.link ? `<a class="timeline-link" href="${it.link}" target="_blank" rel="noopener">${it.linkLabel || it.link}</a>` : ""}
        </div>
      </li>`
    )
    .join("");

  const attr = document.getElementById("attractions-note");
  attr.textContent = `Ingressos: ${CONFIG.attractions
    .map((a) => `${a.name} ${fmtBRL(a.pricePerPerson)}/pessoa`)
    .join(" · ")} — total ingressos ${fmtBRL(attractionsPerPerson())}/pessoa.`;
}

// ===== Render: Alimentação =====
function renderFood() {
  const grid = document.getElementById("food-grid");
  grid.innerHTML = CONFIG.food
    .map(
      (f) => `
      <article class="card food-card">
        <h3>${f.title}</h3>
        <ul>${f.items.map((i) => `<li>${i}</li>`).join("")}</ul>
      </article>`
    )
    .join("");
}

// ===== Header dinâmico =====
function renderHeader() {
  document.getElementById("trip-title").textContent = CONFIG.trip.title;
  document.getElementById("trip-subtitle").textContent = CONFIG.trip.subtitle;
  document.getElementById("trip-dates").textContent = CONFIG.trip.dateLabel;
  document.getElementById(
    "trip-guests"
  ).textContent = `${CONFIG.trip.guests} pessoas`;
}

// ===== Init =====
function init() {
  renderHeader();
  renderLodgings();
  renderRouteTabs();
  renderRoutesGrid();
  renderItinerary();
  renderFood();

  document.getElementById("fuel-price").value = CONFIG.fuelDefaults.pricePerLiter;
  document.getElementById("fuel-kml").value = CONFIG.fuelDefaults.kmPerLiter;
  document.getElementById("fuel-cars").value = CONFIG.fuelDefaults.cars;
  ["fuel-price", "fuel-kml", "fuel-cars"].forEach((id) =>
    document.getElementById(id).addEventListener("input", calcFuel)
  );
  calcFuel();

  document.getElementById("year").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", init);
