import Link from "next/link";
import styles from "@/styles/header.module.css";

export default function header() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={styles.item}>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li className={styles.item}>
          <Link href="/users">User</Link>
        </li>
      </ul>
    </header>
  );
}
