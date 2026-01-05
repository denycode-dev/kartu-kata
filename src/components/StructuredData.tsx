import Script from 'next/script'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Kartu Kata",
    "applicationCategory": "EntertainmentApplication",
    "description": "Aplikasi web interaktif untuk menghasilkan pertanyaan seru bagi teman nongkrong dan pertanyaan deep talk untuk pasangan. Membantu mencairkan suasana dan memperdalam hubungan.",
    "url": "https://kartu-kata.vercel.app",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "IDR"
    },
    "creator": {
      "@type": "Person",
      "name": "Deni Irawan Nugraha"
    },
    "inLanguage": "id-ID",
    "keywords": "kartu kata, conversation starter, ice breaker, pertanyaan seru, deep talk, game nongkrong",
    "featureList": [
      "200+ pertanyaan unik untuk teman",
      "200+ pertanyaan deep talk untuk pasangan",
      "Interface interaktif dengan animasi kartu",
      "Pertanyaan random untuk variasi",
      "Gratis tanpa iklan"
    ]
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
