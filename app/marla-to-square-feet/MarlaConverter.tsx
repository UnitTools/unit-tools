"use client";

import { useState } from "react";

export default function MarlaConverter() {
  const [marla, setMarla] = useState("");
  const conversionRate = 272.25;

  const squareFeet =
    marla !== "" ? (parseFloat(marla) * conversionRate).toFixed(2) : "";

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-6">
      <div className="max-w-2xl mx-auto">

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
            <p className="text-3xl font-bold text-blue-800">
              {squareFeet ? `${squareFeet} sq ft` : "—"}
            </p>
          </div>

          {/* Info */}
          <div className="mt-10 text-center text-gray-500 text-sm">
            1 Marla = 272.25 Square Feet
          </div>

        </div>
      </div>
    </main>
  );
}