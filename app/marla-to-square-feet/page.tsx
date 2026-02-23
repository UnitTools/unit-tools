import type { Metadata } from 'next'
import MarlaConverter from './MarlaConverter'

export const metadata: Metadata = {
  title: 'Marla to Square Feet Converter (Pakistan Standard)',
  description:
    'Convert Marla to Square Feet instantly using Pakistan standard measurement. 1 Marla = 272.25 square feet. Includes conversion table and examples.',
  keywords: [
    'marla to square feet',
    'marla converter Pakistan',
    'marla to sq ft',
    'property calculator Pakistan',
    'real estate converter',
  ],
}

export default function Page() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto' }}>
      <b><h1>Marla to Square Feet Converter (Pakistan Standard)</h1></b>
      {/* Client-side Calculator */}
      <MarlaConverter />

      {/* Formula */}
      <hr style={{ margin: '40px 0' }} />
      <h2><b>Conversion Formula</b></h2>
      <p>Square Feet = Marla × 272.25</p>

      {/* Example */}
      <br /><h2><b>Example Calculation</b></h2>
      <p>5 Marla × 272.25 = 1361.25 Square Feet</p>

      {/* Conversion Table */}
      <br /><h2><b>Marla to Square Feet Conversion Table</b></h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Marla</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Square Feet</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 5, 7, 10, 15, 20].map((value) => (
            <tr key={value}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{value}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                {(value * 272.25).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Additional Content for SEO */}
      <hr style={{ margin: '40px 0' }} />
      <br /><h2><b>What is a Marla?</b></h2>
      <p>
        A Marla is a traditional unit of area widely used in Pakistan for measuring residential and
        commercial plots. 1 Marla equals 272.25 square feet in most regions. It is commonly used
        in real estate, construction planning, and property listings.
      </p>

      <br /><h2><b>Why Convert Marla to Square Feet?</b></h2>
      <p>
        Converting Marla to Square Feet helps buyers, builders, and architects understand property
        sizes accurately, calculate construction material requirements, and compare properties
        more effectively.
      </p>

      {/* FAQ Section */}
      <br /><h2><b>Frequently Asked Questions:</b></h2><br />
      <h3><b>How many square feet are in 1 Marla?</b></h3>
      <p>1 Marla = 272.25 Square Feet (Pakistan Standard)</p>

      <br /><h3><b>How do you convert Marla to Square Feet?</b></h3>
      <p>Multiply the number of Marla by 272.25 to get the square feet value.</p>

      {/* Related Links */}
      <br /><h2><b>Related Converters</b></h2>
      <ul>
        <li><a href="/square-feet-to-marla">Square Feet to Marla</a></li>
        <li><a href="/kanal-to-marla">Kanal to Marla</a></li>
      </ul>
    </div>
  )
}