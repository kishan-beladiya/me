import React from "react";
import styles from "./Research.module.css";

const ResearchWork: React.FC = () => {
  return (
    <div className={styles.researchContainer}>
      <header className={styles.headerSection}>
        <h1 className={styles.title}>
          Early and Automated Diagnosis of Dysgraphia using Machine learning
          Approach
        </h1>
        <div className={styles.meta}>
          <span>Published in Springer Nature Computer Science, 2023</span>
          <span>Presented at: University in Spain & Bengaluru Conference</span>
          <span>
            Website:{" "}
            <a
              href="https://tild.co.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              tild.co.in
            </a>
          </span>
        </div>
      </header>
      <section className={styles.section}>
        <h2>Abstract</h2>
        <p className={styles.abstract}>
          Dysgraphia is a handwriting problem that impairs a person’s ability to
          write. Even the diagnosis of this condition is challenging, and there
          is currently no cure. Researchers from all over the world have studied
          this issue and offered several solutions. Motivation to work on this
          problem did arise after meeting with a few students struggling in
          achieving performance despite putting in sincere efforts. This paper
          also discusses the various forms of dysgraphia and its associated
          symptoms and proposes machine-learning models to detect dysgraphia.
          Unsupervised machine learning techniques are used to detect
          dysgraphia-related handwriting impairment. In order to accomplish the
          goal, a fresh handwriting dataset is created by conducting handwriting
          exercises and a wide variety of features are extracted to represent
          various handwriting characteristics. Results indicate that random
          forest returns the best accuracy but scores less while detecting
          dysgraphic samples correctly. One class SVM has been tried to deal
          with the issue of the availability of dysgraphic samples required to
          train machines. Results indicate good hope in identification with a
          scope of improvement with increase by increase in sample size for
          machine training. This paper also seeks to raise awareness of the
          Dysgraphia issue and its effects on society. <b>Keywords:</b>{" "}
          Dysgraphia; One class SVM; Machine; Learning difficulties; OCC; Random
          Forest; Motor ability
        </p>
      </section>
      {/* Future sections: Methods, Results, Presentations, Media, etc. */}
    </div>
  );
};

export default ResearchWork;
