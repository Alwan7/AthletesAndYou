export interface Athlete {
  slug: string;
  name: string;
  sport: string;
  bio?: string;
  image: string;
  stats?: string[];
  tier?: string;
  status?: 'live' | 'upcoming' | 'closed';
  floor?: string;
  holders?: number;
  supply?: number;
}

export const athletes: Athlete[] = [
  {
    slug: 'ava-johansson',
    name: 'Achraf Hakimi',
    sport: 'Ski Jumping',
    bio: 'Precision-focused jumper pushing aerodynamic efficiency & distance consistency.',
    image: '/hakimi.webp',
    stats: ['PB 232m', 'World Cup Points', 'Nordic Training Cohort'],
    tier: 'Gold',
    status: 'live',
    floor: '$142',
    holders: 380,
    supply: 500,
  },
  {
    slug: 'leo-nilsson',
    name: 'Toni Kroos',
    sport: 'Football',
    bio: 'Creative midfield distributor with vertical pass range & late-run goal threat.',
    image: '/KROOS.webp',
    stats: ['30 Goals', 'Assist Leader', 'Engine Rating 92'],
    tier: 'Elite',
    status: 'live',
    floor: '$88',
    holders: 910,
    supply: 1200,
  },
  {
    slug: 'maya-eriksen',
    name: 'Luka Modric',
    sport: 'Tennis',
    bio: 'Surface-adaptive baseline technician climbing the junior tour ranks.',
    image: '/Modric.webp',
    stats: ['ITF Junior #8', 'Topspin Index 1.14', '3x Finals'],
    tier: 'Rising',
    status: 'upcoming',
    holders: 0,
    supply: 750,
  }
];

export function getAthleteBySlug(slug: string): Athlete | undefined {
  return athletes.find(a => a.slug === slug);
}
