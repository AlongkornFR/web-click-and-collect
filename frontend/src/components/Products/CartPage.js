import React from 'react';
import { useCart } from '../../context/CartContext';

const CartPage = () => {
    const { cart, removeFromCart, addToCart } = useCart();

    // Calcul du prix total global
    const totalPrice = cart.reduce((acc, item) => acc + (item.prix * item.quantity), 0);

    if (cart.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h2>Votre panier est vide 🍣</h2>
                <p>Allez choisir quelques sushis !</p>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h2>Votre Panier</h2>
            <div style={styles.cartList}>
                {cart.map(item => (
                    <div key={item.id} style={styles.cartItem}>
                        <div style={styles.info}>
                            <strong>{item.nom}</strong>
                            <p>{item.prix} € l'unité</p>
                        </div>
                        
                        <div style={styles.controls}>
                            <button onClick={() => removeFromCart(item.id)} style={styles.btn}>-</button>
                            <span style={styles.qty}>{item.quantity}</span>
                            <button onClick={() => addToCart(item)} style={styles.btn}>+</button>
                        </div>

                        <div style={styles.subtotal}>
                            {(item.prix * item.quantity).toFixed(2)} €
                        </div>
                    </div>
                ))}
            </div>

            <div style={styles.footer}>
                <h3>Total : {totalPrice.toFixed(2)} €</h3>
                <button style={styles.checkoutBtn} onClick={() => alert('Commande envoyée !')}>
                    Valider la commande
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: { maxWidth: '800px', margin: '0 auto', padding: '20px' },
    cartList: { borderTop: '1px solid #ddd' },
    cartItem: { 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '15px 0', 
        borderBottom: '1px solid #eee' 
    },
    info: { flex: 2 },
    controls: { flex: 1, display: 'flex', alignItems: 'center', gap: '10px' },
    qty: { fontSize: '1.1rem', fontWeight: 'bold' },
    subtotal: { flex: 1, textAlign: 'right', fontWeight: 'bold' },
    btn: { padding: '5px 10px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ccc' },
    footer: { marginTop: '30px', textAlign: 'right', borderTop: '2px solid #333', paddingTop: '20px' },
    checkoutBtn: { 
        backgroundColor: '#e63946', 
        color: 'white', 
        padding: '12px 25px', 
        border: 'none', 
        borderRadius: '8px', 
        fontSize: '1.1rem', 
        cursor: 'pointer',
        marginTop: '10px'
    }
};

export default CartPage;