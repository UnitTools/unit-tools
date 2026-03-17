"use client"

import { useState } from "react"
import RelatedConverters from "@/components/RelatedConverters"
import ConversionTable from "@/components/ConversionTable"
import Breadcrumb from "@/components/Breadcrumb"

export default function SqMeterToSqFtConverter() {

  const [sqm, setSqm] = useState("")
  const result = parseFloat(sqm) * 10.7639

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="bg-white rounded-3xl shadow-2xl p-12 transition-all duration-300">

        <Breadcrumb
          category="Area"
          categoryUrl="/converters/area"
          page="Square-Meter to Square-Feet Converter"
        />

        <h1 className="text-4xl font-bold text-center mb-10">
          Square Meters to Square Feet Converter
        </h1>

        <div className="bg-white shadow-xl rounded-2xl p-10 border">

          <label className="block text-lg font-medium mb-3">
            Enter Square Meters
          </label>

          <input
            type="number"
            value={sqm}
            onChange={(e) => setSqm(e.target.value)}
            placeholder="Example: 100"
            className="w-full border rounded-lg px-4 py-3 text-lg mb-6"
          />

          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <p className="text-gray-600 mb-2">Result</p>

            <p className="text-3xl font-bold text-blue-800 transition-all duration-300">
              {sqm ? result.toFixed(4) : "0"} ft²
            </p>
          </div>

          <div className="mt-8 text-gray-600 text-sm text-center">
            1 Square Meter = 10.7639 Square Feet
          </div>

        </div>

        {/* FAQ Section */}

        <div className="mt-16">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">

            <div>
              <h3 className="font-semibold">
                How many square feet are in 1 square meter?
              </h3>
              <p>
                One square meter equals 10.7639 square feet. This conversion is
                widely used in real estate and construction when switching
                between metric and imperial measurement systems.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What is the formula to convert square meters to square feet?
              </h3>
              <p>
                Multiply the square meter value by 10.7639 to convert it into
                square feet.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Where is square meter measurement used?
              </h3>
              <p>
                Square meter is the international standard unit of area and is
                commonly used in most countries for measuring land, property, and
                building areas.
              </p>
            </div>

          </div>

        </div><ConversionTable
          title="Square Feet to Square Meters Conversion Table"
          fromUnit="sq ft"
          toUnit="m²"
          rate={0.092903}
        />
        <RelatedConverters />
      </div>
    </div>
  )
}