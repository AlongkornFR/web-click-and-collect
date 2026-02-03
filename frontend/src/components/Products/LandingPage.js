import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={styles.container}>
      {/* Section Hero */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>L'Art du Sushi à Portée de Clic</h1>
          <p style={styles.subtitle}>
            Des produits frais, préparés à la commande pour une expérience authentique.
          </p>
          <Link to="/menu" style={styles.cta}>
            Voir la Carte 🍣
          </Link>
        </div>
      </section>

      {/* Section Engagements */}
      <section style={styles.features}>
        <div style={styles.feature}>
          <span style={styles.icon}>🐟</span>
          <h3>Qualité Premium</h3>
          <p>Poisson frais arrivant chaque matin de nos côtes.</p>
        </div>
        <div style={styles.feature}>
          <span style={styles.icon}>⏱️</span>
          <h3>Click & Collect</h3>
          <p>Commandez en ligne et récupérez en 15 minutes.</p>
        </div>
        <div style={styles.feature}>
          <span style={styles.icon}>🍱</span>
          <h3>Recettes Uniques</h3>
          <p>Des créations originales par nos maîtres sushis.</p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: { fontFamily: "'Segoe UI', Roboto, sans-serif" },
  hero: {
    height: '70vh',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    padding: '0 20px'
  },
  title: { fontSize: '3.5rem', marginBottom: '20px', fontWeight: '800' },
  subtitle: { fontSize: '1.4rem', marginBottom: '30px', maxWidth: '700px' },
  cta: {
    backgroundColor: '#e63946',
    color: 'white',
    padding: '15px 40px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: '0.3s'
  },
  features: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '80px 20px',
    backgroundColor: '#fff',
    gap: '20px',
    flexWrap: 'wrap'
  },
  feature: { textAlign: 'center', maxWidth: '300px' },
  icon: { fontSize: '3rem', marginBottom: '15px', display: 'block' }
};

export default LandingPage;