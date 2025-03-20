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
        I amplify brand voices through the web
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            My passion lies in crafting seamless digital experiences that drive
            business growth. Whether it&apos;s building high-performance web
            applications, optimizing API interactions, or refining frontend
            architectures, I take pride in delivering scalable solutions that
            enhance brand visibility and efficiency.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            With over 14 years of experience, I&apos;ve honed my expertise
            across frontend and backend technologies, DevOps, and performance
            optimization. From migrating enterprise platforms to React and
            Next.js to engineering microservices and real-time dashboards, I
            thrive on solving complex challenges that improve system performance
            and user experience.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            Each project is an opportunity to innovate and push the boundaries
            of what&apos;s possible. I continuously refine my skills, embracing
            new tools and methodologies to create solutions that businesses are
            proud to call their own. Here&apos;s{" "}
            <br className="hidden md:block" />
            <Link
              className="underline"
              target="_blank"
              href={
                "https://drive.google.com/file/d/1dwIbYRWpD5DeyyjMXe1Rgwhw2r_KKaWB"
              }
            >
              my résumè
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
              React, Next.js, Redux, Angular, TypeScript, JavaScript, SSR,
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
              Redis, Firebase, OAuth, JWT
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
              CircleCI, Jenkins, Cypress, Jest, Playwright, Unit Testing, E2E
              Testing, AWS, CloudFront, Vercel, Netlify
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
