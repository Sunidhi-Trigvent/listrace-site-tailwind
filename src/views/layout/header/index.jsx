import React, { useState } from "react";

// import { Link } from "react-router-dom";
import Toparea from "./toparea";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Toparea />

      {/* Header section */}
      <section>
        <div className="p-8 md:flex md:justify-between">
          {/* Logo */}
          <span>
            <a href="/">
              List <span>Race</span>
            </a>
          </span>

          {/* Hamburger Menu (Visible on Mobile/Tablet) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              &#8801;
            </button>
          </div>

          {/* Navigation Menu */}
          <ul
            className={`space-x-8 md:flex md:space-x-8 ${
              menuOpen ? "block" : "hidden"
            } mt-4 md:mt-0`}
          >
            <li className="scroll active">
              <a href="#home">HOME</a>
            </li>
            <li className="scroll">
              <a href="#works">HOW IT WORKS</a>
            </li>
            <li className="scroll">
              <a href="#explore">EXPLORE</a>
            </li>
            <li className="scroll">
              <a href="#reviews">REVIEW</a>
            </li>
            <li className="scroll">
              <a href="#blog">BLOG</a>
            </li>
            <li className="scroll">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Header;
