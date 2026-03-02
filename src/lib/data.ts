export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  link: string;
  featured: boolean;
  metrics: {
    revenue: string;
    revenueLabel: string;
    users: string;
    usersLabel: string;
  };
  features: string[];
  websiteUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  githubUrl?: string;
  supportEmail: string;
  privacyPolicyUrl: string;
  termsOfServiceUrl: string;
  howItWorks?: { step: string; title: string; description: string }[];
  highlights?: { title: string; description: string }[];
  targetAudience?: { title: string; description: string; icon: string }[];
  faq?: { question: string; answer: string }[];
  pricing?: {
    plans: {
      name: string;
      price: string;
      period: string;
      badge?: string;
      highlight?: boolean;
    }[];
    trialDays?: number;
    note?: string;
  };
  screenshots?: {
    url: string;
    alt: string;
  }[];
}

export const siteConfig = {
  name: "Pritam",
  title: "Indie Hacker & Builder",
  description:
    "Building SaaS products and iOS apps. Turning ideas into reality.",
  url: "https://pritam.cc",
  links: {
    x: "https://x.com/iPritamX",
    linkedin: "https://linkedin.com/in/pritam-ghosh-dev",
    github: "https://github.com/prthub",
    email: "pritamfinds@gmail.com",
  },
};

export const projects: Project[] = [
  {
    slug: "arc",
    title: "ARC: Circadian Rhythm Tracker",
    description:
      "Circadian rhythm tracker that syncs your schedule with your biology. Discover your chronotype and unlock peak performance.",
    fullDescription:
      "Stop fighting your biology. Start working with it. ARC is a circadian rhythm tracker that maps your Perfect Day using chronobiology. Discover your chronotype, find your Peak Focus Windows, optimize caffeine timing, and anchor your sleep-wake cycle — all backed by science, all stored locally on your device.",
    tags: [
      "iOS",
      "Chronobiology",
      "Health Tech",
      "Productivity",
      "Biohacking",
      "discipline",
    ],
    link: "/apps/arc",
    featured: true,
    metrics: {
      revenue: "$144",
      revenueLabel: "Revenue",
      users: "145",
      usersLabel: "Customers",
    },
    features: [
      "15-Point Precision Diagnosis — calibrates chronotype, age, goals & night habits",
      "Dynamic Daily Trajectory — 24-hour timeline of biological missions",
      "Chronotype Discovery — Lion, Bear, Wolf, or Dolphin identity mapping",
      "Caffeine half-life tracking — calculated cutoff to protect sleep quality",
      "Peak Focus Windows — scientifically timed deep work intervals",
      "Morning Sunlight Anchoring — cortisol & melatonin rhythm optimization",
      "Biological Briefings — context-aware coaching with the science behind each action",
      "Local-first architecture — SQLite on-device, your data never leaves your phone",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Take the Diagnosis",
        description:
          "Answer 15 science-backed questions about your sleep, energy patterns, caffeine habits, and goals. ARC calibrates your unique biological profile.",
      },
      {
        step: "02",
        title: "Discover Your Chronotype",
        description:
          "Find out if you're a Lion (early riser), Bear (steady rhythm), Wolf (night owl), or Dolphin (light sleeper) — and what it means for your daily schedule.",
      },
      {
        step: "03",
        title: "Follow Your Daily Trajectory",
        description:
          "Get a personalized 24-hour timeline with your Peak Focus Windows, optimal caffeine cutoff, sunlight anchoring time, and wind-down routine.",
      },
    ],
    highlights: [
      {
        title: "Science-Backed, Not Guesswork",
        description:
          "Built on peer-reviewed circadian research from Stanford Neuroscience and UC Berkeley Sleep Science. Every recommendation has a citation.",
      },
      {
        title: "Privacy-First Architecture",
        description:
          "All data stays on your device with local-first SQLite storage. No cloud sync, no data harvesting — your biological data never leaves your phone.",
      },
      {
        title: "Not Another Habit Tracker",
        description:
          "ARC doesn't just track what you do — it tells you when to do it. Aligned with your biology, not arbitrary goals.",
      },
      {
        title: "Built for High Performers",
        description:
          "Designed for founders, creators, and biohackers who treat their energy like a resource — not an afterthought.",
      },
    ],
    targetAudience: [
      {
        title: "Founders & Entrepreneurs",
        description:
          "Optimize your decision-making and deep work windows around your natural energy peaks instead of burning out.",
        icon: "rocket",
      },
      {
        title: "Creators & Writers",
        description:
          "Find your creative peak hours and stop forcing output when your brain is wired for rest.",
        icon: "pen",
      },
      {
        title: "Biohackers & Health Enthusiasts",
        description:
          "Go beyond sleep tracking. Understand the cortisol-melatonin rhythm that drives your entire day.",
        icon: "heart",
      },
      {
        title: "Remote Workers",
        description:
          "Design your flexible schedule around biology, not just calendar availability.",
        icon: "laptop",
      },
    ],
    faq: [
      {
        question: "What is a chronotype?",
        answer:
          "A chronotype is your body's natural preference for when to sleep and wake. There are four types: Lion (early riser, peak energy in the morning), Bear (follows the solar cycle, most common), Wolf (night owl, peak energy in the evening), and Dolphin (light sleeper, irregular patterns). ARC identifies yours through a 15-point diagnosis.",
      },
      {
        question: "How is ARC different from a sleep tracker?",
        answer:
          "Sleep trackers tell you how well you slept last night. ARC tells you how to structure your entire day — when to do deep work, when to have caffeine, when to get sunlight, and when to wind down — based on your unique circadian rhythm. It's proactive, not reactive.",
      },
      {
        question: "Is ARC based on real science?",
        answer:
          "Yes. ARC is powered by peer-reviewed research in chronobiology, including work from Dr. Andrew Huberman (Stanford Neuroscience) on light exposure and cortisol rhythms, and Dr. Matthew Walker (UC Berkeley) on sleep science and circadian cycles.",
      },
      {
        question: "Does ARC collect my health data?",
        answer:
          "No. ARC uses a local-first architecture — all your data is stored on your device using SQLite. Nothing is sent to external servers. You can delete everything at any time from the app settings.",
      },
      {
        question: "What does the caffeine cutoff feature do?",
        answer:
          "Caffeine has a half-life of about 5-6 hours, meaning half of it is still in your system hours after you drink it. ARC calculates your personal cutoff time based on your sleep schedule so caffeine doesn't interfere with your sleep quality.",
      },
      {
        question: "Is ARC free?",
        answer:
          "ARC offers a free tier with core chronotype discovery and daily trajectory features. ARC Pro unlocks detailed biological briefings, advanced caffeine tracking, and more — available as a weekly ($3.99/week), monthly ($9.99/month), or yearly plan ($29.99/year, save 75%). All plans include a 3-day free trial.",
      },
    ],
    pricing: {
      plans: [
        {
          name: "Weekly",
          price: "$3.99",
          period: "week",
        },
        {
          name: "Monthly",
          price: "$9.99",
          period: "month",
        },
        {
          name: "Yearly",
          price: "$29.99",
          period: "year",
          badge: "Save 75%",
          highlight: true,
        },
      ],
      trialDays: 3,
      note: "Payment will be charged to your Apple ID account at confirmation of purchase. Subscription automatically renews unless canceled at least 24 hours before the end of the current period. Manage subscriptions in your App Store account settings.",
    },
    appStoreUrl:
      "https://apps.apple.com/us/app/arc-sync-your-life/id6758214892",
    supportEmail: "pritamfinds@gmail.com",
    privacyPolicyUrl:
      "https://www.notion.so/Privacy-Policy-for-ARC-Sync-Your-Life-2f2af72016c9802bace6fddd4a1ed526",
    termsOfServiceUrl:
      "https://www.notion.so/Terms-of-Service-for-ARC-Sync-Your-Life-2f2af72016c980c8be7be0bacf1ee076",
    screenshots: [
      { url: "/apps/arc/01.png", alt: "ARC Chronotype Discovery" },
      { url: "/apps/arc/02.png", alt: "Daily Trajectory Timeline" },
      { url: "/apps/arc/03.png", alt: "Peak Focus Windows" },
      { url: "/apps/arc/04.png", alt: "Caffeine Cutoff Tracker" },
      { url: "/apps/arc/05.png", alt: "Sleep & Wake Optimization" },
      { url: "/apps/arc/06.png", alt: "Circadian Rhythm Analytics" },
      { url: "/apps/arc/07.png", alt: "Biological Briefings" },
      { url: "/apps/arc/08.png", alt: "Settings & Preferences" },
    ],
  },
  {
    slug: "hackerbadges",
    title: "HackerBadges: Ship Products, Get Proof.",
    description:
      "Automated receipt engine for indie hackers. Turn raw Stripe & LemonSqueezy data into verified milestone badges and public product pages.",
    fullDescription:
      "In a world of fake revenue screenshots, HackerBadges builds trust. Connect your Stripe or LemonSqueezy account and automatically generate verified milestone badges, public product pages, and a Failure Hall of Fame — all backed by real API data.",
    tags: [
      "Next.js",
      "Convex",
      "Tailwind CSS",
      "SaaS",
      "Indie Hackers",
      "Neobrutalism",
    ],
    link: "/apps/hackerbadges",
    featured: true,
    metrics: {
      revenue: "$38",
      revenueLabel: "Revenue",
      users: "200",
      usersLabel: "Customers",
    },
    features: [
      "Verified milestone badges — auto-generated from Stripe, LemonSqueezy & Polar.sh",
      "10+ premium badge themes — Brutal, Neon, Glass, Terminal & more",
      "Public product pages — SEO-optimized startup profiles with live metrics",
      "Failure Hall of Fame — celebrate the Ls that made you better",
      "Interactive timeline — visual history of launches, pivots & milestones",
      "Founder's Note — rich-text section for sharing your story",
      "Tech stack showcase — display the tools powering your product",
      "Auto-generation — badges created when you hit $1k, $5k, $10k MRR thresholds",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Connect Your Revenue Source",
        description:
          "Link your Stripe, LemonSqueezy, or Polar.sh account. HackerBadges securely reads your revenue and customer data via API.",
      },
      {
        step: "02",
        title: "Badges Generate Automatically",
        description:
          "Hit a milestone? A verified badge is auto-created with your real metrics. Choose from 10+ premium design themes to match your brand.",
      },
      {
        step: "03",
        title: "Share & Build Trust",
        description:
          "Embed badges in your README, share on X, or send your public product page. Every metric is API-verified — no screenshots needed.",
      },
    ],
    highlights: [
      {
        title: "API-Verified, Not Self-Reported",
        description:
          "Every badge pulls data directly from Stripe/LemonSqueezy APIs. No inspect-element tricks — real metrics, verifiable proof.",
      },
      {
        title: "Neobrutalist Design System",
        description:
          "Bold borders, hard shadows, and high-contrast colors. HackerBadges looks nothing like generic SaaS — it's built to stand out.",
      },
      {
        title: "Built for the Build-in-Public Movement",
        description:
          "Transparency is your marketing. Public product pages, milestone timelines, and even failure badges build genuine credibility.",
      },
      {
        title: "One-Time Payment, Lifetime Access",
        description:
          "No subscriptions, no recurring fees. Pay once and get unlimited verified badges, premium themes, and integrations forever.",
      },
    ],
    targetAudience: [
      {
        title: "Indie Hackers & Solo Founders",
        description:
          "Prove your traction with verified revenue badges instead of cropped screenshots. Build trust with potential customers and collaborators.",
        icon: "rocket",
      },
      {
        title: "Build-in-Public Creators",
        description:
          "Share real, verified milestones with your audience. Turn every revenue milestone into shareable social proof.",
        icon: "pen",
      },
      {
        title: "Open Source Maintainers",
        description:
          "Embed verified badges in your README to show that your project has real traction and a sustainable business model.",
        icon: "laptop",
      },
      {
        title: "Startup Communities",
        description:
          "Create a culture of verified transparency. Celebrate wins and failures alike with the Failure Hall of Fame.",
        icon: "heart",
      },
    ],
    faq: [
      {
        question: "How does badge verification work?",
        answer:
          "HackerBadges connects directly to your Stripe, LemonSqueezy, or Polar.sh account via their official APIs. When you hit a milestone (e.g., $1k MRR, 100 customers), we read the actual data from the source — no manual input, no self-reporting. Each badge is stamped with a verified seal.",
      },
      {
        question: "What badge styles are available?",
        answer:
          "We offer 10+ premium themes: Brutal (neobrutalist with hard shadows), Neon (vibrant glow), Glass (glassmorphism), Terminal (hacker/CLI aesthetic), and more. We also have special Failure styles like 'Cracked' and 'BSOD' for the Failure Hall of Fame.",
      },
      {
        question: "What are public product pages?",
        answer:
          "Each product gets a public URL (/p/your-product) that acts as a verified company profile. It includes live metrics synced from your integrations, a founder's note, an interactive timeline, badge showcase, and tech stack display — all SEO-optimized.",
      },
      {
        question: "What is the Failure Hall of Fame?",
        answer:
          "A dedicated space to celebrate lessons learned. Create badges for milestones like '0 Upvotes on Product Hunt', 'Refunded First Customer', or 'Pivot #4'. Because the path to $10k MRR is paved with failed experiments — and that's worth showing.",
      },
      {
        question: "Is there a free plan?",
        answer:
          "Yes! The free tier includes unlimited manual badge generation, 1 public product page, basic styles, and access to the global Win Feed. Lifetime access ($19 one-time) unlocks automated verification, premium themes, unlimited products, and boosted visibility.",
      },
      {
        question: "Why one-time payment instead of a subscription?",
        answer:
          "HackerBadges is built by an indie hacker, for indie hackers. We know the pain of subscription fatigue. Pay $19 once and get lifetime access to every feature — including all future updates and new badge themes.",
      },
    ],
    pricing: {
      plans: [
        {
          name: "Free",
          price: "$0",
          period: "forever",
        },
        {
          name: "Lifetime Access",
          price: "$19",
          period: "one-time",
          badge: "Best Value",
          highlight: true,
        },
      ],
      note: "One-time payment. No subscriptions. Includes all future updates and new badge themes.",
    },
    websiteUrl: "https://hackerbadges.com",
    supportEmail: "pritamfinds@gmail.com",
    privacyPolicyUrl: "https://hackerbadges.com/privacy",
    termsOfServiceUrl: "https://hackerbadges.com/terms",
  },
  {
    slug: "goodfriend",
    title: "Good Friend: Stay Connected",
    description:
      "Never miss a moment with the people who matter. Intuitive reminders for staying connected with your closest friends.",
    fullDescription:
      "Good Friend is a simple, private iOS app that helps you stay connected with the people who matter most. Set contact frequency for each friend, get gentle reminders when it's time to reach out, and log your conversations — all stored locally on your device with zero tracking.",
    tags: [
      "iOS",
      "Expo",
      "Personal CRM",
      "Relationships",
      "Social",
      "Wellness",
      "Privacy-First",
    ],
    link: "/apps/goodfriend",
    featured: true,
    metrics: {
      revenue: "$0",
      revenueLabel: "Revenue",
      users: "11",
      usersLabel: "Active Users",
    },
    features: [
      "Smart onboarding — Contact import, priority ranking, frequency setup in 5 minutes",
      "Today tab — Action cards showing who needs attention, sorted by priority",
      "Circle view — All your friends at a glance with last contact status",
      "Birthday & date tracking — Never miss important dates with smart notifications",
      "Gift idea & notes — Remember what your friends love and context from past convos",
      "Post-call logging — Quick 'What did you talk about?' capture after connections",
      "Overdue indicators — Visual alerts for friends you haven't reached in a while",
      "100% local storage — SQLite on-device, no cloud, no tracking, no accounts",
      "Customizable reminders — Gentle, Balanced, or Accountable notification styles",
      "RevenueCat subscription — 3-day free trial, then $3.99/week or $29.99/year",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Import Your Circle",
        description:
          "Add 5+ of your closest friends from your contacts. Select your top 3 priority friends and set how often you want to connect with each.",
      },
      {
        step: "02",
        title: "Get Gentle Nudges",
        description:
          "Good Friend reminds you when it's time to reach out based on your contact frequency. Choose your reminder style — Gentle, Balanced, or Accountable.",
      },
      {
        step: "03",
        title: "Stay Accountable",
        description:
          "Log your connections with a tap, capture what you talked about, and watch your streak grow. All your data stays on your phone.",
      },
    ],
    highlights: [
      {
        title: "Designed for Real Friendships",
        description:
          "Not a social network. Just you, your friends, and a gentle nudge when it's time to reconnect.",
      },
      {
        title: "100% Private & Local",
        description:
          "Every conversation log, note, and birthday stays on your device. No accounts, no tracking, no cloud.",
      },
      {
        title: "Simple & Distraction-Free",
        description:
          "No feeds, no likes, no notifications from the app itself — just timely reminders to reach out to people you care about.",
      },
      {
        title: "Built with React Native",
        description:
          "Native iOS performance powered by Expo, with Drizzle ORM for rock-solid local data management.",
      },
    ],
    targetAudience: [
      {
        title: "Busy Founders & Creators",
        description:
          "You care about your friendships but get buried in work. Good Friend keeps you accountable without adding another task.",
        icon: "rocket",
      },
      {
        title: "Introverts & Remote Workers",
        description:
          "Connection doesn't always come naturally, but it matters. A gentle nudge to stay in touch with your inner circle.",
        icon: "heart",
      },
      {
        title: "Long-Distance Friends",
        description:
          "Miles apart but still close. Track important dates, birthdays, and keep a record of what's happening in each other's lives.",
        icon: "laptop",
      },
      {
        title: "People Who Value Privacy",
        description:
          "Done with apps that harvest your data. Good Friend respects your privacy — everything stays on your device.",
        icon: "pen",
      },
    ],
    faq: [
      {
        question: "Is Good Friend really free?",
        answer:
          "Good Friend offers a 3-day free trial with full access. After that, you can subscribe at $3.99/week or $29.99/year. We also have plans for a free tier with limited friends soon.",
      },
      {
        question: "How many friends can I add?",
        answer:
          "You can add as many friends as you want. We recommend focusing on your closest 5-20 friends for the best experience — these are the people who matter most.",
      },
      {
        question: "Does Good Friend access my contacts?",
        answer:
          "Good Friend only accesses contacts you explicitly select during setup. We don't auto-import your entire contact list or sync anything to the cloud.",
      },
      {
        question: "What happens if I delete the app?",
        answer:
          "All your data is stored locally on your device. If you delete the app, your data is deleted too. We recommend subscribing so you have access to the app continuously.",
      },
      {
        question: "Can I export my data?",
        answer:
          "Currently, Good Friend stores everything locally on your device. Data export is on our roadmap.",
      },
      {
        question: "Why no cloud sync?",
        answer:
          "We designed Good Friend to be private by default. No accounts, no servers, no tracking. Your friendships are yours alone.",
      },
    ],
    pricing: {
      plans: [
        {
          name: "3-Day Trial",
          price: "Free",
          period: "trial",
        },
        {
          name: "Weekly",
          price: "$3.99",
          period: "week",
        },
        {
          name: "Yearly",
          price: "$29.99",
          period: "year",
          badge: "Save 75%",
          highlight: true,
        },
      ],
      trialDays: 3,
      note: "Payment will be charged to your Apple ID account at confirmation of purchase. Subscription automatically renews unless canceled at least 24 hours before the end of the current period. Manage subscriptions in your App Store account settings.",
    },
    appStoreUrl:
      "https://apps.apple.com/us/app/goodfriend-stay-connected/id6758581803",
    supportEmail: "pritamfinds@gmail.com",
    privacyPolicyUrl: "https://www.notion.so/Privacy-Policy-Good-Friend-abc123",
    termsOfServiceUrl:
      "https://www.notion.so/Terms-of-Service-Good-Friend-abc123",
    screenshots: [
      { url: "/apps/goodfriend/01.png", alt: "Onboarding - Import Friends" },
      { url: "/apps/goodfriend/02.png", alt: "Today Tab - Action Cards" },
      { url: "/apps/goodfriend/03.png", alt: "Circle View - Friends Overview" },
      { url: "/apps/goodfriend/04.png", alt: "Friend Details - Settings" },
      { url: "/apps/goodfriend/05.png", alt: "You Tab - Stats Dashboard" },
      { url: "/apps/goodfriend/06.png", alt: "Notifications & Reminders" },
    ],
  },
  {
    slug: "pickone",
    title: "Pick One: Decision Maker",
    description:
      "Stop second-guessing. Pick One is a fast randomization engine built around the Commitment Pact — once the machine decides, you commit. Industrial Noir aesthetic, zero subscriptions.",
    fullDescription:
      "In an era of decision fatigue, Pick One acts as the final arbiter. Built around the philosophy of The Pact — once the machine selects an outcome, you commit to it. No second-guessing, no infinite scrolling, no regret spirals. Add your options, hit Decide, get a verdict. The Sacred Veto gives you one override per session. The Decision Vault tracks every choice you've made. Built with an uncompromising Industrial Noir aesthetic that makes every verdict feel final.",
    tags: [
      "iOS",
      "Expo",
      "React Native",
      "Utilities",
      "Productivity",
      "Decision Making",
    ],
    link: "/apps/pickone",
    featured: true,
    metrics: {
      revenue: "$0",
      revenueLabel: "Coming Soon",
      users: "Beta",
      usersLabel: "Status",
    },
    features: [
      "The Workspace — minimalist dashboard to input options and hit Decide in seconds",
      "Sacred Veto — reject a verdict and trigger a re-spin (3 vetos, 5-min recharge)",
      "Commitment Pact — psychological lock-in that makes the machine's verdict feel final",
      "Decision Vault — full history log of every option set and machine verdict",
      "Kits — pre-built decision blueprints for food, entertainment, and wellness",
      "Custom Kits — build and save your own reusable option sets",
      "Veto Recharge Notification — local alert when your vetos are restored",
      "Daily Nudge — rotating 8PM prompt to re-engage with the app",
      "Pick One Pro — unlimited daily spins via one-time lifetime purchase ($12.99)",
      "Local-first architecture — SQLite on-device, no accounts, no cloud",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Add Your Options",
        description:
          "Open the Workspace and type in your choices — restaurants, movies, tasks, whatever you're stuck on. Or load a pre-built Kit to skip the setup.",
      },
      {
        step: "02",
        title: "Hit Decide",
        description:
          "The machine runs its randomization engine and renders a verdict. One answer. No hedging. Free users get 2 spins per day — enough to feel the core loop.",
      },
      {
        step: "03",
        title: "Honor The Pact",
        description:
          "Commit to the verdict. If it genuinely doesn't work, use a Sacred Veto for a re-spin. Every decision is logged in the Vault for pattern analysis over time.",
      },
    ],
    highlights: [
      {
        title: "The Commitment Pact",
        description:
          "Unlike generic randomizers, Pick One is built around a psychological contract. The machine decides — you commit. It's designed to break the loop of infinite re-rolling and second-guessing.",
      },
      {
        title: "Industrial Noir Aesthetic",
        description:
          "Deep blacks, charcoal grays, and Sacred Orange accents. Every verdict feels like a final ruling, not a casual suggestion. Built for people who take their decisions seriously.",
      },
      {
        title: "Zero Subscriptions",
        description:
          "Pay once ($12.99) for lifetime unlimited spins. No monthly fees, no renewal anxiety, no dark patterns. Free tier gives you 2 daily spins to experience the full loop.",
      },
      {
        title: "Local-First & Private",
        description:
          "All choices, history, and kits are stored locally via SQLite. No accounts required, no data sent to servers. Your decisions are yours alone.",
      },
    ],
    targetAudience: [
      {
        title: "Chronically Indecisive People",
        description:
          "You spend 20 minutes picking a restaurant and still feel bad about the choice. Pick One cuts the loop with a final, committed verdict.",
        icon: "rocket",
      },
      {
        title: "Founders & Solopreneurs",
        description:
          "Decision fatigue is real. Outsource low-stakes choices to the machine so you can save mental energy for what matters.",
        icon: "pen",
      },
      {
        title: "Couples & Groups",
        description:
          "End the 'I don't know, what do you want?' loop. Add everyone's options and let the machine settle it once and for all.",
        icon: "heart",
      },
      {
        title: "People Who Hate Subscriptions",
        description:
          "One-time payment, lifetime access. No recurring charges, no feature gating after updates. The anti-SaaS productivity tool.",
        icon: "laptop",
      },
    ],
    faq: [
      {
        question: "What is the Commitment Pact?",
        answer:
          "The Commitment Pact is the core philosophy of Pick One. Once the machine selects a verdict, the app psychologically encourages you to honor it. The Sacred Veto exists for genuine conflicts — not as a re-roll button. The pact is what separates Pick One from a generic randomizer.",
      },
      {
        question: "What is a Sacred Veto?",
        answer:
          "A Sacred Veto lets you reject a machine verdict and trigger a re-spin. Free users get 3 vetos with a 5-minute recharge timer. A local notification alerts you when your vetos are restored. Pro users enjoy unlimited spins as part of the full experience.",
      },
      {
        question: "What do I get for free?",
        answer:
          "Free users get 2 decision spins per day, 3 Sacred Vetos (5-minute recharge), access to pre-built Kits, and the full Decision Vault. It's enough to feel the complete loop and understand the value before going Pro.",
      },
      {
        question: "What does Pick One Pro include?",
        answer:
          "Pick One Pro is a one-time $12.99 lifetime purchase via the App Store. It unlocks unlimited daily decision spins. No subscriptions, no recurring charges, no feature gating — pay once, use forever.",
      },
      {
        question: "What are Kits?",
        answer:
          "Kits are pre-built decision blueprints for common choices — Gastronomy (meals, restaurants), Entertainment (movies, shows, activities), and Wellness (workout or recovery options). You can also create and save fully custom kits for your own recurring decisions.",
      },
      {
        question: "Is my data private?",
        answer:
          "Completely. Pick One uses a local-first architecture — all options, verdicts, and history are stored on your device via SQLite. No accounts, no cloud sync, no data harvesting. Delete the app and everything is gone.",
      },
    ],
    pricing: {
      plans: [
        {
          name: "Free",
          price: "$0",
          period: "forever",
        },
        {
          name: "Lifetime Pro",
          price: "$12.99",
          period: "one-time",
          badge: "Best Value",
          highlight: true,
        },
      ],
      note: "One-time payment. No subscriptions. Unlimited spins forever. Payment processed through Apple App Store.",
    },
    supportEmail: "pritamfinds@gmail.com",
    privacyPolicyUrl:
      "https://www.notion.so/Privacy-Policy-3155acbc998980cc9bcfc8622d799bc8",
    termsOfServiceUrl:
      "https://www.notion.so/Terms-of-Service-3155acbc998980aa95c6f4c3d4d822c3",
    screenshots: [
      { url: "/apps/pick-one/01.png", alt: "" },
      { url: "/apps/pick-one/02.png", alt: "Today Tab - Action Cards" },
      { url: "/apps/pick-one/03.png", alt: "Circle View - Friends Overview" },
      { url: "/apps/pick-one/04.png", alt: "Friend Details - Settings" },
      { url: "/apps/pick-one/05.png", alt: "You Tab - Stats Dashboard" },
    ],
  },
];

// Calculate totals from projects
export const totalRevenue = "$182";
export const totalUsers = "500+";

export const skills = [
  "Next.js",
  "TypeScript",
  "React",
  "React Native",
  "Expo",
  "Convex",
  "Tailwind CSS",
  "PostgreSQL",
  "Vercel",
  "AI Editors",
];

export const stats = [
  { label: "Monthly Revenue", value: totalRevenue },
  { label: "Total Users", value: totalUsers },
  { label: "Products Shipped", value: "5+" },
];
