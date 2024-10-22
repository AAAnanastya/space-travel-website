import React, { useEffect, useState } from 'react';
import styles from './ContentText.module.css';
import '../index.css';

export default function ContentText({ heroType, element, children }) {
  const [currentElement, setCurrentElement] = useState(element);
  const [currentChildren, setCurrentChildren] = useState(children);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => {
      setCurrentElement(element);
      setCurrentChildren(children);
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, [element, children]);

  return (
    <div>
      {heroType === 'Planet' && <h2 className={`fade ${isVisible ? 'show' : ''}`}>{currentElement.title}</h2>}
      {heroType === 'Crew' && (
        <>
          <h4 className={`fade ${isVisible ? 'show' : ''}`}>{currentElement.position}</h4>
          <h3 className={`fade ${isVisible ? 'show' : ''}`}>{currentElement.name}</h3>
        </>
      )}
      {heroType === 'Technology' && (
        <>
          <h4 className={`fade ${isVisible ? 'show' : ''}`}>The terminology...</h4>
          <h3 className={`fade ${isVisible ? 'show' : ''}`}>{currentElement.title}</h3>
        </>
      )}

      <p className={`${styles['p-4']} fade ${isVisible ? 'show' : ''}`}>{currentChildren}</p>

      {heroType === 'Planet' && (
        <>
          <hr className={styles['styled-line']} />
          <div className={styles['planet-statistics-container']}>
            <div className={styles['planet-statistics-content']}>
              <p className="p-2">Avg. distance</p>
              <p className={`p-1 fade ${isVisible ? 'show' : ''}`}>{currentElement.distance}</p>
            </div>
            <div className={styles['planet-statistics-content']}>
              <p className="p-2">Est. travel time</p>
              <p className={`p-1 fade ${isVisible ? 'show' : ''}`}>{currentElement.travelTime}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
