import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Profile.module.css";

const CodeBlock: React.FC<{ id: string; children: React.ReactNode }> = ({
  id,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <span className={styles.codeBlockWrapper}>
      <button
        className={styles.codeBlockToggle}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls={`code-${id}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={`lucide lucide-chevrons-left-right relative -top-[1.35px] inline-block`}
        >
          <path d="m9 7-5 5 5 5"></path>
          <path d="m15 7 5 5-5 5"></path>
        </svg>
      </button>
      {isExpanded && (
        <div className={styles.codeBlockContent} id={`code-${id}`}>
          {children}
        </div>
      )}
    </span>
  );
};

const Profile: React.FC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <div className={styles.profileImage}>
          <Image
            src="/images/KishanBeladiya.jpg"
            alt="Kishan Beladiya"
            width={90}
            height={90}
            className={styles.avatar}
          />
        </div>
        <div className={styles.profileTitle}>
          <h1>Kishan Beladiya</h1>
          <p>Software Engineer - Full stack development {"</>"}</p>
        </div>
      </div>

      <div className={styles.profileContent}>
        <p className={styles.paragraph}>
          I am a software developer and leader based in India{" "}
          <CodeBlock id="location">
            <p>Currently working in Bangalore, India.</p>
            <p>Open to remote opportunities worldwide.</p>
          </CodeBlock>
          . I have a decade long experience working mostly with startups and
          scale-ups{" "}
          <CodeBlock id="experience">
            <p>- SDE-1 at BIK.ai (YC S20), July 2024 - Present</p>
            <p>- SDE-1 at MAQ Software, January 2023 - June 2024</p>
            <p>- SDE Intern at Oollta Cab, December 2021 - March 2022</p>
          </CodeBlock>
          .
        </p>

        <p className={styles.paragraph}>
          Over the years, I have worked with a variety of technologies{" "}
          <CodeBlock id="tech-stack">
            <p>Frontend: React.js, Next.js, TypeScript, Flutter</p>
            <p>Backend: Node.js, Python (FastAPI, Django), C# (.NET)</p>
            <p>
              Database: MySQL, Firestore, Elasticsearch, PostgreSQL, Pinecone
            </p>
          </CodeBlock>{" "}
          in a variety of domains{" "}
          <CodeBlock id="domains">
            <p>- AI/ML Applications</p>
            <p>- E-commerce Solutions</p>
            <p>- Mobile Development</p>
            <p>- Enterprise Software</p>
          </CodeBlock>{" "}
          and have worn many different hats{" "}
          <CodeBlock id="roles">
            <p>- Full Stack Developer</p>
            <p>- Feature Team Lead</p>
            <p>- Mobile App Developer</p>
            <p>- Research Engineer</p>
          </CodeBlock>
          .
        </p>

        <p className={styles.paragraph}>
          I am a Full-stack developer at heart{" "}
          <CodeBlock id="full-stack">
            <p>Passionate about building end-to-end solutions with:</p>
            <p>- Clean, optimized code</p>
            <p>- Scalable architectures</p>
            <p>- Performance optimization</p>
            <p>- Modern development practices</p>
          </CodeBlock>{" "}
          with an eye for good design and expertise in all parts of the stack
          including the frontend, backend, databases, devops and cloud.
        </p>

        <p className={styles.paragraph}>
          You might know me from{" "}
          <Link
            href="https://play.google.com/store/apps/details?id=com.insave.insave"
            className={styles.link}
          >
            InSave
          </Link>{" "}
          <CodeBlock id="insave">
            <p>InSave | Hybrid Android App | 4.2 Rating</p>
            <p>10,00,000+ Downloads</p>
            <p>Tech Stack: Flutter, Python (FastAPI), SQLite, Firebase, GetX</p>
            <p>- Designed a backend system using FastAPI</p>
            <p>- Optimized app performance by reducing memory usage by 15%</p>
          </CodeBlock>
          . I have been working on various projects since 2019, but focused on
          my research project in 2022{" "}
          <CodeBlock id="research">
            <p>
              Early and Automated Diagnosis of Dysgraphia using Machine Learning
            </p>
            <p>Published by Springer Nature Computer Science 2023</p>
            <p>Project website: www.tild.co.in</p>
            <p>- Developed a novel Dysgraphia detection system</p>
            <p>- Achieved 83% detection accuracy</p>
            <p>- Created web and mobile apps for live detection</p>
          </CodeBlock>
          .
        </p>

        <p className={styles.paragraph}>
          I am a competitive programmer{" "}
          <CodeBlock id="programming">
            <p>- Leetcode max rating: 1775 (top 8%)</p>
            <p>- CodeChef max rating: 1811 (4 Star)</p>
            <p>- All India Rank 127 in Leetcode Biweekly contest 92</p>
            <p>
              - Ranked 62 globally out of 2878 participants in CodeChef
              Starter-32
            </p>
            <p>- Total 1000+ solved DSA problems across platforms</p>
          </CodeBlock>{" "}
          and a B.Tech graduate{" "}
          <CodeBlock id="education">
            <p>
              Indian Institute of Information Technology, Kota (IIIT), India
            </p>
            <p>B.Tech in Computer Science and Engineering</p>
            <p>2019 – 2023</p>
            <p>CGPA: 8/10</p>
          </CodeBlock>
          . I have been an active contributor to open source projects and
          continuously work on improving my skills{" "}
          <CodeBlock id="skills">
            <p>- Programming Languages: C++, Python, C#(.Net), Dart</p>
            <p>- Familiar with: Java</p>
            <p>- Mobile Dev: Flutter</p>
            <p>- Backend: Node.js, FastAPI, Django</p>
            <p>- Frontend: React.js, Next.js, TypeScript, HTML, CSS</p>
            <p>- Other: DSA, Git/GitHub, REST APIs, ML/DL, OS, OOPs, CN</p>
          </CodeBlock>
          .
        </p>
      </div>
    </div>
  );
};

export default Profile;
