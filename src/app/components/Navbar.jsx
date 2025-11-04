"use client";

import React from "react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <>
      <header className="bg-(--navyblue) text-(--white) p-6">
        <nav>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-between mx-auto max-w-7xl"
          >
            <div className="flex items-center">
              <h1 className="font-extrabold text-2xl">
                <Link href="/">UZAIR EJAZ</Link>
              </h1>
            </div>
            <div className="flex">
              <ul className="flex gap-6 items-center">
                <li>
                  <Link href="#about">About</Link>
                </li>
                <li>
                  <Link href="#skills">Skills</Link>
                </li>
                <li>
                  <Link href="#projects">Projects</Link>
                </li>
              </ul>
              <div className="ml-4">
                <Link href="#contact">
                  <Button
                    variant="outline"
                    className="border-(--white) text-(--white) hover:bg-(--white) hover:text-(--navyblue) transition-colors duration-300"
                  >
                    Contact me
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </nav>
      </header>
    </>
  );
}
