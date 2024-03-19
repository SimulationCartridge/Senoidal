
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
          <ul>
            <img className="instagram-icon" onClick={handleInstagramClick} alt=""/>
          </ul>
        </div>
      </footer>
  );
}


export default Footer;
