import React from "react";

function Toparea() {
  return (
    <header className="bg-slate-300 py-2 md:py-0">
      <div className="flex flex-col items-center p-2 md:h-10 md:w-full md:flex-row md:justify-between">
        {/* Language and Currency Selection */}
        <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0 md:space-x-4">
          <select className="mx-1 rounded border p-1">
            <option value="EN">EN</option>
            <option value="BN">BN</option>
            <option value="AB">AB</option>
          </select>
          <select className="mx-1 rounded border p-1">
            <option value="USD">USD</option>
            <option value="EURO">EURO</option>
            <option value="BDT">BDT</option>
          </select>
          <span className="mx-1">src</span>
        </div>

        {/* Contact Info and Auth Links */}
        <div className="mt-2 flex flex-col items-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 md:mt-0">
          <span className="mx-1">+1 222 777 6565</span>
          <span className="mx-1">Sign In</span>
          <span className="mx-1">Register</span>
        </div>
      </div>
    </header>
  );
}

export default Toparea;
