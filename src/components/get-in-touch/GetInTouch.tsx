"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./getInTouch.scss";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailjs.init("zWy-MDhXRLuC_sypS");
  }, []);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send("service_3f1ok26", "template_78bq8pw", formData).then(
      () => {
        setSuccess(true);
        setLoading(false);
        setFormData({
          name: "",
          company: "",
          email: "",
          mobile: "",
          message: "",
        });
      },
      (error) => {
        console.error(error);
        setLoading(false);
      },
    );
  };

  return (
    <section className="getInTouchSection">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT UI */}
          <div className="col-lg-6 col-md-12">
            <div className="getInTouchLeft">
              <h2>Get In Touch</h2>
              <p>
                Have a project in mind or need expert digital marketing support?
                Fill out the form and our team will contact you shortly.
              </p>

              <ul>
                <li>✔ 24/7 Customer Support</li>
                <li>✔ Free Consultation</li>
                <li>✔ Quick Response Time</li>
                <li>✔ Experienced Team</li>
              </ul>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-6 col-md-12">
            <form onSubmit={sendEmail} className="getInTouchForm">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="company"
                    className="form-control"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="tel"
                    name="mobile"
                    className="form-control"
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3 col-12">
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-100"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
              {success && (
                <p className="successMsg">Message sent successfully ✅</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
