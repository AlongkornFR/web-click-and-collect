import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';
import { useCart } from '../../context/CartContext';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        getProducts().then(res => setProducts(res.data));
    }, []);

    return (
        <div style={styles.grid}>
            {products.map(p => (
                <div key={p.id} style={styles.card}>
                    <img src={p.image_vignette || 'https://www.su-rice.com/smarty/wireframe30/media/images/logo.png'} alt={p.nom} style={styles.img} />
                    <h3>{p.nom}</h3>
                    <p>{p.prix} €</p>
                    <button onClick={() => addToCart(p)} style={styles.btn}>Ajouter</button>
                </div>
            ))}
        </div>
    );
};

const styles = {
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', padding: '20px' },
    card: { border: '1px solid #ddd', padding: '15px', borderRadius: '10px', textAlign: 'center' },
    img: { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' },
    btn: { backgroundColor: '#e63946', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }
};

export default ProductList;