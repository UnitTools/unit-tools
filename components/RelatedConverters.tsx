import Link from "next/link"

const converters = [
  {
    title: "Marla to Square Feet",
    description: "Convert Marla into square feet instantly.",
    url: "/converters/area/marla-to-square-feet",
  },
  {
    title: "Square Feet to Marla",
    description: "Convert square feet into Marla easily.",
    url: "/converters/area/square-feet-to-marla",
  },
  {
    title: "Square Feet to Square Meters",
    description: "Convert sq ft into square meters.",
    url: "/converters/area/square-feet-to-square-meters",
  },
  {
    title: "Square Meters to Square Feet",
    description: "Convert square meters into sq ft.",
    url: "/converters/area/square-meters-to-square-feet",
  },
  {
    title: "Square Feet to Acres",
    description: "Convert square meters into square feet instantly.",
    url: "/converters/area/square-feet-to-acres",
  },
]

export default function RelatedConverters() {
  return (
    <div className="mt-20">

      <h2 className="text-2xl font-bold text-center mb-10">
        Related Area Converters
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {converters.map((tool, index) => (

          <Link
            key={index}
            href={tool.url}
            className="group block bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >

            <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">
              {tool.title}
            </h3>

            <p className="text-gray-600 mt-2 text-sm">
              {tool.description}
            </p>

          </Link>

        ))}

      </div>

    </div>
  )
}