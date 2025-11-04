"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Card({ image, task, taskdesc, tags, github, vercel }) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-96 bg-white rounded-2xl mt-8 border border-(--lightgray) shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
    >
      {/* Image Section */}
      <motion.div
        variants={item}
        className="relative h-52 w-full group overflow-hidden"
      >
        <Image
          src={image}
          width={400}
          height={250}
          alt="Project preview"
          className="object-cover w-full h-full rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover Overlay with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          {/* GitHub Icon */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.082-.729.082-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.934 0-1.312.469-2.384 1.237-3.224-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.45 11.45 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.236 1.912 1.236 3.224 0 4.61-2.807 5.625-5.48 5.922.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 22.295 24 17.795 24 12.5 24 5.87 18.627.5 12 .5z" />
            </svg>
          </a>

          {/* Vercel Icon */}
          <a
            href={vercel}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-300 hover:bg-(--navyblue) hover:rounded transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 5h6m0 0v6m0-6L10 14m-4 5h8a2 2 0 0 0 2-2v-3"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <motion.div variants={item} className="p-5">
        <motion.h4
          variants={item}
          className="text-xl font-semibold text-(--navyblue)"
        >
          {task}
        </motion.h4>

        <motion.p
          variants={item}
          className="mt-3 text-sm text-(--text-gray) leading-6 break-words line-clamp-3"
        >
          {taskdesc}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-2 mt-5">
          {tags.map((tag, i) => (
            <motion.span
              variants={item}
              key={i}
              className="text-xs font-medium px-3 py-1 rounded-lg border border-(--lightgray) bg-gray-50 text-blue-500"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
