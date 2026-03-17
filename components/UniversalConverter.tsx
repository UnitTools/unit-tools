"use client";

import { useState } from "react";
import RelatedConverters from "@/components/RelatedConverters";
import ConversionTable from "@/components/ConversionTable";
import Breadcrumb from "@/components/Breadcrumb";

type Props = {
  title: string;
  description: string;
  inputLabel: string;
  placeholder: string;
  fromUnit: string;
  toUnit: string;
  rate: number;
  note: string;
};

export default function UniversalConverter({
  title,
  description,
  inputLabel,
  placeholder,
  fromUnit,
  toUnit,
  rate,
  note,
}: Props) {

  const [value, setValue] = useState("");

  const result =
    value !== "" ? (parseFloat(value) * rate).toFixed(4) : "";

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-6">

      {/* MAIN CONTAINER (same as Marla converter) */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-12">

        {/* Breadcrumb */}
        <Breadcrumb
          category="Area"
          categoryUrl="/area"
          page={title}
        />

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mt-4 mb-4">
          {title}
        </h1>

        {/* Description */}
        <p className="text-center text-gray-600 mb-10">
          {description}
        </p>

        {/* INPUT */}
        <div className="space-y-3">

          <label className="block text-sm font-semibold text-gray-700">
            {inputLabel}
          </label>

          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
          />

        </div>

        {/* RESULT BOX */}
        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">

          <p className="text-sm text-gray-500 mb-2">
            Converted Value
          </p>

          <p className="text-3xl font-bold text-blue-800">
            {result ? `${result} ${toUnit}` : "—"}
          </p>

        </div>

        {/* NOTE */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          {note}
        </p>

        {/* FAQ */}
        <div className="mt-16">

          <h2 className="text-2xl font-bold text-center mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 text-gray-700">

            <div>
              <h3 className="font-semibold">
                How do you convert {fromUnit} to {toUnit}?
              </h3>
              <p>
                Multiply the value in {fromUnit} by {rate} to get the value in {toUnit}.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Why is this conversion useful?
              </h3>
              <p>
                This conversion is widely used in land measurement, real estate,
                construction planning, and property evaluation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this conversion accurate?
              </h3>
              <p>
                Yes. This calculator uses the internationally accepted conversion rate.
              </p>
            </div>

          </div>

        </div>

        {/* Conversion Table */}
        <ConversionTable
          title={`${fromUnit} to ${toUnit} Conversion Table`}
          fromUnit={fromUnit}
          toUnit={toUnit}
          rate={rate}
        />

        {/* Related Converters */}
        <RelatedConverters />

      </div>

    </main>
  );
}