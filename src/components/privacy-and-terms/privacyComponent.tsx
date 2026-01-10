'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyComponent() {
  return (
    <section className='privacyPolicySection'>
            <div className='privacyPolicy py-5 gradientBackground'>
                <div className='container pt-5 mt-md-5'>
                    <div className='row px-lg-5 mx-lg-5 mx-md-4 mx-2'>
                        <div className='col-12 text-center'>
                            <h1 className=""><strong>Privacy Policy</strong></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container pb-5 overflow-hidden'>
                <div className='row px-lg-5 mx-lg-5 mx-md-4 mx-2'>
                    <div className='col-12'>

                        <p className='mb-4'>
                            Sanshray Ventures operates the website <strong>Sanshrayventures.in.</strong> This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                            <br />
                            By accessing or using our Site, you agree to the terms of this Privacy Policy.
                        </p>

                        <h6 className='mb-4'><strong>1. Information We Collect</strong></h6>

                        <p className='mb-4'>We may collect the following types of information:</p>

                        <h6 className='mb-2'><strong>A. Personal Information</strong></h6>

                        <p className='mb-3'>Information that can identify you, such as:</p>
                        <p className='mb-3'>Name</p>
                        <p className='mb-3'>Email Address</p>
                        <p className='mb-3'>Phone number</p>
                        <p className='mb-3'>Company name (if applicable)</p>
                        <p className='mb-3'>Any information you voluntarily submit through forms or communication channels</p>

                        <h6 className='mb-2'><strong>B. Non-Personal Information</strong></h6>

                        <p className='mb-3'>Data that does not directly identify you, including:</p>
                        <p className='mb-3'>Browser type and version</p>
                        <p className='mb-3'>IP address</p>
                        <p className='mb-3'>Device information</p>
                        <p className='mb-3'>Pages visited and time spent</p>
                        <p className='mb-3'>Cookies and usage data</p>

                        <h6 className='mb-2'><strong>C. Cookies & Tracking Technologies</strong></h6>

                        <p className='mb-3'>We use cookies, web beacons, and similar tools to:</p>
                        <p className='mb-3'>Improve website performance</p>
                        <p className='mb-3'>Analyze traffic</p>
                        <p className='mb-3'>Enhance user experience</p>
                        <p className='mb-3'>You can modify your browser settings to decline cookies.</p>

                        <h6 className='mb-2 mt-5'><strong>2. How We Use Your Information</strong></h6>

                        <p className='mb-3'>We use collected information to:</p>
                        <p className='mb-3'>Provide, operate, and maintain our website</p>
                        <p className='mb-3'>Improve user experience and website functionality</p>
                        <p className='mb-3'>Respond to your inquiries or requests</p>
                        <p className='mb-3'>Send updates, newsletters, or promotional materials (you may opt out anytime)</p>
                        <p className='mb-3'>Analyze traffic, usage trends, and performance</p>
                        <p className='mb-3'>Comply with legal obligations</p>

                        <h6 className='mb-2 mt-5'><strong>3. Sharing & Disclosure of Information</strong></h6>

                        <p className='mb-2'>We do not sell or trade your personal information.</p>
                        <p className='mb-3'>We may share information only in the following cases:</p>
                        <p className='mb-3'><strong>Service Providers:</strong> Third parties that help operate the Site (hosting, analytics, email services).</p>
                        <p className='mb-3'><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</p>
                        <p className='mb-3'><strong>Business Transfers:</strong> If Sanshray Ventures undergoes a merger, acquisition, or restructuring.</p>

                        <h6 className='mb-2 mt-5'><strong>4. Data Security</strong></h6>

                        <p className='mb-2'>We use administrative, technical, and physical safeguards to protect your data.</p>
                        <p className='mb-3'>However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute protection.</p>

                        <h6 className='mb-2 mt-5'><strong>5. Your Rights & Choices</strong></h6>

                        <p className='mb-3'>Depending on your jurisdiction, you may have rights to:</p>
                        <p className='mb-3'>Access, update, or delete your data</p>
                        <p className='mb-3'>Restrict or object to processing</p>
                        <p className='mb-3'>Opt out of marketing communications</p>
                        <p className='mb-3'>Withdraw consent at any time</p>
                        <p className='mb-3'>For any requests, contact us using the information below.</p>

                        <h6 className='mb-2 mt-5'><strong>6. Third-Party Links</strong></h6>

                        <p className='mb-2'>Our website may contain links to third-party websites.</p>
                        <p className='mb-3'>We are not responsible for the content, privacy practices, or policies of these external sites.</p>

                        <h6 className='mb-2 mt-5'><strong>7. Children's Privacy</strong></h6>

                        <p className='mb-2'>Our website is not intended for children under 13.</p>
                        <p className='mb-3'>We do not knowingly collect personal data from children.</p>

                        <h6 className='mb-2 mt-5'><strong>8. Changes to This Privacy Policy</strong></h6>

                        <p className='mb-2'>We may update this Privacy Policy occasionally.</p>
                        <p className='mb-3'>Updates will be posted on this page with a revised “Last Updated” date.</p>

                        <h5 className='mb-4'><strong>9. Contact Us</strong></h5>

                        <p className='mb-4'>
                            If you have questions about this Privacy Policy or wish to exercise your data rights, contact:
                        </p>

                        <p className='mb-3'><strong>Sanshray Ventures</strong></p>

                            <p className=''>Email: <Link className='text-decoration-none' target="_blank" href="mailto:contact@sanshrayventures.in">contact@sanshrayventures.in</Link></p>

                            <p>
                                website:<br className='d-block d-md-none d-lg-none'/>&nbsp;
                                <Link className='text-decoration-none'
                                    href="/contact"
                                    rel="noreferrer noopener"
                                >
                                    http://sanshrayventures/contact
                                </Link>
                            </p>
                            <p className=''>Phone: <Link className='text-decoration-none' target="_blank" href="tel:contact@sanshrayventures.in">+91 6362028048</Link></p>

                        

                    </div>
                </div>
            </div>
        </section>
  );
}