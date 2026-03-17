"use client"

import { useState } from "react"
import RelatedConverters from "@/components/RelatedConverters"
import ConversionTable from "@/components/ConversionTable"
import Breadcrumb from "@/components/Breadcrumb"

export default function SqFtToSqMeterConverter() {
    const [sqft, setSqft] = useState("")
    const result = parseFloat(sqft) * 0.092903

    return (
        <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="bg-white rounded-3xl shadow-2xl p-12 transition-all duration-300">

                <Breadcrumb
                    category="Area"
                    categoryUrl="/converters/area"
                    page="Square-Feet to Square-Meter Converter"
                />

                <h1 className="text-4xl font-bold text-center mb-10">
                    Square Feet to Square Meters Converter
                </h1>

                <div className="bg-white shadow-xl rounded-2xl p-10 border">

                    <label className="block text-lg font-medium mb-3">
                        Enter Square Feet
                    </label>

                    <input
                        type="number"
                        value={sqft}
                        onChange={(e) => setSqft(e.target.value)}
                        placeholder="Example: 1000"
                        className="w-full border rounded-lg px-4 py-3 text-lg mb-6"
                    />

                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <p className="text-gray-600 mb-2">Result</p>

                        <p className="text-3xl font-bold text-blue-800">
                            {sqft ? result.toFixed(4) : "0"} m²
                        </p>
                    </div>

                    <div className="mt-8 text-gray-600 text-sm text-center">
                        1 Square Foot = 0.092903 Square Meters
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
                                How many square meters are in 1 square foot?
                            </h3>
                            <p>
                                One square foot equals approximately 0.092903 square meters. This conversion is commonly used when switching between imperial and metric area measurements.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">
                                What is the formula to convert square feet to square meters?
                            </h3>
                            <p>
                                To convert square feet to square meters, multiply the square feet value by 0.092903.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">
                                Where is square meter measurement used?
                            </h3>
                            <p>
                                Square meter is widely used internationally as the standard metric unit for measuring land, rooms, apartments, and buildings.
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