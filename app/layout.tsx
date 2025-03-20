import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Ludena | Senior Software Engineer",
  description:
    "A Senior Software Engineer, passionate about building high-performance web applications and scalable digital solutions. With expertise in React, Next.js, and Node.js, I specialize in optimizing frontend architectures and developing seamless user experiences. I thrive on transforming complex ideas into efficient, elegant, and innovative software solutions.",
  keywords: [
    "frontend",
    "react",
    "tech",
    "creative developer",
    "UI development",
    "frontend engineer",
    "developer portfolio",
    "creative development",
    "nigeria",
    "software",
    "software developer",
    "software engineer",
    "portfolio",
  ],
  openGraph: {
    title: "John Ludena | Senior Software Engineer",
    description:
      "A Senior Software Engineer, passionate about building high-performance web applications and scalable digital solutions. With expertise in React, Next.js, and Node.js, I specialize in optimizing frontend architectures and developing seamless user experiences. I thrive on transforming complex ideas into efficient, elegant, and innovative software solutions.",
    url: "https://www.johnludena.com",
    siteName: "www.johnludena.com",
    locale: "en-US",
    type: "website",
    // images: [
    //   {
    //     url: "https://i.ibb.co/FKMqc28/adeola-badero.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Adeola Badero — Frontend Software Engineer",
    //   },
    //   {
    //     url: "https://i.ibb.co/Y8hBTR4/ade-800.png",
    //     width: 800,
    //     height: 800,
    //     alt: "Adeola Badero — Frontend Software Engineer",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Ludena | Software Engineer",
    description:
      "A Senior Software Engineer, passionate about building high-performance web applications and scalable digital solutions. With expertise in React, Next.js, and Node.js, I specialize in optimizing frontend architectures and developing seamless user experiences. I thrive on transforming complex ideas into efficient, elegant, and innovative software solutions.",
    creator: "@JohnnyCommits",
    // images: ["https://i.ibb.co/FKMqc28/john-ludena.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
