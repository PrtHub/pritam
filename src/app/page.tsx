import {
  BentoGrid,
  HeroCard,
  StatCard,
  SocialCard,
  ProjectsGrid,
  AboutCard,
  SkillsCard,
  ContactCard,
  MarqueeCard,
} from "@/components/bento";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { totalRevenue, totalUsers, stats } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <BentoGrid className="py-8">
          <HeroCard />
          <StatCard
            value={totalRevenue}
            label="Monthly Revenue"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            }
          />
          <StatCard
            value={totalUsers}
            label="Total Users"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          />
          <StatCard
            value={stats.filter((s) => s.label === "Products Shipped")[0].value}
            label="Products Shipped"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m7.5 4.27 9 5.15" />
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
            }
          />
          <SocialCard />
        </BentoGrid>

        {/* Marquee Divider */}
        <MarqueeCard />

        {/* Projects Section */}
        <section id="projects">
          <BentoGrid className="py-8">
            <ProjectsGrid />
          </BentoGrid>
        </section>

        {/* About & Skills Section */}
        <section id="about">
          <BentoGrid className="py-8">
            <AboutCard />
            <SkillsCard />
          </BentoGrid>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <BentoGrid className="py-8 pb-16">
            <ContactCard />
          </BentoGrid>
        </section>
      </main>

      <Footer />
    </div>
  );
}
