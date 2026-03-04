import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Convertiva – Professional Unit Conversion Tools",
  description:
    "Convert units for property, length, volume, and more with Convertiva's professional online tools.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "'Inter', sans-serif",
          backgroundColor: "#F8FAFC",
          color: "#111827",
          margin: 0,
        }}
      >
        <Navbar />
        <main style={{ minHeight: "80vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}