"use client";
import { useState, useMemo } from "react";
import AthleteCard from "@/components/AthleteCard";

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
      name: 'Ava Johansson',
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
      name: 'Leo Nilsson',
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
      name: 'Maya Eriksen',
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
  const key = sport;
  const meta = sportMeta[key];
  const roster = sportAthletes[key] ?? [];

  const tiers = ["All", ...Array.from(new Set(roster.map(a => a.tier).filter(Boolean)))];
  const statuses = ["All","live","upcoming","closed"] as const;

  const [tierFilter, setTierFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState<(typeof statuses)[number]>("All");

  const filtered = useMemo(() => roster.filter(a => (
    (tierFilter === "All" || a.tier === tierFilter) &&
    (statusFilter === "All" || a.status === statusFilter)
  )), [roster, tierFilter, statusFilter]);

  return (
    <div className="space-y-24 section-pad">
      {/* Header / Narrative */}
      <header className="space-y-8">
        <div className="space-y-5 relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] uppercase tracking-wide text-white/60 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" /> {meta?.name || key.replace('-', ' ')} Cohort
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-white">
            {meta?.name || key.replace('-', ' ')} <span className="bg-gradient-to-r from-brand-orange to-white bg-clip-text text-transparent">Performance Layer</span>
          </h1>
          <p className="max-w-2xl text-white/70 text-sm sm:text-base leading-relaxed">
            {meta?.description || 'Expansion pathway under evaluation. Join waitlist to influence onboarding priority & feature tuning.'}
          </p>
        </div>

        {meta && (
          <div className="grid gap-4 sm:grid-cols-4">
            {meta.kpis.map(([v,l]) => (
              <div key={l} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm text-center">
                <span className="block text-xl font-semibold text-white leading-none">{v}</span>
                <span className="mt-2 block text-[11px] tracking-wide text-white/50">{l}</span>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Filters + Roster */}
      <section className="space-y-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
          <div className="space-y-2">
            <h2 className="h2 text-white">Roster</h2>
            <p className="text-sm text-white/50 max-w-lg">Filtered view of active & queued athlete card cohorts.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur text-[11px]">
              {tiers.map(t => (
                <button key={t} onClick={() => setTierFilter(t)} className={`px-4 py-1.5 rounded-full transition ${tierFilter === t ? 'bg-brand-orange text-white shadow-glow' : 'text-white/60 hover:text-white'}`}>{t}</button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur text-[11px]">
              {statuses.map(s => (
                <button key={s} onClick={() => setStatusFilter(s)} className={`px-4 py-1.5 rounded-full transition capitalize ${statusFilter === s ? 'bg-white/15 text-white shadow-inner' : 'text-white/60 hover:text-white'}`}>{s}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length ? filtered.map(a => (
            <AthleteCard key={a.slug} {...a} />
          )) : (
            <div className="col-span-full rounded-2xl border border-dashed border-white/15 bg-white/5 p-10 text-center backdrop-blur-sm">
              <p className="text-sm text-white/60">No athletes live yet for this sport. <span className="text-white">Join waitlist to influence onboarding.</span></p>
              <form onSubmit={e => e.preventDefault()} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" required placeholder="Email" className="flex-1 rounded-xl border border-white/10 bg-surface-800/70 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-brand-orange/60 focus:outline-none focus:ring-2 focus:ring-brand-orange/30" />
                <button className="btn-primary shadow-glow" type="submit">Notify Me</button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Pipeline */}
      {meta && (
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="h2">Pipeline & Experiments</h2>
              <p className="text-sm text-white/50">Upcoming feature experiments unique to {meta.name} vertical.</p>
            </div>
          </div>
          <ul className="grid gap-5 md:grid-cols-3 text-sm">
            {meta.pipeline.map(item => (
              <li key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm flex flex-col gap-3">
                <h3 className="font-medium text-white leading-snug">{item}</h3>
                <p className="text-xs text-white/55 leading-relaxed">Prioritized via holder signal strength & cross-sport leverage scoring.</p>
                <div className="mt-auto h-1 w-14 rounded-full bg-gradient-to-r from-brand-orange to-white" />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Governance / Alignment Note */}
      <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-10 backdrop-blur-sm">
        <h2 className="h2 text-lg sm:text-2xl">Alignment Signals</h2>
        <div className="grid gap-6 sm:grid-cols-3 text-sm">
          {[
            ["Weighted Polls","Tier-adjusted governance weighting calibrates roadmap sequencing."],
            ["Engagement Heat","Real-time cohort depth informs content surface prioritization."],
            ["Auction Velocity","Price discovery curves adjust scarcity refresh intervals."],
          ].map(([t,d]) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm flex flex-col gap-2">
              <h3 className="font-semibold text-white leading-snug">{t}</h3>
              <p className="text-xs text-white/55 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
