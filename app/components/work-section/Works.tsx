import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Joy",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink: "https://withjoy.com/",
      about:
        "Joy is a comprehensive wedding planning platform that enables couples to create personalized wedding websites, manage guest lists, send invitations, and build all-in-one registries with zero fees on cash funds.",
      stack: [
        "NODE.JS",
        "JAVASCRIPT",
        "REACT.js",
        "GRAPHQL",
        "POSTGRESQL",
        "AMAZON S3",
        "NGINX",
        "FIREBASE",
        "CLOUDFLARE",
        "GOOGLE ANALYTICS",
      ],
      img: "/withjoy.png",
    },
    {
      title: "Pomodoro Champion",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink: "https://pomodorochampion.com/",
      about:
        "Pomodoro Champion is an application designed to help users manage their screen time effectively by implementing the Pomodoro Technique—a time management method that encourages working in focused intervals, typically 25 minutes, followed by short breaks.",
      stack: [
        "react.js",
        "react native",
        "tailwind css",
        "ios",
        "android",
        "websocket",
      ],
      img: "/pomodoro-champion.png",
    },
    {
      title: "Botpress",
      // gitLink: "https://github.com/adex-hub/where-in-the-world",
      liveLink: "https://botpress.com/",
      about:
        "Botpress is a comprehensive platform for building AI agents powered by the latest Large Language Models (LLMs). It enables developers to create, deploy, and manage conversational AI applications efficiently.",
      stack: [
        "react",
        "react-router",
        "javascript",
        "tailwindcss",
        "NODE.JS",
        "POSTGRESQL",
        "THREE.JS",
        "SALESFORCE",
      ],
      img: "/botpress.jpg",
    },
    // {
    //   title: "Yourtodo",
    //   gitLink: "https://github.com/adex-hub/Yourtodo",
    //   liveLink: "https://yourtodo-v1.vercel.app/",
    //   about:
    //     "This task management system lets you customize your name, add, delete, and edit tasks, and celebrates you when tasks are completed. It features built-in notifications and stores data in the browser, allowing you to resume tasks conveniently. Designed and developed by yours truly.",
    //   stack: ["react", "javascript", "figma", "sass"],
    //   img: "/todo.svg",
    // },
    {
      title: "Chevron",
      // gitLink: "https://github.com/adex-hub/multi-step-form-main",
      liveLink: "https://chevron.com/",
      about:
        "Chevron is a multinational energy corporation committed to delivering affordable, reliable, and ever-cleaner energy. The company engages in various sectors, including oil and gas exploration, refining, marketing, and the development of renewable energy solutions.",
      stack: ["ANGULAR","HTML","CSS","AZURE",".NET","C#","SQL","POWER BI","DEVOPS","GIT DOCKER","KUBERNETES"],
      img: "/chevron-corp.png",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          // gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
