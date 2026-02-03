import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // 1. Au démarrage, on essaie de récupérer le panier stocké dans le navigateur
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('sushi_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // 2. À chaque fois que le panier change, on l'enregistre automatiquement dans le LocalStorage
    useEffect(() => {
        localStorage.setItem('sushi_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prev) => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) {
                return prev.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart((prev) => {
            const item = prev.find(i => i.id === productId);
            if (item && item.quantity > 1) {
                return prev.map(i => i.id === productId ? { ...i, quantity: i.quantity - 1 } : i);
            }
            return prev.filter(i => i.id !== productId);
        });
    };

    // Pour vider le panier après une commande réussie
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);