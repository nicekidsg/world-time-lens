const sourceZone = document.getElementById("sourceZone");
const sourceTime = document.getElementById("sourceTime");
const languageSelect = document.getElementById("languageSelect");
const languageLabel = document.getElementById("languageLabel");
const nowBtn = document.getElementById("nowBtn");
const pageTitle = document.getElementById("page-title");
const zoneLabel = document.getElementById("zoneLabel");
const timeLabel = document.getElementById("timeLabel");
const controlPanel = document.getElementById("controlPanel");
const globePanel = document.getElementById("globePanel");
const sourceOffset = document.getElementById("sourceOffset");
const sourceTitle = document.getElementById("sourceTitle");
const sourceDate = document.getElementById("sourceDate");
const timeline = document.getElementById("timeline");
const cityGrid = document.getElementById("cityGrid");

const translations = {
  en: {
    htmlLang: "en",
    dir: "ltr",
    title: "Enter one local time, see the world",
    description: "Convert any local time across major world time zones in real time.",
    language: "Language",
    now: "Now",
    zone: "Region",
    localTime: "Local time",
    controlAria: "Time input",
    globeAria: "Global time bands",
    cityAria: "World city times",
    sameDay: "Same day",
    nextDay: "Next day",
    previousDay: "Previous day",
    days: "days",
    base: "Base",
    hours: "h",
    locale: "en-US",
  },
  zh: {
    htmlLang: "zh-CN",
    dir: "ltr",
    title: "输入一地时间，看见全球此刻",
    description: "输入任意地区时间，实时换算世界主要城市时区。",
    language: "语言",
    now: "现在",
    zone: "地区",
    localTime: "当地时间",
    controlAria: "时间输入",
    globeAria: "全球时间带",
    cityAria: "世界城市时间",
    sameDay: "同日",
    nextDay: "次日",
    previousDay: "前一日",
    days: "天",
    base: "基准",
    hours: "小时",
    locale: "zh-CN",
  },
  es: {
    htmlLang: "es",
    dir: "ltr",
    title: "Introduce una hora local y ve el mundo",
    description: "Convierte cualquier hora local entre las principales zonas horarias del mundo en tiempo real.",
    language: "Idioma",
    now: "Ahora",
    zone: "Región",
    localTime: "Hora local",
    controlAria: "Entrada de hora",
    globeAria: "Franjas horarias globales",
    cityAria: "Horas de ciudades del mundo",
    sameDay: "Mismo día",
    nextDay: "Día siguiente",
    previousDay: "Día anterior",
    days: "días",
    base: "Base",
    hours: "h",
    locale: "es-ES",
  },
  fr: {
    htmlLang: "fr",
    dir: "ltr",
    title: "Entrez une heure locale, voyez le monde",
    description: "Convertissez en temps réel une heure locale dans les principaux fuseaux horaires.",
    language: "Langue",
    now: "Maintenant",
    zone: "Région",
    localTime: "Heure locale",
    controlAria: "Saisie de l’heure",
    globeAria: "Fuseaux horaires mondiaux",
    cityAria: "Heures des villes du monde",
    sameDay: "Même jour",
    nextDay: "Jour suivant",
    previousDay: "Jour précédent",
    days: "jours",
    base: "Base",
    hours: "h",
    locale: "fr-FR",
  },
  ar: {
    htmlLang: "ar",
    dir: "rtl",
    title: "أدخل وقتًا محليًا وشاهد العالم",
    description: "حوّل أي وقت محلي بين أهم المناطق الزمنية في العالم فورًا.",
    language: "اللغة",
    now: "الآن",
    zone: "المنطقة",
    localTime: "الوقت المحلي",
    controlAria: "إدخال الوقت",
    globeAria: "نطاقات الوقت العالمية",
    cityAria: "أوقات مدن العالم",
    sameDay: "اليوم نفسه",
    nextDay: "اليوم التالي",
    previousDay: "اليوم السابق",
    days: "أيام",
    base: "الأساس",
    hours: "س",
    locale: "ar",
  },
  pt: {
    htmlLang: "pt",
    dir: "ltr",
    title: "Digite uma hora local e veja o mundo",
    description: "Converta qualquer hora local entre os principais fusos horários do mundo em tempo real.",
    language: "Idioma",
    now: "Agora",
    zone: "Região",
    localTime: "Hora local",
    controlAria: "Entrada de hora",
    globeAria: "Faixas de horário globais",
    cityAria: "Horas das cidades do mundo",
    sameDay: "Mesmo dia",
    nextDay: "Dia seguinte",
    previousDay: "Dia anterior",
    days: "dias",
    base: "Base",
    hours: "h",
    locale: "pt-BR",
  },
  de: {
    htmlLang: "de",
    dir: "ltr",
    title: "Eine Ortszeit eingeben, die Welt sehen",
    description: "Rechne jede Ortszeit in wichtige weltweite Zeitzonen in Echtzeit um.",
    language: "Sprache",
    now: "Jetzt",
    zone: "Region",
    localTime: "Ortszeit",
    controlAria: "Zeiteingabe",
    globeAria: "Globale Zeitzonen",
    cityAria: "Weltweite Stadtzeiten",
    sameDay: "Gleicher Tag",
    nextDay: "Nächster Tag",
    previousDay: "Vortag",
    days: "Tage",
    base: "Basis",
    hours: "Std.",
    locale: "de-DE",
  },
  ja: {
    htmlLang: "ja",
    dir: "ltr",
    title: "ひとつの時刻から、世界の今を見る",
    description: "任意の地域の時刻を入力して、世界主要都市の時差をリアルタイムに換算します。",
    language: "言語",
    now: "現在",
    zone: "地域",
    localTime: "現地時刻",
    controlAria: "時刻入力",
    globeAria: "世界の時刻帯",
    cityAria: "世界都市の時刻",
    sameDay: "同日",
    nextDay: "翌日",
    previousDay: "前日",
    days: "日",
    base: "基準",
    hours: "時間",
    locale: "ja-JP",
  },
};

const baseZones = [
  {
    zone: "Pacific/Honolulu",
    city: { en: "Honolulu", zh: "檀香山", es: "Honolulu", fr: "Honolulu", ar: "هونولولو", pt: "Honolulu", de: "Honolulu", ja: "ホノルル" },
    country: { en: "United States", zh: "美国", es: "Estados Unidos", fr: "États-Unis", ar: "الولايات المتحدة", pt: "Estados Unidos", de: "Vereinigte Staaten", ja: "米国" },
  },
  {
    zone: "America/Los_Angeles",
    city: { en: "Los Angeles", zh: "洛杉矶", es: "Los Ángeles", fr: "Los Angeles", ar: "لوس أنجلوس", pt: "Los Angeles", de: "Los Angeles", ja: "ロサンゼルス" },
    country: { en: "United States", zh: "美国", es: "Estados Unidos", fr: "États-Unis", ar: "الولايات المتحدة", pt: "Estados Unidos", de: "Vereinigte Staaten", ja: "米国" },
  },
  {
    zone: "America/New_York",
    city: { en: "New York", zh: "纽约", es: "Nueva York", fr: "New York", ar: "نيويورك", pt: "Nova York", de: "New York", ja: "ニューヨーク" },
    country: { en: "United States", zh: "美国", es: "Estados Unidos", fr: "États-Unis", ar: "الولايات المتحدة", pt: "Estados Unidos", de: "Vereinigte Staaten", ja: "米国" },
  },
  {
    zone: "America/Sao_Paulo",
    city: { en: "Sao Paulo", zh: "圣保罗", es: "São Paulo", fr: "São Paulo", ar: "ساو باولو", pt: "São Paulo", de: "São Paulo", ja: "サンパウロ" },
    country: { en: "Brazil", zh: "巴西", es: "Brasil", fr: "Brésil", ar: "البرازيل", pt: "Brasil", de: "Brasilien", ja: "ブラジル" },
  },
  {
    zone: "Europe/London",
    city: { en: "London", zh: "伦敦", es: "Londres", fr: "Londres", ar: "لندن", pt: "Londres", de: "London", ja: "ロンドン" },
    country: { en: "United Kingdom", zh: "英国", es: "Reino Unido", fr: "Royaume-Uni", ar: "المملكة المتحدة", pt: "Reino Unido", de: "Vereinigtes Königreich", ja: "英国" },
  },
  {
    zone: "Europe/Paris",
    city: { en: "Paris", zh: "巴黎", es: "París", fr: "Paris", ar: "باريس", pt: "Paris", de: "Paris", ja: "パリ" },
    country: { en: "France", zh: "法国", es: "Francia", fr: "France", ar: "فرنسا", pt: "França", de: "Frankreich", ja: "フランス" },
  },
  {
    zone: "Asia/Dubai",
    city: { en: "Dubai", zh: "迪拜", es: "Dubái", fr: "Dubaï", ar: "دبي", pt: "Dubai", de: "Dubai", ja: "ドバイ" },
    country: { en: "UAE", zh: "阿联酋", es: "EAU", fr: "Émirats arabes unis", ar: "الإمارات", pt: "EAU", de: "VAE", ja: "UAE" },
  },
  {
    zone: "Asia/Kolkata",
    city: { en: "Mumbai", zh: "孟买", es: "Bombay", fr: "Mumbai", ar: "مومباي", pt: "Mumbai", de: "Mumbai", ja: "ムンバイ" },
    country: { en: "India", zh: "印度", es: "India", fr: "Inde", ar: "الهند", pt: "Índia", de: "Indien", ja: "インド" },
  },
  {
    zone: "Asia/Shanghai",
    city: { en: "Shanghai", zh: "上海", es: "Shanghái", fr: "Shanghai", ar: "شنغهاي", pt: "Xangai", de: "Shanghai", ja: "上海" },
    country: { en: "China", zh: "中国", es: "China", fr: "Chine", ar: "الصين", pt: "China", de: "China", ja: "中国" },
  },
  {
    zone: "Asia/Tokyo",
    city: { en: "Tokyo", zh: "东京", es: "Tokio", fr: "Tokyo", ar: "طوكيو", pt: "Tóquio", de: "Tokio", ja: "東京" },
    country: { en: "Japan", zh: "日本", es: "Japón", fr: "Japon", ar: "اليابان", pt: "Japão", de: "Japan", ja: "日本" },
  },
  {
    zone: "Asia/Singapore",
    city: { en: "Singapore", zh: "新加坡", es: "Singapur", fr: "Singapour", ar: "سنغافورة", pt: "Singapura", de: "Singapur", ja: "シンガポール" },
    country: { en: "Singapore", zh: "新加坡", es: "Singapur", fr: "Singapour", ar: "سنغافورة", pt: "Singapura", de: "Singapur", ja: "シンガポール" },
  },
  {
    zone: "Australia/Sydney",
    city: { en: "Sydney", zh: "悉尼", es: "Sídney", fr: "Sydney", ar: "سيدني", pt: "Sydney", de: "Sydney", ja: "シドニー" },
    country: { en: "Australia", zh: "澳大利亚", es: "Australia", fr: "Australie", ar: "أستراليا", pt: "Austrália", de: "Australien", ja: "オーストラリア" },
  },
];

const timelineZones = [
  "Pacific/Honolulu",
  "America/Los_Angeles",
  "America/New_York",
  "Europe/London",
  "Asia/Dubai",
  "Asia/Shanghai",
];

let zones = [...baseZones];
let defaultZone = detectBrowserZone() || "Asia/Shanghai";
const urlLanguage = new URLSearchParams(window.location.search).get("lang");
const savedLanguage = safeGetLanguage();
let currentLanguage =
  normalizeLanguage(urlLanguage) || normalizeLanguage(savedLanguage) || normalizeLanguage(preferredLanguage()) || "zh";

function preferredLanguage() {
  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith("en")) return "en";
  if (browserLanguage.startsWith("zh")) return "zh";
  if (browserLanguage.startsWith("es")) return "es";
  if (browserLanguage.startsWith("fr")) return "fr";
  if (browserLanguage.startsWith("ar")) return "ar";
  if (browserLanguage.startsWith("pt")) return "pt";
  if (browserLanguage.startsWith("de")) return "de";
  if (browserLanguage.startsWith("ja")) return "ja";
  return "zh";
}

function t(key) {
  return translations[currentLanguage]?.[key] || translations.zh[key];
}

function safeGetLanguage() {
  try {
    return localStorage.getItem("worldTimeLensLanguage");
  } catch {
    return null;
  }
}

function safeSetLanguage(language) {
  try {
    localStorage.setItem("worldTimeLensLanguage", language);
  } catch {
    return;
  }
}

function normalizeLanguage(language) {
  if (!language) return null;
  const normalized = String(language).toLowerCase();
  if (normalized === "zh" || normalized.startsWith("zh-") || normalized.includes("中文")) return "zh";
  if (normalized === "en" || normalized.startsWith("en-") || normalized.includes("english")) return "en";
  if (normalized === "es" || normalized.startsWith("es-") || normalized.includes("español")) return "es";
  if (normalized === "fr" || normalized.startsWith("fr-") || normalized.includes("français")) return "fr";
  if (normalized === "ar" || normalized.startsWith("ar-") || normalized.includes("العربية")) return "ar";
  if (normalized === "pt" || normalized.startsWith("pt-") || normalized.includes("português")) return "pt";
  if (normalized === "de" || normalized.startsWith("de-") || normalized.includes("deutsch")) return "de";
  if (normalized === "ja" || normalized.startsWith("ja-") || normalized.includes("日本")) return "ja";
  return null;
}

function detectBrowserZone() {
  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return zone || null;
  } catch {
    return null;
  }
}

function translatedDetectedZone(city, country) {
  const fallbackCity = city || "Current location";
  const fallbackCountry = country || "Detected";
  return {
    zh: city ? city : "当前位置",
    en: fallbackCity,
    es: city ? city : "Ubicación actual",
    fr: city ? city : "Position actuelle",
    ar: city ? city : "الموقع الحالي",
    pt: city ? city : "Localização atual",
    de: city ? city : "Aktueller Standort",
    ja: city ? city : "現在地",
    country: {
      zh: country || "自动定位",
      en: fallbackCountry,
      es: country || "Detectado",
      fr: country || "Détecté",
      ar: country || "تم الكشف",
      pt: country || "Detectado",
      de: country || "Erkannt",
      ja: country || "自動検出",
    },
  };
}

function ensureZone(zoneId, city, country) {
  if (!zoneId) return null;
  const existing = baseZones.find((item) => item.zone === zoneId);
  if (existing) {
    zones = [...baseZones];
    return existing.zone;
  }

  const detected = translatedDetectedZone(city, country);
  zones = [
    {
      zone: zoneId,
      city: {
        en: detected.en,
        zh: detected.zh,
        es: detected.es,
        fr: detected.fr,
        ar: detected.ar,
        pt: detected.pt,
        de: detected.de,
        ja: detected.ja,
      },
      country: detected.country,
    },
    ...baseZones,
  ];
  return zoneId;
}

async function detectIpZone() {
  const providers = [
    {
      url: "https://ipwho.is/",
      map: (data) =>
        data.success === false
          ? null
          : { zone: data.timezone?.id, city: data.city, country: data.country },
    },
    {
      url: "https://ipapi.co/json/",
      map: (data) => ({ zone: data.timezone, city: data.city, country: data.country_name }),
    },
  ];

  for (const provider of providers) {
    try {
      const response = await fetch(provider.url, { cache: "no-store" });
      if (!response.ok) continue;
      const result = provider.map(await response.json());
      if (result?.zone) return result;
    } catch {
      continue;
    }
  }

  return null;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#039;" };
    return entities[char];
  });
}

function labelFor(item) {
  const city = item.city[currentLanguage] || item.city.zh;
  const country = item.country[currentLanguage] || item.country.zh;
  return `${city} · ${country}`;
}

function getParts(date, timeZone) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  return Object.fromEntries(parts.filter((part) => part.type !== "literal").map((part) => [part.type, part.value]));
}

function getLocalizedParts(date, timeZone) {
  const parts = getParts(date, timeZone);
  const value = new Date(Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day)));
  const dateFormatter = new Intl.DateTimeFormat(t("locale"), {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return {
    date: dateFormatter.format(value),
    input: `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`,
    time: `${parts.hour}:${parts.minute}`,
  };
}

function getOffsetMinutes(date, timeZone) {
  const parts = getParts(date, timeZone);
  const asUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute)
  );
  return Math.round((asUtc - date.getTime()) / 60000);
}

function formatOffset(minutes) {
  const sign = minutes >= 0 ? "+" : "-";
  const absolute = Math.abs(minutes);
  return `UTC${sign}${pad(Math.floor(absolute / 60))}:${pad(absolute % 60)}`;
}

function parseInputValue(value) {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/);
  if (!match) return null;
  const [, year, month, day, hour, minute] = match.map(Number);
  return { year, month, day, hour, minute };
}

function zonedWallTimeToDate(parts, timeZone) {
  let guess = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute);

  for (let index = 0; index < 4; index += 1) {
    const viewed = getParts(new Date(guess), timeZone);
    const viewedUtc = Date.UTC(
      Number(viewed.year),
      Number(viewed.month) - 1,
      Number(viewed.day),
      Number(viewed.hour),
      Number(viewed.minute)
    );
    const targetUtc = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute);
    const delta = targetUtc - viewedUtc;
    if (delta === 0) break;
    guess += delta;
  }

  return new Date(guess);
}

function dayDelta(baseDate, targetDate, baseZone, targetZone) {
  const base = getParts(baseDate, baseZone);
  const target = getParts(targetDate, targetZone);
  const baseDay = Date.UTC(Number(base.year), Number(base.month) - 1, Number(base.day));
  const targetDay = Date.UTC(Number(target.year), Number(target.month) - 1, Number(target.day));
  return Math.round((targetDay - baseDay) / 86400000);
}

function dayDeltaLabel(delta) {
  if (delta === 0) return t("sameDay");
  if (delta === 1) return t("nextDay");
  if (delta === -1) return t("previousDay");
  return `${delta > 0 ? "+" : ""}${delta}${t("days")}`;
}

function diffLabel(diff) {
  if (diff === 0) return t("base");
  const value = Number.isInteger(diff) ? diff : diff.toFixed(1);
  return `${diff > 0 ? "+" : ""}${value}${t("hours")}`;
}

function sourceLabel() {
  return zones.find((item) => item.zone === sourceZone.value) || zones[8];
}

function applyStaticText() {
  document.documentElement.lang = t("htmlLang");
  document.documentElement.dir = t("dir");
  document.querySelector('meta[name="description"]').setAttribute("content", t("description"));
  pageTitle.textContent = t("title");
  languageLabel.textContent = t("language");
  nowBtn.textContent = t("now");
  zoneLabel.textContent = t("zone");
  timeLabel.textContent = t("localTime");
  controlPanel.setAttribute("aria-label", t("controlAria"));
  globePanel.setAttribute("aria-label", t("globeAria"));
  cityGrid.setAttribute("aria-label", t("cityAria"));
}

function renderZoneOptions() {
  const selectedZone = zones.some((item) => item.zone === sourceZone.value) ? sourceZone.value : defaultZone;
  sourceZone.innerHTML = zones
    .map(
      (item) => `
        <option value="${escapeHtml(item.zone)}">
          ${escapeHtml(labelFor(item))}
        </option>
      `
    )
    .join("");
  sourceZone.value = selectedZone;
}

function setNowForSource() {
  const now = new Date();
  if (!zones.some((item) => item.zone === sourceZone.value)) {
    sourceZone.value = defaultZone;
  }
  sourceTime.value = getLocalizedParts(now, sourceZone.value || defaultZone).input;
  render();
}

function getSelectedInstant() {
  const parts = parseInputValue(sourceTime.value);
  if (!parts) return new Date();
  return zonedWallTimeToDate(parts, sourceZone.value || defaultZone);
}

function renderSource(instant) {
  const selected = sourceLabel();
  sourceOffset.textContent = formatOffset(getOffsetMinutes(instant, selected.zone));
  sourceTitle.textContent = labelFor(selected);
  sourceDate.textContent = getLocalizedParts(instant, selected.zone).date;
}

function renderTimeline(instant) {
  timeline.innerHTML = timelineZones
    .map((zone) => {
      const item = zones.find((entry) => entry.zone === zone);
      return `
        <div class="time-chip">
          <span>${escapeHtml(item.city[currentLanguage] || item.city.zh)}</span>
          <strong>${escapeHtml(getLocalizedParts(instant, zone).time)}</strong>
        </div>
      `;
    })
    .join("");
}

function renderCities(instant) {
  const baseOffset = getOffsetMinutes(instant, sourceZone.value);
  cityGrid.innerHTML = zones
    .map((item) => {
      const parts = getLocalizedParts(instant, item.zone);
      const offset = getOffsetMinutes(instant, item.zone);
      const diff = (offset - baseOffset) / 60;
      const delta = dayDelta(instant, instant, sourceZone.value, item.zone);
      const isSource = item.zone === sourceZone.value ? " is-source" : "";

      return `
        <article class="city-card${isSource}">
          <div class="city-head">
            <h2>${escapeHtml(labelFor(item))}</h2>
            <span class="badge">${escapeHtml(formatOffset(offset))}</span>
          </div>
          <p class="clock">${escapeHtml(parts.time)}</p>
          <div class="city-meta">
            <span>${escapeHtml(parts.date)}</span>
            <span>${escapeHtml(dayDeltaLabel(delta))}</span>
            <span>${escapeHtml(diffLabel(diff))}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function render() {
  const instant = getSelectedInstant();
  applyStaticText();
  renderZoneOptions();
  renderSource(instant);
  renderTimeline(instant);
  renderCities(instant);
}

async function initialize() {
  languageSelect.value = currentLanguage;
  const browserZone = ensureZone(defaultZone);
  defaultZone = browserZone || "Asia/Shanghai";
  renderZoneOptions();
  sourceZone.value = defaultZone;
  setNowForSource();

  const ipZone = await detectIpZone();
  const detectedZone = ensureZone(ipZone?.zone, ipZone?.city, ipZone?.country);
  if (!detectedZone) return;

  const instant = getSelectedInstant();
  defaultZone = detectedZone;
  renderZoneOptions();
  sourceZone.value = defaultZone;
  sourceTime.value = getLocalizedParts(instant, sourceZone.value).input;
  render();
}

sourceZone.addEventListener("change", () => {
  const instant = getSelectedInstant();
  sourceTime.value = getLocalizedParts(instant, sourceZone.value).input;
  render();
});

languageSelect.addEventListener("change", () => {
  currentLanguage = normalizeLanguage(languageSelect.value) || "zh";
  languageSelect.value = currentLanguage;
  safeSetLanguage(currentLanguage);
  render();
});

sourceTime.addEventListener("input", render);
nowBtn.addEventListener("click", setNowForSource);

initialize();
