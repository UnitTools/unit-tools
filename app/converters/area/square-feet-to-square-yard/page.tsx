import type { Metadata } from "next";
import UniversalConverter from "@/components/UniversalConverter";

export const metadata: Metadata = {
  title: "Square Feet to Square Yards Converter – Convertiva",
  description:
    "Convert Square Feet to Square Yards instantly. 1 Square Yard = 9 Square Feet. Fast and accurate area conversion tool for land measurement, construction, and real estate.",
};

export default function Page() {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many square feet are in one square yard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "One square yard equals exactly 9 square feet."
        }
      },
      {
        "@type": "Question",
        name: "How do you convert square feet to square yards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Divide the number of square feet by 9 to convert it into square yards."
        }
      },
      {
        "@type": "Question",
        name: "Where is square yard used?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Square yards are commonly used in real estate, land measurement, flooring estimation, and construction planning."
        }
      }
    ]
  };

  return (
    <>
      <UniversalConverter
        title="Square Feet to Square Yards Converter"
        description="Easily convert square feet into square yards using the standard area conversion used in land measurement and construction."
        inputLabel="Enter Square Feet Value"
        placeholder="e.g. 500"
        fromUnit="Square Feet"
        toUnit="Square Yards"
        rate={1 / 9}
        note="1 Square Yard = 9 Square Feet"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}