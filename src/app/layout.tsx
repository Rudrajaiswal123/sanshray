import '../styles/globals.scss';
import type { Metadata } from "next";
import Script from 'next/script';
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import RootTemplate from '@/template/RootTemplate';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-rubik",
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sanshrayventures.in/"),
  title: 'Digital Marketing Agency | Sanshray Ventures',
  description:
    'Sanshray Ventures is a digital marketing agency delivering strategic branding, performance marketing, social media management, SEO, and content solutions to help businesses grow, engage audiences, and achieve measurable online success.',
  openGraph: {
    title: 'Digital Marketing Agency | Sanshray Ventures',
    description:
      'Sanshray Ventures is a digital marketing agency delivering strategic branding, performance marketing, social media management, SEO, and content solutions to help businesses grow, engage audiences, and achieve measurable online success.',
    url: 'https://sanshrayventures.in/',
    type: 'website',
    images: 'https://sanshrayventures.in/wp-content/uploads/2025/11/LogoMakr-918e4j.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency | Sanshray Ventures',
    description:
      'Sanshray Ventures is a digital marketing agency delivering strategic branding, performance marketing, social media management, SEO, and content solutions to help businesses grow, engage audiences, and achieve measurable online success.',
    images: 'https://sanshrayventures.in/wp-content/uploads/2025/11/LogoMakr-918e4j.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable}`}>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={rubik.className}>
        <RootTemplate children={children} />
      </body>
    </html>
  );
}
