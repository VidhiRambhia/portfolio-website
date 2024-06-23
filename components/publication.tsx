"use client";

import React, { useRef } from "react";
import {projectsData, publicationsData} from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {FaPaperPlane} from "react-icons/fa";
import {GrDocument} from "react-icons/gr";
import {IoDocumentSharp, IoDocumentTextSharp} from "react-icons/io5";
import {AiFillGithub, AiFillYoutube} from "react-icons/ai";
import {PiCertificateFill} from "react-icons/pi";

type PublicationProps = (typeof publicationsData)[number];

export default function Publication(PublicationProps: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // @ts-ignore
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full">
          <h4 className="text-2xl font-semibold text-center">{PublicationProps.title}</h4>
          <br/>
          <h5><b>DOI:</b> {PublicationProps.doi}</h5>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {PublicationProps.description}
          </p>
          <div className={"flex flex-row gap-2"}>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
