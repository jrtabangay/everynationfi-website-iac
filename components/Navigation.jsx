'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center bg-black">
              <img src="/branding/entlogo.webp" alt="Every Nation Tampere" className="h-9 w-9 sm:h-12 sm:w-12 rounded-full object-cover shrink-0" />
              <span className="ml-2 sm:ml-3 text-sm sm:text-lg font-extrabold text-white whitespace-nowrap">Every Nation Finland RY</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
                About
              </Link>
              <Link href="#locations" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
                Our Cities
              </Link>
              <Link href="#campus" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
                Campus Ministry
              </Link>
              <Link href="#events" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
                Events
              </Link>
              <Link href="#contact" className="px-3 py-2 rounded-md text-sm font-medium bg-secondary text-white hover:bg-primary transition">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#about" className="block px-3 py-2 rounded-md hover:bg-gray-100">
              About
            </Link>
            <Link href="#locations" className="block px-3 py-2 rounded-md hover:bg-gray-100">
              Our Cities
            </Link>
            <Link href="#campus" className="block px-3 py-2 rounded-md hover:bg-gray-100">
              Campus Ministry
            </Link>
            <Link href="#events" className="block px-3 py-2 rounded-md hover:bg-gray-100">
              Events
            </Link>
            <Link href="#contact" className="block px-3 py-2 rounded-md bg-secondary text-white">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
