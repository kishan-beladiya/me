import React from "react";
import styles from "./Projects.module.css";
import Layout from "@/components/ui/Layout";
import Head from "next/head";

const projects = [
  {
    title: "Shield VPN: Fast Secure Proxy",
    period: "Aug 2023 - Dec 2023",
    description: [
      "Built a versatile cross-platform VPN app with Flutter, offering secure encrypted connections, protocol selection, and multiple server locations.",
      "Streamlined data flow and optimized UI updates through efficient state management with GetX.",
      "Optimized app performance by reducing memory usage by 15%, reducing re-render of the UI using GetX state management.",
      "Integrated the robust OpenVPN library, employing industry-standard encryption algorithms for secure VPN connections.",
    ],
    skills: [
      "MVC",
      "GetX",
      "Firebase",
      "OpenVPN",
      "Flask",
      "Flutter",
      "Version Control Tools",
    ],
  },
  {
    title: "Track It (Flipr Hackathon 2022)",
    period: "Oct 2022",
    description: [
      "Tech used: Flutter, NodeJs, MongoDB.",
      "Registration and login for Admin and Employees using JWT (Javascript Web Token).",
      "Employee can add daily tasks and see statistics. Admin can track and block employees. Filtering tasks by date is available.",
    ],
    skills: [
      "Flutter",
      "NodeJs",
      "MongoDB",
      "Back-End Web Development",
      "Version Control Tools",
    ],
  },
  {
    title: "InSave",
    period: "May 2022 - Jul 2022",
    description: [
      "1 Million Downloads.",
      "Tech used: Flutter, Python (FastAPI).",
      "Focused on frontend design. User can download Instagram posts and view stories anonymously.",
    ],
    skills: [
      "Flutter",
      "Python (FastAPI)",
      "Back-End Web Development",
      "Version Control Tools",
    ],
  },
  {
    title: "Whats Recover",
    period: "May 2022 - Jul 2022",
    description: [
      "Store deleted messages of WhatsApp (can extend to other apps).",
      "App runs in foreground to recover messages, used platform channel to implement.",
    ],
    skills: ["Flutter", "Version Control Tools"],
  },
  {
    title: "SunislandPlate: Restaurant Website",
    period: "May 2021 - Jun 2021",
    description: [
      "Made with Django framework.",
      "Features: Email notifications, order history, review section, contact form, sign-in/sign-out, etc.",
    ],
    skills: ["Django", "Back-End Web Development", "Version Control Tools"],
  },
  {
    title: "SplitePe.co",
    period: "Under development",
    description: [
      "Same as Splitwise for expense splitting.",
      "Android and iOS app.",
    ],
    skills: ["Flutter", "Mobile App"],
  },
];

const Projects: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Projects - Kishan Beladiya</title>
        <meta
          name="description"
          content="Projects and contributions of Kishan Beladiya, Software Development Engineer"
        />
      </Head>
      <div className={styles.experienceContainer}>
        <div className={styles.title}>Projects</div>
        <p className={styles.introText}>
          I have worked on various projects, both personal and professional,
          that showcase my skills in software development, mobile app
          development, and backend technologies. Here are some of the key
          projects I have contributed to:
        </p>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.experienceCard}>
            <div className={styles.experienceHeader}>
              <span className={styles.projectTitle}>{project.title}</span>
              <span className={styles.projectPeriod}>{project.period}</span>
            </div>
            <ul className={styles.contributionsList}>
              {project.description.map((desc, i) => (
                <li key={i} className={styles.contributionItem}>
                  {desc}
                </li>
              ))}
            </ul>
            <div className={styles.tags}>
              {project.skills.map((skill, i) => (
                <span key={i} className={styles.tag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
