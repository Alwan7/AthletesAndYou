export default function PrepPage() {
  return (
    <div className="section-pad space-y-6">
      <h1 className="h1">Build Challenge — Prep Meeting</h1>
      <p className="text-slate-600 max-w-2xl">
        Reference bullets pasted from the deck for quick alignment:
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="h2 mb-3">Purpose</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Develop business and revenues to support athletes, clubs, teams, and venues.</li>
            <li>Limited-profit enterprise sharing income with the sports ecosystem.</li>
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="h2 mb-3">Concept</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Global content & connectivity platform and digital service.</li>
            <li>Monetize fan engagement through tradable fan cards (tokens).</li>
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="h2 mb-3">Approach</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Leverage the digital & blockchain revolutions.</li>
            <li>Issue limited fan cards on a public blockchain with secure payments.</li>
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="h2 mb-3">User Flow</h2>
          <ol className="list-decimal pl-6 space-y-2 text-slate-700">
            <li>Pick your sport</li>
            <li>Pick your athlete</li>
            <li>Buy token (fan card)</li>
            <li>Enter closed community and access exclusives</li>
          </ol>
        </div>
      </div>
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-2">Assets</h2>
        <p>Drop PDFs and brand guidelines in <code>/public/assets</code> and link them here.</p>
      </div>
    </div>
  );
}
