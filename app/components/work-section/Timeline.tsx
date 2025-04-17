"use client";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const TimelineData = [
  {
    companyImg: "/eleox-icon.png",
    jobTitle: "Senior Software Engineer",
    company: "Eleox",
    jobType: "Contract",
    duration: "Apr 2023 - Present",
    stuffIDid: [
      "Led the development of the next-generation energy trading platform, utilizing React.js for the frontend and Node.js for backend services, improving transaction efficiency by 35%.",
      "Designed and implemented real-time data streaming features using WebSockets and Redux, enabling traders to receive up-to-the-minute market data, resulting in a 20% reduction in decision-making time.",
      "Optimized the platform's UI/UX by collaborating with product and design teams to enhance usability, improving user retention and satisfaction by 30% among energy traders.",
      "Built secure and scalable API endpoints to handle high-frequency trading data, integrating with third-party financial systems and supporting over 1 million transactions per day.",
      "Enhanced platform performance by implementing advanced caching mechanisms and optimizing database queries, resulting in a 50% improvement in load times and increased platform reliability.",
      "Mentored junior engineers in best practices for frontend development, API design, and performance optimization, fostering a 25% increase in team productivity.",
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
