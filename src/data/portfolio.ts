export type MediaItem = {
  type: 'image' | 'video'
  src?: string
  alt?: string
}

export type Project = {
  id: string
  name: string
  period: string
  repo: string
  stack: string[]
  description: string
  media: MediaItem[]
  /** Portrait images: fit to frame height, letterbox with black */
  mediaFit?: 'cover' | 'portrait'
  credit?: {
    label: string
    name: string
    href: string
  }
}

export type Certification = {
  id: string
  title: string
  issuer: string
  year: string
  imageSrc?: string
  href?: string
}

export type Experience = {
  id: string
  title: string
  year: string
  detail?: string
  href?: string
  media: MediaItem[]
}

export type TechStackItem = {
  name: string
  /** LelouchFR skill-icons ID — https://github.com/LelouchFR/skill-icons */
  icon: string
}

export const SKILL_ICONS_BASE = 'https://go-skill-icons.vercel.app/api/icons'

export function skillIconUrl(iconId: string) {
  return `${SKILL_ICONS_BASE}?i=${iconId}&theme=dark`
}

/** Prefix public asset paths with Vite base URL (e.g. /portfolio/ on GitHub Pages). */
export function assetUrl(path: string) {
  if (!path || path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  if (!path.startsWith('/')) return path
  return `${import.meta.env.BASE_URL}${path.slice(1)}`
}

export type SiteProfile = {
  name: string
  github: {
    handle: string
    url: string
  }
  linkedin?: string
  email?: string
  phone?: string
  address?: string
  resumeSrc?: string
  status: string
}

export const siteProfile: SiteProfile = {
  name: 'Jeremiah Ramos',
  github: {
    handle: 'tallbreadstick',
    url: 'https://github.com/tallbreadstick',
  },
  linkedin: 'https://www.linkedin.com/in/jeremiah-ramos-75968124a/',
  email: 'ramosthjeremiah@gmail.com',
  phone: '+63 968 611 9340',
  address: 'Sambag II, Cebu City, Cebu, Philippines',
  resumeSrc: '/docs/Jeremiah Ramos - Resume.pdf',
  status: 'seeking interesting problems',
}

export const techStack: TechStackItem[] = [
  { name: 'Rust', icon: 'rust' },
  { name: 'C', icon: 'c' },
  { name: 'Java', icon: 'java' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Spring', icon: 'spring' },
  { name: 'Tokio', icon: 'tokiors' },
  { name: 'Tauri', icon: 'tauri' },
  { name: 'React', icon: 'react' },
  { name: 'SolidJS', icon: 'solidjs' },
  { name: 'NixOS', icon: 'nixos' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'VS Code', icon: 'vscode' },
]

export const projects: Project[] = [
  {
    id: 'ariadne',
    name: 'Ariadne',
    period: '2026',
    repo: 'https://github.com/tallbreadstick/ariadne-extension-vscode',
    stack: ['Rust', 'Tree-sitter', 'Java', 'Spring Boot', 'VS Code', 'SAST'],
    description:
      'A capstone project targeting a common CS/IT student habit: code security as an afterthought. A VS Code extension calls a Rust SAST engine to flag vulnerabilities in Spring Boot projects in real time: hardcoded credentials, sensitive data exposure, CWE-tagged findings surfaced as you write. Designed for habit reinforcement instead of one-click fixes, promoting developer responsibility over convenience.',
    media: [
      {
        type: 'video',
        src: '/media/ariadne/ariadne.mp4',
        alt: 'Ariadne VS Code extension demo',
      },
      {
        type: 'image',
        src: '/media/ariadne/ariadne-1.png',
        alt: 'Hardcoded credentials detected in application.properties',
      },
      {
        type: 'image',
        src: '/media/ariadne/ariadne-2.png',
        alt: 'Sensitive data exposure in AuthController with session metrics',
      },
    ],
  },
  {
    id: 'groundhog',
    name: 'Groundhog',
    period: '2025-2026',
    repo: 'https://github.com/tallbreadstick/groundhog',
    stack: ['Rust', 'SQLite', '7z', 'Linux', 'Windows'],
    description:
      'Immutable directory snapshot manager. Full-copy checkpoints, Merkle-tree delta restore, optional compression and encryption. Not git. Explicit checkpoints only.',
    media: [
      {
        type: 'video',
        src: '/media/groundhog/groundhog.mp4',
        alt: 'Groundhog snapshot and switch demo',
      },
    ],
  },
  {
    id: 'dagger',
    name: 'Dagger',
    period: '2025',
    repo: 'https://github.com/tallbreadstick/dagger',
    stack: ['Rust', 'Tauri', 'SolidJS', 'jwalk', 'rayon'],
    description:
      'Unfinished file explorer from late 2025. Originally scoped as a smart lookup tool with multimodal embeddings and vector DB storage, but currently ships as a fast file navigator. Parallel directory walks via jwalk and rayon outperform Windows Explorer on large trees. Shared thumbnail caches cut repeat load times. Native CF_HDROP interop with the Windows shell: copy, cut, and paste between Dagger and File Explorer. Tauri + SolidJS UI, Rust backend. Untouched since late 2025.',
    media: [
      {
        type: 'video',
        src: '/media/dagger/dagger-1.mp4',
        alt: 'Dagger file navigation demo',
      },
      {
        type: 'video',
        src: '/media/dagger/dagger-2.mp4',
        alt: 'Dagger explorer features demo',
      },
    ],
  },
  {
    id: 'lightning-anti-swear',
    name: 'Lightning Anti-Swear',
    period: '2024',
    repo: 'https://github.com/tallbreadstick/Lightning-Anti-Swear-v2',
    stack: ['Java', 'Spigot', 'Aho-Corasick'],
    description:
      'Minecraft Spigot plugin. Aho-Corasick pattern matching for chat filtration. Violators get struck by lightning. Configurable word lists and damage.',
    media: [
      {
        type: 'video',
        src: '/media/lightning-anti-swear/lightning.mp4',
        alt: 'Lightning Anti-Swear in-game demo',
      },
    ],
  },
  {
    id: 'hexcell',
    name: 'HexCell Calculator',
    period: '2024',
    repo: 'https://github.com/tallbreadstick/hexcell-android',
    stack: ['Rust', 'Tauri', 'SolidJS', 'Android'],
    mediaFit: 'portrait',
    description:
      'First complete project, built 2nd semester of 1st year for Introduction to Computer Systems. Android number-system conversion solver in Rust via Tauri. Convert between binary, octal, decimal, and hex; batch rows with convert/swap/clear; step-by-step breakdowns so you see the math, not just the answer.',
    media: [
      {
        type: 'image',
        src: '/media/hexcell/hexcell-1.png',
        alt: 'Multi-row conversion workspace',
      },
      {
        type: 'image',
        src: '/media/hexcell/hexcell-2.png',
        alt: 'Binary to decimal with step-by-step breakdown',
      },
    ],
  },
  {
    id: 'endzone-echo',
    name: 'Endzone Echo',
    period: '2025',
    repo: 'https://github.com/tallbreadstick/Endzone-Echo',
    stack: ['Java', 'libGDX', 'LWJGL', 'Spatial Hashing'],
    description:
      'Top-down pixel-art shooter, final project for Object-Oriented Programming 2, 2nd semester of 2nd year. Built in Java with libGDX. Collision detection uses spatial hashing. Team effort; unmaintained since early 2025.',
    credit: {
      label: 'Pixel art by',
      name: 'renzymigz',
      href: 'https://github.com/renzymigz',
    },
    media: [
      {
        type: 'video',
        src: '/media/endzone-echo/echo-1.mp4',
        alt: 'Endzone Echo gameplay 1',
      },
      {
        type: 'video',
        src: '/media/endzone-echo/echo-2.mp4',
        alt: 'Endzone Echo gameplay 2',
      },
      {
        type: 'video',
        src: '/media/endzone-echo/echo-3.mp4',
        alt: 'Endzone Echo gameplay 3',
      },
    ],
  },
]

export const certifications: Certification[] = [
  {
    id: 'philnits-fe',
    title: 'PhilNITS FE Passer',
    issuer: 'PhilNITS',
    year: '2026',
    imageSrc: '/certs/philnits-fe.png',
    href: 'https://philnits.org/passers-fe/',
  },
  {
    id: 'codechum-java-top-10',
    title: 'Top 10 CodeChum Java Certification Exam',
    issuer: 'CodeChum · CIT-U',
    year: '2025',
    imageSrc: '/certs/codechum-java-top-10.png',
    href: 'https://citu.codechum.com/certificates/10005',
  },
  {
    id: 'codechum-java',
    title: 'CodeChum Java Certification',
    issuer: 'CodeChum',
    year: '2025',
    imageSrc: '/certs/codechum-java.png',
    href: 'https://citu.codechum.com/certificates/10005',
  },
  {
    id: 'codechum-c',
    title: 'CodeChum C Certification',
    issuer: 'CodeChum',
    year: '2024',
    imageSrc: '/certs/codechum-c.png',
    href: 'https://citu.codechum.com/certificates/767',
  },
  {
    id: 'codechum-npc',
    title: 'CodeChum National Programming Challenge',
    issuer: 'CodeChum',
    year: '2025',
    imageSrc: '/certs/codechum-npc.png',
    href: 'https://citu.codechum.com/certificates/20662',
  },
]

export const experiences: Experience[] = [
  {
    id: 'upcsg-2025',
    title: 'UPCSG Hackathon',
    year: '2025',
    media: [
      {
        type: 'image',
        src: '/experience/5stack.jpg',
        alt: 'Team 5stack on stage',
      },
      {
        type: 'image',
        src: '/experience/upcsg-2025.jpg',
        alt: 'UPCSG certificate',
      },
    ],
  },
  {
    id: 'ibpap-2025',
    title: 'IBPAP Can You Hack It Challenge',
    year: '2025',
    media: [
      {
        type: 'image',
        src: '/experience/hackerxhacker-ibpap.jpg',
        alt: 'Hacking session at IBPAP',
      },
      {
        type: 'image',
        src: '/experience/myself-ibpap.jpg',
        alt: 'At IBPAP hackathon',
      },
    ],
  },
  {
    id: 'codechum-npc-2025',
    title: 'CodeChum National Programming Challenge',
    year: '2025',
    detail: '2nd place',
    media: [
      {
        type: 'image',
        src: '/experience/codechum-citu.jpg',
        alt: 'CIT-U 2nd place team photo',
      },
      {
        type: 'image',
        src: '/experience/codechum-npc.jpg',
        alt: 'NPC 2025 certificate',
      },
    ],
  },
  {
    id: 'polkadot-2026',
    title: 'Polkadot Solidity Hackathon',
    year: '2026',
    detail: '1st runner up',
    media: [
      {
        type: 'image',
        src: '/experience/bloodchainz.jpg',
        alt: 'Team BloodChainz',
      },
      {
        type: 'image',
        src: '/experience/polkadot.jpg',
        alt: '1st runner up certificate',
      },
    ],
  },
  {
    id: 'oltek-2026',
    title: 'Oltek Solutions Hackathon',
    year: '2026',
    detail: '4th runner up',
    media: [
      {
        type: 'image',
        src: '/experience/ochretech.jpg',
        alt: 'OCHRETECH team photo',
      },
      {
        type: 'image',
        src: '/experience/oltek-2026.jpg',
        alt: 'Certificate of participation',
      },
    ],
  },
  {
    id: 'ai-ready-asean-2026',
    title: 'AI-Ready ASEAN Hackathon',
    year: '2026',
    media: [
      {
        type: 'image',
        src: '/experience/aira-2026.jpg',
        alt: 'Certificate of appreciation',
      },
      {
        type: 'image',
        src: '/experience/aira-2026-validation.jpg',
        alt: 'Credential validation details',
      },
    ],
  },
  {
    id: 'ey-servicenow-2026',
    title: 'EY ServiceNow Hackathon',
    year: '2026',
    detail: 'Top 10 finalist',
    media: [
      {
        type: 'image',
        src: '/experience/eygds-2026.jpg',
        alt: 'EY GDS ServiceNow finalist certificate',
      },
    ],
  },
]
