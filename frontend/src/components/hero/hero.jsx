import React from "react";
import { motion } from "framer-motion";
import banner from "../../assets/banner.jpg";
import newsData from "../../data/newsData.json";
import "./hero.css";

const Hero = () => (
  <section className="hero-section">
    <motion.img
      src={banner}
      alt="Newsletter Banner"
      className="hero-banner"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
    <motion.div
      className="hero-content"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="hero-title">Mobility News Alert</h2>
      <p className="hero-intro">{newsData.intro}</p>
    </motion.div>
  </section>
);

export default Hero;