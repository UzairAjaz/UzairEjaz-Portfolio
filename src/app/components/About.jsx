"use client";

import React from "react";
import Image from "next/image";
import AboutImage from "../../../public/About.jpeg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function About() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <>
      <section
        id="about"
        className="w-full min-h-screen bg-(--lightgray) px-2 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-center p-4 mb-8">
            <h2 className="text-5xl font-bold">About Me</h2>
          </div>
          <div className="flex gap-18">
            <motion.div
              className="flex-1 flex flex-col items-center"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div
                style={{ boxShadow: "0 4px 20px var(--navyblue)" }}
                className="w-72 h-72 md:w-96 md:h-96 lg:w-md lg:h-112 rounded overflow-hidden"
              >
                <Image
                  src={AboutImage}
                  alt="Coding workspace"
                  className="object-cover object-[center_top] w-full h-full"
                />
              </div>
              <div>
                <Button
                  variant="outline"
                  className="w-md mt-12 p-4 hover:bg-(--navyblue) hover:text-(--white)"
                >
                  Download CV
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="max-w-3xl text-xl"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="leading-relaxed text-(--semigray)">
                Hi, I’m{" "}
                <span className="font-semibold text-(--navyblue)">
                  Uzair Ejaz
                </span>
                , a passionate{" "}
                <span className="font-medium">Frontend Developer</span>{" "}
                specializing in <span className="font-medium">React.js</span>,{" "}
                <span className="font-medium">Next.js</span>, and{" "}
                <span className="font-medium">Tailwind CSS</span>. I love
                turning ideas into interactive, visually appealing, and
                high-performing web experiences.
              </p>

              <p className="mt-5 leading-relaxed text-gray-600">
                With a strong focus on clean UI, smooth UX, and optimized
                performance, I build responsive websites that not only look
                great but also deliver measurable impact. I constantly explore
                new technologies — from modern frameworks to{" "}
                <span className="font-medium">AI-powered interfaces</span> — to
                stay ahead in the evolving web ecosystem.
              </p>

              <p className="mt-5 leading-relaxed text-gray-600">
                When I’m not coding, I enjoy refining designs, experimenting
                with new libraries, and learning how technology can enhance
                creativity and automation.
              </p>
              <motion.div
                className="grid grid-cols-2 gap-16 mt-24 text-(--semigray) text-sm"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="text-center flex flex-col items-center">
                  <div className="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-12 h-12"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M10 9l-1.5 1.5L10 12" />
                      <path d="M14 9l1.5 1.5L14 12" />
                    </svg>
                  </div>
                  <h4 className="text-(--navyblue) text-lg mb-2">Clean Code</h4>
                  <p>Writing maintainable and scalable code</p>
                </div>
                <div className="text-center flex flex-col items-center">
                  {" "}
                  <div className="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-12 h-12"
                    >
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <h4 className="text-(--navyblue) text-lg mb-2">
                    Fast Learner
                  </h4>
                  <p>Quick to adapt to new technologies</p>
                </div>
                <div className="text-center flex flex-col items-center">
                  {" "}
                  <div className="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-12 h-12"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h4 className="text-(--navyblue) text-lg mb-2">
                    Team Player
                  </h4>
                  <p>Quick to adapt to new technologies</p>
                </div>
                <div className="text-center flex flex-col items-center">
                  {" "}
                  <div className="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-12 h-12"
                    >
                      <path d="M15 4a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2 2 2 0 0 1 0 4 2 2 0 0 0-2 2v2a2 2 0 0 1-2 2" />
                      <path d="M9 4a2 2 0 0 0-2 2v2a2 2 0 0 1-2 2 2 2 0 0 0 0 4 2 2 0 0 1 2 2v2a2 2 0 0 0 2 2" />
                    </svg>
                  </div>
                  <h4 className="text-(--navyblue) text-lg mb-2">
                    Problem Solver
                  </h4>
                  <p>Creative solutions to complex challenges</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
