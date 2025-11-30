export interface ChannelStats {
  subscribers: string
  subscribersNum: number
  avgViews: string
  avgViewsNum: number
  totalViews: string
  totalViewsNum: number
  videos?: number
  engagementRate?: string
  avgLikes?: string
  avgComments?: string
  uploadFrequency?: string
}

export interface Demographics {
  ageGroups: { range: string; percentage: number }[]
  gender: { male: number; female: number; other: number }
  topCountries: { country: string; percentage: number }[]
}

export interface VideoHighlight {
  title: string
  views: string
  thumbnail?: string
  url?: string
}

export interface Channel {
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  story: string
  thumbnail: string
  bannerColor: string
  stats: ChannelStats
  platforms: ('youtube' | 'instagram' | 'tiktok')[]
  tags: string[]
  contentTypes: string[]
  targetAudience: string[]
  demographics: Demographics
  highlights: VideoHighlight[]
  uniqueSellingPoints: string[]
  cooperationFormats: string[]
  founded: string
  youtubeUrl?: string
  instagramUrl?: string
  tiktokUrl?: string
}

export const channels: Channel[] = [
  {
    slug: 'oma-geht-steil',
    name: 'Oma geht steil',
    tagline: 'Die coolste Oma Deutschlands testet alles',
    description: 'Trends, Reactions, Food-Tests und vieles mehr mit der coolsten Oma Deutschlands.',
    longDescription: 'Was passiert, wenn eine 80-jährige Oma die neuesten Trends testet, auf virale Videos reagiert und exotisches Essen probiert? Pure Unterhaltung! "Oma geht steil" zeigt, dass Alter nur eine Zahl ist. Mit ihrem einzigartigen Humor und authentischen Reaktionen begeistert sie Millionen Zuschauer aller Altersgruppen.',
    story: 'Alles begann mit einem viralen Clip: Oma Hildegard (80) probiert zum ersten Mal Bubble Tea und kommentiert das Geschehen mit ihrer unnachahmlichen Art. Das Video explodierte – 5 Millionen Views in einer Woche. Heute ist "Oma geht steil" einer der einzigartigsten Entertainment-Kanäle Deutschlands. Der Kanal verbindet Generationen, bringt Familien zusammen vor den Bildschirm und beweist: Für Spaß und Neugier ist man nie zu alt.',
    thumbnail: '/images/channels/oma-geht-steil.jpg',
    bannerColor: 'from-pink-500 via-rose-500 to-orange-500',
    stats: {
      subscribers: '400K+',
      subscribersNum: 420000,
      avgViews: '500K',
      avgViewsNum: 500000,
      totalViews: '150M+',
      totalViewsNum: 150000000,
      videos: 245,
      engagementRate: '8.5%',
      avgLikes: '35K',
      avgComments: '2.5K',
      uploadFrequency: '3x pro Woche',
    },
    platforms: ['youtube', 'instagram', 'tiktok'],
    tags: ['Entertainment', 'Reactions', 'Food', 'Trends', 'Comedy', 'Family-Friendly'],
    contentTypes: [
      'Trend-Tests',
      'Reaction Videos',
      'Food-Tastings',
      'Generationen-Challenges',
      'Produkt-Reviews',
      'Lifestyle-Content',
    ],
    targetAudience: [
      'Entertainment-Fans (13-45)',
      'Familien',
      'Food-Enthusiasten',
      'Comedy-Fans',
      'Generationen-übergreifendes Publikum',
    ],
    demographics: {
      ageGroups: [
        { range: '13-17', percentage: 18 },
        { range: '18-24', percentage: 30 },
        { range: '25-34', percentage: 28 },
        { range: '35-44', percentage: 14 },
        { range: '45+', percentage: 10 },
      ],
      gender: { male: 45, female: 52, other: 3 },
      topCountries: [
        { country: 'Deutschland', percentage: 72 },
        { country: 'Österreich', percentage: 12 },
        { country: 'Schweiz', percentage: 8 },
        { country: 'Andere', percentage: 8 },
      ],
    },
    highlights: [
      { title: 'Oma probiert Bubble Tea zum ersten Mal', views: '5.2M' },
      { title: 'Oma reagiert auf Gen-Z Trends', views: '3.8M' },
      { title: 'Enkel vs. Oma – TikTok Challenge', views: '2.9M' },
      { title: 'Oma testet exotisches Street Food', views: '2.4M' },
      { title: 'Die besten Oma-Sprüche Compilation', views: '1.8M' },
    ],
    uniqueSellingPoints: [
      'Einzigartiges Konzept – keine Konkurrenz',
      'Extrem hohe Engagement-Rate (8.5%)',
      'Family-friendly Content',
      'Viral-Potenzial bei jedem Video',
      'Generationen-übergreifende Reichweite',
      'Authentisch und unscripted',
    ],
    cooperationFormats: [
      'Product Placements & Tastings',
      'Dedicated Videos (Oma testet dein Produkt)',
      'Generationen-Challenges mit Markenintegration',
      'Social Media Takeovers',
      'Event-Auftritte',
    ],
    founded: '2022',
    youtubeUrl: 'https://youtube.com/@omagehtsteil',
    instagramUrl: 'https://instagram.com/omagehtsteil',
    tiktokUrl: 'https://www.tiktok.com/@omagehtsteil.official',
  },
  {
    slug: 'senioren-zocken',
    name: 'Senioren Zocken',
    tagline: 'Gaming kennt kein Alter',
    description: 'Der Gaming-Kanal, der zeigt: Zocken ist für alle da – egal ob 18 oder 80.',
    longDescription: 'Senioren Zocken ist der Gaming-Kanal, der beweist, dass Gaming keine Altersgrenzen kennt. Mit einer treuen Community von über 700K Abonnenten liefert der Kanal authentischen Gaming-Content, der unterhält und verbindet. Von Let\'s Plays bis zu Community-Events – hier ist Gaming mehr als nur ein Hobby.',
    story: 'Senioren Zocken startete 2021 mit einer einfachen Idee: Was passiert, wenn Senioren die Gaming-Welt entdecken? Die Reaktionen waren überwältigend. Die authentischen Reaktionen, die ehrlichen Kommentare und der generationsübergreifende Humor kamen an. Innerhalb von 18 Monaten wuchs der Kanal auf über 500K Abonnenten. Heute ist Senioren Zocken einer der am schnellsten wachsenden Gaming-Kanäle im deutschsprachigen Raum.',
    thumbnail: '/images/channels/senioren-zocken.jpg',
    bannerColor: 'from-blue-500 via-purple-500 to-cyan-500',
    stats: {
      subscribers: '700K+',
      subscribersNum: 720000,
      avgViews: '800K',
      avgViewsNum: 800000,
      totalViews: '350M+',
      totalViewsNum: 350000000,
      videos: 412,
      engagementRate: '7.2%',
      avgLikes: '45K',
      avgComments: '3.2K',
      uploadFrequency: '5x pro Woche',
    },
    platforms: ['youtube', 'tiktok'],
    tags: ['Gaming', 'Entertainment', 'Community', 'Let\'s Play', 'Senioren', 'Comedy'],
    contentTypes: [
      'Gaming Let\'s Plays',
      'Senioren spielen zum ersten Mal',
      'Multiplayer Sessions',
      'Community Events',
      'Game Reviews',
      'Gaming Reactions',
    ],
    targetAudience: [
      'Gaming-Fans (16-45)',
      'Familien',
      'Comedy-Liebhaber',
      'Casual Gamers',
      'Generationen-übergreifendes Publikum',
    ],
    demographics: {
      ageGroups: [
        { range: '13-17', percentage: 22 },
        { range: '18-24', percentage: 38 },
        { range: '25-34', percentage: 28 },
        { range: '35-44', percentage: 9 },
        { range: '45+', percentage: 3 },
      ],
      gender: { male: 68, female: 29, other: 3 },
      topCountries: [
        { country: 'Deutschland', percentage: 68 },
        { country: 'Österreich', percentage: 14 },
        { country: 'Schweiz', percentage: 10 },
        { country: 'Andere', percentage: 8 },
      ],
    },
    highlights: [
      { title: 'Opa spielt GTA zum ersten Mal', views: '4.5M' },
      { title: 'Senioren testen Fortnite', views: '3.2M' },
      { title: 'Oma vs. Enkel – Minecraft Challenge', views: '2.8M' },
      { title: 'Rentner reagieren auf GTA 6 Trailer', views: '2.1M' },
      { title: 'Senioren spielen FIFA – Chaos pur!', views: '1.9M' },
    ],
    uniqueSellingPoints: [
      'Einzigartiges Gaming-Konzept mit Senioren',
      'Schnell wachsende, aktive Community',
      'Hohe Upload-Frequenz (5x/Woche)',
      'Virales Potential durch authentische Reaktionen',
      'Cross-Plattform Präsenz',
      'Generationen-verbindender Content',
    ],
    cooperationFormats: [
      'Sponsored Let\'s Plays',
      'Game Launch Coverage',
      'Hardware Reviews & Unboxings',
      'Community Gewinnspiele',
      'Branded Gaming Sessions',
      'Event-Kooperationen',
    ],
    founded: '2021',
    youtubeUrl: 'https://www.youtube.com/@seniorenzocken.official',
    tiktokUrl: 'https://tiktok.com/@seniorenzocken',
  },
]

export const totalStats = {
  subscribers: 1100000,
  instagramFollowers: 80000,
  totalViews: 500000000,
  cooperations: 50,
}

export function getChannelBySlug(slug: string): Channel | undefined {
  return channels.find((channel) => channel.slug === slug)
}
