export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0D3A66",
        color: "#E5E7EB",
        padding: "30px",
        textAlign: "center",
        marginTop: "60px",
      }}
    >
      <p style={{ fontWeight: "600", marginBottom: "8px" }}>Convertiva</p>
      <p style={{ fontSize: "14px", color: "#CBD5E1" }}>
        Professional online unit conversion tools for property, length, volume, and more.
      </p>
      <p style={{ fontSize: "13px", color: "#94A3B8", marginTop: "10px" }}>
        © {new Date().getFullYear()} Convertiva. All rights reserved.
      </p>
    </footer>
  )
}