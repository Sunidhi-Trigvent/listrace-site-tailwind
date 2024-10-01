import React from "react";

function Toparea() {
  return (
    <header className="bg-slate-300 py-2 lg:py-0">
      <div className="flex flex-col items-start p-2 lg:h-10 lg:w-full lg:flex-row lg:justify-between">
        {/* Language and Currency Selection */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          <select className="rounded border">
            <option value="EN">EN</option>
            <option value="BN">BN</option>
            <option value="AB">AB</option>
          </select>
          <select className="rounded border">
            <option value="USD">USD</option>
            <option value="EURO">EURO</option>
            <option value="BDT">BDT</option>
          </select>
          <span>src</span>
        </div>

        {/* Contact Info and Auth Links */}
        <div className="mt-2 flex items-center space-x-4 md:mt-0 lg:mt-0">
          <span>+1 222 777 6565</span>
          <span>Sign In</span>
          <span>Register</span>
        </div>
      </div>
    </header>
  );
}

export default Toparea;
