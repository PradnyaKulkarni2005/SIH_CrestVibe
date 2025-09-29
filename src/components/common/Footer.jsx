// src/components/common/Footer.jsx
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-2xl font-bold mb-3">NEXUS</h3>
          <p className="text-gray-300">
            A digital platform for alumni networking, mentorship, and growth. 
            Stay connected and thrive together.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#institutions" className="hover:text-white">Institutions</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400"><Facebook /></a>
            <a href="#" className="hover:text-blue-400"><Twitter /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin /></a>
            <a href="#" className="hover:text-blue-400"><Mail /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-8 text-sm">
        © {new Date().getFullYear()} NEXUS. All Rights Reserved.
      </div>
    </footer>
  );
}
