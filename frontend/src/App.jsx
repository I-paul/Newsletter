import { useState } from "react";
import './App.css';
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import NewsGrid from "./components/news-grid/news-grid";
import Footer from "./components/footer/footer";
import Webinar from "./components/webinar/webinar";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <NewsGrid />
      <Webinar />
      <Footer/>
    </div>
  );
}

export default App;