import React, { useEffect, useState } from 'react';
import '../index.css';

export default function ContentImg({ imgStyle, element, imgAdditionalStyling }) {
  const [currentElement, setCurrentElement] = useState(element);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => {
      setCurrentElement(element);
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, [element]);

  return (
    <div className={imgStyle}>
      <img className={`fade ${isVisible ? 'show' : ''}`} src={currentElement.image} alt={currentElement.title} />
      {imgAdditionalStyling !== undefined && <div className={imgAdditionalStyling}></div>}
    </div>
  );
}
