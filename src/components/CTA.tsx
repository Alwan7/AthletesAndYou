"use client";

export default function CTA() {
  return (
    <section id="partners" className="relative section-pad mt-12">
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_70%_30%,rgba(238,104,35,0.25),transparent_70%)] opacity-60" />
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface-800/80 via-surface-800/60 to-surface-900/80 backdrop-blur-xl p-10 sm:p-14 shadow-glow">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
            Own a{" "}
            <span className="bg-gradient-to-r from-brand-orange via-white to-brand-orange bg-clip-text text-transparent">
              piece of the journey
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/65 leading-relaxed">
            Scarce on‑chain fan cards unlock gated communities, live media layers,
            experiential auctions & governance weighting that influences roadmap
            sequencing.
          </p>
        </div>

        {/* Value Props */}
        <ul className="mt-10 grid gap-4 sm:grid-cols-3 text-[13px]">
          {[
            ["Access", "Tiered chat, media & drops"],
            ["Alignment", "Transparent on-chain signals"],
            ["Upside", "Auctions & scarcity mechanics"],
          ].map(([t, d]) => (
            <li
              key={t}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm flex flex-col gap-1.5"
            >
              <span className="text-[11px] font-medium tracking-widest text-white/40 uppercase">
                {t}
              </span>
              <span className="text-white/80 leading-snug font-medium">
                {d}
              </span>
            </li>
          ))}
        </ul>

        {/* Form + Actions */}
        <div className="mt-12 flex flex-col lg:flex-row gap-10 lg:items-start lg:justify-between">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-md space-y-4"
          >
            <label className="text-xs uppercase tracking-wide text-white/50 block">
              Early Access Waitlist
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="you@domain.com"
                aria-label="Email address"
                className="flex-1 rounded-xl border border-white/10 bg-surface-900/70 px-4 py-3 text-sm text-white placeholder-white/35 focus:border-brand-orange/60 focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
              />
              <button
                type="submit"
                className="btn-primary shadow-glow w-full sm:w-auto min-w-[140px]"
              >
                Join
              </button>
            </div>
            <p className="text-[11px] text-white/40">
              No spam • Opt out anytime • Infrastructure privacy-first
            </p>
          </form>

          <div className="flex-1 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-white">For Athletes</h3>
              <p className="text-xs text-white/55 leading-relaxed">
                Bootstrap aligned fan demand, monetize media & unlock granular
                engagement telemetry.
              </p>
              <a
                href="/about"
                className="btn-ghost w-full text-center"
              >
                Learn More
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-white">For Brands</h3>
              <p className="text-xs text-white/55 leading-relaxed">
                Contextual placements & attribution surfaces across high-intent
                micro communities.
              </p>
              <a
                href="/advertise"
                className="btn-ghost w-full text-center"
              >
                Sponsorship
              </a>
            </div>
          </div>
        </div>

        {/* Primary CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="/market"
            className="btn-primary shadow-glow min-w-[180px] text-center"
          >
            Get Fan Card
          </a>
          <a
            href="/fan-cards"
            className="btn-ghost min-w-[160px] text-center"
          >
            How It Works
          </a>
          <a
            href="/community"
            className="btn-ghost min-w-[160px] text-center"
          >
            Community Layer
          </a>
        </div>

        {/* Trust Tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-[11px] text-white/45">
          {[
            "On-Chain Audit",
            "Secure Settlement",
            "Real-Time Telemetry",
            "Tiered Governance",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 px-3 py-1 backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
