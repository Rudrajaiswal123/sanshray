'use client'

import './homeComponent.scss';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeComponent() {
  return (
    <section className='heroSection'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>Sanshray Ventures</h1>
            <p className=' text-info'>Hello</p>
          </div>
        </div>
      </div>
    </section>
  )
}
