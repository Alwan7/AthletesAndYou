"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const links: { href: string; label: string }[] = [
    { href: '/sports', label: 'Sports' },
    { href: '/fan-cards', label: 'Fan Cards' },
    { href: '/market', label: 'Market' },
    { href: '/community', label: 'Community' },
    { href: '/advertise', label: 'Advertise' },
    { href: '/about', label: 'About' },
    { href: '/prep', label: 'Prep' },
  ];

  const linkClass = (href: string) => {
    const active = pathname === href;
    return `relative px-1 py-1 text-sm transition tracking-wide ${active ? 'text-white' : 'text-white/55 hover:text-white'} after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:scale-x-0 after:bg-gradient-to-r after:from-brand-orange/80 after:to-white/60 after:transition after:duration-300 ${active ? 'after:scale-x-100' : 'hover:after:scale-x-100'}`;
  };

  return (
    <header className={`sticky top-0 z-50 transition backdrop-blur supports-[backdrop-filter]:bg-surface-900/55 ${scrolled ? 'border-b border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_4px_24px_-4px_rgba(0,0,0,0.35)]' : 'border-b border-transparent'}`}> 
      <div className="container-responsive flex h-16 items-center justify-between gap-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-brand-orange/80 to-white/10 flex items-center justify-center shadow-glow overflow-hidden">
            <img src="/logo.svg" alt="logo" className="h-6 w-6 opacity-90 group-hover:opacity-100 transition" />
          </div>
          <span className="font-semibold tracking-tight text-white hidden sm:inline">Athletes & You</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>{l.label}</Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/market" className="btn-ghost">Market</Link>
          <Link href="/fan-cards" className="btn-primary shadow-glow">Get Fan Card</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="lg:hidden relative z-50 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/70 backdrop-blur hover:text-white hover:border-white/20"
        >
          <span className="block h-0.5 w-5 bg-current mb-1.5 transition origin-center" style={{ transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }} />
          <span className="block h-0.5 w-5 bg-current mb-1.5 transition" style={{ opacity: open ? 0 : 1 }} />
          <span className="block h-0.5 w-5 bg-current transition origin-center" style={{ transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
        </button>

        {/* Mobile Panel */}
        <div className={`lg:hidden fixed inset-x-0 top-0 z-40 origin-top overflow-hidden ${open ? 'animate-in fade-in slide-in-from-top duration-300' : 'pointer-events-none opacity-0'} `}>
          <div className="mt-16 mx-4 rounded-2xl border border-white/10 bg-surface-800/80 backdrop-blur-xl p-6 shadow-glow">
            <nav className="flex flex-col gap-4 mb-6">
              {links.map(l => (
                <Link key={l.href} href={l.href} className={`text-base ${pathname === l.href ? 'text-white font-medium' : 'text-white/60 hover:text-white'}`}>{l.label}</Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <Link href="/market" className="btn-ghost w-full text-center">Market</Link>
              <Link href="/fan-cards" className="btn-primary w-full shadow-glow text-center">Get Fan Card</Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-white/40">
              <span className="rounded-full border border-white/10 px-2 py-1">On-chain</span>
              <span className="rounded-full border border-white/10 px-2 py-1">Real-time</span>
              <span className="rounded-full border border-white/10 px-2 py-1">Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
