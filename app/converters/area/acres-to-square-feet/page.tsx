import type { Metadata } from "next";
import UniversalConverter from "@/components/UniversalConverter";

export const metadata: Metadata = {
  title: "Acres to Square Feet Converter – Convertiva",
  description:
    "Convert Acres to Square Feet instantly. 1 Acre = 43,560 Square Feet. Fast and accurate land area calculator for real estate, land measurement, and property planning.",
};

export default function Page() {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many square feet are in one acre?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "One acre equals exactly 43,560 square feet.",
        },
      },
      {
        "@type": "Question",
        name: "How do you convert acres to square feet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To convert acres to square feet, multiply the number of acres by 43,560.",
        },
      },
      {
        "@type": "Question",
        name: "Why is acre used for land measurement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The acre is commonly used in real estate, agriculture, and land planning to measure large land areas.",
        },
      },
    ],
  };

  return (
    <>
      <UniversalConverter
        title="Acres to Square Feet Converter"
        description="Easily convert acres into square feet using the standard land measurement used worldwide in real estate and agriculture."
        inputLabel="Enter Acres Value"
        placeholder="e.g. 2"
        fromUnit="Acres"
        toUnit="Square Feet"
        rate={43560}
        note="1 Acre = 43,560 Square Feet"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}