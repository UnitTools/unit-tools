"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#1E3A8A] px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.svg"
            alt="Convertiva Logo"
            width={42}
            height={42}
            priority
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <span className="text-white text-xl font-semibold tracking-tight group-hover:text-blue-200 transition-colors duration-300">
            Convertiva
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
          <Link
            href="/marla-to-square-feet"
            className="hover:text-blue-200 transition-colors duration-200"
          >
            Area Converter
          </Link>

          <Link
            href="/square-feet-to-marla"
            className="hover:text-blue-200 transition-colors duration-200"
          >
            Reverse Converter
          </Link>
        </div>
      </div>
    </nav>
  );
}