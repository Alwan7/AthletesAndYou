import SportClient from "./SportClient";

// Sport metadata & sample athletes
const sportMeta: Record<string, {
  name: string;
  tagline: string;
  description: string;
  kpis: [string,string][];
  pipeline: string[];
}> = {
  "ski-jumping": {
    name: "Ski Jumping",
    tagline: "Precision, aerodynamics & altitude momentum.",
    description: "Early adopter cohort validating vertical fan engagement depth, telemetry-driven content loops & scarcity dynamics.",
    kpis: [["232m","Pilot PB"],["4.8x","Holder Engagement"],["92%","Retention"],["<90s","Avg. Time-to-Card"]],
    pipeline: ["Additional Nordic athletes","Live wind telemetry overlay","Altitude-based challenge drops"]
  },
  "football": {
    name: "Football",
    tagline: "Global scale, high-frequency signal velocity.",
    description: "High-volume match cadence produces rich ownership → performance narrative loops & sponsorship auction surfaces.",
    kpis: [["30","Goals Logged"],["7.1x","Engagement vs Social"],["1.4K","Holder Waitlist"],["12","Queued Athletes"]],
    pipeline: ["Card velocity analytics","Match-event instant polls","Geo fan clustering"]
  },
  "tennis": {
    name: "Tennis",
    tagline: "Individual performance arcs & surface narratives.",
    description: "Tour-level scheduling creates episodic demand windows; governance weighting tunes content & access sequencing.",
    kpis: [["#8","Junior Rank"],["5x","Chat Session Depth"],["640","Waitlist"],["Q3","Tiered Auction"],],
    pipeline: ["Surface-specific card variants","In‑match momentum heatmaps","Rivalry composite stats"]
  },
  basketball: {
    name: "Basketball",
    tagline: "Possession density → high telemetry resolution.",
    description: "Inbound pipeline preparing real-time possession-linked utility experiments & micro-moment auctions.",
    kpis: [["Q2","Pilot Target"],[">18","Scouted Athletes"],["3","Data Providers"],["Live","Telemetry Feeds"],],
    pipeline: ["Shot arc overlays","Dynamic card trait boosts","Possession event auctions"]
  }
};

const sportAthletes: Record<string, any[]> = {
  'ski-jumping': [
    {
      slug: 'ava-johansson',
      name: 'Achraf Hakimi',
      sport: 'Ski Jumping',
      stat: 'HS140 PB 232m',
      image: '/hakimi.webp',
      tier: 'Gold',
      status: 'live' as const,
      floor: '$142',
      holders: 380,
      supply: 500,
    },
  ],
  football: [
    {
      slug: 'leo-nilsson',
      name: 'Toni Kroos',
      sport: 'Football',
      stat: '30 goals last season',
      image: '/KROOS.webp',
      tier: 'Elite',
      status: 'live' as const,
      floor: '$88',
      holders: 910,
      supply: 1200,
    },
  ],
  tennis: [
    {
      slug: 'maya-eriksen',
      name: 'Luka Modric',
      sport: 'Tennis',
      stat: 'ITF Junior #8',
      image: '/Modric.webp',
      tier: 'Rising',
      status: 'upcoming' as const,
      floor: '$—',
      holders: 0,
      supply: 750,
    },
  ],
  basketball: [],
}

export default async function SportPage({ params }: { params: Promise<{ sport: string }>}) {
  const { sport } = await params;
  const meta = sportMeta[sport];
  const roster = sportAthletes[sport] ?? [];
  return <SportClient sportKey={sport} meta={meta} roster={roster} />;
}
