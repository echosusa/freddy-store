import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('product_list')
        .select('*');
      if (error) console.error(error);
      else setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Product Catalog</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
            {/* Galería de fotos */}
            <div style={{ display: 'flex', overflowX: 'scroll', gap: '0.5rem', marginBottom: '1rem' }}>
              {product.photo_urls?.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`${product.name} ${index + 1}`}
                  style={{ height: '150px', borderRadius: '4px' }}
                />
              ))}
            </div>
            <h2>{product.name}</h2>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>{product.short_description}</p>
            <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
