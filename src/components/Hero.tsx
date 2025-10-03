"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LogoCloud from "./LogoCloud";

export default function Hero() {
  const personas: Record<string, { label: string; bullets: string[]; cta: string; href: string; }> = {
    fans: {
      label: "Fans",
      bullets: [
        "Collect scarce on‑chain fan cards (provable ownership)",
        "Unlock gated chat, live rooms & exclusive drops",
        "Earn status & governance weight by holding tiers"
      ],
      cta: "Explore Fan Cards",
      href: "/fan-cards"
    },
    athletes: {
      label: "Athletes",
      bullets: [
        "Bootstrap community & recurring digital demand",
        "Token-gate premium media & experiential auctions",
        "Own data transparency & direct fan alignment"
      ],
      cta: "For Athletes",
      href: "/about"
    },
    brands: {
      label: "Brands",
      bullets: [
        "Contextual placements inside high-intent micro hubs",
        "First-party engagement signals & attribution",
        "Tiered sponsorship & auction-driven inventory"
      ],
      cta: "Advertise",
      href: "/advertise"
    }
  };
  const personaMetrics: Record<string, [string,string][]> = {
    fans: [ ["+7x","Engagement"], ["93%","Retention"], ["<2m","Session"] ],
    athletes: [ ["+42%","Holder Uplift"], ["232m","Best PB"], ["7d","Avg. Sell"] ],
    brands: [ ["30d","Attribution"], ["1st","Party Data"], [">18","Signals"] ]
  };
  const activitySeed = [
    "Auction: Ava Johansson signed gloves bid +12%",
    "New Holder: Fan card minted (Football)",
    "Poll Closed: Feature priority ‘Live Match Rooms’",
    "Drop Scheduled: Tennis momentum analytics",
    "Sponsorship Slot Filled: Q3 Mid‑feed"
  ];
  const [active, setActive] = useState<keyof typeof personas>("fans");
  const [activityIndex, setActivityIndex] = useState(0);
  const current = personas[active];

  useEffect(() => { const id = setInterval(() => setActivityIndex(i => (i + 1) % activitySeed.length), 4200); return () => clearInterval(id); }, []);

  return (
    <header className="relative overflow-hidden section-pad pb-28">
      {/* Decorative grid + effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Base grid */}
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:80px_80px]" />
        {/* Fine secondary grid */}
        <div className="absolute inset-0 opacity-[0.17] mix-blend-overlay [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px]" />
        {/* Animated sweep beam */}
        <div className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)] before:absolute before:inset-y-0 before:left-0 before:w-1/2 before:bg-gradient-to-r before:from-brand-orange/0 before:via-brand-orange/15 before:to-transparent before:animate-[sweep_11s_linear_infinite]" />
        {/* Subtle noise */}
        <div className="absolute inset-0 opacity-[0.07] mix-blend-soft-light [background-image:url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 60 60\'><filter id=\'n\'><feTurbulence baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter><rect width=\'60\' height=\'60\' filter=\'url(%23n)\' opacity=\'0.35\'/></svg>')] [background-size:300px_300px]" />
      </div>

      {/* Ambient gradient fields (animated) */}
      <div className="pointer-events-none absolute -top-52 -left-64 w-[780px] h-[780px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(238,104,35,0.30),transparent_65%)] blur-3xl animate-[floatSlow_18s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute top-1/3 -right-52 w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(150,175,198,0.22),transparent_70%)] blur-3xl animate-[floatSlowAlt_22s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[1150px] h-[460px] bg-[radial-gradient(ellipse_at_50%_100%,rgba(238,104,35,0.25),transparent_70%)] blur-2xl animate-[pulseGlow_14s_ease-in-out_infinite]" />
      {/* Additional subtle orb */}
      <div className="pointer-events-none absolute top-1/4 left-1/3 w-[340px] h-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_60%)] blur-2xl animate-[floatDrift_26s_linear_infinite]" />

      {/* Announcement Bar */}
      <div className="relative mx-auto mb-10 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] uppercase tracking-wide text-white/70 backdrop-blur shadow-glow">
        <span className="mr-2 inline-flex h-2 w-2 animate-pulse rounded-full bg-brand-orange" />
        Pilot expanding – onboarding multi-sport cohorts now
        <Link href="/sports" className="ml-3 underline decoration-brand-orange/60 underline-offset-4 hover:text-white transition">View Sports</Link>
      </div>

      <div className="relative grid gap-20 lg:grid-cols-2">
        {/* Text / Value Column */}
        <div className="relative z-10 flex flex-col gap-10">
          <div className="space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05] tracking-tight">
              The connective <span className="relative inline-block"><span className="bg-gradient-to-r from-brand-orange via-white to-brand-orange bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(238,104,35,0.45)]">infrastructure</span><span className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-brand-orange/70 via-white/50 to-transparent" /></span><br className="hidden sm:block" /> for athletes, fans & aligned media.
            </h1>
            <p className="lead max-w-xl text-white/70">
              A unified market & media layer: scarcity-backed fan cards unlock premium communities, utility drops, auctions, governance signals & direct revenue alignment — all transparently on-chain.
            </p>
          </div>

          {/* Persona Switcher */}
          <div className="space-y-4">
            <div className="inline-flex overflow-hidden rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur text-sm">
              {Object.keys(personas).map(p => (
                <button
                  key={p}
                  onClick={() => setActive(p as keyof typeof personas)}
                  className={`relative rounded-full px-5 py-1.5 transition text-white/70 hover:text-white ${active === p ? "bg-brand-orange text-white shadow-glow" : ""}`}
                  aria-pressed={active === p}
                >
                  {personas[p as keyof typeof personas].label}
                </button>
              ))}
            </div>
            <ul className="grid gap-2 text-sm text-white/75">
              {current.bullets.map(b => (
                <li key={b} className="flex items-start gap-2 rounded-lg border border-white/5 bg-white/5 px-4 py-2 backdrop-blur-sm hover:border-white/15 transition">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-orange" /> {b}
                </li>
              ))}
            </ul>
            {/* Persona Micro Metrics */}
            <div className="flex gap-3 pt-1 text-[11px] text-white/50">
              {personaMetrics[active].map(([v,l]) => (
                <div key={l} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm flex flex-col items-center min-w-[80px]">
                  <span className="text-white font-semibold leading-none text-sm">{v}</span>
                  <span className="mt-0.5 tracking-wide">{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href={current.href} className="btn-primary shadow-glow min-w-[160px] text-center">{current.cta}</Link>
            <Link href="/market" className="btn-ghost">Market</Link>
            <Link href="/fan-cards" className="btn-ghost">Fan Cards</Link>
            <Link href="/advertise" className="btn-ghost">Brands</Link>
          </div>

          {/* KPI Band */}
          <div className="flex flex-wrap gap-10 pt-6 text-xs text-white/60">
            {[
              ["1.2K", "Pilot Holders"],
              ["93%", "Retention"],
              ["5.9K", "30d Messages"],
              ["28", "Queued Sports"],
              ["<2m", "Avg. Session"],
            ].map(([v,l]) => (
              <div key={l} className="flex flex-col">
                <span className="text-white font-semibold text-lg leading-none">{v}</span>
                <span className="mt-1 tracking-wide">{l}</span>
              </div>
            ))}
          </div>

          {/* Waitlist Form */}
          <form action="#" className="mt-4 flex w-full max-w-lg flex-col gap-3 sm:flex-row" onSubmit={e => e.preventDefault()}>
            <input
              aria-label="Email"
              type="email"
              required
              placeholder="Join early access waitlist"
              className="flex-1 rounded-xl border border-white/10 bg-surface-800/70 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-brand-orange/60 focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
            />
            <button type="submit" className="btn-primary shadow-glow w-full sm:w-auto">Notify Me</button>
          </form>
          <p className="text-[11px] text-white/40">SOC2-ready architecture • On-chain auditability • Compliant payout flows</p>
        </div>

        {/* Visual / Platform Mock Column */}
        <div className="relative z-10">
          <div className="relative group mx-auto w-full max-w-md lg:ml-auto">
            <div className="absolute -inset-1 rounded-[2.1rem] bg-gradient-to-br from-brand-orange/50 via-white/10 to-transparent opacity-70 blur-lg transition group-hover:opacity-95" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface-800/80 p-3 backdrop-blur shadow-glow">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl relative">
                <img
                  src="/hero-mock.jpg"
                  alt="Platform multi-sport preview"
                  className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
                  loading="eager"
                  decoding="async"
                />
                {/* Floating micro cards */}
                <div className="absolute top-4 right-4 flex w-44 flex-col gap-3">
                  {[
                    ["Fan Card Drop", "bg-brand-orange/80"],
                    ["Auction Live", "bg-white/15"],
                    ["Poll Result", "bg-white/15"],
                  ].map(([l,c]) => (
                    <div key={l} className={`rounded-xl border border-white/10 px-3 py-2 text-[11px] text-white/80 backdrop-blur-sm shadow ${c}`}>{l}</div>
                  ))}
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <div className="badge bg-brand-orange/80 text-white shadow-glow">Pilot</div>
                  <div className="badge bg-white/15 text-white/80">Live</div>
                </div>
              </div>
              {/* Secondary stat strip below visual */}
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-[11px] text-white/60">
                {[
                  ["42%", "Holder Uplift"],
                  ["18h", "Avg. Time-to-Sell"],
                  ["7x", "Engagement vs. Social"],
                ].map(([v,l]) => (
                  <div key={l} className="rounded-lg border border-white/5 bg-white/5 px-2 py-2 backdrop-blur-sm">
                    <span className="block text-sm font-semibold text-white">{v}</span>
                    {l}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-14 opacity-80"><LogoCloud /></div>
        </div>
      </div>

      {/* Live Activity Ticker */}
      <div className="relative mt-6 w-full max-w-lg" aria-live="polite">
        <div className="h-11 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur flex items-stretch pl-3 pr-4">
          <div className="flex items-center mr-3">
            <span className="h-2 w-2 rounded-full bg-brand-orange animate-ping" />
          </div>
          <div className="relative flex-1">
            {activitySeed.map((item, i) => (
              <div
                key={item}
                className={`absolute inset-0 flex items-center text-[12px] leading-tight transition duration-700 ease-out ${i === activityIndex ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <style jsx>{`
        @keyframes fadeSlideUp { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
        @keyframes sweep { 0% { transform:translateX(-60%); } 100% { transform:translateX(120%); } }
        @keyframes floatSlow { 0%,100% { transform:translate3d(0,0,0); } 50% { transform:translate3d(40px,30px,0); } }
        @keyframes floatSlowAlt { 0%,100% { transform:translate3d(0,0,0); } 50% { transform:translate3d(-30px,-40px,0); } }
        @keyframes pulseGlow { 0%,100% { opacity:0.55; filter:blur(32px); } 50% { opacity:0.85; filter:blur(40px); } }
        @keyframes floatDrift { 0% { transform:translate(-50%,-50%) scale(0.9) rotate(0deg); } 50% { transform:translate(-47%,-53%) scale(1.05) rotate(12deg); } 100% { transform:translate(-50%,-50%) scale(0.9) rotate(0deg); } }
      `}</style>
    </header>
  );
}
