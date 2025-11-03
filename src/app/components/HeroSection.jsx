"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImg from "../../../public/hero.png";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <>
      <section
        className="w-full min-h-[calc(100vh-84px)] flex items-center justify-center px-6"
        style={{
          backgroundColor: "#ffff",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='314' height='550' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='black' fill-opacity='0.015' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Side (Text) */}
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-(--navyblue) leading-tight">
              Frontend Web Developer React & Next.js Specialist
            </h1>
            <p className="mt-5 text-(--semigray) text-lg max-w-lg">
              Crafting modern, AI-enhanced web experiences that blend
              performance, creativity, and innovation.
            </p>
            <a href="https://github.com/UzairAjaz" target="_blank" >
              <Button className="group mt-5 px-5 py-6 bg-(--semigray) text-(--white) rounded hover:opacity-90 transition flex items-center gap-2">
                View My Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </a>
          </motion.div>

          {/* Right Side (Image) */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="w-72 h-72 md:w-96 md:h-96 lg:w-lg lg:h-128 rounded-full overflow-hidden shadow-lg">
              <Image
                src={heroImg}
                alt="Coding workspace"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
