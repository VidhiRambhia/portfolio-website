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
    title: "Software Development Intern",
    location: "Palo Alto, CS",
    description:
        "Developing distributed load testing infrastructure for a critical proxy service routing connections to Redshift, AWS's fully managed, petabyte-scale data warehouse service. " +
        "Conducting stress tests by establishing thousands of database connections in parallel to ensure optimal performance and reliability under high customer workload. " +
        "Building automated approval workflows for releasing Redshift’s critical services to customers in all regions.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Present",
  },
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

export const publicationsData = [
  {
    title: "Agrichain: A Blockchain-Based Food Supply Chain Management System",
    description:
        "The food supply chain is complex due to multiple entities and perishable goods. In India, weak infrastructure hinders collaboration, leading to siloed operations. Effective supply chain management requires sophisticated data integration and tracking. Blockchain technology offers transparency, traceability, and security, showing promise for improving these processes. This paper proposes Agrichain, a low-cost Blockchain-based solution for the Indian food supply chain. Agrichain enables stakeholders to register and publish information on the blockchain, facilitating the tracking and tracing of perishable goods throughout the supply chain.",
    doi: "https://link.springer.com/chapter/10.1007/978-3-030-96527-3_1",
  },
  {
    title: "CampusMaps: Voice Assisted Navigation Using Alexa Skills",
    description:
        "Voice assistants have become a common occurrence that are present in our smart-phones, speakers or dedicated devices like the Google Home and Alexa Echo. Over the years, these voice assistants have become more intelligent and the number of tasks that can be performed by them has increased. Of the many voice assistants that exist, Amazon’s Alexa is one of the most compatible voice assistants, which can be programmed to suit specific use cases by the use of Amazon’s Alexa Skills Kit. Through this paper, we leverage the power of Alexa’s voice assistance by designing a navigation system for our college campus, which allows users to request directions in the most intuitive way possible. This is a cost-effective and scalable solution based on Amazon Web Services (AWS) Lambda.",
    doi: "https://link.springer.com/chapter/10.1007/978-981-16-1685-3_4",
  },
  {
    title: "Intellectual Property Rights Management Using Blockchain",
    description:
        "This paper describes the potential of blockchain technology to offer novel solutions in the Intellectual Property space. Traditionally, IPRs have been managed and regulated by centralized institutions like governments or administrative bodies of the region where IP holders want to secure and enforce rights. However, as markets get globalized and digitized there is a pressing need to look for more reliable and feasible solutions. In this paper, we describe various contemporary techniques for IPR management and the challenges associated with them. We have also proposed an unprecedented framework for a model based on consortium blockchain which can aid in resolving the issues related to IPR management.",
    doi: "https://link.springer.com/chapter/10.1007/978-981-16-0882-7_47",
  }
] as const;
export const skillsData = [
  "Python", "Java", "JavaScript", "TypeScript", "C++", "C", "SQL", "HTML", "CSS", "Bash", "Rust", "Kotlin",
  "React", "Next.js", "Kafka", "MongoDB", "DynamoDB", "ElasticSearch", "Postgres", "GraphQL", "Django", "Node.js",
  "AWS", "Azure", "GCP", "Git", "Docker", "Jenkins", "Kubernetes (K8s)", "GitLab CI/CD", "Lambda", "Lex", "Linux"

] as const;
