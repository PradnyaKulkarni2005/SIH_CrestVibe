// src/components/common/Navbar.jsx
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-900">
          NEXUS
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
          <Link to="/" className="hover:text-blue-700">Home</Link>

          {/* Simplified Platform Dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-700">Platform ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 p-3 w-64">
              <Link to="/features/database" className="block py-1 px-2 hover:bg-gray-100 rounded">
                Centralized Database
              </Link>
              <Link to="/features/authentication" className="block py-1 px-2 hover:bg-gray-100 rounded">
                Authentication & Verification
              </Link>
              <Link to="/features/networking" className="block py-1 px-2 hover:bg-gray-100 rounded">
                Communication & Networking
              </Link>
              <Link to="/features/events" className="block py-1 px-2 hover:bg-gray-100 rounded">
                Events & Mentorship
              </Link>
              <Link to="/features/career" className="block py-1 px-2 hover:bg-gray-100 rounded">
                Career Tracking & Donations
              </Link>
            </div>
          </div>

          {/* Stakeholders */}
          <Link to="/institutions" className="hover:text-blue-700">Institutions</Link>
          <Link to="/alumni" className="hover:text-blue-700">Alumni</Link>
          <Link to="/students" className="hover:text-blue-700">Students</Link>

          {/* Other */}
          <Link to="/events" className="hover:text-blue-700">Events</Link>
          <Link to="/contact" className="hover:text-blue-700">Contact</Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          <Link to="/signin">
            <Button variant="outline" className="hidden md:inline-block">
              Sign In
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
