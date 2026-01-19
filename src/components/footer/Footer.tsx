"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footerSection">
      <div className="container">
        <div className="row">
          <div className="col-12 footerfirstRow d-flex align-items-center py-lg-4 py-3 ps-lg-5 mb-lg-5">
            <div className="me-3">
              <Image
                src="/assets/icons/flaticon.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </div>
            <h2 className="footerfirstRowTitle">CONTACT US</h2>
          </div>
        </div>
        <div className="row gy-4">
          {/* LEFT: Logo + About */}
          <div className="col-lg-5 col-md-6 col-12">
            <div className="footerBrand">
              <Image
                src="/assets/images/sanshraylogo.webp"
                alt="Sanshray Ventures"
                width={180}
                height={80}
              />
            </div>

            <p className="footerText">
              Sanshray Ventures is a digital marketing agency delivering
              strategic branding, performance marketing, social media
              management, SEO, and content solutions to help businesses grow and
              achieve measurable online success.
            </p>

            <div className="socialIcons">
              <Link
                href="https://www.facebook.com/gloify2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image
                  src="/assets/icons/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </Link>

              <Link
                href="https://twitter.com/gloify2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Image
                  src="/assets/icons/twitter.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
              </Link>

              <Link
                href="https://www.linkedin.com/company/gloify/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Image
                  src="/assets/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Link>

              <Link
                href="https://www.instagram.com/gloify_official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/assets/icons/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {/* MIDDLE: Contact */}
          <div className="col-lg-4 col-md-6 col-12">
            <h5 className="footerTitle">Contact Now</h5>

            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+916362028048">+91 6362028048</a>
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@sanshrayventures.in">
                contact@sanshrayventures.in
              </a>
            </p>

            <p>
              <strong>Location:</strong>
              <br />
              9th Main Rd, Sector 6, HSR Layout,
              <br />
              Bengaluru, Karnataka 560102
            </p>
          </div>

          {/* RIGHT: Menu */}
          <div className="col-lg-3 col-md-6 col-12">
            <h5 className="footerTitle">Menu</h5>

            <ul className="footerMenu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy & Policy</Link>
              </li>
              <li>
                <Link href="/terms-condition">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footerBottom">
          <p>© 2025 Sanshray Ventures. All Rights Reserved.</p>

          <div className="bottomLinks">
            <Link href="#">FTC Disclosure</Link>
            <Link href="/privacy-policy">Privacy Statement</Link>
            <Link href="/terms-and-condition">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
