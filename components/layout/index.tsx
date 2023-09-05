import Header from "@/components/header";
import Footer from "@/components/footer";
import { ReactNode } from "react";
import styles from "@/styles/layout.module.css";
import Head from "next/head";
interface LayoutProps {
  children: ReactNode;
  judul: String;
}
export default function layout(props: LayoutProps) {
  const { children, judul } = props;
  return (
    <>
      <Head>
        <title>NextJs | {judul}</title>
        <meta name="description" content="Basic Nextjs" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
