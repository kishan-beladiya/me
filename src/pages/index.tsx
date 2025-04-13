import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@/components/ui/Layout";
import Profile from "@/pages/profile/Profile";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Kishan Beladiya - Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Kishan Beladiya, Engineering Leader and Developer based in UK"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Profile />
      </main>
    </Layout>
  );
}
