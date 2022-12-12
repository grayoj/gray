import React from "react";
import AboutHero from "../components/AboutHero";
import AboutResume from "../components/AboutResume";
import AboutSection from "../components/AboutSection";
import AboutWidget from "../components/AboutWidget";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import IndexPage from "../IndexPage";

export default function About() {
  return (
    <>
      <IndexPage />
      <Banner />;
      <Navbar />
      <AboutHero />
      <AboutWidget />
      <AboutSection />
      <AboutResume />
      <Footer />
    </>
  );
}
