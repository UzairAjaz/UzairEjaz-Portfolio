"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const hoverEffect = {
    scale: 1.03,
    boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
    transition: { duration: 0.6 },
  };

  const skillsData = [
    {
      title: "Frontend Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 bg-linear-to-br from-[#00C6FF] to-[#0072FF] text-black p-4 rounded-2xl"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="9" y1="4" x2="9" y2="20" />
        </svg>
      ),
      skills: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3"],
    },
    {
      title: "Styling & Design",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 bg-linear-to-br from-[#A855F7] to-[#EC4899] p-4 rounded-2xl"
          aria-hidden="true"
        >
          <path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9h1a3 3 0 0 0 3-3 2 2 0 0 1 2-2 3 3 0 0 0 3-3v-1a9 9 0 0 0-9-9z" />
          <circle cx="8.5" cy="10.5" r=".75" />
          <circle cx="12" cy="7.5" r=".75" />
          <circle cx="15.5" cy="10.5" r=".75" />
          <circle cx="11.5" cy="13.5" r=".75" />
        </svg>
      ),
      skills: [
        "Tailwind CSS",
        "CSS Modules",
        "Styled Components",
        "Responsive Design",
        "Framer Motion",
      ],
    },
    {
      title: "Tools & Workflow",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 bg-linear-to-br from-[#F97316] to-[#FB923C] p-4 rounded-2xl"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V22a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V2a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H22a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      skills: ["Git & GitHub", "VS Code", "npm", "Webpack", "Vite"],
    },
    {
      title: "Other Technologies",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="w-16 h-16 bg-linear-to-br from-[#22C55E] to-[#4ADE80] p-4 rounded-2xl"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 2L3 14h7v8l11-13h-8z"
          />
        </svg>
      ),
      skills: ["Shadcn UI", "Redux", "React Router", "Jest", "Figma"],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-[radial-gradient(circle_at_center,#475569_0%,#334155_60%,#1e293b_100%)] px-4 sm:px-10 lg:px-20 py-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col text-(--lightgray) justify-center items-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Skills & Technologies</h1>
          <p className="text-base sm:text-lg">
            My technical toolkit for building modern web applications
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-24"
        >
          {skillsData.map((skill, i) => (
            <motion.div
              key={i}
              variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
              whileHover={hoverEffect}
              className="bg-(--skill-bg) border border-(--capsule-border) p-6 rounded-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ type: "spring", stiffness: 30 }}
                >
                  {skill.icon}
                </motion.div>
                <h2 className="text-xl sm:text-2xl">{skill.title}</h2>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-6 sm:mt-12">
                {skill.skills.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-2 pl-4 rounded-xl bg-(--capsule-bg) border border-(--capsule-border) text-(--lightgray) flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                    {cap}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
