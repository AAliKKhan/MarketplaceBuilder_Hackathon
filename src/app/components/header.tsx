"use client";
import { useState } from "react";
import SearchBar from "./searchBar";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" shadow-md sticky top-0 z-50 p-4  border-b">
      {/* DESKTOP: Three sections - Logo | Search | Nav */}
      <div className="hidden md:flex items-center justify-between gap-6 max-w-full mx-auto">
        {/* Left: Logo */}
        <div>
          <Link href="./ ">
            <Image src="/logo.png" alt="ARENT" width={150} height={100}></Image>
          </Link>
        </div>
        {/* Center: Search Bar */}
        <div className="flex-1 max-w-lg">
          <SearchBar />
        </div>

        <nav className="hidden md:flex space-x-6 items-center">
          <div className="flex flex-col items-center">
            <Link
              href="/"
              className="relative group text-lg font-medium hover:text-gray-200 transition"
            >
              <Image src="/1.png" alt="Home" width={34} height={34} />
              Home
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link
              href="/AllCARS"
              className="relative group text-lg font-medium hover:text-gray-200 transition"
            >
              <Image src="/4.png" alt="Home" width={34} height={34} />
              Explore
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link
              href="/wishlist"
              className="relative group text-lg font-medium hover:text-gray-200 transition"
            >
              <Image src="/2.png" alt="About" width={34} height={34} />
              Wishlist
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link
              href="#"
              className="relative group text-lg font-medium hover:text-gray-200 transition"
            >
              <Image src="/5.png" alt="Contact" width={34} height={34} />
              Profile
            </Link>
          </div>
        </nav>
      </div>

      {/* MOBILE: Logo + Menu Button, Search Below */}
      <div className="flex md:hidden items-center justify-between">
        {/* Left: Logo */}
        <div>
          {" "}
          <div>
            <Link href="./ ">
              <Image src="/logo.png" alt="ARENT" width={95} height={70}></Image>
            </Link>
          </div>
        </div>

        {/* Right: Mobile Menu Button */}
        <button className="p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <line
                x1="5"
                y1="5"
                x2="19"
                y2="19"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="19"
                y1="5"
                x2="5"
                y2="19"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <line
                x1="4"
                y1="6"
                x2="20"
                y2="6"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="4"
                y1="18"
                x2="20"
                y2="18"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden mt-3">
        <SearchBar />
      </div>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-blue-200 bg-opacity-50 z-50"
          onClick={() => setMenuOpen(false)}
        >
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 transform transition-transform">
            <button
              className="absolute top-4 right-4"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <line
                  x1="5"
                  y1="5"
                  x2="19"
                  y2="19"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="19"
                  y1="5"
                  x2="5"
                  y2="19"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>

            {/* Mobile Menu Links */}
            <nav className="flex flex-col space-y-4 mt-8 text-lg font-medium text-gray-700">
              <Link
                href="/"
                className="block px-4 py-2 text-sm hover:bg-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/AllCARS"
                className="block px-4 py-2 text-sm hover:bg-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                Explore
              </Link>
              <Link
                href="/wishlist"
                className="block px-4 py-2 text-sm hover:bg-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                Wishlist
              </Link>
              <Link
                href="/bookings"
                className="block px-4 py-2 text-sm hover:bg-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                Bookings
              </Link>
              <Link
                href="/bookings"
                className="block px-4 py-2 text-sm hover:bg-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
