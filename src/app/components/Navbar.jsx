"use client";

import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-(--navyblue) text-(--white) sticky top-0 z-50 ">
      <nav className="px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mx-auto max-w-7xl h-20"
        >
          {/* Logo */}
          <Link href="/" className="font-extrabold text-xl sm:text-2xl">
            UZAIR EJAZ
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 items-center">
              <li><Link href="#about">About</Link></li>
              <li><Link href="#skills">Skills</Link></li>
              <li><Link href="#projects">Projects</Link></li>
            </ul>

            <Link href="#contact">
              <Button
                variant="outline"
                className="border-(--white) text-(--white) hover:bg-(--white) hover:text-(--navyblue)"
              >
                Contact Me
              </Button>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="w-7 h-7"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="flex flex-col gap-6 py-6 text-center">
                <li onClick={() => setOpen(false)}>
                  <Link href="#about">About</Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link href="#skills">Skills</Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link href="#projects">Projects</Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link href="#contact">
                    <Button
                      variant="outline"
                      className="border-(--white) text-(--white) hover:bg-(--white) hover:text-(--navyblue)"
                    >
                      Contact Me
                    </Button>
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
