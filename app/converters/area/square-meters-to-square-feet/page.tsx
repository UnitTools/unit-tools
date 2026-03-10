import type { Metadata } from "next"
import SqMeterToSqFtConverter from "./SqMeterToSqFtConverter"

export const metadata: Metadata = {
  title: "Square Meters to Square Feet Converter – Convertiva",
  description:
    "Convert Square Meters to Square Feet instantly. 1 Square Meter = 10.7639 Square Feet. Fast and accurate online area calculator.",
}

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many square feet are in 1 square meter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1 square meter equals 10.7639 square feet.",
        },
      },
      {
        "@type": "Question",
        name: "What is the formula to convert square meters to square feet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To convert square meters to square feet, multiply the square meter value by 10.7639.",
        },
      },
      {
        "@type": "Question",
        name: "Why is square meter commonly used?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Square meter is the international standard unit of area used in most countries for land, construction, and property measurements.",
        },
      },
    ],
  }

  return (
    <>
      <SqMeterToSqFtConverter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}