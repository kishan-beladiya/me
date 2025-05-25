import React, { useState } from "react";
import styles from "./SayHi.module.css";
import Layout from "@/components/ui/Layout";
import Head from "next/head";
import SvgIcon from "@/components/wrapper/SvgIcon";

const sayHiLinks = [
  {
    label: "Email",
    value: "kishanbeladiya925@gmail.com",
    href: "mailto:kishanbeladiya@gmail.com",
    icon: "/svg/email.svg",
  },
  // {
  //   label: "Resume",
  //   value: "View Resume",
  //   href: "https://drive.google.com/file/d/1RaOw5RGLiLJAXRuUO3OS7BS9bsVVLNZ-/view?usp=sharing",
  //   icon: "/svg/doc.svg",
  // },
  // {
  //   label: "Leetcode",
  //   value: "@kishanbeladiya925",
  //   href: "https://leetcode.com/u/kishanbeladiya925/",
  //   icon: "/svg/leetcode.svg",
  // },
  {
    label: "GitHub",
    value: "@kishan-beladiya",
    href: "https://github.com/kishan-beladiya",
    icon: "/svg/github.svg",
  },
  {
    label: "LinkedIn",
    value: "@kishanbeladiya",
    href: "https://linkedin.com/in/kishanbeladiya",
    icon: "/svg/linkedin.svg",
  },
];

const SayHi: React.FC = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <Layout>
      <Head>
        <title>Projects - Kishan Beladiya</title>
        <meta
          name="description"
          content="Projects and contributions of Kishan Beladiya, Software Development Engineer"
        />
      </Head>
      <div className={styles.sayHiContainer}>
        <div className={styles.profileSection}>
          <img
            src="/images/KishanBeladiya_professional.jpg"
            alt="Kishan Beladiya"
            className={styles.avatar}
          />
          <div>
            <h1 className={styles.name}>Kishan Beladiya</h1>
            <p className={styles.role}>
              Software Engineer | Full Stack Developer
            </p>
            <p className={styles.college}>
              Indian Institute of Information Technology, Kota (IIIT), India
              <br />
              B.Tech in Computer Science and Engineering (2019 – 2023)
            </p>
          </div>
        </div>
        <div className={styles.linksSection}>
          {sayHiLinks.map((link, idx) =>
            link.label === "Resume" ? (
              <a
                key={idx}
                href="#"
                className={styles.linkCard}
                onClick={(e) => {
                  e.preventDefault();
                  setShowResume(true);
                }}
              >
                <SvgIcon
                  src={link.icon}
                  alt={link.label}
                  width={18}
                  height={18}
                  color="#9898a1"
                />
                <span className={styles.linkLabel}>{link.label}:</span>
                <span className={styles.linkValue}>{link.value}</span>
              </a>
            ) : (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkCard}
              >
                <SvgIcon
                  src={link.icon}
                  alt={link.label}
                  width={18}
                  height={18}
                  color="#9898a1"
                />
                <span className={styles.linkLabel}>{link.label}:</span>
                <span className={styles.linkValue}>{link.value}</span>
              </a>
            )
          )}
        </div>
        {showResume && (
          <div
            className={styles.resumePopupOverlay}
            onClick={() => setShowResume(false)}
          >
            <div
              className={styles.resumePopup}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={() => setShowResume(false)}
              >
                &times;
              </button>
              <iframe
                src="https://drive.google.com/file/d/1RaOw5RGLiLJAXRuUO3OS7BS9bsVVLNZ-/preview"
                title="Resume"
                width="100%"
                height="600px"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SayHi;
