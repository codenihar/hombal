"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 dark:bg-gray-900 py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
