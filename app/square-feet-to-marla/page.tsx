import type { Metadata } from "next";
import SquareFeetConverter from "./SquareFeetConverter";

export const metadata: Metadata = {
  title: "Square Feet to Marla Converter – Convertiva",
  description:
    "Convert Square Feet to Marla instantly using the Pakistan standard. Fast, accurate, and free online conversion tool.",
};

export default function Page() {
  return <SquareFeetConverter />;
}