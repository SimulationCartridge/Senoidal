import React from 'react';
import Footer from '../Footer/footer';

function Nosotros() {

  return (
    <div className='us'>
      <section className="container">
        <h1>Nosotros</h1>
        <p>
          Somos una revista digital de la CDMX que busca recopilar lo más destacado de la música, artes visuales y fotografía con el fin de promover el crecimiento de dichas áreas en nuestro país.<br /><br />

          Aquí encontrarás un espacio para publicar tu trabajo y encontrar información relevante si eres esa persona que a diario se levanta con una idea pero necesita un poco de guía para saber: ¿Con qué cámara puedo iniciar?, ¿Qué es un sintetizador?, ¿Cómo puedo aprender a tatuar?<br /><br />
        </p>
      </section>
      <Footer className="nosotros-footer" />
    </div>
  )
};

export default Nosotros;
