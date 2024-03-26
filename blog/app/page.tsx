import React, { useState } from 'react';
import './globals.css'; // Importez votre fichier CSS

const Page: React.FC = () => {
  return (
    <div className="home-page bg-gray-100 min-h-screen">
      <header className="header bg-white shadow-md p-4 flex justify-between items-center">
        <a href="/" className="logo text-xl font-bold">CGM Blog</a>
        <nav className="nav flex items-center">
          <a href="/about" className="nav-link mr-4">À propos</a>
          <a href="/contact" className="nav-link mr-4">Contact</a>
          <a href="/services" className="nav-link">Connexion</a>
          
        </nav>
      </header>
      <main className="main p-10">
        <section className="hero flex flex-col justify-center items-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Glob MGC</h1>
          <p className="text-gray-600 text-lg leading-relaxed">git poule</p>
          <a href="../connection/page.tsx" className="btn bg-blue-500 text-white px-4 py-2 mt-4">Connexion</a>
        </section>
        <section className="about grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-center">
            <img src="./images/Logo-CGM-RVB.png" alt="Image de l'entreprise" className="w-48 mx-auto" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">À propos de nous</h2>
            {/* <p className="text-gray-600 text-lg leading-relaxed">
              Texte à propos de nous.
            </p> */}
          </div>
        </section>
        <section className="services bg-gray-200 p-10">
          <h2 className="text-2xl font-bold mb-4 text-center">Nos posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="service p-4 shadow-md rounded-md">
              <h3 className="text-xl font-bold mb-2">Post n° 1</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Description du post 1</p>
            </div>
            <div className="service p-4 shadow-md rounded-md">
              <h3 className="text-xl font-bold mb-2">Post n° 2</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Description du post 2</p>
            </div>
            <div className="service p-4 shadow-md rounded-md">
              <h3 className="text-xl font-bold mb-2">Post n° 3</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Description du post 3</p>
            </div>
            <div className="service p-4 shadow-md rounded-md">
              <h3 className="text-xl font-bold mb-2">Post n° 4</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Description du post 4</p>
            </div>
            <div className="service p-4 shadow-md rounded-md">
              <h3 className="text-xl font-bold mb-2">Post n° 5</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Description du post 5</p>
            </div>
            <div className="service p-4 shadow-md rounded-md">
              <h3 className="text-xl font-bold mb-2">Post n° 6</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Description du post 6</p>
            </div>
            <div className="service p-4 shadow-md rounded-md">
              <h3 className="text-xl font-bold mb-2">Post n° 7</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Description du post 7</p>
            </div>
            <div className="service p-4 shadow-md rounded-md">
              <h3 className="text-xl font-bold mb-2">Post n° 8</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Description du post 8</p>
            </div>
            <div className="service p-4 shadow-md rounded-md">
              <h3 className="text-xl font-bold mb-2">Post n° 9</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Description du post 9</p>
            </div>
            
          </div>
        </section>
    
      </main>
      {/* ===== FOOTER ===== */}
      <footer className="footer bg-gray-900 text-white p-4 text-center">
        <p>© 2024 CGM Blog - Tous droits réservés</p>
      </footer>
    </div>
  );
};
export default Page;
