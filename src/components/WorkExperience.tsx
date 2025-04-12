import React, { useState } from "react";
import styles from "../styles/WorkExperience.module.css";
import { CodeIcon } from "./ui/Icons";

type JobExperience = {
  id: string;
  location: string;
  period: string;
  role: string;
  company: string;
  companyInfo?: string;
  description: string;
  tags: string[];
  contributions: string[];
  acquisitionLabel?: string;
};

const WorkExperience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleContributions = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const experiences: JobExperience[] = [
    {
      id: "bik",
      location: "Bangalore, India",
      period: "July 2024 – Present",
      role: "SDE - 1",
      company: "BIK.ai (YC S20)",
      companyInfo:
        "YC backed startup providing the AI solution to the e-commerce brands.",
      description:
        "Working on manifest AI - shopping AI assistant as Fullstack Engineer.",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "Node.js",
        "Firestore",
        "Elasticsearch",
        "PostgreSQL",
      ],
      contributions: [
        "Led the end-to-end development of a feature to cluster messages using vector embeddings",
        "Built a comprehensive dashboard to display clustering results",
        "Working on manifest AI - shopping AI assistant",
        "Revamped the merchant and AI training part using Next.js, Redux and Python",
        "Boosted chatbot setup ease and increased FAQ additions by 20%",
        "Developed end-to-end Shopify selling plans using Shopify Storefront GraphQL API",
        "Built a customizable icebreaker feature for chatbot",
        "Integrated multiple dashboards and optimized Redis for fast data retrieval",
        "Led migration of large legacy customer datasets to the BIK platform",
        "Used Node.js, Firestore, and Microsoft Graph API for efficient data processing",
      ],
    },
    {
      id: "maq",
      location: "Noida, India",
      period: "January 2023 – June 2024",
      role: "SDE - 1",
      company: "MAQ Software",
      description:
        "Created scalable, low-latency, and reusable APIs, collaborating with team members to design efficient application architectures.",
      tags: ["C#", ".NET", "React", "TypeScript"],
      contributions: [
        "Internally developed a Quality Assurance web application",
        "Tool utilized across 80% of organizational projects",
        "Created scalable, low-latency, and reusable APIs",
        "Collaborated with team members to design efficient application architectures",
        "Wrote clean, optimized code in C#, React, and TypeScript",
        "Analyzed and improved expensive operations using data structures",
        "Ensured high performance across all applications",
      ],
    },
    {
      id: "oollta",
      location: "Remote",
      period: "December 2021 – March 2022",
      role: "SDE - Intern",
      company: "Oollta Cab",
      description:
        "Developed cross-platform UI for online cab booking apps, ensuring consistent user experience across Android and iOS for three distinct applications: Customer, Driver, and Management.",
      tags: ["Flutter", "GraphQL", "GetX"],
      contributions: [
        "Developed cross-platform UI for online cab booking apps",
        "Ensured consistent user experience across Android and iOS",
        "Built three distinct applications: Customer, Driver, and Management",
        "Integrated with Hasura GraphQL engine for efficient data fetching",
        "Used Postgres database with MVC architecture",
        "Wrote optimized GraphQL queries and mutations",
        "Implemented caching mechanisms to reduce API calls",
        "Improved performance using GetX for state management",
      ],
    },
  ];

  return (
    <div className={styles.experienceContainer}>
      {experiences.map((exp) => (
        <div key={exp.id} className={styles.experienceCard}>
          <div className={styles.experienceHeader}>
            <div className={styles.experienceLocation}>{exp.location}</div>
            <div className={styles.experiencePeriod}>{exp.period}</div>
          </div>

          <div className={styles.experienceTitle}>
            <h2 className={styles.role}>
              {exp.role} <span className={styles.at}>at</span>{" "}
              <span className={styles.company}>{exp.company}</span>
            </h2>
            {exp.acquisitionLabel && (
              <span className={styles.acquisitionLabel}>
                {exp.acquisitionLabel}
              </span>
            )}
          </div>

          {exp.companyInfo && (
            <p className={styles.companyInfo}>{exp.companyInfo}</p>
          )}

          <p className={styles.description}>{exp.description}</p>

          <div className={styles.tags}>
            {exp.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <button
            className={styles.contributionsToggle}
            onClick={() => toggleContributions(exp.id)}
          >
            <span className={styles.contributionsToggleText}>
              <CodeIcon className={styles.codeIcon} />
              {expandedId === exp.id
                ? "Hide Detailed Contributions"
                : "Show Detailed Contributions"}
            </span>
          </button>

          {expandedId === exp.id && (
            <ul className={styles.contributionsList}>
              {exp.contributions.map((contribution, index) => (
                <li key={index} className={styles.contributionItem}>
                  {contribution}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
