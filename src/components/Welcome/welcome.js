import React, { useEffect, useState } from 'react';



const Welcome = () => {

    const [showText, setShowText] = useState(false);
  
    useEffect(() => {
      setShowText(true);
    }, []);

  return (
    <div className='contenedor'>
      <section className='banner-container'>
        
      {showText && (
    <p className="welcome">
      <span className="banner-text">
        {'Senoidal'.split('').map((letter, index) => (
          <span
            key={index}
            style={{animationDelay: `${(index + 1) * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </span>
    </p>
  )}
        
      </section>


    </div>
  );
}
export default Welcome;