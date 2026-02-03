import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();

  // On calcule le nombre total d'articles (somme des quantités)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

return (
    <nav style={styles.navbar}>
        <div style={styles.logo}>
            <Link to="/" style={styles.link}>
                <span role="img" aria-label="sushi">🍣</span> Sushi Click & Collect
            </Link>
        </div>
        
        <div style={styles.cartSection}>
            <Link to="/menu" style={styles.link}>Menu</Link>
            <Link to="/panier" style={styles.cartIcon}>
                <span role="img" aria-label="cart">🛒</span>
                {totalItems > 0 && (
                    <span style={styles.badge}>{totalItems}</span>
                )}
            </Link>
        </div>
    </nav>
);
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#1a1a1a',
    color: 'white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
  },
  logo: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
  },
  cartSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500'
  },
  cartIcon: {
    position: 'relative',
    fontSize: '1.5rem'
  },
  badge: {
    position: 'absolute',
    top: '-8px',
    right: '-10px',
    backgroundColor: '#e63946',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 7px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    border: '2px solid #1a1a1a'
  }
};

export default Navbar;