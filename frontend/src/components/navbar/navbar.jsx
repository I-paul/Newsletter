import './navbar.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);


  return (
    <motion.nav
      className="sticky top-0 z-50  bg-[#17426b] backdrop-blur-sm px-4 py-2   "
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-content">
        <div className="navbar-logo">
          <a href="#">
            <img src={logo} alt="Logo" className="w-60" />
          </a>
        </div>
        <div className={`navbar-links ${hamburger ? "active" : ""}`}>
          <a href="#auto">Automaker News</a>
          <a href="#supplier">Supplier News</a>
          <a href="#government">Government News</a>
          {/* <a href="#Webinar">Webinar</a> */}
        </div>
        <button
          className="hamburger z-300"
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
            className="mobile-menu hidden "
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <a href="#auto" onClick={() => setHamburger(false)}>Automaker News</a>
            <a href="#supplier" onClick={() => setHamburger(false)}>Supplier News</a>
            <a href="#government" onClick={() => setHamburger(false)}>Government News</a>
            {/* <a href="#Webinar" onClick={() => setHamburger(false)}>Webinar</a> */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;