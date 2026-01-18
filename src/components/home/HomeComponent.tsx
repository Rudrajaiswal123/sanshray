"use client";

import "./homeComponent.scss";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Testimonial from "../testimonials/Testimonial";

export default function HomeComponent() {
  return (
    <>
      <section className="heroSection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Sanshray Ventures</h1>
              <p className=" text-info">Hello</p>
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
    </>
  );
}
