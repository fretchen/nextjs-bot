import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// Define the LeftRegion component
function LeftRegion() {
  return (
    <div className={styles.left}>
      <p>
        I am on the left. <br />
        One day you might be able to see uploaded documents up here.
      </p>
    </div>
  );
}

// Define the RightText component
function RightText({ text }) {
  return (
    <div className={styles.right}>
      <p>{text}</p>
    </div>
  );
}

// Define the InputWithButton component
function InputWithButton({ setText }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setText(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={styles.inputField}
      />
      <button onClick={handleButtonClick} className={styles.sendButton}>
        Send
      </button>
    </div>
  );
}

// Define the RightRegion component
function RightRegion() {
  const [text, setText] = useState("I am on the right and get text.");

  return (
    <div className={styles.right}>
      <RightText text={text} />
      <InputWithButton setText={setText} />
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
