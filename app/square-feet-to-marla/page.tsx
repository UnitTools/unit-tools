import type { Metadata } from 'next'
import SquareFeetConverter from './SquareFeetConverter'

export const metadata: Metadata = {
  title: 'Square Feet to Marla Converter (Pakistan Standard)',
  description:
    'Convert Square Feet to Marla instantly using Pakistan standard measurement. 272.25 square feet equals 1 Marla. Includes formula, table, and examples.',
  keywords: [
    'square feet to marla',
    'sq ft to marla',
    'marla converter Pakistan',
    'property calculator Pakistan',
  ],
}

export default function Page() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto' }}>
      <h1>Square Feet to Marla Converter (Pakistan Standard)</h1>

      <p>272.25 Square Feet = 1 Marla</p>

      {/* Calculator */}
      <SquareFeetConverter />

      {/* Formula */}
      <hr style={{ margin: '40px 0' }} />
      <h2>Conversion Formula</h2>
      <p>Marla = Square Feet ÷ 272.25</p>

      {/* Example */}
      <h2>Example Calculation</h2>
      <p>1361.25 Square Feet ÷ 272.25 = 5 Marla</p>

      {/* Conversion Table */}
      <h2>Square Feet to Marla Conversion Table</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Square Feet</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Marla</th>
          </tr>
        </thead>
        <tbody>
          {[272.25, 544.5, 816.75, 1361.25, 1905.75, 2722.5, 4083.75, 5445].map((value) => (
            <tr key={value}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{value}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                {(value / 272.25).toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* SEO Content */}
      <hr style={{ margin: '40px 0' }} />
      <h2>What is Square Feet?</h2>
      <p>
        Square Feet is a standard unit of area measurement used worldwide.
        In Pakistan real estate, it is often converted into Marla for property listings
        and land measurement comparisons.
      </p>

      <h2>Why Convert Square Feet to Marla?</h2>
      <p>
        Converting square feet to Marla helps property buyers and investors
        understand plot sizes according to local real estate standards in Pakistan.
      </p>

      {/* FAQ */}
      <h2>Frequently Asked Questions</h2>

      <h3>How many square feet are in 1 Marla?</h3>
      <p>1 Marla equals 272.25 Square Feet (Pakistan standard).</p>

      <h3>How do you convert square feet to Marla?</h3>
      <p>Divide the number of square feet by 272.25.</p>

      {/* Internal Linking */}
      <h2>Related Converters</h2>
      <ul>
        <li><a href="/marla-to-square-feet">Marla to Square Feet</a></li>
        <li><a href="/kanal-to-marla">Kanal to Marla</a></li>
      </ul>
    </div>
  )
}