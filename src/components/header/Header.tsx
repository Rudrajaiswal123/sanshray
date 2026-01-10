'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import './header.scss';
import Image from 'next/image';
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path:any) => pathname === path;

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  
  return (
    <>
    <section className="headerSection">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-3 col-6">
            <Link href="/" className="logo">
              <Image
                src="/assets/images/sanshraylogo.png"
                alt="Company Logo"
                width={140}
                height={45}
              />
            </Link>
          </div>
          <div className="col-lg-5 col-md-6 d-none d-md-flex justify-content-center">
              <nav className="menuContainer ms-5">
                <Link href="/" className={`pageText ${isActive("/") ? "active" : ""}`}>Home</Link>
                <Link href="/about" className={`pageText ${isActive("/about") ? "active" : ""}`}>About</Link>
                <Link href="/services" className={`pageText ${isActive("/services") ? "active" : ""}`}>Services</Link>
                <Link href="/contact" className={`pageText ${isActive("/contact") ? "active" : ""}`}>Contact</Link>
              </nav>
            </div>
          <div className="col-lg-3 col-md-3 col-6 text-end d-flex justify-content-end align-items-center gap-3">
              <Link href="/contact" className="btn btn-primary headerBtn d-none d-md-inline-flex">
                Get Quote
              </Link>

              {/* Hamburger */}
              <button
                className={`hamburger d-md-none ${menuOpen ? 'active' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
        </div>
      </div>
    </section>
    <div className={`mobileMenu ${menuOpen ? 'open' : ''}`}>
        <nav>
          <Link href="/" onClick={handleLinkClick} className={isActive("/") ? "active" : ""}>Home</Link>
          <Link href="/about" onClick={handleLinkClick} className={isActive("/about") ? "active" : ""}>About</Link>
          <Link href="/services" onClick={handleLinkClick} className={isActive("/services") ? "active" : ""}>Services</Link>
          <Link href="/contact" onClick={handleLinkClick} className={isActive("/contact") ? "active" : ""}>Contact</Link>
        </nav>
      </div>
      </>
  );
}