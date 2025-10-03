export default function AboutPage() {
  return (
    <div className="section-pad space-y-16 section-gradient">
      {/* Hero / Intro */}
      <header className="max-w-3xl">
        <h1 className="h1">About Athletes & You</h1>
        <p className="lead mt-3 text-white/70">
          A&Y is a meeting, market & media place aligning athlete performance with community participation. We direct
          digital demand toward sustainable athlete income.
        </p>
      </header>

      {/* Mission & Model */}
      <section className="grid lg:grid-cols-2 gap-8">
        <div className="card p-6 space-y-4">
          <h2 className="h2 mb-2">Mission</h2>
          <p className="text-white/70 text-sm">
            Accelerate athlete careers by converting authentic engagement into diversified revenue streams, while giving
            fans structured, scarce access layers.
          </p>
          <ul className="space-y-2 text-white/70 text-sm list-disc pl-5">
            <li>Support athletes, clubs, teams & venues with aligned economics</li>
            <li>Create transparent value pathways: access → community → retention</li>
            <li>Channel sponsor & fan capital into performance infrastructure</li>
          </ul>
        </div>
        <div className="card p-6 space-y-4">
          <h2 className="h2 mb-2">Model</h2>
          <p className="text-white/70 text-sm">
            Limited fan cards (tokenized access keys) gate premium community layers and utilities.
          </p>
          <ol className="list-decimal pl-5 space-y-1 text-white/70 text-sm">
            <li>Acquire sport or athlete fan card</li>
            <li>Enter closed community hub</li>
            <li>Unlock media, drops, polls & auctions</li>
            <li>Long-term upside via scarcity + retention</li>
          </ol>
          <div className="panel p-4 text-xs text-white/50 leading-relaxed">
            Designed as a limited‑profit structure sharing income with the wider sports ecosystem to reinforce grassroots
            through elite levels.
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section>
        <h2 className="h2 mb-6">What Makes Us Different</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: 'Access Architecture', d: 'Tiered, utility‑driven — not pure speculation.' },
            { t: 'Horizontal Scalability', d: 'Launch once, replicate across any sport taxonomy.' },
            { t: 'Contextual Monetization', d: 'Engagement surfaces mapped to sponsor & fan demand.' },
            { t: 'Data Loop', d: 'Structured feedback from polls & retention to content roadmap.' },
            { t: 'Aligned Incentives', d: 'Athlete + community benefit from sustained participation.' },
            { t: 'Composable Stack', d: 'Public blockchain + open standards for portability.' },
          ].map(i => (
            <div key={i.t} className="card p-5">
              <h3 className="font-semibold text-white mb-1 tracking-tight">{i.t}</h3>
              <p className="text-white/60 text-xs leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="h2 mb-6">Build Timeline (Demo)</h2>
        <div className="relative pl-6 space-y-6 max-w-3xl">
          {[
            { q: 'Q1', y: '2025', label: 'Pilot Architecture', d: 'Core athlete + sport pages, fan card mint, gated feed.' },
            { q: 'Q2', y: '2025', label: 'Community Layer', d: 'Auctions, AMA, tiered tokens, governance polls.' },
            { q: 'Q3', y: '2025', label: 'Expansion', d: 'Multi-sport onboarding & sponsorship inventory activation.' },
            { q: 'Q4', y: '2025', label: 'Scale & Optimization', d: 'Analytics, retention loops, cross‑sport bundles.' },
          ].map(step => (
            <div key={step.q+step.y} className="flex gap-4 items-start">
              <div className="w-2 h-2 mt-2 rounded-full bg-brand-orange shadow-glow" />
              <div>
                <div className="text-white/60 text-xs">{step.q} {step.y}</div>
                <div className="text-white font-medium text-sm mt-0.5">{step.label}</div>
                <p className="text-white/50 text-xs mt-1 leading-relaxed">{step.d}</p>
              </div>
            </div>
          ))}
          <div className="absolute left-2 top-1 bottom-1 w-px bg-white/10" />
        </div>
      </section>

      {/* Team Placeholder */}
      <section>
        <h2 className="h2 mb-6">Team (Sample)</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Founder / Ops','Tech Lead','Community & Athlete Relations','Commercial & Partnerships'].map(r => (
            <div key={r} className="panel p-5 flex flex-col gap-3">
              <div className="h-20 w-20 rounded-full bg-white/5 grid place-items-center text-white/40 text-xs">IMG</div>
              <div>
                <div className="text-white font-semibold text-sm">Name TBD</div>
                <div className="text-white/50 text-xs">{r}</div>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">Role description and mandate placeholder for demo narrative.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="panel p-8 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        <div className="max-w-xl">
          <h2 className="h2 mb-2">Partner or Pilot With Us</h2>
          <p className="text-white/70 text-sm">
            We are aligning early partners, athletes and sport communities. Get access to roadmap calls & structured
            feedback loops.
          </p>
        </div>
        <div className="flex gap-3">
          <a href="/advertise" className="btn-ghost">Partnerships</a>
          <a href="/sports" className="btn-primary">Explore Sports</a>
        </div>
      </section>
    </div>
  );
}
