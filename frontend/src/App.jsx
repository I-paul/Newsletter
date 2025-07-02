import { useState } from "react";
import './App.css';
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import NewsGrid from "./components/news-grid/news-grid";
import Footer from "./components/footer/footer";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <NewsGrid />
      <Footer/>
    </div>
  );
}

export default App;