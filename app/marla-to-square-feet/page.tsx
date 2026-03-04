import type { Metadata } from "next";
import MarlaConverter from "./MarlaConverter";

export const metadata: Metadata = {
  title: "Marla to Square Feet Converter – Convertiva",
  description:
    "Convert Marla to Square Feet instantly using the Pakistan standard. 1 Marla = 272.25 square feet. Fast and accurate online calculator.",
};

export default function Page() {
  return <MarlaConverter />;
}