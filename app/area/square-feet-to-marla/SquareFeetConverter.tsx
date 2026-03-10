"use client";

import { useState } from "react";
import RelatedConverters from "@/components/RelatedConverters"
import ConversionTable from "@/components/ConversionTable"
import Breadcrumb from "@/components/Breadcrumb"

export default function SquareFeetConverter() {
  const [squareFeet, setSquareFeet] = useState("");
  const conversionRate = 272.25;

  const marla =
    squareFeet !== ""
      ? (parseFloat(squareFeet) / conversionRate).toFixed(4)
      : "";

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-6">
      <div className="max-w-2xl mx-auto">

        <Breadcrumb
          category="Area"
          categoryUrl="/area"
          page="Square-Feet to Marla Converter"
        />

        <div className="bg-white rounded-3xl shadow-2xl p-12 transition-all duration-300">

          <h1 className="text-4xl font-bold text-center mb-4">
            Square Feet to Marla
          </h1>

          <p className="text-center text-gray-600 mb-10">
            Instantly convert square feet into Marla using the standard
            measurement system.
          </p>

          {/* Input */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-700">
              Enter Square Feet Value
            </label>

            <input
              type="number"
              value={squareFeet}
              onChange={(e) => setSquareFeet(e.target.value)}
              placeholder="e.g. 1361.25"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-all"
            />
          </div>

          {/* Result */}
          <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center transition-all">
            <p className="text-sm text-gray-500 mb-2">Converted Value</p>
            <p className="text-3xl font-bold text-blue-800 transition-all duration-300">
              {marla ? `${marla} Marla` : "—"}
            </p>
          </div>

          {/* Info */}
          <div className="mt-10 text-center text-gray-500 text-sm">
            1 Marla = 272.25 Square Feet
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold">
                  How many Marla are in 1 square foot?
                </h3>
                <p>
                  One square foot equals approximately 0.003673 Marla based on the Pakistan standard where 1 Marla equals 272.25 square feet.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  What is the formula to convert square feet to Marla?
                </h3>
                <p>
                  To convert square feet into Marla, divide the square feet value by 272.25.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Where is Marla measurement used?
                </h3>
                <p>
                  Marla is commonly used in Pakistan and South Asia for land and property measurements in real estate transactions.
                </p>
              </div>
            </div>
          </div><ConversionTable
            title="Square Feet to Marla Conversion Table"
            fromUnit="sq ft"
            toUnit="Marla"
            rate={0.003673}
          />
          <RelatedConverters />
        </div>
      </div>
    </main>
  );
}