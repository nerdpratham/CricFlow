import { useState } from "react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";


const Header = ({ isAuthenticated }) => {
  return (
    <header className="w-full bg-emerald-700 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-14">
        
        {/* Left: Brand */}
         <div className="flex items-center cursor-pointer">
            <img
              src="/Cricflowlogo.png"
              alt="CricFlow Logo"
              className="h-50 w-auto object-contain"
            />
         </div>


        {/* Center: Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <NavItem text="Live Scores" />
          <NavItem text="Schedule" />
          <NavItem text="Archives" />
          <NavItem text="News" dropdown />
          <NavItem text="Series" dropdown />
          <NavItem text="Teams" dropdown />
          <NavItem text="Videos" dropdown />
          <NavItem text="Rankings" dropdown />
          <NavItem text="More" dropdown />
        </nav>

        {/* Right: Auth */}
        <div className="flex items-center space-x-4">
          {!isAuthenticated ? (
            <>
              <button className="text-sm hover:underline">
                Login
              </button>
                <Link
                to="/signup"
                className="bg-white text-emerald-700 px-3 py-1 rounded text-sm font-semibold"
                >
                Sign Up
                </Link>
            </>
          ) : (
            <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center cursor-pointer">
              <User size={18} />
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

const NavItem = ({ text, dropdown }) => (
  <div className="relative cursor-pointer hover:underline">
    {text}
    {dropdown && <span className="ml-1">▾</span>}
  </div>
);

export default Header;
