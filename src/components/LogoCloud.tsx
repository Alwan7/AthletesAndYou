"use client";
import { useMemo } from 'react';

export default function LogoCloud() {
  const logos: { name: string; abbr: string; }[] = useMemo(() => [
    { name: 'Velocity Capital', abbr: 'VC' },
    { name: 'Edge Media Labs', abbr: 'EM' },
    { name: 'Prime Sports Tech', abbr: 'PS' },
    { name: 'Arena Data', abbr: 'AD' },
    { name: 'Signal Metrics', abbr: 'SM' },
    { name: 'OpenChain Auth', abbr: 'OA' },
    { name: 'Pulse Engage', abbr: 'PE' },
    { name: 'Kinetic Labs', abbr: 'KL' },
  ], []);

  const track = [...logos, ...logos]; // loop for marquee

  return (
    <section className="relative mt-20">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(238,104,35,0.08),transparent_70%)]" />

      <div className="container-responsive relative">
        <div className="flex flex-col items-center text-center gap-4 mb-10">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 font-medium">Trusted Signals & Partners (Pilot)</p>
          <h2 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Infrastructure & early ecosystem alignment</h2>
          <div className="flex flex-wrap justify-center gap-4 text-[11px] text-white/40">
            <span className="rounded-full border border-white/10 px-3 py-1 backdrop-blur">Data Integrity</span>
            <span className="rounded-full border border-white/10 px-3 py-1 backdrop-blur">Secure Wallet Auth</span>
            <span className="rounded-full border border-white/10 px-3 py-1 backdrop-blur">Real‑time Metrics</span>
            <span className="rounded-full border border-white/10 px-3 py-1 backdrop-blur">Compliant Payout</span>
          </div>
        </div>

        {/* Marquee (reduced motion fallback handled by prefers-reduced-motion) */}
        <div className="relative overflow-hidden group" aria-label="Partner & infrastructure logos carousel">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-900 via-surface-900/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-900 via-surface-900/80 to-transparent" />
          <ul
            className="flex min-w-max gap-6 animate-[logo-marquee_38s_linear_infinite] group-hover:[animation-play-state:paused] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:animate-none"
          >
            {track.map((l, i) => (
              <li
                key={i + l.name}
                className="relative h-14 w-40 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm hover:border-white/20 transition"
                aria-label={l.name}
              >
                <span className="text-white/70 text-xs font-medium tracking-wide">{l.abbr}</span>
                <span className="absolute bottom-1 left-1 text-[9px] uppercase tracking-wider text-white/25">{l.name.split(' ')[0]}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Static fallback grid (shown only if user prefers reduced motion) */}
        <div className="mt-10 hidden motion-reduce:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {logos.map(l => (
            <div key={l.name} className="h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white/60 text-xs font-medium tracking-wide">{l.name}</span>
            </div>
          ))}
        </div>

        {/* Metrics strip */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3 text-center text-[11px] text-white/50">
          {[
            ['680ms', 'Median Chain Event → UI'],
            ['99.95%', 'Uptime (rolling 90d target)'],
            ['AES256', 'At-Rest Encryption'],
          ].map(([v,l]) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3">
              <span className="block text-sm font-semibold text-white">{v}</span>
              {l}
            </div>
          ))}
        </div>
      </div>

      {/* Local keyframes */}
      <style jsx>{`
        @keyframes logo-marquee { to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}
