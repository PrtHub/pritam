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
  privacyPolicy: string;
  termsOfService: string;
}

export const siteConfig = {
  name: "Pritam",
  title: "Indie Hacker & Builder",
  description: "Building SaaS products and iOS apps. Turning ideas into reality.",
  url: "https://pritam.dev",
  links: {
    x: "https://x.com/iPritamX",
    linkedin: "https://linkedin.com/in/pritam-ghosh-dev",
    github: "https://github.com/prthub",
    email: "pritamfinds@gmail.com",
  },
};

export const projects: Project[] = [
  {
    slug: "saas-starter-kit",
    title: "SaaS Starter Kit",
    description:
      "A complete boilerplate for launching SaaS products fast. Includes authentication, payments, and a beautiful dashboard.",
    fullDescription:
      "SaaS Starter Kit is the ultimate boilerplate for entrepreneurs and developers who want to launch their SaaS products quickly. Built with modern technologies, it includes everything you need: user authentication, subscription payments with Stripe, a beautiful admin dashboard, email notifications, and more. Stop reinventing the wheel and focus on what makes your product unique.",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    link: "/projects/saas-starter-kit",
    featured: true,
    metrics: {
      revenue: "$12K",
      revenueLabel: "MRR",
      users: "1.2K",
      usersLabel: "Customers",
    },
    features: [
      "User authentication with email, Google, and GitHub",
      "Subscription payments with Stripe",
      "Beautiful admin dashboard",
      "Email notifications with Resend",
      "Database with Prisma ORM",
      "Fully responsive design",
    ],
    websiteUrl: "https://saas-starter.pritam.dev",
    supportEmail: "pritamfinds@gmail.com",
    privacyPolicy: `*Last updated: January 2025*

This Privacy Policy describes how SaaS Starter Kit ("we", "us", or "our") collects, uses, and shares information about you when you use our website and services.

## Information We Collect

We collect information you provide directly, such as your name, email address, and payment information when you create an account or make a purchase.

## How We Use Your Information

We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.

## Information Sharing

We do not sell your personal information. We may share information with service providers who assist us in operating our services.

## Data Security

We implement appropriate security measures to protect your personal information.

## Contact Us

If you have questions about this Privacy Policy, please contact us at pritamfinds@gmail.com.`,
    termsOfService: `*Last updated: January 2025*

These Terms of Service govern your use of SaaS Starter Kit.

## Acceptance of Terms

By accessing or using our services, you agree to be bound by these terms.

## Use of Services

You may use our services only for lawful purposes and in accordance with these terms.

## Intellectual Property

The service and its original content remain the property of SaaS Starter Kit.

## Limitation of Liability

We shall not be liable for any indirect, incidental, special, or consequential damages.

## Changes to Terms

We reserve the right to modify these terms at any time.

## Contact

For questions about these terms, contact us at pritamfinds@gmail.com.`,
  },
  {
    slug: "finance-tracker",
    title: "Finance Tracker",
    description:
      "iOS app for personal finance tracking with smart budgeting, expense categorization, and financial insights.",
    fullDescription:
      "Finance Tracker is a powerful iOS app designed to help you take control of your personal finances. With intelligent expense categorization, smart budgeting features, and detailed financial insights, you'll always know where your money is going. Set savings goals, track investments, and get personalized recommendations to improve your financial health.",
    tags: ["iOS", "Swift", "SwiftUI", "Core Data"],
    link: "/projects/finance-tracker",
    featured: true,
    metrics: {
      revenue: "$8K",
      revenueLabel: "MRR",
      users: "15K",
      usersLabel: "Downloads",
    },
    features: [
      "Automatic expense categorization",
      "Smart budgeting with alerts",
      "Beautiful charts and reports",
      "Savings goals tracking",
      "Bank sync integration",
      "Privacy-first design",
    ],
    appStoreUrl: "https://apps.apple.com/app/finance-tracker",
    supportEmail: "pritamfinds@gmail.com",
    privacyPolicy: `*Last updated: January 2025*

Finance Tracker ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we handle your information.

## Data Collection

Finance Tracker processes your financial data locally on your device. We do not collect or store your personal financial information on our servers.

## iCloud Sync

If you enable iCloud sync, your data is stored in your personal iCloud account, which is protected by Apple's security measures.

## Analytics

We collect anonymous usage analytics to improve the app experience. This data cannot be used to identify you personally.

## Third-Party Services

If you use bank sync features, your data is processed securely through our banking partner with bank-level encryption.

## Your Rights

You can delete all your data at any time by deleting the app from your device.

## Contact

For privacy concerns, contact us at pritamfinds@gmail.com.`,
    termsOfService: `*Last updated: January 2025*

These Terms of Service govern your use of the Finance Tracker app.

## Acceptance

By downloading or using Finance Tracker, you agree to these terms.

## License

We grant you a limited, non-exclusive license to use the app for personal finance management.

## Your Responsibilities

You are responsible for maintaining the accuracy of data you enter and keeping your device secure.

## Financial Advice Disclaimer

Finance Tracker provides tools for tracking, not financial advice. Consult a professional for financial decisions.

## Limitation of Liability

We are not responsible for any financial decisions you make based on app data.

## Contact

For questions, contact us at pritamfinds@gmail.com.`,
  },
  {
    slug: "devtools-cli",
    title: "DevTools CLI",
    description:
      "Command-line tool that automates repetitive development tasks and boosts productivity for developers.",
    fullDescription:
      "DevTools CLI is a powerful command-line utility designed to automate repetitive development tasks. From scaffolding new projects to running complex build pipelines, DevTools CLI saves you hours of manual work. With an intuitive interface and extensive plugin system, it adapts to your workflow.",
    tags: ["CLI", "TypeScript", "Node.js", "Open Source"],
    link: "/projects/devtools-cli",
    featured: false,
    metrics: {
      revenue: "$2K",
      revenueLabel: "MRR",
      users: "3K",
      usersLabel: "Users",
    },
    features: [
      "Project scaffolding templates",
      "Automated code formatting",
      "Git workflow automation",
      "Custom plugin support",
      "Cross-platform compatibility",
      "Extensive documentation",
    ],
    websiteUrl: "https://devtools.pritam.dev",
    githubUrl: "https://github.com/pritam/devtools-cli",
    supportEmail: "pritamfinds@gmail.com",
    privacyPolicy: `*Last updated: January 2025*

DevTools CLI is an open-source command-line tool. This policy explains our data practices.

## Data Collection

DevTools CLI does not collect any personal data. The tool runs entirely on your local machine.

## Analytics

We collect anonymous usage statistics (command usage frequency) to improve the tool. This can be disabled with the \`--no-telemetry\` flag.

## Open Source

The source code is publicly available for review on GitHub.

## Contact

For questions, reach us at pritamfinds@gmail.com.`,
    termsOfService: `*Last updated: January 2025*

DevTools CLI is provided under the MIT License.

## License

Permission is hereby granted, free of charge, to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.

## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.

## Contact

For questions, contact pritamfinds@gmail.com.`,
  },
  {
    slug: "ai-writing-assistant",
    title: "AI Writing Assistant",
    description:
      "Web app that helps content creators write better with AI-powered suggestions and grammar improvements.",
    fullDescription:
      "AI Writing Assistant is your intelligent writing companion. Powered by advanced AI, it helps content creators, bloggers, and professionals write better, faster. Get real-time grammar corrections, style suggestions, and content improvements. Whether you're writing a blog post, email, or social media content, AI Writing Assistant elevates your writing.",
    tags: ["React", "OpenAI", "Node.js", "MongoDB"],
    link: "/projects/ai-writing-assistant",
    featured: false,
    metrics: {
      revenue: "$5K",
      revenueLabel: "MRR",
      users: "800",
      usersLabel: "Users",
    },
    features: [
      "Real-time grammar checking",
      "AI-powered style suggestions",
      "Tone adjustment options",
      "Plagiarism detection",
      "Multiple language support",
      "Browser extension available",
    ],
    websiteUrl: "https://writer.pritam.dev",
    supportEmail: "pritamfinds@gmail.com",
    privacyPolicy: `*Last updated: January 2025*

AI Writing Assistant ("we", "us") values your privacy. This policy explains how we handle your data.

## Data Collection

We collect your email address for account creation and the text you submit for analysis.

## How We Use Your Data

Text submitted is processed by AI to provide writing suggestions. We do not store your content longer than necessary for processing.

## AI Processing

Your text is sent to our AI provider (OpenAI) for analysis. OpenAI does not use your data for training.

## Data Retention

Account data is retained while your account is active. You can request deletion at any time.

## Security

We use encryption in transit and at rest to protect your data.

## Contact

For privacy questions, contact pritamfinds@gmail.com.`,
    termsOfService: `*Last updated: January 2025*

These terms govern your use of AI Writing Assistant.

## Service Description

AI Writing Assistant provides AI-powered writing suggestions and grammar checking.

## Account

You must create an account to use the service. You are responsible for maintaining account security.

## Acceptable Use

You may not use the service for generating harmful, illegal, or misleading content.

## Intellectual Property

You retain ownership of content you create. We claim no rights to your content.

## Service Availability

We strive for high availability but do not guarantee uninterrupted service.

## Termination

We may terminate accounts that violate these terms.

## Contact

For questions, contact pritamfinds@gmail.com.`,
  },
];

// Calculate totals from projects
export const totalRevenue = "$27K";
export const totalUsers = "20K+";

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
  { label: "Products Shipped", value: "10+" },
];
