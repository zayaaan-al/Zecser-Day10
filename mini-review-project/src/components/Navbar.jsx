import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      
      {/* Top Bar */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">JobPortal</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/jobs" className="hover:text-blue-400">
            Jobs
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 flex flex-col items-center space-y-4 py-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            to="/jobs"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400"
          >
            Jobs
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
