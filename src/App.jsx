import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif', background: '#f5f7fb', color: '#1f2937' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', padding: 40, background: '#fff', borderRadius: 12, boxShadow: '0 4px 20px rgba(0,0,0,0.06)', maxWidth: 480 }}>
        <h1 style={{ margin: 0 }}>Welcome to Allom</h1>
        <p style={{ margin: 0, color: '#4b5563', textAlign: 'center' }}>A React + Vite starter running in Docker for Alloy sessions.</p>
        <button onClick={() => setCount(c => c + 1)} style={{ padding: '10px 20px', border: 'none', borderRadius: 8, background: '#2563eb', color: '#fff', fontSize: 16, cursor: 'pointer' }}>
          Clicked {count} times
        </button>
      </div>
    </main>
  )
}
