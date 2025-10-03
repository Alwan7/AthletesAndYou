import Link from "next/link";
import { getAthleteBySlug } from "@/data/athletes";

export default async function AthleteProfile({ params }: { params: Promise<{ slug: string }>}) {
  const { slug } = await params;
  const athlete = getAthleteBySlug(slug);
  if (!athlete) {
    return (
      <section className="section-pad text-center space-y-6">
        <h1 className="h1">Athlete Not Found</h1>
        <p className="text-white/60 max-w-md mx-auto">We couldn't locate this athlete profile. It may be in an upcoming launch wave.</p>
        <Link href="/" className="btn-primary inline-block">Return Home</Link>
      </section>
    );
  }

  const { name, sport, bio, image, stats = [], tier, status, floor, holders, supply } = athlete;

  return (
    <section className="section-pad grid lg:grid-cols-2 gap-8 items-start">
      <div className="card overflow-hidden relative group">
        <img src={image} alt={name} className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 via-surface-900/10 to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          {tier && <span className="badge bg-white/15 text-white/80 backdrop-blur-sm">{tier}</span>}
          {status && <span className={`badge backdrop-blur-sm ${status === 'live' ? 'bg-brand-orange/80 text-white shadow-glow' : status === 'upcoming' ? 'bg-white/15 text-white/70' : 'bg-surface-900/60 text-white/50'}`}>{status === 'live' ? 'Live' : status === 'upcoming' ? 'Soon' : 'Closed'}</span>}
        </div>
        {floor && (
          <div className="absolute bottom-4 left-4 rounded-xl bg-surface-900/70 border border-white/10 px-3 py-1 text-[11px] text-white/70 backdrop-blur-sm">
            Floor: <span className="text-white font-medium">{floor}</span>
          </div>
        )}
      </div>
      <div>
        <div className="badge mb-3">{sport}</div>
        <h1 className="h1">{name}</h1>
        <p className="lead max-w-prose">{bio}</p>
        {holders !== undefined && supply !== undefined && (
          <div className="mt-6 space-y-2">
            <div className="flex gap-4 text-[11px] text-white/50">
              <span><strong className="text-white">{holders}</strong> holders</span>
              <span><strong className="text-white">{supply}</strong> supply</span>
            </div>
            {holders > 0 && supply > 0 && (
              <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-brand-orange to-white" style={{ width: `${Math.min(100, Math.round((holders / supply) * 100))}%` }} />
              </div>
            )}
          </div>
        )}
        {stats.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {stats.map(s => <li key={s} className="badge">{s}</li>)}
          </ul>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/market" className="btn-primary shadow-glow">Buy Fan Card</Link>
          <Link href="/community" className="btn-ghost">Enter Community</Link>
        </div>
        <p className="text-xs text-white/40 mt-5 max-w-sm">Fan cards unlock chat access, training session drops, performance-aligned rewards & governance signal weight.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3 text-sm">
          {[['Engagement Depth','Avg session length vs baseline'],['Signal Weight','Governance influence calibration'],['Auction Velocity','Primary market absorption rate']].map(([t,d]) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <h3 className="font-semibold text-white text-sm leading-tight mb-1">{t}</h3>
              <p className="text-[11px] text-white/55 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
