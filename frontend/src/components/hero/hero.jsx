import { motion } from "framer-motion";
import "./hero.css";

const Hero = () => {
  const Data = {
    intro: "Welcome to this issue of weekly news tracker",
    Desc1: " Frost & Sullivan's industry-leading global Mobility practice has over 200+ automotive industry experts across 30+ countries, providing a continuous stream of top-quality market intelligence on personal and freight mobility.",
    Desc2: "This weekly Mobility Newsletter, offers a concise, timely and focused insights, helping our clients to understand the potential implications of emerging developments, and stay ahead of the competition.",
    Desc3: "It highlights trends that, we believe, will generate transformative challenges and growth opportunities across key domains, including powertrain & electric vehicles, connectivity, autonomous, shared mobility, aftermarket, leasing & rental and logistics & supply chain.",
    End: "We hope you will find this weekly newsletter interesting, insightful, and informative.",
  };

  return (
    <section className="hero-section">
      <div className="relative w-full h-[320px] font-[var(--font-main)] bg-gradient-to-tl from-[var(--brand-accent)] to-[var(--info)]">
        <motion.img
          src='https://fs-moads.com/research/images/mailer/jul_28/banner.jpg'
          alt="Newsletter Banner"
          className="w-full h-full object-cover border-b-4 border-[var(--brand-accent)] absolute mix-blend-overlay"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <div className="p-3 w-full h-[320px] absolute cursor-default justify-center md:p-10 text-[var(--text-light)]">
          <div className="text-2xl pl-[0.5rem] pt-16 font-bold md:text-4xl md:pl-[2rem] lg:pl-[4rem] ">
            THE WEEK IN MOBILITY
          </div>
          <div className="text-lg pl-[0.5rem] pt-3 text-light md:text-xl md:pl-[2rem] lg:pl-[4rem]  ">
            Frost & Sullivan's Weekly News Tracker
          </div>
        </div>
      </div>
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