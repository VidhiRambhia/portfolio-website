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
        Vidhi Rambhia is a student at UIUC pursuing her MS in Computer Science.
        With a distinguished academic background, she graduated as the <b>Gold Medalist</b> from VJTI, Mumbai.
        At UIUC, Vidhi is advised by Prof. Vikram Adve, where she collaborates on the <b>Farm of the Future</b> project.
        Her focus is on researching approximate computing for <b>Edge ML</b>. Vidhi's research interests lie at the intersection of technology and agriculture, aiming to create scalable solutions to address pressing agricultural challenges.
        Her professional experience includes working at Goldman Sachs, where she led several initiatives to foster inclusivity.
        At UIUC, she promotes diversity in STEM as the <b>Secretary of Grad-SWE</b>. She also mentors young women as a member of the WCS organization.
        Vidhi has been awarded the prestigious SS Radhakrishnan Scholarship at UIUC for her academic excellence and leadership potential.
        Currently, she is interning at Amazon’s <b>AWS Redshift team</b>.
      </p>
    </motion.section>
  );
}
