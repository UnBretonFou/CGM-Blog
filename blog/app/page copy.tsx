import React from 'react';
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
          <h1 className="text-4xl font-bold mb-4">Blog cours bdd</h1>
          <p className="text-gray-600 text-lg leading-relaxed">git poule</p>
          <a href="../connection/page.tsx" className="btn bg-blue-500 text-white px-4 py-2 mt-4">Connexion</a>
        </section>
        <section className="about grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-center">
            <img src="./images/Logo-CGM-RVB.png" alt="Image de l'entreprise" className="w-48 mx-auto" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">À propos de nous</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Texte décrivant l'entreprise, sa mission, ses valeurs, etc.
            </p>
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

        {/* ===== TÉMOIGNAGES ===== */}
        {/* <section className="testimonials bg-gray-500 p-10">
          <h2 className="text-2xl font-bold mb-4 text-center">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="testimonial p-4 shadow-md rounded-md">
              <p className="text-gray-600 text-lg leading-relaxed">
                "Citation positive d'un client satisfait."
              </p>
              <h4 className="text-xl font-bold mt-4">Nom du client</h4>
            </div>
            <div className="testimonial p-4 shadow-md rounded-md">
              <p className="text-gray-600 text-lg leading-relaxed">
                "Citation positive d'un autre client satisfait."
              </p>
              <h4 className="text-xl font-bold mt-4">Nom du client</h4>
            </div>
          </div>
        </section> */}

        {/* ===== CONTACT SECTION ===== */}
        {/* <section className="contact bg-blue-500 text-white p-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Contactez-nous</h2>
        <form action="/contact" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">Nom</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700" required />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700" required></textarea>
          </div>
          <button type="submit" className="btn bg-white text-blue-500 px-4 py-2 mt-4">Envoyer</button>
        </form>
      </section> */}
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer bg-gray-900 text-white p-4 text-center">
        <p>© 2024 Nom de l'entreprise - Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default Page;
