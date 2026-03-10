import type { Metadata } from "next"
import SqFtToSqMeterConverter from "./SqFtToSqMeterConverter"

export const metadata: Metadata = {
  title: "Square Feet to Square Meters Converter – Convertiva",
  description:
    "Convert Square Feet to Square Meters instantly. 1 Square Foot = 0.092903 Square Meters. Accurate and free online calculator.",
}

export default function Page() {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many square meters are in 1 square foot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1 square foot equals approximately 0.092903 square meters.",
        },
      },
      {
        "@type": "Question",
        name: "What is the formula to convert square feet to square meters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To convert square feet to square meters, multiply the square feet value by 0.092903.",
        },
      },
      {
        "@type": "Question",
        name: "When should you convert square feet to square meters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You may need to convert square feet to square meters when comparing property sizes internationally or working with metric-based building standards.",
        },
      },
    ],
  }

  return (
    <>
      <SqFtToSqMeterConverter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}