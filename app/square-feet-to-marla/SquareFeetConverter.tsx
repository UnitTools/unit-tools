'use client'

import { useState } from 'react'

export default function SquareFeetConverter() {
  const [squareFeet, setSquareFeet] = useState<number>(272.25)
  const marla = squareFeet / 272.25

  return (
    <div style={{ marginTop: '20px' }}>
      <label>Enter Square Feet:</label>
      <input
        type="number"
        value={squareFeet}
        onChange={(e) => setSquareFeet(Number(e.target.value))}
        style={{ display: 'block', padding: '8px', marginTop: '5px', width: '100%' }}
      />

      <h2 style={{ marginTop: '20px' }}>
        {squareFeet} Square Feet = {marla.toFixed(4)} Marla
      </h2>
    </div>
  )
}