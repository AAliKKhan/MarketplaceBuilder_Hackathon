
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white px-6 lg:px-20 py-10 max-w-7xl mx-auto">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 text-center lg:text-left">
        {/* Logo + Description */}
        <div className="flex flex-col items-center lg:items-start">
          <Image src="/Logo.png" alt="logo" width={148} height={44} />
          <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-xs">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full text-center lg:text-left">
          {/* First Column */}
          <div>
            <h1 className="text-lg font-semibold">About</h1>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          {/* Second Column */}
          <div>
            <h1 className="text-lg font-semibold">Community</h1>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          {/* Third Column */}
          <div>
            <h1 className="text-lg font-semibold">Socials</h1>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-200" />

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
        <p className="text-sm font-bold text-gray-600">
          © {new Date().getFullYear()} ARENT. All rights reserved.
        </p>
        <p className="text-sm font-bold text-gray-600">
          Privacy & Policy | Terms & Conditions
        </p>
      </div>
    </div>
  );
};

export default Footer;

