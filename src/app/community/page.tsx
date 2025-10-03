export default function CommunityPage() {
  return (
    <div className="section-pad space-y-16 section-gradient">
      {/* Header */}
      <header className="max-w-3xl">
        <h1 className="h1">Closed Community</h1>
        <p className="lead mt-3 text-white/70">
          Gated hub for verified fan card holders. Unlock direct athlete access, premium drops, auctions and community governance.
        </p>
      </header>

      {/* Core Value Props */}
      <section>
        <h2 className="h2 mb-6">What Members Get</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold text-white mb-2">Live Chat & AMA</h3>
            <p className="text-white/60 text-sm">Monthly sessions + rapid Q&A threads with ranked visibility.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-white mb-2">Exclusive Media</h3>
            <p className="text-white/60 text-sm">Behind‑the‑scenes training clips, recovery logs & travel stories.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-white mb-2">Drops & Auctions</h3>
            <p className="text-white/60 text-sm">Signed gear, limited digital moments & experiential passes.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-white mb-2">Community Polls</h3>
            <p className="text-white/60 text-sm">Token‑weighted votes on future content & appearance priorities.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-white mb-2">Early Access</h3>
            <p className="text-white/60 text-sm">Be first to new athlete launches & cross‑sport expansions.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-white mb-2">Upside Alignment</h3>
            <p className="text-white/60 text-sm">Scarce fan cards tie long‑term engagement to athlete success.</p>
          </div>
        </div>
      </section>

      {/* Sample Feed */}
      <section>
        <h2 className="h2 mb-4">Live Feed (Demo)</h2>
        <div className="panel p-6 space-y-4">
          {[
            { t: 'New training micro‑session uploaded', tag: 'media', ago: '3m' },
            { t: 'Auction: Signed competition bib now live', tag: 'auction', ago: '18m' },
            { t: 'Poll: Which event recap do you want next?', tag: 'poll', ago: '42m' },
            { t: 'Coach note: Altitude block complete', tag: 'update', ago: '1h' },
          ].map((i, idx) => (
            <div key={idx} className="flex items-start justify-between border-b border-white/5 last:border-0 pb-3 last:pb-0">
              <div>
                <span className="text-sm text-white/80">{i.t}</span>
                <div className="text-[11px] mt-1 text-white/40 uppercase tracking-wide">{i.tag}</div>
              </div>
              <span className="text-[11px] text-white/40">{i.ago}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Tiers */}
      <section>
        <h2 className="h2 mb-6">Fan Card Tiers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Core', supply: 1000, perks: ['Feed access', 'Basic polls', 'Monthly AMA'] },
            { name: 'Plus', supply: 250, perks: ['All Core', 'Early drops', 'Priority Q&A', '2x vote weight'] },
            { name: 'Elite', supply: 25, perks: ['All Plus', 'Private huddle', 'Signed item guarantee', '5x vote weight'] },
          ].map(t => (
            <div key={t.name} className="card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white tracking-tight">{t.name}</h3>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white/60">{t.supply} supply</span>
              </div>
              <ul className="space-y-1 mb-4 text-sm text-white/70">
                {t.perks.map(p => <li key={p}>• {p}</li>)}
              </ul>
              <button className="mt-auto btn-primary w-full text-center">Preview</button>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Snapshot */}
      <section>
        <h2 className="h2 mb-4">Engagement Snapshot</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { k: 'Active Holders', v: '1,248' },
            { k: '30d Messages', v: '5.9k' },
            { k: 'Content Drops', v: '182' },
            { k: 'Avg. Retention', v: '93%' },
          ].map(m => (
            <div key={m.k} className="panel p-4">
              <div className="kpi text-lg">{m.v}</div>
              <div className="kpi-sub mt-1">{m.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="panel p-8 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        <div className="max-w-xl">
          <h2 className="h2 mb-2">Join the Inner Circle</h2>
          <p className="text-white/70 text-sm">Secure a limited fan card to unlock everything above and help shape future athlete–fan interaction.</p>
        </div>
        <div className="flex gap-3">
          <a href="/market" className="btn-primary">Browse Fan Cards</a>
          <a href="/about" className="btn-ghost">How It Works</a>
        </div>
      </section>
    </div>
  );
}
