import Head from "next/head";
import styles from "../styles/Home.module.css";
import { HomeHero, Main } from "../components";
export default function Home() {
  return (
    <>
      <HomeHero />
      <Main />
    </>
  );
}
