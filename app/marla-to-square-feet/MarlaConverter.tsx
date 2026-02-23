'use client'

import { useState } from 'react'

export default function MarlaConverter() {
  const [marla, setMarla] = useState<number>(1)
  const squareFeet = marla * 272.25

  return (
    <div style={{ marginTop: '20px' }}>
      <label>Enter Marla:</label>
      <input
        type="number"
        value={marla}
        onChange={(e) => setMarla(Number(e.target.value))}
        style={{ display: 'block', padding: '8px', marginTop: '5px', width: '100%' }}
      />
      <h2 style={{ marginTop: '20px' }}>
        {marla} Marla = {squareFeet.toFixed(2)} Square Feet
      </h2>
    </div>
  )
}