export const APP_NAME = "Kimi Agent Membership";
export const APP_SHORT_NAME = "Kimi";
export const APP_TAGLINE =
  "A thoughtful workspace for agentic coding and knowledge work.";

export type MembershipTier = {
  id: string;
  name: string;
  priceMonthly: number;
  tagline: string;
  features: string[];
  highlighted: boolean;
  cta: string;
};

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: "reader",
    name: "Reader",
    priceMonthly: 0,
    tagline: "For quiet exploration",
    features: [
      "3 agent sessions per month",
      "20 knowledge entries",
      "7-day session history",
      "Community support",
    ],
    highlighted: false,
    cta: "Start free",
  },
  {
    id: "maker",
    name: "Maker",
    priceMonthly: 24,
    tagline: "For people who build every day",
    features: [
      "Unlimited agent sessions",
      "500 knowledge entries",
      "Priority agent queue",
      "Review and approve diffs",
      "90-day session history",
    ],
    highlighted: true,
    cta: "Become a Maker",
  },
  {
    id: "studio",
    name: "Studio",
    priceMonthly: 79,
    tagline: "For teams and heavy workflows",
    features: [
      "Everything in Maker",
      "5 member seats",
      "Shared collections",
      "API access",
      "Dedicated support",
    ],
    highlighted: false,
    cta: "Talk to us",
  },
];
