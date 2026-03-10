import Link from "next/link";

export const metadata = {
  title: "Convertiva – Free Online Unit Converter",
  description:
    "Convert units instantly with Convertiva. Free online conversion tools for area, length, volume, and more. Fast, accurate, and easy to use.",
};

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Professional Online Unit Conversion Tools
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Fast, accurate, and easy-to-use converters for area, length, volume,
            and more. Built for students, engineers, real estate professionals,
            and everyday users worldwide.
          </p>

          <Link
            href="/converters"
            className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Start Converting
          </Link>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">
            Conversion Categories
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {/* Area */}
            <Link href="/converters/area" className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-700 transition-colors">
                Area Converters
              </h3>
              <p className="text-gray-600 text-sm">
                Convert between square feet, square meters, acres, marla,
                hectares, and more.
              </p>
            </Link>

            {/* Length */}
            <Link href="/converters/length" className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-700 transition-colors">
                Length Converters
              </h3>
              <p className="text-gray-600 text-sm">
                Convert meters, feet, inches, kilometers, miles, centimeters,
                and more.
              </p>
            </Link>

            {/* Volume */}
            <Link href="/converters/volume" className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-700 transition-colors">
                Volume Converters
              </h3>
              <p className="text-gray-600 text-sm">
                Convert liters, milliliters, gallons, cubic meters, and more.
              </p>
            </Link>

            {/* Weight */}
            <Link href="/converters/weight" className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-700 transition-colors">
                Weight Converters
              </h3>
              <p className="text-gray-600 text-sm">
                Convert kilograms, grams, pounds, ounces, and more.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* FEATURED TOOLS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Tools
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <Link
              href="/converters/area/marla-to-square-feet"
              className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">
                Marla to Square Feet Converter
              </h3>
              <p className="text-gray-600 text-sm">
                Convert Marla to square feet instantly using standard
                conversion values.
              </p>
            </Link>

            <Link
              href="/converters/area/square-feet-to-marla"
              className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">
                Square Feet to Marla Converter
              </h3>
              <p className="text-gray-600 text-sm">
                Convert square feet to Marla easily and accurately.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6">
            Why Choose Convertiva?
          </h2>

          <p className="mb-4">
            Convertiva is a professional online unit conversion platform designed
            to provide fast, accurate, and reliable calculations. Whether you are
            working in real estate, engineering, academics, construction, or
            everyday measurements, our tools ensure precision and simplicity.
          </p>

          <p>
            Our mission is to build a universal conversion system that supports
            global measurement standards while remaining intuitive and easy to
            use. With continuous expansion across multiple categories, Convertiva
            aims to become a trusted resource for users worldwide.
          </p>

        </div>
      </section>

    </main>
  );
}