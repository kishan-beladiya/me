import Layout from "@/components/ui/Layout";
import Head from "next/head";
import styles from "./Research.module.css";
import ResearchWork from "./Research";
export default function Research() {
  return (
    <Layout>
      <Head>
        <title>Research work - Kishan Beladiya</title>
        <meta
          name="description"
          content="Research work and contributions of Kishan Beladiya, Software Development Engineer"
        />
      </Head>
      <main className={styles.main}>
        <ResearchWork />
      </main>
    </Layout>
  );
}
