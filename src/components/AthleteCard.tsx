"use client";
import Link from "next/link";
import { useMemo } from "react";

type Props = {
  slug?: string;
  name: string;
  sport: string;
  stat?: string; // legacy primary stat label
  image: string;
  tier?: string;
  status?: "live" | "upcoming" | "closed";
  floor?: string; // e.g. "0.18 ETH" or "$42"
  holders?: number;
  supply?: number; // total supply
  accentColor?: string; // hex or tailwind color token
};

export default function AthleteCard({
  slug = '#',
  name,
  sport,
  stat,
  image,
  tier,
  status = 'live',
  floor,
  holders,
  supply,
  accentColor = '#EE6823'
}: Props) {
  const mintedPct = useMemo(() => {
    if (!holders || !supply) return null;
    return Math.min(100, Math.round((holders / supply) * 100));
  }, [holders, supply]);

  return (
    <article className="relative group rounded-3xl overflow-hidden border border-white/10 bg-surface-800/70 backdrop-blur shadow-glow hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_32px_-4px_rgba(238,104,35,0.35)] transition">
      {/* Glow ring */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{ background: `radial-gradient(circle at 50% 15%, ${accentColor}22, transparent 70%)` }}
      />

      {/* Media */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05] group-hover:brightness-110"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 via-surface-900/10 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          {tier && <span className="badge bg-white/15 text-white/80 backdrop-blur-sm">{tier}</span>}
          <span className={`badge backdrop-blur-sm ${status === 'live' ? 'bg-brand-orange/80 text-white shadow-glow' : status === 'upcoming' ? 'bg-white/15 text-white/70' : 'bg-surface-900/60 text-white/50'}`}>{status === 'live' ? 'Live' : status === 'upcoming' ? 'Soon' : 'Closed'}</span>
        </div>
        {floor && (
          <div className="absolute bottom-3 left-3 rounded-xl bg-surface-900/70 border border-white/10 px-3 py-1 text-[11px] text-white/70 backdrop-blur-sm">
            Floor: <span className="text-white font-medium">{floor}</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="relative z-10 p-5 space-y-4">
        <header className="space-y-1">
          <h3 className="text-lg font-semibold tracking-tight text-white leading-snug">{name}</h3>
          <p className="text-xs uppercase tracking-wide text-white/40">{sport}</p>
        </header>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 text-center text-[11px] text-white/60">
          <div className="rounded-lg border border-white/5 bg-white/5 px-2 py-2 backdrop-blur-sm">
            <span className="block text-sm font-semibold text-white">{holders ?? '—'}</span>
            Holders
          </div>
          <div className="rounded-lg border border-white/5 bg-white/5 px-2 py-2 backdrop-blur-sm">
            <span className="block text-sm font-semibold text-white">{supply ?? '—'}</span>
            Supply
          </div>
          <div className="rounded-lg border border-white/5 bg-white/5 px-2 py-2 backdrop-blur-sm">
            <span className="block text-sm font-semibold text-white">{stat || mintedPct ? (mintedPct ? `${mintedPct}%` : stat) : '—'}</span>
            {mintedPct ? 'Minted' : 'Stat'}
          </div>
        </div>

        {/* Progress */}
        {mintedPct !== null && (
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-white/40"><span>Distribution</span><span>{mintedPct}%</span></div>
            <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-brand-orange to-white" style={{ width: `${mintedPct}%` }} />
            </div>
          </div>
        )}

        {/* Hover Reveal Layer */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-white/5 to-transparent" />
          <div className="flex flex-wrap gap-2">
            <Link href={slug ? `/athlete/${slug}` : '#'} className="btn-primary shadow-glow flex-1 min-w-[120px] text-center">Profile</Link>
            <Link href="/market" className="btn-ghost flex-1 min-w-[120px] text-center">Acquire</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
