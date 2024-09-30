import React from "react";

function Home() {
  return (
    <>
      {/* home section */}
      <section>
        <div
          className="relative h-screen w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${require("../../assets/images/welcome-hero/banner.jpg")})`,
          }}
        >
          {/* Content over background image */}
          <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-50 p-10">
            <h1 className="text-center text-7xl font-bold text-white">
              BEST PLACE TO FIND AND EXPLORE THAT ALL YOU NEED
            </h1>
            <p className="pt-7 text-center text-xl font-bold text-white">
              Find Best Place, Restaurant, Hotel, Real State and many more
              things in just One click
            </p>

            {/* Search bar */}
            <div className="flex justify-center space-x-5 pt-10">
              <div className="flex h-[53px] w-[690px] justify-between rounded-md bg-slate-200 p-3">
                <span className="flex">
                  <h4 className="font-semibold">What?</h4>
                  <p className="pl-2 pt-[3px] text-sm text-gray-600">
                    Ex: Place, Restaurant, Food, Automobile
                  </p>
                </span>
                <span className="flex">
                  <h4 className="font-semibold">Location</h4>
                  <p className="pl-2 pt-[3px] text-sm text-gray-600">
                    Ex: London, New York, Rome
                  </p>
                </span>
              </div>
              <button className="rounded-md bg-red-600 px-4 py-2 text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* home section ends */}
    </>
  );
}

export default Home;
