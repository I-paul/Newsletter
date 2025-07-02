import { motion } from "framer-motion";
import Banner from "../../assets/banner.jpg"; 
import "./hero.css";

const Hero = () => {
  const Data = {
    intro: "THIS WEEK IN MOBILITY",
    Desc1: " Frost & Sullivan's industry-leading global Mobility practice has over 200+ automotive industry experts across 30+ countries, providing a continuous stream of top-quality market intelligence on personal and freight mobility.",
    Desc2: "This weekly Mobility Newsletter, offers a concise, timely and focused insights, helping our clients to understand the potential implications of emerging developments, and stay ahead of the competition.",
    Desc3: "It highlights trends that, we believe, will generate transformative challenges and growth opportunities across key domains, including powertrain & electric vehicles, connectivity, autonomous, shared mobility, aftermarket, leasing & rental and logistics & supply chain.",
    End: "We hope you will find this weekly newsletter interesting, insightful, and informative.",
  };

  return (
    <section className="hero-section">
      <motion.img
        src={Banner}
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
        <h2 className="hero-title">{Data.intro}</h2>
        <div className="hero-description">
          <p className="hero-intro-paragraph">
            {Data.Desc1} {Data.Desc2}
          </p>
          <p className="hero-focus-paragraph">
            {Data.Desc3}
          </p>
          <p className="hero-closing">
            {Data.End}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;