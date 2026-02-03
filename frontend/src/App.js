import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import du Context (La gestion globale du panier)
import { CartProvider } from './context/CartContext';

// Import des composants
import Navbar from './components/Common/NavBar';
import ProductList from './components/Products/ProductList';
import CartPage from './components/Products/CartPage';
import LandingPage from './components/Products/LandingPage';

function App() {
  return (
    // On enveloppe TOUTE l'app avec le Provider pour que le panier soit accessible partout
    <CartProvider>
      <Router>
        <div className="App">
          {/* La Navbar reste affichée sur toutes les pages */}
          <Navbar />
          
          <main style={styles.mainContent}>
            <Routes>

              <Route path="/" element={<LandingPage />} />

              {/* Route par défaut : La liste des sushis */}
              <Route path="/menu" element={<ProductList />} />
              
              {/* Tu pourras ajouter la route /panier ici plus tard */}
              <Route path="/panier" element={<CartPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

// Un peu de style rapide pour centrer le contenu
const styles = {
  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  }
};

export default App;