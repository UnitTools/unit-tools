type Props = {
  title: string
  fromUnit: string
  toUnit: string
  rate: number
}

export default function ConversionTable({
  title,
  fromUnit,
  toUnit,
  rate,
}: Props) {
  const values = [
    1, 5, 10, 25, 50, 75, 100,
    200, 250, 500, 750, 1000
  ]

  return (
    <div className="mt-20">

      <h2 className="text-2xl font-bold text-center mb-8">
        {title}
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full border rounded-xl overflow-hidden">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">{fromUnit}</th>
              <th className="p-3 text-left">{toUnit}</th>
            </tr>
          </thead>

          <tbody>

            {values.map((value) => (

              <tr key={value} className="border-t hover:bg-gray-50">

                <td className="p-3">
                  {value} {fromUnit}
                </td>

                <td className="p-3">
                  {(value * rate).toFixed(4)} {toUnit}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}