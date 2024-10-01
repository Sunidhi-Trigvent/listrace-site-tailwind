import React, { useState } from "react";
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
      <section className="sticky top-0 z-50 bg-white shadow-lg">
        {" "}
        {/* Add sticky class */}
        <div className="relative items-center p-8 lg:flex lg:justify-between">
          {/* Container for hamburger button and logo */}
          <div className="flex w-full items-center justify-between lg:w-auto">
            {/* Hamburger Menu (Visible on Mobile/Tablet) */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-2xl">
                &#8801;
              </button>
            </div>

            {/* Logo */}
            <span className="w-full text-center lg:w-auto">
              <a href="/">
                List <span>Race</span>
              </a>
            </span>
          </div>

          {/* Navigation Menu */}
          <ul
            className={`mt-4 w-full transition-all duration-300 ease-in-out lg:static lg:mt-0 lg:flex lg:space-x-8 lg:bg-transparent ${
              menuOpen ? "block" : "hidden"
            } left-0 ml-0 mt-2 md:left-auto md:ml-0 md:mt-0 md:w-auto lg:ml-0 lg:w-auto`}
          >
            <li className="scroll px-4 py-2 lg:px-0 lg:py-0">
              <a href="#home">HOME</a>
            </li>
            <li className="scroll px-4 py-2 lg:px-0 lg:py-0">
              <a href="#works">HOW IT WORKS</a>
            </li>
            <li className="scroll px-4 py-2 lg:px-0 lg:py-0">
              <a href="#explore">EXPLORE</a>
            </li>
            <li className="scroll px-4 py-2 lg:px-0 lg:py-0">
              <a href="#reviews">REVIEW</a>
            </li>
            <li className="scroll px-4 py-2 lg:px-0 lg:py-0">
              <a href="#blog">BLOG</a>
            </li>
            <li className="scroll px-4 py-2 lg:px-0 lg:py-0">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Header;
