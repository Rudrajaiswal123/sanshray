'use client'

import React from 'react'
import Link from 'next/link';
import './footer.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <section className="footerSection">
      <div className="container">
        <div className="row">
          <p className="copyrightText pb-3">
            <span>
              <Link
                href={'/privacy-policy'}
                className="text-decoration-none pageText text-white"
              >
                Privacy Policy
              </Link> | <Link
                href={'/terms-and-condition'}
                className="text-decoration-none pageText text-white"
              >
                Terms and Conditions
              </Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}