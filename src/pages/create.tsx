import React, { useState } from "react";
import Router from "next/router";
import Head from "next/head";

import TextField from "@mui/material/TextField";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Draft: React.FC = () => {
  const [content, setContent] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { content };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

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
      <main className={inter.className}>
        <div>
          <form onSubmit={submitData}>
            <h1>New Draft</h1>
            <TextField
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content of the report"
              value={content}
            />
            <input disabled={!content} type="submit" value="Create" />
            <a className="back" href="#" onClick={() => Router.push("/")}>
              or Cancel
            </a>
          </form>
        </div>
      </main>
    </>
  );
};

export default Draft;
