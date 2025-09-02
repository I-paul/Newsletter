import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import newsData from "../../data/newsData.json";
import "./news-grid.css";
import toggleBookmark from "../../bookmarkFunction";
import { Bookmark, BookmarkCheck } from "lucide-react";

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

    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("bookmarks")) || [];
        setBookmarks(stored);
    }, []);

    const handleBookmarkClick = (e, article) => {
        e.preventDefault();
        e.stopPropagation();
        toggleBookmark(article);
        const updated = JSON.parse(localStorage.getItem("bookmarks")) || [];
        setBookmarks(updated);
    };

    const isBookmarked = (article) =>
        bookmarks.some(item => item.title === article.title);

    return (
        <div className="news-main">
            {sectionOrder.map(section => (
                <section key={section} id={sectionAnchors[section]} className="news-section">
                    <motion.h2 
                        className="news-section-title"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {sectionTitles[section]}
                    </motion.h2>
                    <motion.div 
                        className="news-grid"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, staggerChildren: 0.1 }}
                        viewport={{ once: true }}
                    >
                        {grouped[section]?.map((article, idx) => (
                            <motion.div 
                                className="news-card" 
                                key={article.title + idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.01 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                            >
                                <a 
                                    href={article.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <img 
                                        src={article.image} 
                                        alt={article.title} 
                                        className="news-card-img" 
                                        loading="lazy" 
                                    />
                                    <div className="news-card-content">
                                        <h3 className="news-card-title">
                                            {article.title}
                                        </h3>
                                    </div>
                                </a>
                                <button 
                                    className={`bookmark-btn ${isBookmarked(article) ? 'bookmarked' : ''}`}
                                    onClick={(e) => handleBookmarkClick(e, article)}
                                    aria-label={isBookmarked(article) ? "Remove bookmark" : "Add bookmark"}
                                >
                                    {isBookmarked(article) ? (
                                        <BookmarkCheck size={20} />
                                    ) : (
                                        <Bookmark size={20} />
                                    )}
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            ))}
        </div>
    );
};

export default NewsGrid;
