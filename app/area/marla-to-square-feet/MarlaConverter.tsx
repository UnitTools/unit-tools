"use client";

import { useState } from "react";
import RelatedConverters from "@/components/RelatedConverters"
import ConversionTable from "@/components/ConversionTable"
import Breadcrumb from "@/components/Breadcrumb"

export default function MarlaConverter() {
  const [marla, setMarla] = useState("");
  const conversionRate = 272.25;

  const squareFeet =
    marla !== "" ? (parseFloat(marla) * conversionRate).toFixed(2) : "";

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <Breadcrumb
          category="Area"
          categoryUrl="/area"
          page="Marla to Square-Feet Converter"
        />

        <div className="bg-white rounded-3xl shadow-2xl p-12 transition-all duration-300">

          <h1 className="text-4xl font-bold text-center mb-4">
            Marla to Square Feet
          </h1>

          <p className="text-center text-gray-600 mb-10">
            Instantly convert Marla into square feet using the standard
            measurement used in Pakistan.
          </p>

          {/* Input */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-700">
              Enter Marla Value
            </label>

            <input
              type="number"
              value={marla}
              onChange={(e) => setMarla(e.target.value)}
              placeholder="e.g. 5"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-all"
            />
          </div>

          {/* Result */}
          <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center transition-all">
            <p className="text-sm text-gray-500 mb-2">Converted Value</p>
            <p className="text-3xl font-bold text-blue-800 transition-all duration-300">
              {squareFeet ? `${squareFeet} sq ft` : "—"}
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
                  How many square feet are in 1 Marla?
                </h3>
                <p>
                  One Marla equals 272.25 square feet according to the standard measurement used in Pakistan.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Is Marla measurement the same worldwide?
                </h3>
                <p>
                  No, Marla size may differ historically by region. However, the widely accepted modern standard in Pakistan is 272.25 square feet.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Who uses Marla measurement?
                </h3>
                <p>
                  Marla is commonly used in real estate transactions, property listings, and land measurements across Pakistan and parts of South Asia.
                </p>
              </div>
            </div>
          </div>
          <ConversionTable
            title="Marla to Square Feet Conversion Table"
            fromUnit="Marla"
            toUnit="sq ft"
            rate={272.25}
          />
          <RelatedConverters />
        </div>
      </div>
    </main>
  );
}
