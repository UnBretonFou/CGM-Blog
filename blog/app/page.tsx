"use client";
import React, { useState } from 'react';
import './globals.css';

const postsPerPage = 9;

const Page: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1); // Current page state

  const posts = [
    { id: 1, title: "Post n° 1", description: "Description du post 1" },
    { id: 2, title: "Post n° 2", description: "Description du post 2" },
    { id: 3, title: "Post n° 3", description: "Description du post 3" },
    { id: 4, title: "Post n° 4", description: "Description du post 4" },
    { id: 5, title: "Post n° 5", description: "Description du post 5" },
    { id: 6, title: "Post n° 6", description: "Description du post 6" },
    { id: 7, title: "Post n° 7", description: "Description du post 7" },
    { id: 8, title: "Post n° 8", description: "Description du post 8" },
    { id: 9, title: "Post n° 9", description: "Description du post 9" },
    { id: 10, title: "Post n° 10", description: "Description du post 10" },
  ];

  const totalPages = Math.ceil(posts.length / postsPerPage); // Calculate total pages

  const getVisiblePosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = Math.min(startIndex + postsPerPage, posts.length);
    return posts.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const visiblePosts = getVisiblePosts();

  return (
    <div className="home-page bg-gray-100 min-h-screen">
      {/* ===== HEADER ===== */}
      <header className="header bg-white shadow-md p-4 flex justify-between items-center">
        <a href="/" className="logo text-xl font-bold">CGM Blog</a>
        <nav className="nav flex items-center">
          <a href="/about" className="nav-link mr-4">À propos</a>
          <a href="/contact" className="nav-link mr-4">Contact</a>
          <a href="/services" className="nav-link">Connexion</a>
        </nav>
      </header>

      <section className="services bg-gray-200 p-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Nos posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visiblePosts.map((post) => (
            <div className="service p-4 shadow-md rounded-md" key={post.id}>
              {/* ... your post content (unchanged) */}
            </div>
          ))}
        </div>

        {/* Pagination section */}
        <div className="pagination mt-4 flex justify-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                className={`px-4 py-2 mr-2 text-gray-700 hover:text-blue-500 ${
                  currentPage === pageNumber ? 'bg-gray-200 font-bold' : ''
                }`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer bg-gray-900 text-white p-4 text-center">
        <p>© 2024 Nom de l'entreprise - Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default Page;
