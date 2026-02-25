export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "#business",
    name: "Ανθούλα Σωμαρίπα - Κλινική Κοινωνική Λειτουργός",
    alternateName: "Anthoula Somaripa - Clinical Social Worker",
    description:
      "Κλινική Κοινωνική Λειτουργός, MSc - Ψυχοκοινωνική Υποστήριξη και Συμβουλευτική στην Αθήνα, Αττική. Clinical Social Worker providing psychosocial support and counseling in Athens, Attica, Greece.",
    image: "/images/LOGO.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Athens",
      addressRegion: "Attica",
      addressCountry: "GR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.9838,
      longitude: 23.7275,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Athens",
        alternateName: "Αθήνα",
      },
      {
        "@type": "AdministrativeArea",
        name: "Attica",
        alternateName: "Αττική",
      },
    ],
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
    email: "info@somaripa.gr",
    inLanguage: ["el", "en"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Υπηρεσίες / Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ατομική Συμβουλευτική / Individual Counseling",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ομαδική Συμβουλευτική / Group Counseling",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ψυχοεκπαιδευτικά Σεμινάρια / Psychoeducational Seminars",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Κατ' Οίκον Επισκέψεις / Home Visits",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Online Υπηρεσίες / Online Services",
          },
        },
      ],
    },
  }

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ανθούλα Σωμαρίπα",
    alternateName: "Anthoula Somaripa",
    jobTitle: "Κλινική Κοινωνική Λειτουργός, MSc",
    description: "Σύμβουλος Ψυχικής Υγείας / Mental Health Counselor",
    image: "/images/portrait/portrait.avif",
    email: "info@somaripa.gr",
    worksFor: { "@id": "#business" },
    knowsLanguage: ["el", "en"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Athens",
      addressRegion: "Attica",
      addressCountry: "GR",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  )
}
