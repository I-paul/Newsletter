import { useState } from "react";
import './App.css';
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import NewsGrid from "./components/news-grid/news-grid";
import BookmarkPage from "./bookmark/bookmarkPage";
import Footer from "./components/footer/footer";
import Webinar from "./components/webinar/webinar";

const App = () => {
  const [showBookmarks, setShowBookmarks] = useState(false);

  return (
    <>
      <Navbar selector={setShowBookmarks} />
      {showBookmarks ? <BookmarkPage /> : <div className="app">
        <Hero />
        <NewsGrid />
        <Webinar />
      </div>}
      <Footer />
    </>
  );
}

export default App;