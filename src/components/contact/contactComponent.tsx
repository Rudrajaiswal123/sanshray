'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GetInTouch from '../get-in-touch/GetInTouch';

export default function Contact() {
  return (
    <>
    <section className=' container'>
      <h1>Contact</h1>
    </section>
    <GetInTouch />
    </>
  );
}