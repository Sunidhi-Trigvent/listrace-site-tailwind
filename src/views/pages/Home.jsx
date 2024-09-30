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
          <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-center text-[40px] font-bold text-white">
              BEST PLACE TO FIND AND EXPLORE
              <br></br> THAT ALL YOU NEED
            </h2>
            <p className="pt-7 text-center text-[18px] font-bold text-white">
              Find Best Place, Restaurant, Hotel, Real State and many more
              things in just One click
            </p>

            {/* Search bar */}
            <div className="flex justify-center space-x-5 pt-10">
              <div className="flex h-[53px] w-[810px] justify-between rounded-md bg-slate-200 p-3">
                <span className="flex">
                  <h4 className="font-semibold">What?</h4>
                  <div className="ml-1">
                    <input
                      className="w-72 bg-slate-200 pt-[3px] text-sm"
                      type="text"
                      placeholder="Ex: Place, Restaurant, Food, Automobile"
                    ></input>
                  </div>
                </span>

                <span className="flex">
                  <h4 className="font-semibold">Location</h4>
                  <div className="ml-1">
                    <input
                      className="w-72 bg-slate-200 pt-[3px] text-sm"
                      type="text"
                      placeholder="Ex: London, New York, Rome"
                    ></input>
                  </div>
                </span>
              </div>
              <button className="rounded-md bg-red-600 px-4 py-2 text-white">
                Search
              </button>
            </div>
          </div>
        </div>

        <div class="card" className="relative flex justify-evenly">
          <div
            class="card-item1"
            className="hover:text -mt-20 flex h-[140px] w-[168px] flex-col items-center bg-white pt-4 leading-loose hover:bg-red-700 hover:text-white"
          >
            <img
              className="h-[24px] w-[32px]"
              src={require("../../assets/images/restaurant.png")}
              alt=""
            />
            <div className="mt-4">
              <h2>
                <a href="#">resturent</a>
              </h2>
              <p>150 listings</p>
            </div>
          </div>

          <div
            class="card-item2"
            className="hover:text -mt-20 flex h-[140px] w-[168px] flex-col items-center bg-white pt-4 leading-loose hover:bg-red-700 hover:text-white"
          >
            <img
              className="h-[24px] w-[32px]"
              src={require("../../assets/images/restaurant.png")}
              alt=""
            />
            <div className="mt-4">
              <h2>
                <a href="#">destination</a>
              </h2>
              <p>214 listings</p>
            </div>
          </div>

          <div
            class="card-item3"
            className="hover:text -mt-20 flex h-[140px] w-[168px] flex-col items-center bg-white pt-4 leading-loose hover:bg-red-700 hover:text-white"
          >
            <img
              className="h-[24px] w-[32px]"
              src={require("../../assets/images/restaurant.png")}
              alt=""
            />
            <div className="mt-4">
              <h2>
                <a href="#">hotels</a>
              </h2>
              <p>185 listings</p>
            </div>
          </div>

          <div
            class="card-item4"
            className="hover:text -mt-20 flex h-[140px] w-[168px] flex-col items-center bg-white pt-4 leading-loose hover:bg-red-700 hover:text-white"
          >
            <img
              className="h-[24px] w-[32px]"
              src={require("../../assets/images/restaurant.png")}
              alt=""
            />
            <div className="mt-4">
              <h2>
                <a href="#">healthcare</a>
              </h2>
              <p>200 listings</p>
            </div>
          </div>

          <div
            class="card-item5"
            className="hover:text -mt-20 flex h-[140px] w-[168px] flex-col items-center bg-white pt-4 leading-loose hover:bg-red-700 hover:text-white"
          >
            <img
              className="h-[24px] w-[32px]"
              src={require("../../assets/images/restaurant.png")}
              alt=""
            />
            <div className="mt-4">
              <h2>
                <a href="#">automotion</a>
              </h2>
              <p>120 listings</p>
            </div>
          </div>
        </div>
      </section>
      {/* home section ends */}
    </>
  );
}

export default Home;
