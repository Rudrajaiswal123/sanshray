"use client";

import "./homeComponent.scss";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Testimonial from "../testimonials/Testimonial";
import HeroSlider from "../hero-slider/heroSlider";
import OurServices from "../our-services/ourServices";

export default function HomeComponent() {
  return (
    <>
      <HeroSlider />
      <OurServices/>
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
    </>
  );
}
