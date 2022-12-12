import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import IndexPage from "./IndexPage";

export default function Home() {
  return (
    <>
      <IndexPage />
      <Banner />;
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
