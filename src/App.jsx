import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from('product_list').select('*')
      if (error) console.error(error)
      else setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Our Product Catalog</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '10px' }}>
            <img src={product.photo_url.split(',')[0]} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h2>{product.name}</h2>
            <p>{product.short_description}</p>
            <p style={{ fontWeight: 'bold' }}>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App