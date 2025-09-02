import { motion } from "framer-motion";
import toggleBookmark from "../bookmarkFunction";
import { BookmarkCheck } from "lucide-react";
import { useState } from "react";
import "../components/news-grid/news-grid.css"; 


const getBookmarkedArticles = () => {
	return JSON.parse(localStorage.getItem("bookmarks")) || [];
};

const BookmarkPage = () => {
	const [bookmarkedArticles, setBookmarkedArticles] = useState(getBookmarkedArticles());

	const handleRemoveBookmark = (article) => {
		toggleBookmark(article);
		setBookmarkedArticles(getBookmarkedArticles());
	};

	return (
		<section className="min-h-[50vh] flex flex-col gap-6 my-8 mx-6 scroll-mt-[90px]" id="bookmarks">
			<motion.h2
				className="text-3xl text-[var(--brand-primary)] font-bold"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				Bookmarks
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
				{bookmarkedArticles.map((article, idx) => (
					<motion.div className="news-card"
						key={article.title + idx}
						initial="hidden"
						whileInView="visible"
						variants={{
							hidden: { opacity: 0, y: 30 },
							visible: { opacity: 1, y: 0 },
						}}
						whileHover={{ scale: 1.01, boxShadow: "0 12px 32px var(--brand-primary), 0 2px 8px var(--shadow-md)", borderLeftColor: "var(--brand-secondary)" }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
					>
						<motion.a
							href={article.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={article.image}
								alt={article.title}
								className="news-card-img"
								loading="lazy"
							/>
							<div className="news-card-content flex-col">
								<motion.h3
									className="news-card-title mb-2"
									whileHover={{
										color: "#000",
										scale: 1.03,
										textShadow: "0px 2px 12px #005bea55",
									}}
									transition={{ type: "spring", stiffness: 300 }}
								>
									{article.title}
								</motion.h3>
							</div>
						</motion.a>
						<button className="bottom-1 absolute bg-transparent text-white rounded hover:text-black duration-[1s] ease-in-out py-2 px-4 w-fit z-10">
							<BookmarkCheck className="inline mr-1" onClick={() => handleRemoveBookmark(article)} />
						</button>

					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default BookmarkPage;