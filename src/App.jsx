// src/App.jsx
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('product_list')
        .select('*');

      if (error) {
        console.error('Error fetching products:', error);
      } else {
        setProducts(data);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Product Store</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', maxWidth: '250px', textAlign: 'center' }}>
            <img src={product.photo_url} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
            <h2 style={{ fontSize: '1.1rem', marginTop: '0.5rem' }}>{product.name}</h2>
            <p style={{ color: '#555', fontSize: '0.9rem' }}>{product.short_description}</p>
            <strong style={{ display: 'block', marginTop: '0.5rem' }}>${product.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
