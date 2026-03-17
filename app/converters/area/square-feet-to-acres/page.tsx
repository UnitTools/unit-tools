import type { Metadata } from "next";
import UniversalConverter from "@/components/UniversalConverter";

export const metadata: Metadata = {
  title: "Square Feet to Acres Converter – Convertiva",
  description:
    "Convert square feet to acres instantly. 1 acre equals 43,560 square feet. Fast and accurate area conversion tool.",
};

export default function Page() {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many square feet are in one acre?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "One acre equals exactly 43,560 square feet."
        }
      },
      {
        "@type": "Question",
        "name": "How do you convert square feet to acres?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Divide the square feet value by 43,560 to convert it into acres."
        }
      }
    ]
  };

  return (
    <>
      <UniversalConverter
        title="Square Feet to Acres Converter"
        description="Instantly convert square feet into acres using the standard land measurement used in real estate and agriculture."
        inputLabel="Enter Square Feet Value"
        placeholder="e.g. 10000"
        fromUnit="Square Feet"
        toUnit="Acres"
        rate={1 / 43560}
        note="1 Acre = 43,560 Square Feet"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}