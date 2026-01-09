'use client'

import React from 'react'
import Link from 'next/link';
import './header.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <section className="headerSection">
      <div className="container">
        <div className="row">
            <div className="col-lg-8 menuContainer">
                <Link
                href={'/'}
              className="text-decoration-none pageText"
              >
                Home
              </Link>
              <span className="verticalLine">|</span>
              <Link
                href={'/about'}
              className="text-decoration-none pageText"
              >
                About
              </Link>
              <span className="verticalLine">|</span>

              <Link
                href={'/services'}
              className="text-decoration-none pageText"
              >
                Services
              </Link>
              <span className="verticalLine">|</span>

              <Link
                href={'/contact'}
              className="text-decoration-none pageText"
              >
                Contact
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
}