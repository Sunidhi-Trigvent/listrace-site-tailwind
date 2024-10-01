import React from "react";

function Toparea() {
  return (
    <>
      <header className="bg-slate-300 md:h-10 md:w-full">
        <div className="p-2 md:flex md:justify-between">
          <span className="">
            <select className="mx-1">
              <option value="EN">EN</option>
              <option value="BN">BN</option>
              <option value="AB">AB</option>
            </select>
            <select className="mx-1">
              <option value="USD">USD</option>
              <option value="EURO">EURO</option>
              <option value="BDT">BDT</option>
            </select>
            <span>src</span>
          </span>

          <div className="mx-1">
            <span className="mx-5">+1 222 777 6565</span>
            <span className="mx-5">Sign In</span>
            <span className="mx-5">Register</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Toparea;
