import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";

import LeftRegion from "../components/LeftRegion"
import ChatRegion from "../components/ChatRegion"

const inter = Inter({ subsets: ["latin"] });

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
        <ChatRegion />
      </main>
    </>
  );
}
