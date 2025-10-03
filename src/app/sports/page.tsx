"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";

const liveSports = [
	{ id: "ski-jumping", name: "Ski Jumping", emoji: "⛷", blurb: "Pilot sport — fan cards live", cat: "Winter", holders: 380, velocity: "+12%" },
	{ id: "football", name: "Football", emoji: "⚽", blurb: "Clubs & rising talents", cat: "Ball", holders: 910, velocity: "+4%" },
	{ id: "tennis", name: "Tennis", emoji: "🎾", blurb: "Junior & pro circuit", cat: "Endurance", holders: 640, velocity: "+9%" },
	{ id: "basketball", name: "Basketball", emoji: "🏀", blurb: "Grassroots to global", cat: "Ball", holders: 210, velocity: "+7%" },
];

const comingSoon = [
	{ id: "ice-hockey", name: "Ice Hockey", emoji: "🏒", cat: "Winter" },
	{ id: "american-football", name: "American Football", emoji: "🏈", cat: "Ball" },
	{ id: "esports", name: "Esports", emoji: "🎮", cat: "Emerging" },
	{ id: "track", name: "Track & Field", emoji: "🏃", cat: "Endurance" },
];

const metrics = [
	{ k: "Pilot Holders", v: "1.2K" },
	{ k: "Avg. Retention", v: "93%" },
	{ k: "Monthly Messages", v: "5.9K" },
	{ k: "Expansion Queue", v: "+28" },
];

const roadmap = [
	{ q: "Q1", y: "2025", label: "Pilot Launch", d: "Ski jumping + base fan card economy" },
	{ q: "Q2", y: "2025", label: "Community Layer", d: "Auctions, polls & media gating" },
	{ q: "Q3", y: "2025", label: "Multi-Sport", d: "Football / Tennis onboarding" },
	{ q: "Q4", y: "2025", label: "Scale", d: "Marketplace optimization + bundles" },
];

const activitySeed = [
	"New sport request: Surfing (36 votes)",
	"Holder poll: Prioritize Basketball auctions",
	"Onboarding form submitted: Esports org",
	"Governance result: Add momentum analytics",
	"Waitlist milestone: 5K multi-sport signups"
];

export default function SportsPage() {
	const [query, setQuery] = useState("");
	const [tag, setTag] = useState("All");
	const [activityIndex, setActivityIndex] = useState(0);
	useEffect(() => { const id = setInterval(()=> setActivityIndex(i => (i+1)%activitySeed.length), 4800); return ()=>clearInterval(id);}, []);

	const tags = useMemo(() => ["All", ...Array.from(new Set([...liveSports, ...comingSoon].map(s=>s.cat)))], []);

	const filteredLive = useMemo(()=> liveSports.filter(s =>
		(tag === "All" || s.cat === tag) && (s.name.toLowerCase().includes(query.toLowerCase()) || s.id.includes(query.toLowerCase()))
	), [tag, query]);
	const filteredSoon = useMemo(()=> comingSoon.filter(s =>
		(tag === "All" || s.cat === tag) && (s.name.toLowerCase().includes(query.toLowerCase()) || s.id.includes(query.toLowerCase()))
	), [tag, query]);

	const empty = filteredLive.length === 0 && filteredSoon.length === 0;

	return (
		<div className="section-pad space-y-24 section-gradient relative">
			{/* Background accents */}
			<div className="pointer-events-none absolute -top-40 -left-48 w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(238,104,35,0.20),transparent_65%)] blur-2xl animate-[floatSlow_20s_ease-in-out_infinite]" />
			<div className="pointer-events-none absolute top-1/3 -right-48 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(150,175,198,0.18),transparent_70%)] blur-2xl animate-[floatSlowAlt_24s_ease-in-out_infinite]" />

			{/* Hero */}
			<header className="relative z-10 max-w-4xl space-y-8">
				<div className="inline-flex items-center gap-2 badge bg-brand-orange/20 text-white/80">
					<span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" /> Multi-Sport Architecture
				</div>
				<h1 className="h1 tracking-tight">Pick your sport. Scale the ecosystem.</h1>
				<p className="lead mt-2 text-white/70 max-w-3xl">
					Start in ski jumping — then expand horizontally. A unified fan card & gated community layer replicates across any sport taxonomy: one architecture, multi‑vertical growth.
				</p>

				{/* Filter / search controls */}
				<div className="panel p-4 space-y-4">
					<div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
						<input value={query} onChange={e=>setQuery(e.target.value)} className="input h-11 bg-surface-900/70 w-full md:w-80" placeholder="Search sport…" />
						<div className="flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur text-[11px]">
							{tags.map(t => (
								<button key={t} onClick={()=>setTag(t)} className={`px-4 py-1.5 rounded-full transition ${tag===t?'bg-brand-orange text-white shadow-glow':'text-white/60 hover:text-white'}`}>{t}</button>
							))}
						</div>
					</div>
					<div className="relative h-10 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur flex items-center px-4 text-[12px]" aria-live="polite">
						{activitySeed.map((a,i)=>(
							<div key={a} className={`absolute inset-0 flex items-center gap-2 transition duration-700 ${i===activityIndex?'opacity-100 translate-y-0':'opacity-0 -translate-y-2'}`}>
								<span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-ping" /> {a}
							</div>
						))}
					</div>
				</div>
			</header>

			{/* Engagement Metrics */}
			<section className="relative z-10">
				<h2 className="h2 mb-6">Engagement Snapshot</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{metrics.map((m) => (
						<div key={m.k} className="panel p-4 group hover:bg-surface-600/60 transition">
							<div className="kpi text-lg group-hover:text-white">{m.v}</div>
							<div className="kpi-sub mt-1 tracking-wide">{m.k}</div>
						</div>
					))}
				</div>
			</section>

			{/* Live / Pilot Sports */}
			{!empty && (
				<section className="relative z-10 space-y-6">
					<h2 className="h2 flex items-center gap-3">
						Live Now{" "}
						<span className="badge bg-brand-orange/20 text-white/80">Pilot</span>
					</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
						{filteredLive.map((s) => (
							<Link
								key={s.id}
								href={`/sports/${s.id}`}
								className="card p-5 group transition hover:shadow-glow hover:border-brand-orange/60 relative overflow-hidden"
							>
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_70%_0%,rgba(238,104,35,0.18),transparent_70%)]" />
								<div className="flex items-start justify-between relative z-10">
									<span className="text-3xl" aria-hidden>
										{s.emoji}
									</span>
									<span className="text-[10px] rounded-full bg-white/10 px-2 py-0.5 text-white/60 group-hover:text-white/80 tracking-wide">
										Enter
									</span>
								</div>
								<h3 className="mt-4 font-semibold text-white tracking-tight relative z-10">{s.name}</h3>
								<p className="text-xs text-white/60 mt-1 relative z-10">{s.blurb}</p>
								<div className="mt-3 flex items-center gap-3 text-[10px] text-white/40">
									<span>Holders <span className="text-white/70">{s.holders}</span></span>
									<span>Velocity <span className="text-brand-orange">{s.velocity}</span></span>
									<span>{s.cat}</span>
								</div>
							</Link>
						))}
					</div>
				</section>
			)}

			{/* Coming Soon */}
			{!empty && (
				<section className="relative z-10 space-y-6">
					<h2 className="h2 flex items-center gap-3">
						Coming Soon{" "}
						<span className="badge bg-white/10 text-white/70">Roadmap</span>
					</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
						{filteredSoon.map((s) => (
							<div key={s.id} className="card p-5 opacity-60 relative group">
								<div className="flex items-start justify-between">
									<span className="text-3xl" aria-hidden>
										{s.emoji}
									</span>
									<span className="text-[10px] uppercase tracking-wide text-white/40">Soon</span>
								</div>
								<h3 className="mt-4 font-semibold text-white tracking-tight">{s.name}</h3>
								<p className="text-xs text-white/50 mt-1">Preparing onboarding</p>
								<div className="absolute inset-0 rounded-2xl border border-dashed border-white/10 group-hover:border-white/20 transition" />
								<div className="mt-3 text-[10px] text-white/40">{s.cat}</div>
							</div>
						))}
					</div>
				</section>
			)}

			{/* Empty State */}
			{empty && (
				<section className="relative z-10">
					<div className="panel p-10 text-center max-w-xl mx-auto space-y-6">
						<h2 className="h2">No sports match your filters</h2>
						<p className="text-sm text-white/60">Request a sport or clear filters to explore the full multi‑sport roadmap.</p>
						<form onSubmit={e=>e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
							<input required placeholder="you@domain.com" className="flex-1 rounded-xl border border-white/10 bg-surface-800/70 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-brand-orange/60 focus:outline-none focus:ring-2 focus:ring-brand-orange/30" />
							<button className="btn-primary shadow-glow min-w-[140px]">Notify Me</button>
						</form>
						<p className="text-[10px] text-white/40">We aggregate demand signals to prioritise onboarding.</p>
					</div>
				</section>
			)}

			{/* Expansion Roadmap */}
			<section className="relative z-10">
				<h2 className="h2 mb-6">Expansion Timeline</h2>
				<div className="relative pl-6 space-y-6 max-w-3xl">
					{roadmap.map((step) => (
						<div key={step.q + step.y} className="flex gap-4 items-start">
							<div className="w-2 h-2 mt-2 rounded-full bg-brand-orange shadow-glow" />
							<div>
								<div className="text-white/50 text-[11px] tracking-wide">
									{step.q} {step.y}
								</div>
								<div className="text-white font-medium text-sm mt-0.5">{step.label}</div>
								<p className="text-white/50 text-xs mt-1 leading-relaxed">{step.d}</p>
							</div>
						</div>
					))}
					<div className="absolute left-2 top-1 bottom-1 w-px bg-white/10" />
				</div>
			</section>

			{/* CTA */}
			<section className="relative panel p-8 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between overflow-hidden">
				<div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(800px_300px_at_70%_20%,rgba(238,104,35,0.25),transparent_70%)]" />
				<div className="relative z-10 max-w-xl">
					<h2 className="h2 mb-2">Don’t see your sport?</h2>
					<p className="text-white/70 text-sm">
						We onboard communities that want direct athlete–fan alignment. Register interest & help prioritise expansion.
					</p>
				</div>
				<div className="relative z-10 flex gap-3 flex-wrap">
					<Link href="/market" className="btn-primary shadow-glow">
						Explore Market
					</Link>
					<Link href="#request" className="btn-ghost">
						Request Sport
					</Link>
				</div>
			</section>

			<style jsx>{`
				@keyframes floatSlow {0%,100%{transform:translate3d(0,0,0);}50%{transform:translate3d(40px,30px,0);}}
				@keyframes floatSlowAlt {0%,100%{transform:translate3d(0,0,0);}50%{transform:translate3d(-30px,-40px,0);}}
			`}</style>
		</div>
	);
}
