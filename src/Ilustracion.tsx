import React from 'react';
import CommentSection from './CommentSection'; // Asegúrate de importar correctamente el componente CommentSection
import './index.css'; // Asegúrate de tener el archivo CSS con los estilos correspondientes

const App: React.FC = () => {
  return (
    <div className="content-container">
      <header>
        <h1>Carolina Rodriguez Fuenmayor</h1>
      </header>
      <section className="content-section">
        <article>
          <img
            src="https://media.illustrationx.com/images/artist/CarolinaRodriguezFuenmayor/profile/crop/320/CarolinaRodriguezFuenmayor.jpg"
            alt="Ilustración Detalle"
            className="profile-image"
            onClick={() => window.location.href = 'carolina.html'} 
          />
          <h4>Aquí puedes ver más de sus trabajos: </h4>
          <div className="gallery">
            <img src="https://media.illustrationx.com/images/artist/CarolinaRodriguezFuenmayor/150523/full/320/rolling-stone-mag.jpg"alt="Ilustración Detalle"
            />
            <img
              src="https://media.illustrationx.com/images/artist/CarolinaRodriguezFuenmayor/149968/full/500/3794-149968.jpg"
              alt="Ilustración Detalle"
            />
            <img
              src="https://media.illustrationx.com/images/artist/CarolinaRodriguezFuenmayor/144158/full/500/3794-144158.jpg"
              alt="Ilustración Detalle"
            />
          </div>
          <div className="gallery1">
            <img
              src="https://media.illustrationx.com/images/artist/CarolinaRodriguezFuenmayor/152353/full/320/3794-152353.jpg"
              alt="Ilustración Detalle"
            />
            <img
              src="https://media.illustrationx.com/images/artist/CarolinaRodriguezFuenmayor/143920/full/500/3794-143920.jpg"
              alt="Ilustración Detalle"
            />
            <img
              src="https://media.illustrationx.com/images/artist/CarolinaRodriguezFuenmayor/148210/full/500/3794-148210.jpg"
              alt="Ilustración Detalle"
            />
          </div>
        </article>
        <CommentSection />
      </section>
    </div>
  );
};

export default App;
