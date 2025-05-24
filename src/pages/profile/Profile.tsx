import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Profile.module.css";

const CodeBlock: React.FC<{
  id: string;
  children: React.ReactNode;
  isExpanded?: boolean;
  onToggle?: () => void;
}> = ({ id, children, isExpanded = false, onToggle }) => {
  return (
    <span className={styles.codeBlockWrapper}>
      <button
        className={styles.codeBlockToggle}
        onClick={onToggle}
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-chevrons-left-right relative -top-[1.35px] inline-block`}
        >
          <path d="m9 7-5 5 5 5"></path>
          <path d="m15 7 5 5-5 5"></path>
        </svg>
      </button>
      {isExpanded && (
        <div
          className={`${styles.codeBlockContent} ${styles.popupCenter}`}
          id={`code-${id}`}
        >
          {children}
        </div>
      )}
    </span>
  );
};

const Profile: React.FC = () => {
  const [openCodeBlockId, setOpenCodeBlockId] = useState<string | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // Close if click is outside any code block content or toggle button
      const target = event.target as HTMLElement;
      if (
        !target.closest(`.${styles.codeBlockContent}`) &&
        !target.closest(`.${styles.codeBlockToggle}`)
      ) {
        setOpenCodeBlockId(null);
      }
    };
    if (openCodeBlockId !== null) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [openCodeBlockId]);

  // Helper to render CodeBlock with open/close logic
  const renderCodeBlock = (id: string, children: React.ReactNode) => (
    <CodeBlock
      id={id}
      isExpanded={openCodeBlockId === id}
      onToggle={() => setOpenCodeBlockId(openCodeBlockId === id ? null : id)}
    >
      {children}
    </CodeBlock>
  );

  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <div className={styles.profileImage}>
          <Image
            src="/images/KishanBeladiya_professional.jpg"
            alt="Kishan Beladiya"
            width={90}
            height={90}
            className={styles.avatar}
          />
        </div>
        <div className={styles.profileTitle}>
          <h1>Kishan Beladiya</h1>
          <p>Software Engineer - Backend development {"</>"}</p>
        </div>
      </div>

      <div className={styles.profileContent}>
        <p className={styles.paragraph}>
          I am a software developer and leader based in India{" "}
          {renderCodeBlock(
            "location",
            <>
              <p>Currently working in Bangalore, India.</p>
              <p>Open to remote opportunities worldwide.</p>
            </>
          )}
          . I have a decade long experience working mostly with startups and
          scale-ups{" "}
          {renderCodeBlock(
            "experience",
            <>
              <p>- SDE-1 at BIK.ai (YC S20), July 2024 - Present</p>
              <p>- SDE-1 at MAQ Software, January 2023 - June 2024</p>
              <p>- SDE Intern at Oollta Cab, December 2021 - March 2022</p>
            </>
          )}
          .
        </p>

        <p className={styles.paragraph}>
          Over the years, I have worked with a variety of technologies{" "}
          {renderCodeBlock(
            "tech-stack",
            <>
              <p>Frontend: React.js, Next.js, TypeScript, Flutter</p>
              <p>Backend: Node.js, Python (FastAPI, Django), C# (.NET)</p>
              <p>
                Database: MySQL, Firestore, Elasticsearch, PostgreSQL, Pinecone
              </p>
            </>
          )}{" "}
          in a variety of domains{" "}
          {renderCodeBlock(
            "domains",
            <>
              <p>- AI/ML Applications</p>
              <p>- E-commerce Solutions</p>
              <p>- Mobile Development</p>
              <p>- Enterprise Software</p>
            </>
          )}{" "}
          and have worn many different hats{" "}
          {renderCodeBlock(
            "roles",
            <>
              <p>- Full Stack Developer</p>
              <p>- Feature Team Lead</p>
              <p>- Mobile App Developer</p>
              <p>- Research Engineer</p>
            </>
          )}
          .
        </p>

        <p className={styles.paragraph}>
          I am a Full-stack developer at heart{" "}
          {renderCodeBlock(
            "full-stack",
            <>
              <p>Passionate about building end-to-end solutions with:</p>
              <p>- Clean, optimized code</p>
              <p>- Scalable architectures</p>
              <p>- Performance optimization</p>
              <p>- Modern development practices</p>
            </>
          )}{" "}
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
          {renderCodeBlock(
            "insave",
            <>
              <p>InSave | Hybrid Android App | 4.2 Rating</p>
              <p>10,00,000+ Downloads</p>
              <p>
                Tech Stack: Flutter, Python (FastAPI), SQLite, Firebase, GetX
              </p>
              <p>- Designed a backend system using FastAPI</p>
              <p>- Optimized app performance by reducing memory usage by 15%</p>
            </>
          )}
          . I have been working on various projects since 2019, but focused on
          my research project in 2022{" "}
          {renderCodeBlock(
            "research",
            <>
              <p>
                Early and Automated Diagnosis of Dysgraphia using Machine
                Learning
              </p>
              <p>Published by Springer Nature Computer Science 2023</p>
              <p>Project website: www.tild.co.in</p>
              <p>- Developed a novel Dysgraphia detection system</p>
              <p>- Achieved 83% detection accuracy</p>
              <p>- Created web and mobile apps for live detection</p>
            </>
          )}
          .
        </p>

        <p className={styles.paragraph}>
          I am a competitive programmer{" "}
          {renderCodeBlock(
            "programming",
            <>
              <p>- Leetcode max rating: 1775 (top 8%)</p>
              <p>- CodeChef max rating: 1811 (4 Star)</p>
              <p>- All India Rank 127 in Leetcode Biweekly contest 92</p>
              <p>
                - Ranked 62 globally out of 2878 participants in CodeChef
                Starter-32
              </p>
              <p>- Total 1000+ solved DSA problems across platforms</p>
            </>
          )}{" "}
          and a B.Tech graduate{" "}
          {renderCodeBlock(
            "education",
            <>
              <p>
                Indian Institute of Information Technology, Kota (IIIT), India
              </p>
              <p>B.Tech in Computer Science and Engineering</p>
              <p>2019 – 2023</p>
              <p>CGPA: 8/10</p>
            </>
          )}
          . I have been an active contributor to open source projects and
          continuously work on improving my skills{" "}
          {renderCodeBlock(
            "skills",
            <>
              <p>- Programming Languages: C++, Python, C#(.Net), Dart</p>
              <p>- Familiar with: Java</p>
              <p>- Mobile Dev: Flutter</p>
              <p>- Backend: Node.js, FastAPI, Django</p>
              <p>- Frontend: React.js, Next.js, TypeScript, HTML, CSS</p>
              <p>- Other: DSA, Git/GitHub, REST APIs, ML/DL, OS, OOPs, CN</p>
            </>
          )}
          .
        </p>
      </div>
    </div>
  );
};

export default Profile;
