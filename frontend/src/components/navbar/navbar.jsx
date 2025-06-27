import './navbar.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);


  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-content">
        <div className="navbar-logo">
          <a href="#">Frost & Sullivan Mobility</a>
        </div>
        <div className={`navbar-links ${hamburger ? "active" : ""}`}>
          <a href="#auto">Automaker News</a>
          <a href="#supplier">Supplier News</a>
          <a href="#government">Government News</a>
          <a href="#footer">Subscribe</a>
        </div>
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setHamburger((prev) => !prev)}
        >
          <span className={hamburger ? "close" : ""}>
            {hamburger ? "✕" : "☰"}
          </span>
        </button>
      </div>
      <AnimatePresence>
        {hamburger && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <a href="#auto" onClick={() => setHamburger(false)}>Automaker News</a>
            <a href="#supplier" onClick={() => setHamburger(false)}>Supplier News</a>
            <a href="#government" onClick={() => setHamburger(false)}>Government News</a>
            <a href="#footer" onClick={() => setHamburger(false)}>Subscribe</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;