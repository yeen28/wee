import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Artists from './components/Artists';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Artists />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;