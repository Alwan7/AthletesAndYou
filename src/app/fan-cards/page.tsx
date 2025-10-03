"use client";
import { useState, useEffect } from 'react';

export default function FanCardsPage() {
  const personas = {
    fan: {
      label: 'Fan Perspective',
      steps: [
        { n: 1, t: 'Discover', d: 'Find sports & athletes you already follow.' },
        { n: 2, t: 'Acquire', d: 'Mint or buy a scarce tier card (provable ownership).' },
        { n: 3, t: 'Unlock', d: 'Enter gated chat, media & experiential queues.' },
        { n: 4, t: 'Engage', d: 'Vote, bid, collect & shape feature priority.' },
      ],
    },
    athlete: {
      label: 'Athlete Perspective',
      steps: [
        { n: 1, t: 'Onboard', d: 'Define tiers, supply & utility roadmap.' },
        { n: 2, t: 'Launch', d: 'Primary drop establishes holder base.' },
        { n: 3, t: 'Activate', d: 'Release content, polls & experiential drops.' },
        { n: 4, t: 'Iterate', d: 'Telemetry tunes governance & future utility.' },
      ],
    },
    brand: {
      label: 'Brand Perspective',
      steps: [
        { n: 1, t: 'Assess', d: 'Review cohort depth & engagement metrics.' },
        { n: 2, t: 'Align', d: 'Select contextual surfaces & sponsorship tiers.' },
        { n: 3, t: 'Activate', d: 'Deploy placements & measure signal lift.' },
        { n: 4, t: 'Optimize', d: 'Iterate via attribution & auction velocity.' },
      ],
    }
  } as const;
  const [persona, setPersona] = useState<keyof typeof personas>('fan');

  const steps = personas[persona].steps;

  const tiers = [
    { name: 'Core', supply: 1000, util: ['Community feed', 'Monthly AMA', 'Basic polls'] },
    { name: 'Plus', supply: 250, util: ['All Core', 'Early drops', 'Priority Q&A', '2x poll weight'] },
    { name: 'Elite', supply: 25, util: ['All Plus', 'Private huddles', 'Signed item guarantee', '5x poll weight'] },
  ];

  const activities = [
    { t: 'Bid Placed', a: 'Ski Jumping Elite #07', v: '0.42', ago: '2m' },
    { t: 'Trade Executed', a: 'Football Plus #221', v: '0.18', ago: '9m' },
    { t: 'New Listing', a: 'Tennis Core #881', v: '0.05', ago: '14m' },
    { t: 'Bid Placed', a: 'Basketball Plus #040', v: '0.20', ago: '26m' },
  ];

  const faqs = [
    { q: 'Are fan cards securities?', a: 'No. They are access & utility passes designed for community engagement and gated content.' },
    { q: 'Can I resell?', a: 'Yes, subject to platform rules. Secondary activity is enabled to increase liquidity & retention.' },
    { q: 'What determines value?', a: 'Scarcity, athlete momentum, community activity and future utility releases.' },
  ];

  const scarcity = [
    { tier: 'Core', pct: 1000, color: 'bg-white/15' },
    { tier: 'Plus', pct: 250, color: 'bg-brand-orange/60' },
    { tier: 'Elite', pct: 25, color: 'bg-brand-orange' },
  ];

  // Activity ticker
  const [tick, setTick] = useState(0);
  useEffect(() => { const id = setInterval(() => setTick(i => (i + 1) % activities.length), 4200); return () => clearInterval(id); }, [activities.length]);

  const supplyTotal = scarcity.reduce((s, x) => s + x.pct, 0);

  return (
    <div className="section-pad space-y-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-40 w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(238,104,35,0.22),transparent_65%)] blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(150,175,198,0.18),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1100px] h-[420px] bg-[radial-gradient(ellipse_at_50%_100%,rgba(238,104,35,0.25),transparent_70%)] blur-2xl" />
      </div>

      {/* Intro */}
      <header className="relative grid lg:grid-cols-2 gap-12 items-start">
        {/* decorative gradients preserved */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 badge mb-4 bg-brand-orange/20 text-white/80">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" /> Fan Cards
          </div>
          <h1 className="h1 tracking-tight">Invest in athlete access & future upside</h1>
          <p className="lead mt-4 text-white/70 max-w-xl">Support athlete development while unlocking gated digital experiences, governance influence and curated drops. Scarce fan cards align long‑term engagement with athlete progress.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/market" className="btn-primary shadow-glow">Explore Market</a>
            <a href="/about" className="btn-ghost">Platform Model</a>
            <a href="#utility" className="btn-ghost">Utility Layers</a>
          </div>
          <p className="text-white/40 text-[11px] mt-5">Demo data — not investment advice.</p>

          {/* Live activity ticker */}
          <div className="mt-6 relative w-full max-w-md" aria-live="polite">
            <div className="h-11 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur flex items-stretch pl-3 pr-4">
              <div className="flex items-center mr-3"><span className="h-2 w-2 rounded-full bg-brand-orange animate-ping" /></div>
              <div className="relative flex-1">
                {activities.map((item, i) => (
                  <div key={item.a+item.ago} className={`absolute inset-0 flex items-center text-[12px] leading-tight transition duration-700 ease-out ${i === tick ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                    {item.t}: <span className="ml-1 text-white/60">{item.a}</span> <span className="ml-2 text-white/35">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Preview Tiles (unchanged) */}
        <div className="relative z-10 grid grid-cols-2 gap-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="group relative h-40 sm:h-48 panel overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(238,104,35,0.35),transparent_55%)] transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl group-hover:border-brand-orange/50 transition-colors" />
              <div className="absolute bottom-3 left-3 flex flex-col gap-1">
                <div className="badge group-hover:bg-brand-orange group-hover:text-white transition">Preview</div>
                <span className="text-[10px] tracking-wide text-white/50 group-hover:text-white/70">Card Mock #{i}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </header>

      {/* Persona Toggle + Steps */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
          <div>
            <h2 className="h2">Lifecycle ({personas[persona].label})</h2>
            <p className="text-sm text-white/60 max-w-xl">End‑to‑end journey showing how value accrues & recirculates per stakeholder.</p>
          </div>
          <div className="flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur text-[11px]">
            {Object.keys(personas).map(p => (
              <button key={p} onClick={()=>setPersona(p as keyof typeof personas)} className={`px-4 py-1.5 rounded-full transition ${persona===p?'bg-brand-orange text-white shadow-glow':'text-white/60 hover:text-white'}`}>{personas[p as keyof typeof personas].label.split(' ')[0]}</button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          {steps.map(s => (
            <div key={s.n} className="card p-5">
              <div className="text-xs text-white/40">STEP {s.n}</div>
              <h3 className="font-semibold text-white mt-1 mb-1 tracking-tight">{s.t}</h3>
              <p className="text-white/60 text-xs leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scarcity Bar */}
      <section aria-labelledby="scarcity" className="space-y-6">
        <h2 id="scarcity" className="h2">Scarcity Structure</h2>
        <p className="text-white/60 text-sm max-w-2xl">Tiered supply concentrates deeper utility & governance weight while preserving broad community accessibility.</p>
        <div className="panel p-5 space-y-4">
          <div className="flex items-end gap-3">
            {scarcity.map(s => (
              <div key={s.tier} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full h-28 bg-white/5 rounded-lg overflow-hidden flex items-end">
                  <div className={`${s.color} w-full`} style={{height: `${Math.max(8, (s.pct/1000)*100)}%`}} />
                </div>
                <span className="text-[11px] uppercase tracking-wide text-white/50">{s.tier}</span>
                <span className="text-[10px] text-white/40">{s.pct} supply</span>
              </div>
            ))}
          </div>
          <div className="text-[11px] text-white/40">Total Supply {supplyTotal} • Illustrative distribution; future sports may alter ratios.</div>
          {/* Economics Snapshot */}
          <div className="grid sm:grid-cols-3 gap-4 text-center text-[11px]">
            {Object.entries({
              'Holder Concentration':'~12%',
              'Avg. Turnover':'7d',
              'Gov. Weight Delta':'5x',
            } as const).map(([l,v]) => (
              <div key={l} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm flex flex-col gap-1">
                <span className="text-white text-sm font-semibold leading-none">{v}</span>
                <span className="text-white/60 tracking-wide">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card Tiers */}
      <section>
        <h2 className="h2 mb-6">Card Tiers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map(t => (
            <div key={t.name} className="card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white tracking-tight">{t.name}</h3>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white/60">{t.supply} supply</span>
              </div>
              <ul className="space-y-1 mb-4 text-sm text-white/70">{t.util.map(u => <li key={u}>• {u}</li>)}</ul>
              <button className="mt-auto btn-ghost w-full">Preview</button>
            </div>
          ))}
        </div>
      </section>

      {/* Utility Layers */}
      <section id="utility">
        <h2 className="h2 mb-6">Utility Layers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries({
            'Gated Media':'Training, behind‑the‑scenes & recovery logs.',
            'Governance':'Poll weighting by tier for roadmap influence.',
            'Drops & Auctions':'Limited merch, gear & digital moments.',
            'Priority Access':'First look at cross‑sport launches.',
            'Reputation':'Track tenure & engagement badges.',
            'Liquidity':'Secondary trades reflect community demand.',
          } as const).map(([t,d]) => (
            <div key={t} className="panel p-5">
              <h3 className="font-semibold text-white mb-1 tracking-tight">{t}</h3>
              <p className="text-white/60 text-xs leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lifecycle & Flywheel preserved below via prior concept (removed duplication) */}

      {/* Market Activity (Demo) */}
      <section>
        <h2 className="h2 mb-4">Recent Activity (Demo)</h2>
        <div className="panel p-6 space-y-3">
          {activities.map(a => (
            <div key={a.a + a.ago} className="flex items-start justify-between border-b border-white/5 last:border-0 pb-3 last:pb-0">
              <div>
                <div className="text-sm text-white/80">{a.t}: <span className="text-white/60">{a.a}</span></div>
                <div className="text-[11px] text-white/40 mt-1">Value {a.v}</div>
              </div>
              <span className="text-[11px] text-white/40">{a.ago}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="h2 mb-6">FAQ</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {faqs.map(f => (
            <div key={f.q} className="panel p-5">
              <h3 className="font-semibold text-white mb-1 tracking-tight text-sm">{f.q}</h3>
              <p className="text-white/60 text-xs leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative panel p-8 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(800px_300px_at_70%_20%,rgba(238,104,35,0.25),transparent_70%)]" />
        <div className="relative z-10 max-w-xl">
          <h2 className="h2 mb-3">Start Exploring Fan Cards</h2>
          <p className="text-white/70 text-sm">Browse athlete pages, review utility layers, and acquire your first access token to join the inner circle.</p>
          <form onSubmit={e=>e.preventDefault()} className="mt-5 flex flex-col sm:flex-row gap-3 max-w-md">
            <input type="email" required placeholder="you@domain.com" className="flex-1 rounded-xl border border-white/10 bg-surface-800/70 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-brand-orange/60 focus:outline-none focus:ring-2 focus:ring-brand-orange/30" />
            <button className="btn-primary shadow-glow min-w-[140px]" type="submit">Join</button>
          </form>
          <p className="text-[10px] text-white/40 mt-2">Early access list • No spam • Privacy-first</p>
        </div>
        <div className="relative z-10 flex gap-3">
          <a href="/market" className="btn-primary shadow-glow">Open Market</a>
          <a href="/sports" className="btn-ghost">View Sports</a>
        </div>
      </section>

      {/* Disclaimer */}
      <p className="text-[10px] text-white/40 max-w-3xl leading-relaxed">Disclaimer: This is a conceptual demo. Fan cards shown are illustrative and not offers to sell. No financial returns are implied; value derives from utility, access and community engagement.</p>
    </div>
  );
}
