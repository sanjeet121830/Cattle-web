import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Faq, HomeHero, Main, Unlimited } from "../components";
export default function Home() {
  return (
    <>
      <HomeHero />
      <Main />
      <Unlimited/>
      <Faq/>
    </>
  );
}
