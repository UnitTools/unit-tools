import type { Metadata } from "next";
import MarlaConverter from "./MarlaConverter";

export const metadata: Metadata = {
  title: "Marla to Square Feet Converter – Convertiva",
  description:
    "Convert Marla to Square Feet instantly using the Pakistan standard. 1 Marla = 272.25 square feet. Fast and accurate online calculator.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many square feet are in 1 Marla?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1 Marla is equal to 272.25 square feet according to the Pakistan standard measurement."
        }
      },
      {
        "@type": "Question",
        "name": "Is Marla measurement the same everywhere?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Marla measurement can vary by region. However, in Pakistan, 1 Marla is officially considered 272.25 square feet."
        }
      },
      {
        "@type": "Question",
        "name": "Why is Marla used in real estate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Marla is commonly used in Pakistan and South Asia for land and property measurements in residential and commercial real estate."
        }
      }
    ]
  };

  return (
    <>
      <MarlaConverter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}