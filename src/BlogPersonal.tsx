import React from 'react';
import './index2.css'; // Asegúrate de tener este archivo CSS con el estilo de tu blog personal
import CommentSection from './CommentSection';

const BlogPersonal: React.FC = () => {
  return (
    <div className="blog-container">
      <header>
        <h1>Blog Personal</h1>
        <div className="search-bar">
          <input type="text" placeholder="Buscar" />
          <button>Buscar</button>
        </div>
      </header>
      <section className="ilustracion-section">
        <h2>Curiosidades</h2>
        <article>
          <h3>Dibujos Digitales</h3>
          <a href="ilustracion.html">
            <img src="https://media.illustrationx.com/images/artist/CarolinaRodriguezFuenmayor/119941/full/500/woman-with-shadow.jpg" alt="Ilustración 01" />
          </a>
        </article>
        <article>
          <h3>Cocina</h3>
          <img src="https://example.com/anime2.jpg" alt="Cocina 01" />
        </article>
      </section>
      <CommentSection></CommentSection>
    </div>
  );
};

export default BlogPersonal;
