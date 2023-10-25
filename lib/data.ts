import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import bitsImage from "@/public/BITS_Pilani-Logo.svg.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import {AiOutlineAmazon} from "react-icons/ai";
import {BsBank} from "react-icons/bs";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Analyst - Software Development Engineer",
    location: "Bengaluru, India",
    description:
      "Engineered a Spring Boot-based microservices workflow, cutting deal turnaround times by 30%, and designed responsive dashboards with React, Redux, and ElasticSearch, boosting user satisfaction by 60%. Also established an efficient CI/CD pipeline with Cypress and Cucumber.js for E2E testing, ensuring software reliability, and contributed to enhanced banker productivity through a Kafka and WebSockets-based real-time notification system.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2021 - May 2023",
  },
  {
    title: "Analyst - Software Development Intern",
    location: "Bengaluru, India",
    description:
      "Facilitated faster roll-outs of forms capturing deal-data by building a complex form-engine with validation. Worked on improving response times by 50% in Banker’s WorkQ by indexing data in Elasticsearch",
    icon: React.createElement(CgWorkAlt),
    date: "May 2020 - June 2020",
  }
] as const;

export const projectsData = [
  {
    title: "Open Source Contributions",
    description:
        "Contributed to AsyncAPI, Cypress-cucumber-preprocessor, and Taiga UI. Multiple pull requests have been merged into the main branch. Wrote code to perform GitHub Actions integrations, End to End Testing, and enhancing front-end components",
    tags: ["Javascript",  "Cypress",  "Playwright",  "Cucumber",  "Github Actions",  "CI/CD"],
  },
  {
    title: "RiskGPT",
    description:
        "Developed a risk-related question-answering system using SQLDatabaseChain using few shot learning and finetuning. Secured the first position in Goldman Sach’s AI hackathon for presenting it",
    tags: ["Langchain",  "OpenAI",  "Prompt Engineering",  "SQL",  "LLMOps"],
  },
  {
    title: "Agrichain",
    description:
        "Created a decentralized supply chain management system using Ethereum and smart contracts to increase transparency in the Indian agricultural sector",
    tags: ["Solidity", "Truffle", "Ganache", "Web3py", "Metamask", "HTML", "CSS", "Flask"],
    github: "https://github.com/VidhiRambhia/FYP2021",
  },
  {
    title: "CampusMaps",
    description: "Developed an Alexa powered voice-assisted navigation system for college campuses, which allows students to request directions in an intuitive way",
    tags: ["Python", "Graph Theory", "AWS Lambda", "Alexa Skills"],
    github: "https://github.com/VidhiRambhia/VJTI-Navigation"
  },
] as const;

export const skillsData = [
  "Python", "Java", "JavaScript", "TypeScript", "C++", "C", "SQL", "HTML", "CSS", "Bash", "Rust", "Kotlin",
  "React", "Next.js", "Kafka", "MongoDB", "DynamoDB", "ElasticSearch", "Postgres", "GraphQL", "Django", "Node.js",
  "AWS", "Azure", "GCP", "Git", "Docker", "Jenkins", "Kubernetes (K8s)", "GitLab CI/CD", "Lambda", "Lex", "Linux"

] as const;
