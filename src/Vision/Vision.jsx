// Vision.js
import React, { useEffect, useState } from 'react';
import './Vision.css';

const Vision = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`vision-container ${isVisible ? 'visible' : ''}`}>
      <h2>Nuestra Visión</h2>
      <p>
        Tu texto más largo sobre la visión de Tubos y Veraneras. Puedes agregar varias líneas
        para expresar claramente los objetivos y metas de la empresa. ¡Personaliza este contenido
        según las necesidades y visión de tu negocio!
      </p>
    </div>
  );
};

export default Vision;
