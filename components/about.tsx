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
      I'm Vidhi Rambhia, a Software Development Engineer with a passion for cutting-edge technologies and problem-solving. Currently pursuing my Master's in Computer Science at the University of Illinois Urbana-Champaign, I specialize in areas like machine learning, edge computing, and large-scale system design. My experience includes internships at Amazon AWS, where I worked on distributed systems, and a full-time role at Goldman Sachs, focusing on microservices and AI-driven solutions.
      From optimizing machine learning models for real-world applications to building interactive visualizations and blockchain-based systems, I love turning complex problems into elegant solutions. Explore my portfolio, check out my projects, or connect with me to collaborate on exciting challenges in tech!.
      </p>
    </motion.section>
  );
}
