import Head from "next/head";
import React from "react"
import { Inter } from "next/font/google";
import { GetStaticProps } from "next";

import LeftRegion from "../components/LeftRegion";
import ChatRegion from "../components/ChatRegion";
import Grid from "@mui/material/Grid";

import prisma from "../lib/prisma";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps: GetStaticProps = async () => {
  const first = await prisma.report.findUnique({
    where: {
      id: 1,
    },
  });
  const reports = await prisma.report.findMany();

  return {
    props: { reports },
    revalidate: 10,
  };
};

type Props = {
  reports: PostProps[]
}

const Home: React.FC<Props> = (props) => {
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
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item xs={6}>
            <LeftRegion reports={props.reports} />
          </Grid>
          <Grid item xs={6}>
            <ChatRegion />
          </Grid>
        </Grid>
      </main>
    </>
  );
}


export default Home