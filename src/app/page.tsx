"use client";
import { useState, useMemo } from "react";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import CTA from "@/components/CTA";
import AthleteCard from "@/components/AthleteCard";

export default function Page() {
  const athletes = [
    { slug: "ava-johansson", name: "Ava Johansson", sport: "Ski Jumping", stat: "World Cup PB 22.31", image: "/hakimi.webp", tier: "Gold", status: 'live' as const, floor: "$142", holders: 380, supply: 500 },
    { slug: "leo-nilsson", name: "Leo Nilsson", sport: "Football", stat: "30 goals last season", image: "/KROOS.webp", tier: "Elite", status: 'live' as const, floor: "$88", holders: 910, supply: 1200 },
    { slug: "maya-eriksen", name: "Maya Eriksen", sport: "Tennis", stat: "ITF Junior #8", image: "/Modric.webp", tier: "Rising", status: 'upcoming' as const, floor: "$—", holders: 0, supply: 750 },
  ];

  const sports = ["All", ...Array.from(new Set(athletes.map(a => a.sport)))];
  const [filter, setFilter] = useState("All");
  const filteredAthletes = useMemo(() => (
    filter === "All" ? athletes : athletes.filter(a => a.sport === filter)
  ), [filter, athletes]);

  const faqs = [
    { q: "What is a fan card?", a: "Scarce on-chain access token unlocking communities, media, auctions & governance weight." },
    { q: "How do athletes benefit?", a: "Direct aligned demand curve, recurring community revenue & granular engagement telemetry." },
    { q: "Is payment secure?", a: "Yes – audited contracts & compliant provider stack; transparent chain settlement." },
  ];

  return (
    <div className="space-y-24">
      <Hero />
      <LogoCloud />

      {/* Live Snapshot */}
      <section className="section-pad">
        <div className="grid gap-6 sm:grid-cols-5">
          {[
            ["1.2K", "Pilot Holders"],
            ["93%", "Retention"],
            ["5.9K", "30d Messages"],
            ["28", "Queued Sports"],
            ["<2m", "Avg Session"],
          ].map(([v,l]) => (
            <div key={l} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm text-center shadow-sm">
              <span className="block text-xl font-semibold text-white leading-none">{v}</span>
              <span className="mt-2 block text-[11px] tracking-wide text-white/50">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Athletes with Filter */}
      <section className="section-pad space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="h2">Featured Athletes</h2>
            <p className="text-sm text-white/50 max-w-md mt-2">Scarce fan cards drive direct alignment & measurable engagement signal strength.</p>
          </div>
          <div className="flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur text-xs">
            {sports.map(s => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-4 py-1.5 rounded-full transition ${filter === s ? 'bg-brand-orange text-white shadow-glow' : 'text-white/60 hover:text-white'}`}
              >{s}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAthletes.map(a => (
            <AthleteCard key={a.slug} {...a} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="section-pad space-y-12">
        <div className="max-w-2xl">
          <h2 className="h2">How It Works</h2>
          <p className="text-sm text-white/60 mt-3">A unified transaction + media flow compressing fan acquisition, engagement & retention.</p>
        </div>
        <ol className="grid gap-8 md:grid-cols-4 text-sm">
          {[
            ["1", "Acquire Card", "Fans mint or buy scarce fan cards across supported sports."],
            ["2", "Unlock Access", "Gated chat, media streams, experiential & auction layers open in real time."],
            ["3", "Signal & Govern", "Holding tiers amplify votes, priorities & feature governance weight."],
            ["4", "Value Flywheel", "Athlete content + community alignment compounds network demand."],
          ].map(([n,t,d]) => (
            <li key={t} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm flex flex-col gap-3">
              <span className="text-[11px] font-medium tracking-wider text-white/40">STEP {n}</span>
              <h3 className="font-semibold text-white leading-snug">{t}</h3>
              <p className="text-white/55 text-xs leading-relaxed">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Platform Layers */}
      <section className="section-pad space-y-10">
        <div className="max-w-2xl">
          <h2 className="h2">Platform Layers</h2>
          <p className="text-sm text-white/60 mt-3">Composable modules enabling multi-sport scale-out with granular telemetry.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Access & Identity", "Wallet auth + card tiers gate realtime rooms, content surfaces & drops."],
            ["Engagement Core", "Chat, feed, auctions, polls & experiential claims instrumented on-chain."],
            ["Data & Monetization", "Attribution rails, sponsorship & inventory auctions exposing demand curves."],
          ].map(([t,d]) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm flex flex-col gap-3">
              <h3 className="font-semibold text-white leading-snug">{t}</h3>
              <p className="text-xs text-white/55 leading-relaxed">{d}</p>
              <div className="mt-auto h-1 w-16 rounded-full bg-gradient-to-r from-brand-orange to-white" />
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap Snapshot */}
      <section className="section-pad space-y-10">
        <div className="max-w-2xl">
          <h2 className="h2">Roadmap Snapshot</h2>
          <p className="text-sm text-white/60 mt-3">Iterative scale: controlled cohort onboarding → multi-sport catalog.</p>
        </div>
        <div className="relative pl-6 before:absolute before:top-0 before:bottom-0 before:left-2 before:w-px before:bg-gradient-to-b from-brand-orange/60 via-white/15 to-transparent">
          {[
            ["Q1", "Pilot Fan Card & gated chat live"],
            ["Q2", "Auctions, polls & sponsorship inventory"],
            ["Q3", "Data attribution API + athlete analytics"],
            ["Q4", "Multi-sport expansion & governance weight tuning"],
          ].map(([q,d],i,arr) => (
            <div key={q} className="relative pl-6 pb-8 last:pb-0">
              <div className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-orange shadow-glow" />
              <h3 className="font-medium text-white text-sm">{q}</h3>
              <p className="text-xs text-white/55 mt-1 max-w-md">{d}</p>
              {i !== arr.length -1 && <div className="absolute left-0 top-4 -translate-x-1/2 h-full w-px bg-white/10" />}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-pad space-y-10">
        <div className="max-w-2xl">
          <h2 className="h2">FAQ</h2>
          <p className="text-sm text-white/60 mt-3">Key points investors, athletes & early adopters ask first.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {faqs.map(f => (
            <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-white leading-snug">{f.q}</h3>
              <p className="text-xs text-white/55 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
