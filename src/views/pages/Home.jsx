import React, { useState } from "react";
import How from "./How";
import ScrollSpy from "react-ui-scrollspy";
import Header from "../layout/header";
import Explore from "./Explore";

function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <Header activeSection={activeSection} />

      <ScrollSpy onActiveChange={setActiveSection}>
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
          {/* How section content */}
          <Explore />
        </section>
      </ScrollSpy>
    </>
  );
}

export default Home;
