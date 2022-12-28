import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { openAiApiService } from "../services/openai.service";

import styles from "../styles/Home.module.scss";

const Home = () => {
  const [completion, setCompletion] = useState<string>();
  const [image, setImage] = useState<string>();

  useEffect(() => {
    const fetchTextCompletion = async () => {
      await openAiApiService
        .fetchTextCompletion("A painting of Atlas holding the world")
        .then((response) => {
          setCompletion(response);
        });
    };

    const fetchImage = async () => {
      await openAiApiService
        .fetchImageGeneration("A painting of Atlas holding the world")
        .then((response) => {
          setImage(response);
        });
    };

    fetchTextCompletion();
    fetchImage();
  }, []);

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
        {image ? (
          <Image src={image} width={500} height={500} alt="Atlus picture" />
        ) : null}
        <div>{completion}</div>
      </main>
    </>
  );
};

export default Home;
