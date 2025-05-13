import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data, error } = await supabase.from('product_list').select('*');
      if (error) {
        console.error('Error loading products:', error);
      } else {
        setProducts(data);
      }
    }
    loadProducts();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>Product Catalog</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <div>
              {/* Carga segura: muestra solo la primera imagen sin usar JSON.parse */}
              <img
                src={product.photo_urls.split(',')[0].replace(/[\[\]"]/g, '').trim()}
                alt={product.name}
                style={{ width: '100%', maxHeight: '180px', objectFit: 'cover', borderRadius: '4px' }}
              />
            </div>
            <h2>{product.name}</h2>
            <p>{product.short_description}</p>
            <strong>${product.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
