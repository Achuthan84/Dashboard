import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({ setIsSidebarOpen }) => {
  return (
    <div className="flex-1 flex flex-col min-w-0">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="hidden lg:flex items-center gap-4">
          <h1 className="text-2xl font-semibold text-white">Overview</h1>
        </div>
        <button onClick={() => setIsSidebarOpen(true)}
          className="text-white focus:outline-none lg:hidden">
          <img src={assets.menu} className="w-6" alt="menu" />
        </button>
        <div className="flex items-center space-x-3">
          <div className="hidden lg:flex items-center rounded-lg px-3 py-1 bg-gray-700/30">
            <img src={assets.search} className="w-5 mr-3" alt="search" />
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent text-white outline-none text-sm w-32 md:w-48"
            />
          </div>
          <div className="lg:hidden rounded-lg p-2 cursor-pointer bg-gray-700/30">
            <img src={assets.search} className="w-5" alt="search" />
          </div>

          <div className="rounded-lg p-2 cursor-pointer bg-gray-700/30">
            <img src={assets.moon} className="w-5" alt="darkmode" />
          </div>

          <div className="rounded-lg p-2 cursor-pointer bg-gray-700/30">
            <img src={assets.bell} className="w-5" alt="notification" />
          </div>

          <div className="rounded-full overflow-hidden w-8 h-8 md:w-9 md:h-9 cursor-pointer">
            <img
              src={assets.user}
              alt="user"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
