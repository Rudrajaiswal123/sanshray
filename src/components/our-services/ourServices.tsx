"use client";

import Image from "next/image";
import "./ourServices.scss";
import { servicesData } from "./ourServicesData";

export default function OurServices() {
  return (
    <section className="ourServicesSection">
      <div className="container">
        {/* Heading */}
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="osTitle">CONSULTING SERVICES</h3>
            <h2 className="osSubTitle">
              Stage Strategy for <br />
              Every Customer
            </h2>
          </div>
        </div>

        {/* Services */}
        <div className="row osGrid">
          {servicesData.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="osCard">
                <div className="osIconWrapper">
                  <Image
                    src={item.imgUrl}
                    alt={item.title}
                    width={120}
                    height={120}
                  />
                </div>
                <h3 className="osCardTitle">{item.title}</h3>
                <p className="osCardDesc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
