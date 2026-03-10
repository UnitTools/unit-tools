import type { Metadata } from "next";
import SquareFeetConverter from "./SquareFeetConverter";

export const metadata: Metadata = {
  title: "Square Feet to Marla Converter – Convertiva",
  description:
    "Convert Square Feet to Marla instantly using the Pakistan standard. 1 Marla = 272.25 square feet. Fast and accurate online calculator.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many Marla are in 1 square foot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1 square foot equals approximately 0.003673 Marla based on the Pakistan standard where 1 Marla equals 272.25 square feet.",
        },
      },
      {
        "@type": "Question",
        name: "What is the formula to convert square feet to Marla?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To convert square feet to Marla, divide the square feet value by 272.25.",
        },
      },
      {
        "@type": "Question",
        name: "Why is Marla commonly used in Pakistan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Marla is a traditional land measurement unit widely used in Pakistan for residential and commercial real estate transactions.",
        },
      },
    ],
  };

  return (
    <>
      <SquareFeetConverter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}