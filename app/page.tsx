import Link from "next/link"

export default function HomePage() {
  return (
    <div style={{ maxWidth: "1000px", margin: "auto", padding: "60px 20px" }}>
      
      {/* Hero Section */}
      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "3rem", color: "#1E3A8A", fontWeight: "700", marginBottom: "15px" }}>
          Convertiva – Professional Unit Converters
        </h1>
        <p style={{ fontSize: "18px", color: "#374151", maxWidth: "700px", margin: "auto" }}>
          Convert property units, length, volume, and more quickly and accurately.
          Designed for professionals, builders, and investors.
        </p>
      </section>

      {/* Tools Grid */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        <Link href="/marla-to-square-feet" style={{ textDecoration: "none" }}>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "25px",
              borderRadius: "16px",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              transition: "transform 0.2s",
            }}
          >
            <h2 style={{ color: "#1E3A8A", fontWeight: "600", marginBottom: "10px" }}>
              Marla → Square Feet
            </h2>
            <p style={{ color: "#4B5563", fontSize: "14px" }}>
              Convert Marla into Square Feet instantly using Pakistan standard (1 Marla = 272.25 sq ft).
            </p>
          </div>
        </Link>

        <Link href="/square-feet-to-marla" style={{ textDecoration: "none" }}>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "25px",
              borderRadius: "16px",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              transition: "transform 0.2s",
            }}
          >
            <h2 style={{ color: "#1E3A8A", fontWeight: "600", marginBottom: "10px" }}>
              Square Feet → Marla
            </h2>
            <p style={{ color: "#4B5563", fontSize: "14px" }}>
              Convert Square Feet into Marla quickly and accurately for property planning.
            </p>
          </div>
        </Link>
      </section>
    </div>
  )
}