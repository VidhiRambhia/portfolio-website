"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[75rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a dedicated and enthusiastic computer science professional, currently honing my skills and knowledge at the <span className="font-bold">University of Illinois, Urbana Champaign</span>, where I am pursuing a Master of Computer Science.
        My journey in this field has been nothing short of exciting, with a strong foundation laid during my undergraduate studies at VJTI in Mumbai, India, where I graduated as the top student with a CGPA of 9.74/10.
        My technical toolkit is quite diverse, ranging from programming languages like <span className="font-bold">Python, Java, and JavaScript</span>, to frameworks and technologies such as <span className="font-bold">ReactJs, Springboot, and Docker</span>.
        I've had the incredible opportunity to apply these skills in a real-world setting during my tenure as a <span className="font-bold">Software Development Engineer</span> at <span className="font-bold">Goldman Sachs</span> in Bengaluru, India, where I played a pivotal role in enhancing software workflows and user interfaces.
        Beyond the technical realm, I am deeply passionate about contributing to <span className="font-bold">open-source projects</span> and have actively participated in initiatives that drive innovation and improvement in software solutions.
        On a personal note, I find great fulfillment in volunteering, especially in initiatives that empower <span className="font-bold">women in technology</span>, as I believe in creating an inclusive and supportive environment for all.
        I am eager to continue this journey, constantly learning, growing, and contributing to the field of computer science.
      </p>
    </motion.section>
  );
}
