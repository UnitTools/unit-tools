import Link from "next/link"

const converters = [
  {
    title: "Marla to Square Feet",
    description: "Convert Marla to square feet instantly using the Pakistan standard.",
    url: "/converters/area/marla-to-square-feet",
  },
  {
    title: "Square Feet to Marla",
    description: "Convert square feet into Marla quickly and accurately.",
    url: "/converters/area/square-feet-to-marla",
  },
  {
    title: "Square Feet to Square Meters",
    description: "Convert square feet to square meters easily.",
    url: "/converters/area/square-feet-to-square-meters",
  },
  {
    title: "Square Meters to Square Feet",
    description: "Convert square meters into square feet instantly.",
    url: "/converters/area/square-meters-to-square-feet",
  },
]

export default function AreaPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Page Header */}

      <h1 className="text-4xl font-bold text-center mb-6">
        Area Conversion Tools
      </h1>

      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
        Use our free area conversion tools to quickly convert between different
        land and property measurement units such as square feet, square meters,
        Marla, acres, and more.
      </p>

      {/* Converter Grid */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {converters.map((tool, index) => (

          <Link
            key={index}
            href={tool.url}
            className="block border rounded-xl p-6 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >

            <h2 className="text-lg font-semibold mb-2">
              {tool.title}
            </h2>

            <p className="text-gray-600 text-sm">
              {tool.description}
            </p>

          </Link>

        ))}

      </div>

      {/* SEO Content */}

      <div className="mt-20 max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-6">

        <h2 className="text-2xl font-bold">
          What is Area Conversion?
        </h2>

        <p>
          Area conversion is the process of converting measurements of land or
          space from one unit to another. For example, you may need to convert
          square feet to square meters when comparing property sizes across
          different countries or measurement systems.
        </p>

        <p>
          Our area conversion tools allow you to quickly convert between
          commonly used units such as square feet, square meters, and Marla.
          These calculators are useful for real estate, construction, land
          measurement, and academic purposes.
        </p>

        <h2 className="text-2xl font-bold">
          Popular Area Units
        </h2>

        <p>
          Some of the most commonly used area measurement units include square
          feet (sq ft), square meters (m²), Marla, acre, and hectare. Different
          countries use different units depending on their measurement system.
        </p>

      </div>

    </div>
  )
}