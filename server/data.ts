export type Game = {
  key: string;
  name: string;
  country: "Malaysia" | "Singapore";
  drawDays: string;
  accent: "gold" | "red";
};

export const games: Game[] = [
  { key: "sports-toto", name: "Sports Toto", country: "Malaysia", drawDays: "Wed · Sat · Sun", accent: "red" },
  { key: "magnum", name: "Magnum 4D", country: "Malaysia", drawDays: "Wed · Sat · Sun", accent: "gold" },
  { key: "damacai", name: "Da Ma Cai", country: "Malaysia", drawDays: "Wed · Sat · Sun", accent: "red" },
  { key: "singapore-pools", name: "Singapore Pools", country: "Singapore", drawDays: "Wed · Sat · Sun", accent: "gold" },
  { key: "stc", name: "STC 4D", country: "Malaysia", drawDays: "Wed · Sat · Sun", accent: "gold" },
  { key: "88-group", name: "88 Group", country: "Malaysia", drawDays: "Daily specials", accent: "red" },
];

export type DrawResult = {
  gameKey: string;
  drawDate: string;
  first: string;
  second: string;
  third: string;
  special: string[];
  consolation: string[];
};

export const latestResults: DrawResult[] = [
  {
    gameKey: "sports-toto",
    drawDate: "2026-09-27",
    first: "5410",
    second: "2450",
    third: "8154",
    special: ["0932", "7718", "3356", "6204", "1587", "9041", "4470", "2863", "5519", "7305"],
    consolation: ["1188", "4026", "9653", "2371", "6840", "0517", "8294", "3762", "5908", "7145"],
  },
  {
    gameKey: "magnum",
    drawDate: "2026-09-27",
    first: "7723",
    second: "1089",
    third: "4561",
    special: ["2210", "8834", "0976", "5542", "7198", "3405", "9667", "4123", "6850", "2574"],
    consolation: ["0391", "5817", "7246", "1960", "8632", "4508", "3075", "9421", "6754", "2189"],
  },
  {
    gameKey: "damacai",
    drawDate: "2026-09-27",
    first: "3098",
    second: "6617",
    third: "9245",
    special: ["1874", "5520", "7963", "0411", "4387", "8702", "2156", "6690", "3849", "9075"],
    consolation: ["7261", "1534", "4908", "8857", "0623", "5196", "3470", "9912", "2348", "6085"],
  },
  {
    gameKey: "singapore-pools",
    drawDate: "2026-09-27",
    first: "8862",
    second: "1734",
    third: "5509",
    special: ["3147", "7095", "9621", "4268", "1850", "6573", "0416", "8934", "2709", "5382"],
    consolation: ["4607", "9251", "0873", "6128", "3540", "7916", "1485", "5062", "8397", "2641"],
  },
  {
    gameKey: "stc",
    drawDate: "2026-09-26",
    first: "1274",
    second: "8950",
    third: "4637",
    special: ["7012", "3568", "9841", "2406", "6175", "8529", "0953", "4780", "3217", "7694"],
    consolation: ["5830", "2146", "9407", "3971", "6658", "1204", "8563", "4092", "7315", "2879"],
  },
  {
    gameKey: "88-group",
    drawDate: "2026-09-26",
    first: "6503",
    second: "3827",
    third: "7194",
    special: ["0468", "5912", "8370", "2645", "4081", "9736", "1259", "6804", "3527", "7941"],
    consolation: ["2190", "8654", "4317", "0862", "7528", "3095", "6471", "1843", "9206", "5759"],
  },
];

export type Prediction = {
  gameKey: string;
  gameName: string;
  forDate: string;
  numbers: string[];
  note: string;
};

export const freePredictions: Prediction[] = [
  {
    gameKey: "grand-dragon-9lotto",
    gameName: "Grand Dragon & 9 Lotto",
    forDate: "2026-09-30",
    numbers: ["5410", "2450", "8154"],
    note: "Informational only — predictions are never a guarantee.",
  },
  {
    gameKey: "sports-toto",
    gameName: "Sports Toto",
    forDate: "2026-09-30",
    numbers: ["7723", "1089", "4561"],
    note: "Informational only — predictions are never a guarantee.",
  },
  {
    gameKey: "singapore-pools",
    gameName: "Singapore Pools",
    forDate: "2026-10-01",
    numbers: ["3098", "6617", "9245"],
    note: "Informational only — predictions are never a guarantee.",
  },
];

export const vipPredictionPreview = {
  forDate: "2026-09-30",
  gamesCovered: 6,
  setsProvided: 12,
  perks: [
    "12 VIP number sets across all six games",
    "1st prize calculation breakdown",
    "Early access before public posts",
    "Direct helpline support",
  ],
};

export type DailyPost = {
  id: number;
  gameKey: string;
  gameName: string;
  postDate: string;
  title: string;
  content: string;
  numbers: string[];
  visibility: "free" | "vip";
};

export const dailyPosts: DailyPost[] = [
  {
    id: 1,
    gameKey: "grand-dragon-9lotto",
    gameName: "Grand Dragon & 9 Lotto",
    postDate: "2026-09-29",
    title: "Tomorrow Prediction — Grand Dragon & 9 Lotto",
    content:
      "Our free pick set for the upcoming draw. These numbers are shared for informational purposes only and carry no guarantee of any outcome.",
    numbers: ["5410", "2450", "8154"],
    visibility: "free",
  },
  {
    id: 2,
    gameKey: "magnum",
    gameName: "Magnum 4D",
    postDate: "2026-09-29",
    title: "Magnum mid-week watch list",
    content:
      "A free watch list built from recent draw frequency. Always treat predictions as entertainment, not certainty.",
    numbers: ["7723", "1089"],
    visibility: "free",
  },
  {
    id: 3,
    gameKey: "singapore-pools",
    gameName: "Singapore Pools",
    postDate: "2026-09-28",
    title: "Singapore Pools weekend briefing",
    content:
      "VIP members received the full 12-set briefing. This public summary shares two highlighted sets from the analysis.",
    numbers: ["8862", "1734"],
    visibility: "free",
  },
  {
    id: 4,
    gameKey: "sports-toto",
    gameName: "Sports Toto",
    postDate: "2026-09-28",
    title: "VIP full board — Sports Toto",
    content:
      "The complete VIP board with 1st prize calculation notes is available to active VIP members.",
    numbers: [],
    visibility: "vip",
  },
];

export type Plan = {
  id: string;
  name: string;
  priceMyr: number;
  period: string;
  tagline: string;
  features: string[];
  highlighted: boolean;
};

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    priceMyr: 0,
    period: "forever",
    tagline: "Daily results and public picks",
    features: [
      "All latest draw results",
      "Free daily predictions",
      "Public daily posts",
      "Community helpline",
    ],
    highlighted: false,
  },
  {
    id: "silver",
    name: "Silver",
    priceMyr: 30,
    period: "per month",
    tagline: "Extra sets every draw day",
    features: [
      "Everything in Free",
      "6 extra prediction sets",
      "Draw-day reminders",
      "Priority helpline",
    ],
    highlighted: false,
  },
  {
    id: "gold",
    name: "Gold",
    priceMyr: 60,
    period: "per month",
    tagline: "Serious coverage for regulars",
    features: [
      "Everything in Silver",
      "VIP daily posts access",
      "1st prize calculation notes",
      "Early post access",
    ],
    highlighted: true,
  },
  {
    id: "vip",
    name: "VIP",
    priceMyr: 120,
    period: "per month",
    tagline: "The full board, every draw",
    features: [
      "Everything in Gold",
      "12 VIP sets across all games",
      "Direct 1-on-1 helpline",
      "Custom request reviews",
    ],
    highlighted: false,
  },
];
