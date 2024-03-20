
import React from "react";

function Footer() {

  const handleInstagramClick = () => {
    // Redireccionar a la página de Instagram
    window.location.href = 'https://instagram.com/senoidalhz?igshid=MmIzYWVlNDQ5Yg==';
  };



  return (
      <footer className="footer">
          <h3 className="footer-title">Contacto</h3>
        <div className="social-media">
          <svg className="icon" onClick={handleInstagramClick} xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
          <a className="email" href="@">senoidalhz@gmail.com</a>
          <div class="copyright">
        &copy; 2024 - Todos los derechos reservados. Desarrollado por <a className="creator"href="https://www.instagram.com/alexanderonearth/?hl=es-la">Christian Olivares</a>
    </div>
        </div>
      </footer>
  );
}



export default Footer;
