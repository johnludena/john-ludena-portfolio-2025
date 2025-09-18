"use client";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const TimelineData = [
  {
    companyImg: "/eleox-icon.png",
    jobTitle: "Designer / UI Developer",
    company: "Eleox LLC",
    jobType: "Contract",
    duration: "Apr 2023 - Present",
    stuffIDid: [
      "Led product design and front-end implementation for OxNom, Eleox's flagship natural gas nomination tool",
      "Built modular, reusable UI components aligned with a brand-wide design refresh",
      "Collaborated cross-functionally to turn complex business logic into user-friendly experiences",
      "Prototyped experimental features and new workflows to support future product initiatives",
      "Contributed to automated Cypress testing for robust end-to-end feature validation",
    ],
  },
  {
    companyImg: "/adcetera.png",
    jobTitle: "Senior Front-end Developer",
    company: "Adcetera Design Group",
    jobType: "Full-time",
    duration: "Dec 2018 - Apr 2023",
    stuffIDid: [
      "Engineered custom responsive websites for clients ranging from startups to Fortune 500s",
      "Integrated CMS platforms like WordPress and Drupal for client-editable content",
      "Mentored junior devs and introduced a reusable component library to improve delivery speed",
      "Partnered with designers to scope projects accurately and ensure pixel-perfect builds",
      "Championed tooling upgrades that boosted team productivity and code quality",
    ],
  },
  {
    companyImg: "/chevron.png",
    jobTitle: "Web Developer",
    company: "Cella Consulting (Chevron Corporation)",
    jobType: "Full-time",
    duration: "Oct 2016 - Dec 2018",
    stuffIDid: [
      "Supported Chevron's internal training portal through custom front-end development",
      "Migrated and re-branded intranet sites to align with Chevron's updated brand guidelines",
      "Streamlined communication between design and dev teams to speed up asset handoff",
      "Trained and unblocked new developers to accelerate team ramp-up",
    ],
  },
  {
    companyImg: "/bold-pixel-media.png",
    jobTitle: "Web Developer",
    company: "Bold Pixel Media",
    jobType: "Full-time",
    duration: "Jan 2013 - Oct 2016",
    stuffIDid: [
      "Built custom e-commerce sites using Shopify, BigCommerce, and WordPress/WooCommerce",
      "Delivered full-stack solutions for local businesses and agencies, including landing pages and marketing sites",
      "Successfully launched dozens of client projects via platforms like Upwork and Freelancer",
    ],
  },
  {
    companyImg: "/toadfly.png",
    jobTitle: "Graphic & Web Designer",
    company: "Innovative Turnaround Controls",
    jobType: "Full-time",
    duration: "Feb 2010 - Jan 2013",
    stuffIDid: [
      "Designed trade show graphics, print materials, and product branding for ITC",
      "Developed static brochure sites for in-house software tools",
      "Supported on-site deployment for ITC's software tools",
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
