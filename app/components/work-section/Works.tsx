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
      title: "Eleox: The Future of Natural Gas Trading",
      liveLink: "https://www.eleox.com/",
      about: "Eleox is a natural gas post-trading platform that is private, secure, and collaborative.",
      stack: [],
      img: "/eleox.png",
    },
    {
      title: "Pomodoro Champion: Focus or Die",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink: "https://pomodorochampion.com/",
      about:
        "Pomodoro Champion is a fun social focus app that uses group accountability as a game mechanic to keep you from getting distracted. Now available on the App Store.",
      stack: [
        "react.js",
        "capacitor.js",
        "tailwind css",
        "ios",
        "android",
        "websockets",
        "firebase",
        "realtime database",
      ],
      img: "/pomodoro-champion.png",
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
      <Title>Recent Work</Title>
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

      {/* <Timeline /> */}
    </section>
  );
}
