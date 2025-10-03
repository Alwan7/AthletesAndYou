import Link from "next/link";

export default function AthleteProfile({ params }: { params: { slug: string }}) {
  const profile = {
    name: params.slug.split("-").map(s => s[0].toUpperCase()+s.slice(1)).join(" "),
    sport: "Ski Jumping",
    bio: "Rising talent with a record personal best and a growing global fanbase.",
    image: "/athlete-1.jpg",
    stats: ["PB 232m", "Top 10 World Cup", "National Team"]
  };

  return (
    <section className="section-pad grid lg:grid-cols-2 gap-8">
      <div className="card overflow-hidden">
        <img src={profile.image} alt={profile.name} className="w-full h-80 object-cover" />
      </div>
      <div>
        <div className="badge mb-3">{profile.sport}</div>
        <h1 className="h1">{profile.name}</h1>
        <p className="lead">{profile.bio}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {profile.stats.map(s => <li key={s} className="badge">{s}</li>)}
        </ul>
        <div className="mt-6 flex gap-3">
          <a href="/market" className="btn-primary">Buy Fan Card</a>
          <a href="/community" className="btn-ghost">Enter Community</a>
        </div>
        <p className="text-xs text-slate-500 mt-4">Fan cards grant access to exclusive chats, video messages, training sessions, auctions and more.</p>
      </div>
    </section>
  );
}
