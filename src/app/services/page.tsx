import ServiceComponent from '@/components/services/servicesComponent'
import { Metadata } from 'next'

export default function Service() {
  return (
    <ServiceComponent />
  )
}

// Meta Information
export const metadata: Metadata = {
  metadataBase: new URL("https://sanshrayventures.in/"),
  title: 'Digital Marketing Agency | Sanshray Ventures',
  description:
    'Sanshray Ventures is a digital marketing agency delivering strategic branding, performance marketing, social media management, SEO, and content solutions to help businesses grow, engage audiences, and achieve measurable online success.',
  openGraph: {
    title: 'Digital Marketing Agency | Sanshray Ventures',
    description:
      'Sanshray Ventures is a digital marketing agency delivering strategic branding, performance marketing, social media management, SEO, and content solutions to help businesses grow, engage audiences, and achieve measurable online success.',
    url: 'https://sanshrayventures.in/services',
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