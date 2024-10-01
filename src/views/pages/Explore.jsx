import React from "react";

function Explore() {
  return (
    <>
      <section>
        <div className="bg-slate-500">
          <h2>explore</h2>
          <p>Explore New place, food, culture around the world and many more</p>
        </div>

        <div className="relative mt-10 flex flex-wrap justify-center gap-5 px-4">
          <div className="flex h-[140px] w-[168px] flex-col items-center bg-white pt-4 leading-loose hover:bg-red-700 hover:text-white">
            <img
              className="h-[24px] w-[32px]"
              src={require("../../assets/images/restaurant.png")}
              alt="Restaurant Icon"
            />
            <div className="mt-4">
              <h2>
                <a href="#">Restaurant</a>
              </h2>
              <p>150 listings</p>
            </div>
          </div>

          <div className="flex h-[140px] w-[168px] flex-col items-center bg-white pt-4 leading-loose hover:bg-red-700 hover:text-white">
            <img
              className="h-[24px] w-[32px]"
              src={require("../../assets/images/restaurant.png")}
              alt="Destination Icon"
            />
            <div className="mt-4">
              <h2>
                <a href="#">Destination</a>
              </h2>
              <p>214 listings</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Explore;
