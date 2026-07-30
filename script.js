// Lista consolidada a partir de checklist.docx (ordem alfabética, 296 Pals únicos)
// "Geleia do Arco-íris" removida por ser duplicata de "Rainbow Slime"
// "Olho de Cthulhu" (Eye of Cthulhu) adicionado do crossover Tides of Terraria
const PALS = ["Aegidron","Amione","Anubis","Arsox","Astegon","Astralym","Azurmane","Azurobe","Azurobe Cryst","Bakemi","Bastigor","Beakon","Beakon Cryst","Beegarde","Bellanoir","Bellanoir Libero","Blazamut","Blazamut Ryu","Blazehowl","Blazehowl Noct","Braloha","Bristla","Broncherry","Broncherry Aqua","Bulldosu","Bushi","Bushi Noct","Caprity","Caprity Noct","Carnibora","Cattiva","Cawgnito","Celaray","Celaray Lux","Celesdir","Celesdir Noct","Chikipi","Chillet","Chillet Ignis","Cinnamoth","Clovee","Cremis","Croajiro","Croajiro Noct","Cryolinx","Cryolinx Terra","Daedream","Dandilord","Dazemu","Dazzi","Dazzi Noct","Depresso","Digtoise","Dinossom","Dinossom Lux","Direhowl","Dogen","Dualith","Dualith Noct","Dumud","Dumud Gild","Dupin","Dynamoff","Eidrolon","Eidrolon Ignis","Eikthyrdeer","Eikthyrdeer Terra","Elgrove","Elgrove Cryst","Elizabee","Elphidran","Elphidran Aqua","Espada Encantada","Faleris","Faleris Aqua","Felbat","Fenglope","Fenglope Lux","Finsider","Finsider Ignis","Flambelle","Flaracle","Flopie","Foxcicle","Foxparks","Foxparks Cryst","Frostallion","Frostallion Noct","Frostplume","Fuack","Fuack Ignis","Fuddler","Galeclaw","Geleia Azul","Geleia Luminosa","Geleia roxa","Geleia verde","Geleia vermelha","Ghangler","Ghangler Ignis","Gildane","Gildra","Gloopie","Gloopie Primo","Gobfin","Gobfin Ignis","Gorirat","Gorirat Terra","Grintale","Grizzbolt","Gumoss","Hangyu","Hangyu Cryst","Hartalis","Helzephyr","Helzephyr Lux","Herbil","Hoocrates","Hoodle","Icelyn","Incineram","Incineram Noct","Jelliette","Jellroy","Jetragon","Jolthog","Jolthog Cryst","Jormuntide","Jormuntide Ignis","Katress","Katress Ignis","Kelpsea","Kelpsea Ignis","Kikit","Killamari","Killamari Primo","Kingpaca","Kingpaca Cryst","Kitsun","Kitsun Noct","Knocklem","Knocklem Ignis","Lamball","Lapiron","Lapure","Leafan","Leezpunk","Leezpunk Ignis","Lifmunk","Loomen","Loupmoon","Loupmoon Cryst","Lovander","Lullu","Lunaris","Lyleen","Lyleen Noct","Majex","Mammorest","Mammorest Cryst","Maraith","Mau","Mau Cryst","Melpaca","Menasting","Menasting Terra","Mimog","Moldron","Moldron Cryst","Mossanda","Mossanda Lux","Mozzarina","Muffly","Munchill","Mycora","Necromus","Needoll","Needoll Noct","Neptilius","Nitemary","Nitemary Botan","Nitewing","Nox","Nyafia","Olho de Cthulhu","Omascul","Ophydia","Orserk","Paladius","Palumba","Panthalus","Pengullet","Pengullet Lux","Penking","Penking Lux","Petallia","Petallia Ignis","Pierdon","Pierdon Cryst","Polapup","Polapup Terra","Prixter","Prixter Lux","Prunelia","Puffolt","Pupperai","Pyrin","Pyrin Noct","Quivern","Quivern Botan","Ragnahawk","Rainbow Slime","Rayhound","Rayhound Cryst","Reindrix","Relaxaurus","Relaxaurus Lux","Renjishi","Reptyro","Reptyro Cryst","Ribbuny","Ribbuny Botan","Robinquill","Robinquill Terra","Rooby","Roujay","Rushoar","Sekhmet","Selyne","Shadowbeak","Shaolong","Shroomer","Shroomer Noct","Sibelyx","Sibelyx Primo","Silvance","Silvegis","Skutlass","Skutlass Ignis","Slowatt","Smokie","Smokie Cryst","Snock","Snock Lux","Snugloo","Solenne","Solmora","Solmora Lux","Sootseer","Souffline","Sparkit","Splatterina","Starryon","Starryon Primo","Surfent","Surfent Terra","Suzaku","Suzaku Aqua","Swee","Sweepa","Tanzee","Tanzee Ignis","Tarantriss","Teafant","Tetroise","Tetroise Primo","Tocotoco","Tombat","Tropicaw","Turtacle","Turtacle Terra","Univolt","Univolt Cryst","Vaelet","Valentail","Vanwyrm","Vanwyrm Cryst","Venusa","Verdash","Vixy","Warsect","Warsect Terra","Whalaska","Whalaska Ignis","Wispaw","Wistella","Wixen","Wixen Noct","Woolipop","Woolipop Terra","Wumpo","Wumpo Botan","Xenogard","Xenolord","Xenovader","Yakumo"];

const STORAGE_NAME = "meusPals.playerName";
const STORAGE_PROGRESS = "meusPals.progress";
const POINTS_PER_PAL = 10;

const AVATAR_COLORS = [
  "#60a5fa", "#f472b6", "#a78bfa", "#34d399",
  "#fb923c", "#f87171", "#38bdf8", "#c084fc",
];

let progress = {};
let currentFilter = "all";
let searchTerm = "";

const nameModal = document.getElementById("nameModal");
const nameInput = document.getElementById("nameInput");
const startBtn = document.getElementById("startBtn");
const app = document.getElementById("app");
const playerNameDisplay = document.getElementById("playerNameDisplay");
const editNameBtn = document.getElementById("editNameBtn");
const scoreValue = document.getElementById("scoreValue");
const capturedCount = document.getElementById("capturedCount");
const totalCount = document.getElementById("totalCount");
const progressFill = document.getElementById("progressFill");
const progressMsg = document.getElementById("progressMsg");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const filterBtns = document.querySelectorAll(".filter-btn");
const palList = document.getElementById("palList");
const emptyMsg = document.getElementById("emptyMsg");

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_PROGRESS)) || {};
  } catch (e) {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_PROGRESS, JSON.stringify(progress));
}

function getPlayerName() {
  return localStorage.getItem(STORAGE_NAME) || "";
}

function savePlayerName(name) {
  localStorage.setItem(STORAGE_NAME, name);
}

function avatarColorFor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function initials(name) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] || "";
  const second = parts[1]?.[0] || parts[0]?.[1] || "";
  return (first + second).toUpperCase();
}

function progressMessage(percent, captured) {
  if (captured === 0) return "Bora capturar o primeiro Pal! (0% concluído)";
  if (percent < 25) return `Boa, continue capturando! (${percent}% concluído)`;
  if (percent < 50) return `Você está indo bem! (${percent}% concluído)`;
  if (percent < 75) return `Mais da metade! Continue assim! (${percent}% concluído)`;
  if (percent < 100) return `Quase lá, faltam poucos! (${percent}% concluído)`;
  return "Parabéns! Coleção completa! 🎉 (100% concluído)";
}

function renderStats() {
  const captured = PALS.filter((p) => progress[p] > 0).length;
  const totalQty = PALS.reduce((sum, p) => sum + (progress[p] || 0), 0);
  const percent = Math.round((captured / PALS.length) * 100);

  capturedCount.textContent = captured;
  totalCount.textContent = PALS.length;
  progressFill.style.width = percent + "%";
  progressMsg.textContent = progressMessage(percent, captured);
  scoreValue.textContent = totalQty * POINTS_PER_PAL;
}

function matchesFilter(pal) {
  const isCaptured = (progress[pal] || 0) > 0;
  if (currentFilter === "captured" && !isCaptured) return false;
  if (currentFilter === "missing" && isCaptured) return false;
  if (searchTerm && !pal.toLowerCase().includes(searchTerm.toLowerCase())) return false;
  return true;
}

function renderList() {
  palList.innerHTML = "";
  const visible = PALS.map((pal, idx) => ({ pal, idx })).filter(({ pal }) => matchesFilter(pal));

  emptyMsg.classList.toggle("hidden", visible.length > 0);

  const fragment = document.createDocumentFragment();
  visible.forEach(({ pal, idx }) => {
    const qty = progress[pal] || 0;
    const isCaptured = qty > 0;

    const li = document.createElement("li");
    li.className = "pal-card" + (isCaptured ? " captured" : "");

    const avatar = document.createElement("div");
    avatar.className = "pal-avatar";
    avatar.style.background = avatarColorFor(pal);

    const avatarInitials = document.createElement("span");
    avatarInitials.className = "pal-avatar-initials";
    avatarInitials.textContent = initials(pal);
    avatar.appendChild(avatarInitials);

    const avatarImg = document.createElement("img");
    avatarImg.className = "pal-avatar-img";
    avatarImg.src = `pixelpal/${encodeURIComponent(pal)}.png`;
    avatarImg.alt = pal;
    avatarImg.loading = "lazy";
    avatarImg.addEventListener("error", () => {
      avatarImg.remove();
    }, { once: true });
    avatarImg.addEventListener("load", () => {
      avatarInitials.remove();
      avatar.style.background = "transparent";
    }, { once: true });
    avatar.appendChild(avatarImg);

    const info = document.createElement("div");
    info.className = "pal-info";
    const nameEl = document.createElement("span");
    nameEl.className = "pal-name";
    nameEl.textContent = pal;
    const indexEl = document.createElement("span");
    indexEl.className = "pal-index";
    indexEl.textContent = "#" + (idx + 1);
    info.appendChild(nameEl);
    info.appendChild(indexEl);

    const qtyStepper = document.createElement("div");
    qtyStepper.className = "qty-stepper";

    const qtyMinus = document.createElement("button");
    qtyMinus.className = "qty-btn";
    qtyMinus.type = "button";
    qtyMinus.textContent = "–";
    qtyMinus.addEventListener("click", () => setQuantity(pal, qty - 1));

    const qtyInput = document.createElement("input");
    qtyInput.className = "qty-input";
    qtyInput.type = "number";
    qtyInput.min = "0";
    qtyInput.value = qty;
    qtyInput.addEventListener("change", (e) => {
      const value = parseInt(e.target.value, 10);
      setQuantity(pal, Number.isNaN(value) ? 0 : value);
    });

    const qtyPlus = document.createElement("button");
    qtyPlus.className = "qty-btn";
    qtyPlus.type = "button";
    qtyPlus.textContent = "+";
    qtyPlus.addEventListener("click", () => setQuantity(pal, qty + 1));

    qtyStepper.appendChild(qtyMinus);
    qtyStepper.appendChild(qtyInput);
    qtyStepper.appendChild(qtyPlus);

    const check = document.createElement("button");
    check.className = "pal-check" + (isCaptured ? " checked" : "");
    check.setAttribute("aria-pressed", String(isCaptured));
    check.title = "Marcar/desmarcar como capturado";
    check.textContent = "✓";
    check.addEventListener("click", () => setQuantity(pal, isCaptured ? 0 : 1));

    li.appendChild(avatar);
    li.appendChild(info);
    li.appendChild(qtyStepper);
    li.appendChild(check);
    fragment.appendChild(li);
  });
  palList.appendChild(fragment);
}

function setQuantity(pal, qty) {
  const clamped = Math.max(0, Math.floor(qty));
  if (clamped > 0) {
    progress[pal] = clamped;
  } else {
    delete progress[pal];
  }
  saveProgress();
  renderStats();
  renderList();
}

function render() {
  renderStats();
  renderList();
}

function showApp(name) {
  playerNameDisplay.textContent = name;
  nameModal.classList.add("hidden");
  app.classList.remove("hidden");
  render();
}

function handleStart() {
  const name = nameInput.value.trim();
  if (!name) {
    nameInput.focus();
    return;
  }
  savePlayerName(name);
  showApp(name);
}

startBtn.addEventListener("click", handleStart);
nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleStart();
});

editNameBtn.addEventListener("click", () => {
  nameInput.value = getPlayerName();
  app.classList.add("hidden");
  nameModal.classList.remove("hidden");
  nameInput.focus();
});

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  clearSearch.classList.toggle("hidden", searchTerm.length === 0);
  renderList();
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  searchTerm = "";
  clearSearch.classList.add("hidden");
  renderList();
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderList();
  });
});

// Inicialização
progress = loadProgress();
const savedName = getPlayerName();
if (savedName) {
  showApp(savedName);
} else {
  nameInput.focus();
}
