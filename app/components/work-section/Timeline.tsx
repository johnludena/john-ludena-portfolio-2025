"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/joy.png",
    jobTitle: "Senior Software Engineer",
    company: "Joy",
    jobType: "Contract",
    duration: "Apr 2023 - Present",
    stuffIDid: [
      "Optimized the front-end architecture, reducing Time to First Byte (TTFB) by 55% using Next-js ISR, RSCs, and CDN caching strategies.",
      "Refactored the React codebase, implementing atomic design principles and a modular component system, decreasing redundancy by 40%.",
      "Redesigned the API layer, moving from REST to GraphQL with Apollo, which cut frontend API over-fetching by 35% and improved app responsiveness.",
      "Integrated advanced CI/CD pipelines (GitHub Actions, Vercel, Kubernetes) with automated testing and canary deployments, reducing production bugs by 80%.",
      "Led the development of internal dashboard using React + TanStack Query to monitor real-time analytics, reducing customer support requests by 25%.",
      "Improved Web Vitals scores (LCP, FID, CLS) by implementing React suspense, preloading strategies, and optimizing critical rendering paths.",
    ],
  },
  {
    companyImg: "/adcetera.png",
    jobTitle: "Senior Front End Engineer",
    company: "Adcetera design group",
    jobType: "Full-time",
    duration: "Dec 2018 - Apr 2023",
    stuffIDid: [
      "Led the migration of 5+ enterprise-grade marketing platforms from legacy PHP/jQuery to React + Next.js, improving maintainability and performance by 60%.",
      "Developed a design system using Storybook and Radix UI, standardizing IJI components across multiple teams, reducing new feature development time by 35%.",
      "Implemented advanced performance optimizations (code-splitting, React memoization, V8 optimizations) that reduced TTI (Time to Interactive) by 45%.",
      "Engineered a real-time personalization engine with GraphQL • Node.js, personalizing user experiences and boosting overall engagement rates by 20% across all customer segments.",
      "Enhanced accessibility (WCAG 2.1 AA compliance) across all platforms, ensuring ADA compliance and increasing usability by 30%.",
    ],
  },
  {
    companyImg: "/chevron.png",
    jobTitle: "Web Developer",
    company: "Chevron corporation",
    jobType: "Full-time",
    duration: "Oct 2016 - Dec 2018",
    stuffIDid: [
      "Migrated a suite of internal applications from AngularJS to React, reducing technical debt and decreasing page load times by 50%.",
      "Built real-time data dashboards with React + D3.js, enabling engineers to monitor pipeline operations with a 30% faster response time to incidents.",
      "Engineered a microservices-based API gateway using Node.js + Express.js, reducing API response tirnes from 600ms to 250ms.",
      "Enhanced security practices by implementing OAuth 2.0, JWT, and role-based access controls (RBAC), ensuring compliance with enterprise security standards.",
    ],
  },
  {
    companyImg: "/bold-pixel-media.png",
    jobTitle: "Web Developer",
    company: "Bold pixel media",
    jobType: "Full-time",
    duration: "Jan 2013 - Oct 2016",
    stuffIDid: [
      "Designed and developed high-converting e-commerce platforms using React-Js, WordPress, and Node.js, increasing checkout conversions by 20%.",
      "Implemented caching strategies (Redis + Cloudflare), reducing page load times for international users by 60%.",
      "Integrated third-party APIs (Stripe, PayPal, Twilio, SendGrid) for payments and notifications, handling millions of transactions securely.",
      "Revamped website's structured data implementation with schema-org, achieving featured snippets for 200+ target keywords and outranking competitors with higher domain authority.",
    ],
  },
  {
    companyImg: "/toadfly.png",
    jobTitle: "Graphic & Web Designer",
    company: "Toadfly technologies",
    jobType: "Full-time",
    duration: "Feb 2010 - Jan 2013",
    stuffIDid: [
      "Developed Angular-based dashboards for SaaS applications, improving IJI responsiveness by 50%.",
      "Created RESTful APIs using Node.js/Express, enhancing inter-service communication and decreasing data retrieval times.",
      "Migrated static sites to JAMstack architecture (JavaScript + jQLEry + Netlify), reducing hosting costs by 70%.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
