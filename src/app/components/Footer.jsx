"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <section className="w-full bg-(--navyblue) text-(--white) px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-3 mb-12">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold">UZAIR EJAZ</div>
              <div className="text-sm mt-4">
                <p>
                  React.js Developer crafting beautiful and functional web
                  experiences with modern technologies.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="bg-white text-black p-2 font-bold rounded ">
                Quick Links
              </span>
              <div className="flex flex-col gap-2 text-sm mt-4">
                <div className="hover:underline">
                  <Link href="#about">About</Link>
                </div>
                <div className="hover:underline">
                  <Link href="#about">Projects</Link>
                </div>
                <div className="hover:underline">
                  <Link href="#skills">Skill</Link>
                </div>
                <div className="hover:underline">
                  <Link href="#contact">Contact</Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <p>Connect With Me</p>
              <div className="flex gap-6 mt-4">
                <div>
                  <Link href="https://github.com/UzairAjaz" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.43c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.25 1.83 1.25 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.23v3.3c0 .32.21.69.82.57A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-gray-900 transition"
                  >
                    <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.849-3.036-1.851 0-2.135 1.445-2.135 2.939v5.666H9.36V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.37-1.848 3.602 0 4.268 2.37 4.268 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.228.792 24 1.771 24h20.451C23.2 24 24 23.228 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-black transition"
                  >
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.236l7.386 6.165a1 1 0 0 0 1.228 0L20 8.236V18H4Z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <hr className="my-6 border-t border-gray-100" />
            <p className="text-center text-sm text-gray-100">
              © 2025 made with <span className="text-white">♥</span> by Uzair
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
