import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

// Define the LeftRegion component
function LeftRegion() {
  return (
    <div className={styles.left}>
      I am on the left.
      {/* Content for the left region goes here */}
    </div>
  );
}

// Define the RightRegion component
function RightRegion() {
  return (
    <div className={styles.right}>
      <p>I am on the right.</p>
      <input type="text" className={styles.inputField} />
      <button className={styles.sendButton}>Send</button>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>My AI Next Playground</title>
        <meta
          name="description"
          content="Test simple AI streaming with Ollama"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <LeftRegion />
        <RightRegion />
      </main>
    </>
  );
}
