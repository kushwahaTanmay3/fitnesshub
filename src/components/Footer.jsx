import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 px-6 py-12">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h1 className="text-3xl font-bold text-[#ff6b35]">Fitness Hub</h1>
          <p className="mt-4 text-sm">
            Transform your body and mind with our professional trainers and modern equipment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li className="hover:text-[#ff6b35] cursor-pointer">Home</li>
            <li className="hover:text-[#ff6b35] cursor-pointer">About</li>
            <li className="hover:text-[#ff6b35] cursor-pointer">Services</li>
            <li className="hover:text-[#ff6b35] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>
          <p className="text-sm">📍 Varanasi, India</p>
          <p className="text-sm mt-2">📞 +91 9876543210</p>
          <p className="text-sm mt-2">📧 gym@email.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <div className="p-3 bg-gray-700 rounded-full hover:bg-[#ff6b35] transition cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="p-3 bg-gray-700 rounded-full hover:bg-[#ff6b35] transition cursor-pointer">
              <FaInstagram />
            </div>
            <div className="p-3 bg-gray-700 rounded-full hover:bg-[#ff6b35] transition cursor-pointer">
              <FaTwitter />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Fitness Hub: Develop&Degsin by TanmayKushwaha
      </div>
      
    </footer>
  );
};

export default Footer