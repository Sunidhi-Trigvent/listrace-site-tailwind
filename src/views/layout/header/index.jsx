import React from "react";
import Toparea from "./toparea";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Toparea />

      {/* Header section */}

      <section>
        <div className="flex justify-between p-8">
          <span>
            <a href="/">
              List <span>Race</span>
            </a>
          </span>
          <span>
            <ul className="flex space-x-8">
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
          </span>
        </div>
      </section>
    </>
  );
}

export default Header;
