import Head from "next/head";
import Layout from "../components/ui/Layout";
import WorkExperience from "../components/WorkExperience";
import styles from "../styles/Work.module.css";

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>Work Experience - Kishan Beladiya</title>
        <meta
          name="description"
          content="Professional experience of Kishan Beladiya, Software Development Engineer"
        />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Employment History</h1>
        <p className={styles.introText}>
          I have been fortunate to work with some amazing teams. I have worked
          mostly with startups but also with some large enterprises. Here is a
          brief overview of my employment history.
        </p>
        <WorkExperience />
      </main>
    </Layout>
  );
}
