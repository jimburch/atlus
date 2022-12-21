import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <>
      <Head>
        <title>Atlus</title>
        <meta name="description" content="Explore the World of Atlus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>World of Atlus!</div>
      </main>
    </>
  );
};

export default Home;
