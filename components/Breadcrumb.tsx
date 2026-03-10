import Link from "next/link"

type Props = {
  category: string
  categoryUrl: string
  page: string
}

export default function Breadcrumb({
  category,
  categoryUrl,
  page,
}: Props) {
  return (
    <div className="text-sm text-gray-500 mb-6">

      <Link href="/" className="hover:underline">
        Home
      </Link>

      <span className="mx-2">›</span>

      <Link href={categoryUrl} className="hover:underline">
        {category}
      </Link>

      <span className="mx-2">›</span>

      <span className="text-gray-700">{page}</span>

    </div>
  )
}