"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import {FaPaperPlane} from "react-icons/fa";
import {GrDocument} from "react-icons/gr";
import {IoDocumentSharp, IoDocumentTextSharp} from "react-icons/io5";
import {AiFillGithub} from "react-icons/ai";

type ProjectProps = (typeof projectsData)[number];

export default function Project(ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <div
      ref={ref}
      className="group mb-3 sm:mb-8 last:mb-0 px-2"
    >
      <section className="bg-gray-100 max-w-[36rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[100%] flex flex-col h-[100%]">
          <h3 className="text-2xl font-semibold">{ProjectProps.title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {ProjectProps.description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 mb-2">
            {ProjectProps.tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className={"flex flex-row gap-2"}>
          {ProjectProps.ssrn && (<a
              href={ProjectProps.ssrn}
              target="_blank"
              rel="noreferrer noopener">
            <button
              type="submit"
              className="group flex items-center rounded-md justify-center gap-2 h-7 w-32 bg-gray-900 text-white outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 dark:text-white/70"
          >
            <IoDocumentTextSharp className={"sm text-white dark:text-white/70"}/> SSRN Link
          </button>
          </a>)}
          {ProjectProps.github && (<a
              href={ProjectProps.github}
              target="_blank"
              rel="noreferrer noopener">
            <button
                type="submit"
                className="group flex items-center rounded-md justify-center gap-2 h-7 w-32 mt-2 bg-gray-900 text-white outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 dark:text-white/70"
            >
              <AiFillGithub className={"sm text-white dark:text-white/70"}/> GitHub Link
            </button>
          </a>)}
          </div>
        </div>
      </section>
    </div>
  );
}
