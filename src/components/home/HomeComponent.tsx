"use client";

import "./homeComponent.scss";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Testimonial from "../testimonials/Testimonial";
import HeroSlider from "../hero-slider/heroSlider";
import OurServices from "../our-services/ourServices";
import GetInTouch from "../get-in-touch/GetInTouch";

export default function HomeComponent() {
  return (
    <>
      <HeroSlider />
      <OurServices/>
      <section className="aboutAgencySection pb-5">
      <div className="container">
        <div className="row align-items-center gy-5">
          
          {/* Left Image */}
          <div className="col-lg-6">
            <div className="aboutImageWrapper">
              <Image
                src="/assets/images/about.png"
                alt="About the agency"
                width={450}
                height={450}
                className="img-fluid aboutMainImage"
              />
              <button className="playButton" aria-label="Play video">
                ▶
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <h6 className="aboutTag">ABOUT THE AGENCY</h6>

            <h2 className="aboutTitle">
              Real Solutions for <br /> Real People
            </h2>

            <p className="aboutDesc">
              We will work closely with you, as an extension of your team, to
              provide solutions for all types of corporate events - from Gala
              Dinners to Global Summits. We will also negotiate with each venue.
            </p>

            {/* Author */}
            <div className="aboutAuthor d-flex align-items-center">
              <Image
                src="/assets/images/sharanya-pic.jpeg"
                alt="Sharanya Ravindra"
                width={56}
                height={56}
                className="rounded-circle"
              />
              <div className="ms-3">
                <span className="authorRole">Company Director</span>
                <h5 className="authorName">Sharanya Ravindra</h5>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section className="companyProgressSection pb-5">
  <div className="container">
    <div className="row align-items-center">
      
      {/* Left Content */}
      <div className="col-lg-6 ps-lg-5">
        <h6 className="progressTag">COMPANY PROGRESS</h6>

        <h2 className="progressTitle">
          We have a great idea <br /> of business solution.
        </h2>

        {/* Progress Chart */}
        <div className="progressChart mt-4">
          <Image
            src="/assets/images/progress.png"
            alt="Company progress chart"
            width={480}
            height={300}
            className="img-fluid"
          />
        </div>
      </div>

      {/* Right Illustration */}
      <div className="col-lg-6 text-center">
        <div className="progressRightImage">
          <Image
            src="/assets/images/progress-1.png"
            alt="Business growth illustration"
            width={500}
            height={500}
            className="img-fluid"
          />
        </div>
      </div>

    </div>
  </div>
</section>
      <div className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="testimonialTitle text-center">
                Stories of Success with
              </h2>
              <h3 className="testimonialSubTitle text-center">Sanshray Ventures</h3>
              <Testimonial />
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </>
  );
}
