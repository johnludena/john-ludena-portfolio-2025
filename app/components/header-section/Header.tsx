"use client";
import { useView } from "@/contexts/ViewContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
  const { sectionInView } = useView();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="fixed left-0 w-full z-10 select-none">
        <div className="flex justify-between items-center px-6 py-4 bg-linear-to-r from-[#d9d9d91f] to-[#7373731f] std-backdrop-blur">
          <Image
            src="/headshot.jpg"
            width={32}
            height={36}
            alt="logo"
            className="select-none rounded-full sm:rounded-lg"
          />
          <div className="flex items-center gap-4 sm:hidden">
            <ThemeToggle />
            <Icon
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer text-2xl"
              icon={`${menuOpen ? "gg:close" : "lucide:menu"}`}
            />
          </div>

          <ul className="hidden sm:flex gap-8 lg:gap-12" style={{ color: 'var(--header-text)' }}>
            <Link
              href="#home"
              className="group px-3 py-1 rounded-md transition-colors"
              style={{ color: sectionInView === "home" ? 'var(--header-text-active)' : 'var(--header-text)' }}
            >
              Home
            </Link>
            <Link
              href="#work"
              className="group px-3 py-1 rounded-md transition-colors"
              style={{ color: sectionInView === "work" ? 'var(--header-text-active)' : 'var(--header-text)' }}
            >
              Work
            </Link>
            <Link
              href="#about"
              className="group px-3 py-1 rounded-md transition-colors"
              style={{ color: sectionInView === "about" ? 'var(--header-text-active)' : 'var(--header-text)' }}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="group px-3 py-1 rounded-md transition-colors"
              style={{ color: sectionInView === "contact" ? 'var(--header-text-active)' : 'var(--header-text)' }}
            >
              Contact
            </Link>
          </ul>
          <div className="gap-5 text-xl hidden sm:flex items-center" style={{ color: 'var(--header-text-active)' }}>
            <div className="flex gap-5">
              <Link target="_blank" href="https://linkedin.com/in/john-ludena">
                <Icon 
                  icon="hugeicons:linkedin-01" 
                  data-blobity-tooltip="LinkedIn"
                  data-blobity-tooltip-position="right"
                  data-blobity-tooltip-offset-x="10"
                />
              </Link>
              <Link target="_blank" href="https://github.com/johnludena">
                <Icon 
                  icon="hugeicons:github" 
                  data-blobity-tooltip="GitHub"
                  data-blobity-tooltip-position="right"
                  data-blobity-tooltip-offset-x="10"
                />
              </Link>
              <Link target="_blank" href="https://x.com/JohnnyCommits">
                <Icon 
                  icon="akar-icons:x-fill" 
                  data-blobity-tooltip="X"
                  data-blobity-tooltip-position="right"
                  data-blobity-tooltip-offset-x="10"
                />
              </Link>
            </div>
            <div className="w-px h-5 bg-white/20" />
            <ThemeToggle />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && <MobileMenu onMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </>
  );
}
