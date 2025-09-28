import React, { useState } from 'react';
import { assets, categories } from '../assets/assets';
import logout from '../assets/Logout.png';
import Profit from './Profit';
import SalesReport from './SalesReport';
import Invoice from './Invoice';
import Analytics from './Analytics';
import Activity from './Activity';
import Navbar from './Navbar';

const SideBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-primary overflow-hidden">
            <div className={`bg-primary border-r border-gray-500 text-gray-300 w-60 flex flex-col p-5 fixed inset-y-0 left-0 transform 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 transition-transform duration-300 ease-in-out z-50`}>
                <div className="text-2xl flex gap-2 font-bold text-white mb-10">
                    <img src={assets.logo} className="w-10" alt="logo" /> SPECTRA
                </div>

                <nav className="flex-1">
                    {categories.map((item, index) => (
                        <div onClick={() => setIsSidebarOpen(false)} key={index} className={`flex items-center gap-4 text-gray-300 cursor-pointer ${item.active ? "bg-primary-dull" : ""
                            } p-2 py-3 rounded-md hover:bg-primary-dull`}
                        >
                            <img src={item.icon} className="w-5" alt="icon" />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </nav>

                <div className="mt-auto">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary-dull cursor-pointer">
                        <img src={logout} className="w-5" alt="logout" />
                        <span>Log out</span>
                    </div>
                </div>
            </div>
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-opacity-60 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
            <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
                <div className="bg-primary">
                    <Navbar setIsSidebarOpen={setIsSidebarOpen} />
                </div>

                <div className="flex-1 overflow-y-auto bg-primary p-4 sm:p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        <Profit />
                        <SalesReport />
                        <Analytics />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-[66%_33%] gap-4">
                        <Invoice />
                        <Activity />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
