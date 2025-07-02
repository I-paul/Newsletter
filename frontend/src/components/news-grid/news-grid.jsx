import React from "react";
import { motion } from "framer-motion";
import newsData from "../../data/newsData.json";
import "./news-grid.css";

const sectionOrder = [
  "Automakers News Alerts",
  "Suppliers News Alerts",
  "Government News Alerts",
];

const sectionAnchors = {
  "Automakers News Alerts": "auto",
  "Suppliers News Alerts": "supplier",
  "Government News Alerts": "government",
};

const sectionTitles = {
  "Automakers News Alerts": "Top Automakers News Last Week",
  "Suppliers News Alerts": "Top Suppliers News Last Week",
  "Government News Alerts": "Top Government News Last Week",
};

const NewsGrid = () => {
  const grouped = {};
  newsData.articles.forEach(article => {
    if (!grouped[article.section]) grouped[article.section] = [];
    grouped[article.section].push(article);
  });

  return (
    <div className="news-main">
      {sectionOrder.map(section => (
        <section
          key={section}
          id={sectionAnchors[section]}
          className="news-section"
        >
          <motion.h2
            className="news-section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {sectionTitles[section]}
          </motion.h2>
          <motion.div
            className="news-grid"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            viewport={{ once: true }}
          >
            {grouped[section]?.map((article, idx) => (
              <motion.a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="news-card"
                key={article.title + idx}
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.03 , boxShadow: "0 9px 32px var(--text-light)" ,borderLeftColor: "var(--btn-secondary-bg)"}}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="news-card-img"
                  loading="lazy"
                />
                <div className="news-card-content">
                  <motion.h3
                    className="news-card-title"
                    whileHover={{
                      color: "#00c6fb",
                      scale: 1.03,
                      textShadow: "0px 2px 12px #005bea55",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {article.title}
                  </motion.h3>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </section>
      ))}
    </div>
  );
};

export default NewsGrid;
