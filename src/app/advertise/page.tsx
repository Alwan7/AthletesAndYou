export default function AdvertisePage() {
  const inventory = [
    { k: 'Hero Takeover', v: 'CPM / Fixed', d: 'Top placement across targeted sport pages.' },
    { k: 'Athlete Feed Native', v: 'CPM', d: 'Contextual native card inside fan feed.' },
    { k: 'Video Pre/Post', v: 'CPV', d: 'Short pre-roll on premium training clips.' },
    { k: 'Community Poll Sponsor', v: 'Fixed', d: 'Branding on governance / fan polls.' },
  ];
  const metrics = [
    { k: 'Monthly Reach', v: '420K+' },
    { k: 'Avg. Dwell', v: '6m 12s' },
    { k: 'Fan Card Holders', v: '12.4K' },
    { k: 'CTR (Native)', v: '3.8%' },
  ];
  const tiers = [
    { name: 'Supporter', price: '10K+', perks: ['Targeted placement', 'Basic reporting'] },
    { name: 'Partner', price: '50K+', perks: ['Multi-sport bundle', 'Quarterly insights', 'Custom activation'] },
    { name: 'Strategic', price: '250K+', perks: ['Category lock', 'Co-branded drops', 'Bespoke data package', 'Executive review'] },
  ];

  return (
    <div className="section-pad space-y-16 section-gradient">
      {/* Header */}
      <header className="max-w-3xl">
        <h1 className="h1">Advertise & Partner</h1>
        <p className="lead mt-3 text-white/70">Reach high-intent micro-communities built around rising and elite athletes. Blend brand visibility with authentic member utility.</p>
      </header>

      {/* Value Props */}
      <section>
        <h2 className="h2 mb-6">Why Brands Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6"><h3 className="font-semibold text-white mb-2">Premium Context</h3><p className="text-white/60 text-sm">Content environment driven by performance, training & authentic athlete voice.</p></div>
          <div className="card p-6"><h3 className="font-semibold text-white mb-2">Verified Engagement</h3><p className="text-white/60 text-sm">Fan cards signal commitment — not passive scroll audiences.</p></div>
          <div className="card p-6"><h3 className="font-semibold text-white mb-2">Scalable Targeting</h3><p className="text-white/60 text-sm">Start in pilot sport — expand horizontally as new verticals unlock.</p></div>
        </div>
      </section>

      {/* Inventory */}
      <section>
        <h2 className="h2 mb-4">Inventory (Demo)</h2>
        <div className="panel p-6 divide-y divide-white/5">
          {inventory.map(i => (
            <div key={i.k} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <div className="text-white font-medium">{i.k}</div>
                <div className="text-white/50 text-xs mt-0.5 max-w-md">{i.d}</div>
              </div>
              <span className="text-white/60 text-xs px-2 py-1 rounded-full bg-white/5 w-max">{i.v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Audience Metrics */}
      <section>
        <h2 className="h2 mb-4">Audience Snapshot</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map(m => (
            <div key={m.k} className="panel p-4">
              <div className="kpi text-lg">{m.v}</div>
              <div className="kpi-sub mt-1">{m.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section>
        <h2 className="h2 mb-6">Sponsorship Tiers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map(t => (
            <div key={t.name} className="card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white tracking-tight">{t.name}</h3>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white/60">{t.price}</span>
              </div>
              <ul className="space-y-1 mb-4 text-sm text-white/70">
                {t.perks.map(p => <li key={p}>• {p}</li>)}
              </ul>
              <button className="mt-auto btn-ghost w-full text-center">Discuss</button>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Form */}
      <section>
        <h2 className="h2 mb-4">Request Media Kit</h2>
        <form className="panel p-6 grid gap-5 max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="label" htmlFor="company">Company</label>
              <input id="company" className="input" placeholder="Your company" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="label" htmlFor="budget">Budget (USD)</label>
              <input id="budget" className="input" placeholder="e.g. 25k" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="label" htmlFor="objective">Primary Objective</label>
            <select id="objective" className="select">
              <option>Brand Lift</option>
              <option>Launch Awareness</option>
              <option>Acquisition / Signups</option>
              <option>Community Engagement</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="label" htmlFor="notes">Notes / Context</label>
            <textarea id="notes" className="input h-32 resize-none" placeholder="What are you looking to achieve?" />
          </div>
          <div className="flex items-center gap-3">
            <button type="submit" className="btn-primary">Send Request</button>
            <span className="text-white/40 text-xs">Avg response &lt; 24h</span>
          </div>
        </form>
      </section>

      {/* CTA */}
      <section className="panel p-8 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        <div className="max-w-xl">
          <h2 className="h2 mb-2">Co-build an activation</h2>
          <p className="text-white/70 text-sm">Looking for deeper integration? We co-design formats that align athlete storytelling with measurable brand objectives.</p>
        </div>
        <div className="flex gap-3">
          <a href="#tiers" className="btn-ghost">View Tiers</a>
          <a href="/community" className="btn-primary">See Fan Experience</a>
        </div>
      </section>
    </div>
  );
}
