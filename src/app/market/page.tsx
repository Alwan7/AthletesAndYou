"use client"
import { useState, useMemo } from 'react'

function Sparkline({ points, up }: { points: number[]; up: boolean }) {
  const d = useMemo(() => {
    if (!points.length) return ''
    const max = Math.max(...points)
    const min = Math.min(...points)
    const scaleX = 24 / (points.length - 1)
    const scaleY = (val: number) =>
      18 - ((val - min) / (max - min || 1)) * 12
    return points
      .map((p, i) => `${i === 0 ? 'M' : 'L'}${i * scaleX} ${scaleY(p)}`)
      .join(' ')
  }, [points])
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-8 overflow-visible"
      preserveAspectRatio="none"
    >
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className={
          up ? 'text-emerald-400' : 'text-red-400'
        }
      />
    </svg>
  )
}

interface TokenRow {
  symbol: string
  athlete: string
  price: number
  change: number // percent
  up: boolean
  volume24h: number // EUR
  marketCap: number // EUR
  holders: number
  supply: number
  spark: number[]
}

export default function MarketPage() {
  const tokens: TokenRow[] = useMemo(
    () => [
      {
        symbol: 'AVA',
        athlete: 'Achraf Hakimi',
        price: 49,
        change: 6.3,
        up: true,
        volume24h: 18420,
        marketCap: 245000,
        holders: 380,
        supply: 500,
        spark: [12, 14, 13, 15, 16, 15, 18],
      },
      {
        symbol: 'LEO',
        athlete: 'Leo Nilsson',
        price: 79,
        change: -1.4,
        up: false,
        volume24h: 30210,
        marketCap: 610000,
        holders: 910,
        supply: 1200,
        spark: [21, 20, 19, 18, 19, 18, 17],
      },
      {
        symbol: 'MAYA',
        athlete: 'Maya Eriksen',
        price: 59,
        change: 2.1,
        up: true,
        volume24h: 10200,
        marketCap: 180000,
        holders: 0,
        supply: 750,
        spark: [8, 9, 9, 10, 11, 11, 12],
      },
      {
        symbol: 'JUMP',
        athlete: 'National Ski Team',
        price: 29,
        change: 0.8,
        up: true,
        volume24h: 5400,
        marketCap: 99000,
        holders: 210,
        supply: 400,
        spark: [4, 4, 5, 5, 6, 6, 7],
      },
      {
        symbol: 'GRIT',
        athlete: 'GRIT All-Stars',
        price: 12.76,
        change: -0.6,
        up: false,
        volume24h: 2100,
        marketCap: 62000,
        holders: 120,
        supply: 300,
        spark: [7, 7, 6, 6, 6, 5, 5],
      },
      {
        symbol: 'DOSE',
        athlete: 'Dose Elite',
        price: 0.31,
        change: 3.2,
        up: true,
        volume24h: 890,
        marketCap: 21000,
        holders: 64,
        supply: 100,
        spark: [2, 2, 2, 3, 3, 4, 4],
      },
    ],
    []
  )

  const [query, setQuery] = useState('')
  const [sort, setSort] = useState<'price' | 'change' | 'volume' | 'marketcap'>(
    'volume'
  )
  const [watch, setWatch] = useState<Set<string>>(new Set())
  const [quickSymbol, setQuickSymbol] = useState('AVA')
  const [buyAmount, setBuyAmount] = useState('0.0029')
  const [fiatAmount, setFiatAmount] = useState('100.00')

  const filtered = useMemo(
    () =>
      tokens.filter(
        (t) =>
          t.symbol.toLowerCase().includes(query.toLowerCase()) ||
          t.athlete.toLowerCase().includes(query.toLowerCase())
      ),
    [tokens, query]
  )

  const sorted = useMemo(
    () =>
      [...filtered].sort((a, b) => {
        switch (sort) {
          case 'price':
            return b.price - a.price
          case 'change':
            return b.change - a.change
          case 'marketcap':
            return b.marketCap - a.marketCap
          default:
            return b.volume24h - a.volume24h
        }
      }),
    [filtered, sort]
  )

  const marketStats = useMemo(() => {
    const totalCap = tokens.reduce((s, t) => s + t.marketCap, 0)
    const totalVol = tokens.reduce((s, t) => s + t.volume24h, 0)
    const avgChange = tokens.reduce((s, t) => s + t.change, 0) / tokens.length
    return { totalCap, totalVol, avgChange }
  }, [tokens])

  const toggleWatch = (sym: string) =>
    setWatch((prev) => {
      const next = new Set(prev)
      next.has(sym) ? next.delete(sym) : next.add(sym)
      return next
    })

  return (
    <section className="section-pad relative">
      {/* Background accents */}
      <div className="pointer-events-none absolute -top-40 -left-32 w-[640px] h-[640px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(238,104,35,0.22),transparent_65%)] blur-2xl" />
      <div className="pointer-events-none absolute top-1/2 -right-32 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(150,175,198,0.18),transparent_70%)] blur-2xl" />

      <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-14 items-start relative">
        {/* Left: Market Overview & Grid */}
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] uppercase tracking-wide text-white/60 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />{' '}
              Live Market Beta
            </div>
            <h1 className="h1 leading-tight font-display">
              Fan Card{' '}
              <span className="bg-gradient-to-r from-brand-orange via-white to-brand-orange bg-clip-text text-transparent">
                Market
              </span>
            </h1>
            <p className="lead max-w-2xl text-white/70">
              Commission‑free primary & secondary card flows with transparent
              scarcity, on‑chain settlement & real‑time engagement telemetry.
            </p>
          </div>

          {/* Market Stats */}
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [
                marketStats.totalCap.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'EUR',
                }),
                'Aggregate Market Cap',
              ],
              [
                marketStats.totalVol.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'EUR',
                }),
                '24h Volume',
              ],
              [`${marketStats.avgChange.toFixed(2)}%`, 'Avg 24h Change'],
            ].map(([v, l]) => (
              <div
                key={l}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm text-center"
              >
                <span className="block text-lg font-semibold text-white leading-none">
                  {v}
                </span>
                <span className="mt-2 block text-[11px] tracking-wide text-white/50">
                  {l}
                </span>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <div className="flex gap-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search symbol / athlete"
                className="rounded-xl border border-white/10 bg-surface-800/70 px-4 py-2.5 text-sm text-white placeholder-white/35 focus:border-brand-orange/60 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 w-60"
              />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as any)}
                className="rounded-xl border border-white/10 bg-surface-800/70 px-3 py-2.5 text-sm text-white focus:border-brand-orange/60 focus:outline-none"
              >
                <option value="volume">Sort: Volume</option>
                <option value="price">Sort: Price</option>
                <option value="change">Sort: Change %</option>
                <option value="marketcap">Sort: Market Cap</option>
              </select>
            </div>
            <div className="text-[11px] uppercase tracking-wide text-white/40">
              Demo data – not live pricing
            </div>
          </div>

          {/* Token Grid */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {sorted.map((t) => {
              const watched = watch.has(t.symbol)
              return (
                <div
                  key={t.symbol}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm flex flex-col gap-3 hover:border-white/20 transition shadow-glow/0 hover:shadow-glow"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white tracking-wide">
                          {t.symbol}
                        </span>
                        <button
                          onClick={() => toggleWatch(t.symbol)}
                          className={`text-[11px] rounded-full px-2 py-0.5 border ${
                            watched
                              ? 'border-brand-orange text-brand-orange bg-brand-orange/10'
                              : 'border-white/15 text-white/40 hover:text-white/70'
                          }`}
                        >
                          {watched ? 'Watching' : 'Watch'}
                        </button>
                      </div>
                      <div className="text-[11px] uppercase tracking-wide text-white/40">
                        {t.athlete}
                      </div>
                    </div>
                    <div
                      className={`text-xs font-semibold ${
                        t.up ? 'text-emerald-400' : 'text-red-400'
                      }`}
                    >
                      {t.change > 0 ? '+' : ''}
                      {t.change.toFixed(1)}%
                    </div>
                  </div>
                  <Sparkline points={t.spark} up={t.up} />
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-lg font-semibold text-white">
                        €{t.price.toFixed(t.price < 1 ? 2 : 2)}
                      </div>
                      <div className="text-[10px] text-white/40 mt-1">
                        Vol €{t.volume24h.toLocaleString()} • Cap{' '}
                        {(t.marketCap / 1000).toFixed(0)}k
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setQuickSymbol(t.symbol)
                        setBuyAmount('')
                      }}
                      className="btn-primary text-xs px-4 py-2"
                    >
                      Buy
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[10px] text-white/45 pt-1">
                    <div>
                      <span className="text-white/70 block font-medium">
                        {t.holders}
                      </span>
                      Holders
                    </div>
                    <div>
                      <span className="text-white/70 block font-medium">
                        {t.supply}
                      </span>
                      Supply
                    </div>
                    <div>
                      <span className="text-white/70 block font-medium">
                        {Math.round((t.holders / (t.supply || 1)) * 100)}%
                      </span>
                      Distributed
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* How it works / Info */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur-sm space-y-4">
            <h2 className="text-lg font-semibold text-white">How It Works</h2>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-orange" />{' '}
                Primary mint & secondary trades unified.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-orange" />{' '}
                On‑chain settlement with transparent card scarcity.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-orange" />{' '}
                Zero commission pilot window; dynamic fees later.
              </li>
            </ul>
            <p className="text-[11px] text-white/40">
              This interface surfaces demo metrics – pricing & performance are
              illustrative.
            </p>
          </div>
        </div>

        {/* Right: Enhanced Quick Buy */}
        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-surface-800/70 p-6 backdrop-blur-sm shadow-glow space-y-6">
            <div className="text-[11px] uppercase tracking-wide text-white/50">
              Quick Buy
            </div>
            <h3 className="text-xl font-semibold text-white leading-tight">
              Fast lane acquisition
            </h3>
            <p className="text-sm text-white/60">
              Enter either desired card amount or spend amount; preview settlement
              & fee structure.
            </p>

            <div className="space-y-5">
              <div>
                <label className="label">Select Card</label>
                <select
                  value={quickSymbol}
                  onChange={(e) => setQuickSymbol(e.target.value)}
                  className="select w-full"
                >
                  {tokens.map((t) => (
                    <option key={t.symbol}>{t.symbol}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">Buy Amount ({quickSymbol})</label>
                <input
                  value={buyAmount}
                  onChange={(e) => setBuyAmount(e.target.value)}
                  placeholder="0.0000"
                  className="input w-full"
                />
              </div>
              <div>
                <label className="label">Pay (EUR)</label>
                <input
                  value={fiatAmount}
                  onChange={(e) => setFiatAmount(e.target.value)}
                  placeholder="0.00"
                  className="input w-full"
                />
                <p className="text-[11px] text-white/40 mt-2">
                  Indicative rate • Slippage simulated 0.35% • No protocol fee
                  (pilot)
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-[11px]">
                {[
                  ['Slippage', '0.35%'],
                  ['Est. Fee', '€0.00'],
                  ['Settle', '~8s'],
                ].map(([l, v]) => (
                  <div
                    key={l}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-white/60"
                  >
                    <span className="block text-white font-medium text-sm">
                      {v}
                    </span>
                    {l}
                  </div>
                ))}
              </div>
              <button
                disabled={!buyAmount || !fiatAmount}
                className="btn-primary w-full shadow-glow disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Buy Now
              </button>
              <p className="text-[10px] text-white/35">
                By executing you agree to demo Terms – no real settlement occurs.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm space-y-4">
            <h4 className="text-sm font-semibold text-white">Why Hold?</h4>
            <ul className="space-y-2 text-[12px] text-white/60">
              <li>Gates access layers (chat, media, auctions)</li>
              <li>Amplifies governance weight (tier scaled)</li>
              <li>Signals demand for roadmap features</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
