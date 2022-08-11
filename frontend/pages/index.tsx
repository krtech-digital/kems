import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "@krtech-digital/krtech-ui";
import { Login } from "../utils/fetch";

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>NextJS TypeScript template</title>
          <meta
            name="description"
            content="Generated krtech@NextJS TypeScript template"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div>
        <Button buttonText="Hello" variant="primary" onClick={() => {
          // console.log("object");
          console.log(Login("karlo", "erik"));
}}/>
      </div>
    </div>
  );
};

export default Home;
