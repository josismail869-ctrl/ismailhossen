export const SITE_NAME = "4D Results";
export const SITE_TAGLINE = "Malaysia & Singapore";
export const SITE_DESCRIPTION =
  "Daily 4D results coverage, free predictions and VIP membership for Malaysia & Singapore games.";

export const SOCIALS = {
  facebookPage: "https://www.facebook.com/malaysiasingapore4d6d/",
  facebookLabels: ["Probashi Voice Malaysia Singapore", "fb4D 1st Price Calculation"],
  instagramHandle: "@4d6dmktshe",
  instagramUrl: "https://www.instagram.com/4d6dmktshe/",
  telegramNumber: "+8801706559143",
  telegramUrl: "https://t.me/+8801706559143",
  whatsappNumber: "+8801863211541",
  whatsappUrl: "https://wa.me/8801863211541",
} as const;

export const PAYMENT_BENEFICIARY = "MD EJAN CHOWDHURY";

export type PaymentMethod = {
  id: string;
  name: string;
  account: string;
  note: string;
};

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "bkash",
    name: "bKash",
    account: "01863211541",
    note: "Send Money (personal)",
  },
  {
    id: "nagad",
    name: "Nagad",
    account: "01863211541",
    note: "Send Money (personal)",
  },
  {
    id: "mybank",
    name: "MyBank",
    account: "514012122490",
    note: "Bank transfer",
  },
];

export const AGE_NOTICE =
  "18+ only. All content is informational and for entertainment purposes. We are not affiliated with any lottery operator and we do not sell lottery tickets or accept bets. Play responsibly.";
