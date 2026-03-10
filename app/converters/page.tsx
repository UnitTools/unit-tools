import Link from "next/link"

const categories = [
  {
    title: "Area Converters",
    description:
      "Convert land and property measurement units like square feet, square meters, Marla, and acres.",
    url: "/converters/area",
  },
  {
    title: "Length Converters",
    description:
      "Convert between meters, feet, inches, centimeters, and kilometers.",
    url: "/converterse/length",
  },
  {
    title: "Weight Converters",
    description:
      "Convert kilograms, grams, pounds, and ounces easily.",
    url: "/converters/weight",
  },
  {
    title: "Volume Converters",
    description:
      "Convert liters, milliliters, gallons, and other volume units.",
    url: "/converters/volume",
  },
]

export default function ConvertersPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Page Title */}

      <h1 className="text-4xl font-bold text-center mb-6">
        Unit Conversion Tools
      </h1>

      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
        Explore our professional conversion tools to quickly convert between
        different measurement units including area, length, weight, and volume.
      </p>

      {/* Category Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {categories.map((category, index) => (

          <Link
            key={index}
            href={category.url}
            className="block border rounded-xl p-6 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >

            <h2 className="text-lg font-semibold mb-2">
              {category.title}
            </h2>

            <p className="text-gray-600 text-sm">
              {category.description}
            </p>

          </Link>

        ))}

      </div>

      {/* SEO Content */}

      <div className="mt-20 max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-6">

        <h2 className="text-2xl font-bold">
          What Are Unit Conversion Tools?
        </h2>

        <p>
          Unit conversion tools allow you to convert measurements from one unit
          to another instantly. These calculators are commonly used in real
          estate, construction, engineering, education, and everyday
          calculations.
        </p>

        <p>
          Convertiva provides a growing collection of professional unit
          converters designed for speed, accuracy, and ease of use. Our tools
          support conversions for area, length, weight, volume, and many other
          measurement categories.
        </p>

        <h2 className="text-2xl font-bold">
          Popular Conversion Categories
        </h2>

        <p>
          Some of the most commonly used conversion categories include area
          converters for land measurements, length converters for distance,
          weight converters for mass, and volume converters for liquids and
          storage measurements.
        </p>

      </div>

    </div>
  )
}