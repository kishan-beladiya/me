import React from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import SvgIcon from "../wrapper/SvgIcon";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link
          href="/"
          className={`${styles.navLink} ${
            currentPath === "/" ? styles.active : ""
          }`}
        >
          <span className={styles.icon}>
            <SvgIcon
              src="/svg/home.svg"
              width={16}
              height={16}
              color="#9898a1"
            />
          </span>{" "}
          <span>Home</span>
        </Link>
        <Link
          href="/work"
          className={`${styles.navLink} ${
            currentPath === "/work" ? styles.active : ""
          }`}
        >
          <span className={styles.icon}>
            <SvgIcon
              src="/svg/work.svg"
              width={16}
              height={16}
              color="#9898a1"
            />
          </span>{" "}
          Work
        </Link>
        <Link
          href="/projects"
          className={`${styles.navLink} ${
            currentPath === "/projects" ? styles.active : ""
          }`}
        >
          <span className={styles.icon}>
            <SvgIcon
              src="/svg/projects.svg"
              width={16}
              height={16}
              color="#9898a1"
            />
          </span>{" "}
          Projects
        </Link>
        <Link
          href="/posts"
          className={`${styles.navLink} ${
            currentPath === "/posts" ? styles.active : ""
          }`}
        >
          <span className={styles.icon}>
            <SvgIcon
              src="/svg/posts.svg"
              width={16}
              height={16}
              color="#9898a1"
            />
          </span>{" "}
          Posts
        </Link>
      </div>
      <div className={styles.sayHi}>
        <Link href="/contact" className={styles.sayHiButton}>
          <span className={styles.icon}>
            <SvgIcon
              src="/svg/chat.svg"
              width={16}
              height={16}
              color="#9898a1"
            />
          </span>
          Say Hi
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
