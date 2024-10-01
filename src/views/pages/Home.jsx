import React, { useState } from "react";
import How from "./How";
import ScrollSpy from "react-ui-scrollspy";
import Header from "../layout/header";
import Explore from "./Explore";

function Home() {
  const [activeSection, setActiveSection] = useState("home");

  // Handle setting the active section from ScrollSpy
  const handleScrollUpdate = (activeElement) => {
    setActiveSection(activeElement.id);
  };

  return (
    <>
      {/* Pass activeSection and setActiveSection to Header */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <ScrollSpy onUpdate={handleScrollUpdate} scrollThrottle={100}>
        <section id="home">
          {/* Home section content */}
          <div
            className="relative h-screen w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${require("../../assets/images/welcome-hero/banner.jpg")})`,
            }}
          >
            <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-50">
              <h2 className="text-center text-[40px] font-bold text-white">
                BEST PLACE TO FIND AND EXPLORE
                <br /> THAT ALL YOU NEED
              </h2>
              <p className="pt-7 text-center text-[18px] font-bold text-white">
                Find Best Place, Restaurant, Hotel, Real Estate, and many more
                things in just One click
              </p>
            </div>
          </div>
        </section>

        <section id="how">
          {/* How section content */}
          <How />
        </section>

        <section id="explore">
          {/* Explore section content */}
          <Explore />
        </section>
      </ScrollSpy>
    </>
  );
}

export default Home;
