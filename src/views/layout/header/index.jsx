import React, { useState } from "react";
import Toparea from "./toparea";

function Header({ activeSection, setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to determine text color based on active section
  const getTextColor = (section) => {
    if (section === activeSection) {
      return "text-red-600"; // Active section color
    }
    return "text-black"; // Default text color
  };

  // Function to handle clicks on navigation links
  const handleNavClick = (section) => {
    setActiveSection(section);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" }); // Scroll to the clicked section smoothly
    }
  };

  return (
    <>
      <Toparea />

      {/* Header section */}
      <section className="sticky top-0 z-50 bg-white shadow-lg">
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
              <a
                href="#home"
                className={`${getTextColor("home")} hover:text-red-600`}
                onClick={() => handleNavClick("home")}
              >
                HOME
              </a>
            </li>
            <li className="scroll px-4 py-2 lg:px-0 lg:py-0">
              <a
                href="#how"
                className={`${getTextColor("how")} hover:text-red-600`}
                onClick={() => handleNavClick("how")}
              >
                HOW IT WORKS
              </a>
            </li>
            <li className="scroll px-4 py-2 lg:px-0 lg:py-0">
              <a
                href="#explore"
                className={`${getTextColor("explore")} hover:text-red-600`}
                onClick={() => handleNavClick("explore")}
              >
                EXPLORE
              </a>
            </li>
            <li className="scroll px-4 py-2 lg:px-0 lg:py-0">
              <a
                href="#reviews"
                className={`${getTextColor("reviews")} hover:text-red-600`}
                onClick={() => handleNavClick("reviews")}
              >
                REVIEW
              </a>
            </li>
            <li className="scroll px-4 py-2 lg:px-0 lg:py-0">
              <a
                href="#blog"
                className={`${getTextColor("blog")} hover:text-red-600`}
                onClick={() => handleNavClick("blog")}
              >
                BLOG
              </a>
            </li>
            <li className="scroll px-4 py-2 lg:px-0 lg:py-0">
              <a
                href="#contact"
                className={`${getTextColor("contact")} hover:text-red-600`}
                onClick={() => handleNavClick("contact")}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Header;
