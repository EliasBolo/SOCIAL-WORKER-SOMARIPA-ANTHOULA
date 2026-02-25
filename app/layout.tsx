import React from "react"
import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import { LanguageProvider } from '@/lib/language-context'
import { AccessibilityToolbar } from '@/components/accessibility-toolbar'

import './globals.css'

const manrope = Manrope({
  subsets: ['latin', 'greek'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ανθούλα Σωμαρίπα | Κλινική Κοινωνική Λειτουργός, MSc | Αθήνα, Αττική',
    template: '%s | Ανθούλα Σωμαρίπα',
  },
  description: "Κλινική Κοινωνική Λειτουργός, MSc - Σύμβουλος Ψυχικής Υγείας στην Αθήνα, Αττική. Ψυχοκοινωνική υποστήριξη και συμβουλευτική για χρόνια ασθένεια, άνοια, φροντιστές ασθενών, απώλεια, πένθος, οικογενειακές σχέσεις. Ατομική και ομαδική συμβουλευτική, κατ' οίκον επισκέψεις, online υπηρεσίες. Clinical Social Worker in Athens, Attica, Greece. Psychosocial support and counseling.",
  keywords: [
    'Κλινική Κοινωνική Λειτουργός',
    'Κοινωνική Λειτουργός Αθήνα',
    'Κοινωνική Λειτουργός Αττική',
    'Ψυχοκοινωνική Υποστήριξη',
    'Συμβουλευτική Ψυχικής Υγείας',
    'Ψυχοκοινωνική Συμβουλευτική Αθήνα',
    'Ανθούλα Σωμαρίπα',
    'Χρόνια Ασθένεια',
    'Άνοια',
    'Φροντιστές Ασθενών',
    'Απώλεια Πένθος',
    'Οικογενειακές Σχέσεις',
    'Ατομική Συμβουλευτική',
    'Ομαδική Συμβουλευτική',
    'Κατ Οίκον Επισκέψεις',
    'Online Συμβουλευτική',
    'Ψυχοεκπαιδευτικά Σεμινάρια',
    'Clinical Social Worker Athens',
    'Clinical Social Worker Attica',
    'Social Worker Greece',
    'Psychosocial Support Athens',
    'Mental Health Counseling Athens',
    'Mental Health Counselor Attica Greece',
    'Chronic Illness Counseling',
    'Dementia Caregiver Support',
    'Bereavement Counseling',
    'Family Counseling Athens',
    'Αθήνα',
    'Αττική',
    'Athens',
    'Attica',
  ],
  authors: [{ name: 'Ανθούλα Σωμαρίπα' }],
  creator: 'Ανθούλα Σωμαρίπα',
  icons: {
    icon: '/images/LOGO.png',
    apple: '/images/LOGO.png',
  },
  openGraph: {
    type: 'website',
    locale: 'el_GR',
    alternateLocale: 'en_US',
    siteName: 'Ανθούλα Σωμαρίπα - Κλινική Κοινωνική Λειτουργός',
    title: 'Ανθούλα Σωμαρίπα | Κλινική Κοινωνική Λειτουργός, MSc | Αθήνα',
    description: 'Ψυχοκοινωνική Υποστήριξη και Συμβουλευτική στην Αθήνα, Αττική. Κλινική Κοινωνική Λειτουργός, MSc, Σύμβουλος Ψυχικής Υγείας.',
    images: [{ url: '/images/LOGO.png', width: 1200, height: 1200, alt: 'Ανθούλα Σωμαρίπα - Κλινική Κοινωνική Λειτουργός' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ανθούλα Σωμαρίπα | Κλινική Κοινωνική Λειτουργός | Αθήνα',
    description: 'Ψυχοκοινωνική Υποστήριξη και Συμβουλευτική - Αθήνα, Αττική',
    images: ['/images/LOGO.png'],
  },
  alternates: {
    languages: {
      'el': '/',
      'en': '/?lang=en',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  appleWebApp: {
    capable: true,
    title: 'Α. Σωμαρίπα',
    statusBarStyle: 'default',
  },
  manifest: '/manifest.json',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#11787e',
    'geo.region': 'GR-I',
    'geo.placename': 'Athens',
    'geo.position': '37.9838;23.7275',
    'ICBM': '37.9838, 23.7275',
  },
}

export const viewport: Viewport = {
  themeColor: '#11787e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="el" className={manrope.variable}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
          <AccessibilityToolbar />
        </LanguageProvider>
      </body>
    </html>
  )
}
