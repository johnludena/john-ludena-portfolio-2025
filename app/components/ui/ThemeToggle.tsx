"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="text-xl"
      whileTap={{ scale: 0.9 }}
      data-blobity-magnetic="true"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === "dark" ? 0 : 360 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <Icon 
            icon="ph:sun-bold" 
            className="w-6 h-6 text-yellow-400" 
            data-blobity-tooltip="Switch to light mode"
          />
        ) : (
          <Icon 
            icon="ph:moon-stars-bold" 
            className="w-6 h-6 text-indigo-600" 
            data-blobity-tooltip="Switch to dark mode"
          />
        )}
      </motion.div>
    </motion.button>
  );
}
