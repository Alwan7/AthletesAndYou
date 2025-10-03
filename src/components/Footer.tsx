"use client";

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="relative mt-32 border-t border-white/10 bg-surface-900/60 backdrop-blur pt-16">
			{/* Top gradient accent */}
			<div className="pointer-events-none absolute -top-px left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent" />

			<div className="container-responsive">
				<div className="grid gap-14 lg:grid-cols-5">
					{/* Brand / Narrative */}
					<div className="space-y-5 col-span-2">
						<h3 className="text-lg font-semibold text-white tracking-tight">
							Athletes & You
						</h3>
						<p className="text-sm leading-relaxed text-white/60 max-w-sm">
							The connective market & media layer aligning athletes, fans & brands
							through scarce fan cards, gated communities, auctions & transparent
							on‑chain engagement signals.
						</p>
						<div className="flex gap-3 text-xs text-white/40">
							<span className="rounded-full border border-white/10 px-3 py-1 backdrop-blur">
								On-chain
							</span>
							<span className="rounded-full border border-white/10 px-3 py-1 backdrop-blur">
								Real-time
							</span>
							<span className="rounded-full border border-white/10 px-3 py-1 backdrop-blur">
								Compliant
							</span>
						</div>
					</div>

					{/* Navigation Blocks */}
					<nav className="space-y-4 text-sm">
						<h4 className="text-white/70 font-medium tracking-wide uppercase text-[11px]">
							Platform
						</h4>
						<ul className="space-y-2 text-white/60">
							<li>
								<a
									className="hover:text-white transition"
									href="/sports"
								>
									Sports
								</a>
							</li>
							<li>
								<a
									className="hover:text-white transition"
									href="/fan-cards"
								>
									Fan Cards
								</a>
							</li>
							<li>
								<a
									className="hover:text-white transition"
									href="/market"
								>
									Market
								</a>
							</li>
							<li>
								<a
									className="hover:text-white transition"
									href="/community"
								>
									Community
								</a>
							</li>
						</ul>
					</nav>

					<nav className="space-y-4 text-sm">
						<h4 className="text-white/70 font-medium tracking-wide uppercase text-[11px]">
							Stakeholders
						</h4>
						<ul className="space-y-2 text-white/60">
							<li>
								<a
									className="hover:text-white transition"
									href="/about"
								>
									Athletes
								</a>
							</li>
							<li>
								<a
									className="hover:text-white transition"
									href="/advertise"
								>
									Brands
								</a>
							</li>
							<li>
								<a
									className="hover:text-white transition"
									href="/about"
								>
									Partners
								</a>
							</li>
							<li>
								<a
									className="hover:text-white transition"
									href="/about"
								>
									Investors
								</a>
							</li>
						</ul>
					</nav>

					{/* Waitlist / Contact */}
					<div className="space-y-5 col-span-2 lg:col-span-1">
						<h4 className="text-white/70 font-medium tracking-wide uppercase text-[11px]">
							Early Access
						</h4>
						<form
							className="space-y-3"
							onSubmit={(e) => e.preventDefault()}
						>
							<input
								type="email"
								required
								placeholder="Email"
								className="w-full rounded-xl border border-white/10 bg-surface-800/70 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-brand-orange/60 focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
							/>
							<button
								className="btn-primary w-full shadow-glow"
								type="submit"
							>
								Join Waitlist
							</button>
						</form>
						<div className="flex gap-3 text-white/40 text-sm">
							<a
								href="#"
								aria-label="LinkedIn"
								className="hover:text-white transition"
							>
								LinkedIn
							</a>
							<a
								href="#"
								aria-label="X"
								className="hover:text-white transition"
							>
								X
							</a>
							<a
								href="#"
								aria-label="Discord"
								className="hover:text-white transition"
							>
								Discord
							</a>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

				{/* Lower Bar */}
				<div className="py-8 flex flex-col md:flex-row items-center gap-6 justify-between text-xs text-white/40">
					<div className="flex flex-wrap items-center gap-4">
						<span>© {year} Athletes & You</span>
						<span className="hidden md:inline-block h-3 w-px bg-white/10" />
						<a
							href="#"
							className="hover:text-white transition"
						>
							Privacy
						</a>
						<a
							href="#"
							className="hover:text-white transition"
						>
							Terms
						</a>
						<a
							href="#"
							className="hover:text-white transition"
						>
							Contact
						</a>
					</div>
					<div className="flex flex-wrap gap-4 text-[11px]">
						<span className="rounded-full border border-white/10 px-3 py-1 backdrop-blur">
							SOC2 Ready
						</span>
						<span className="rounded-full border border-white/10 px-3 py-1 backdrop-blur">
							Audit Trail
						</span>
						<span className="rounded-full border border-white/10 px-3 py-1 backdrop-blur">
							Secure Payments
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
