import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        I’m Driven to Build Products That People Love
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="flex flex-col antialiased space-y-4 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          Fifteen years ago, a career that started as a love for great website design has now transformed into a passion for building great software and a relentless curiosity to make products that make a positive impact on the world.
          </AnimatedBody>


          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
          Curious to know more about me? Here is {" "}
            <Link
              className="underline"
              target="_blank"
              href={
                "https://drive.google.com/file/d/1dwIbYRWpD5DeyyjMXe1Rgwhw2r_KKaWB"
              }
            >
              my resume
            </Link>
            .
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Frontend
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              React.js, Next.js, Redux, Angular, React Native, Capacitor.js, TypeScript, JavaScript, SSR,
              Storybook, TailwindCSS, Material-UI, Ant Design, Radix UI
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Backend
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Node.js, Express.js, GraphQL, REST APIs, MongoDB, PostgreSQL,
              Redis, Firebase, Google Cloud, OAuth, JWT
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              DevOps
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Docker, Kubernetes, Webpack, Vite, CI/CD, GitHub Actions,
              CircleCI, Jenkins, Cypress, Jest, Unit Testing, E2E
              Testing, AWS, CloudFront, Vercel, Netlify
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
