import React from "react";
import Toparea from "./toparea";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Toparea />

      {/* Header section */}

      <section>
        <div className="p-8 md:flex md:justify-between">
          <span>
            <a href="/">
              List <span>Race</span>
            </a>
          </span>
          <span>
            <div className="md:hidden">
              <a href="#">&#8801;</a>
            </div>
            <ul className="space-x-8 md:flex">
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
