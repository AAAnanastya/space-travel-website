import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HomeHero from '../components/HomeHero';
import styles from './Home.module.css';
import '../index.css';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    return () => {
      setIsVisible(false);
    };
  }, []);

  const navigate = useNavigate();

  function moveToDestinationPage() {
    navigate('/destination');
  }
  return (
    <div className={`${styles['home-page-container']} fade ${isVisible ? 'show' : ''}`}>
      <HomeHero subtitle="So, you want to travel to" title="Space" onButtonClick={moveToDestinationPage}>
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
        Well sit back, and relax because we’ll give you a truly out of this world experience!
      </HomeHero>
    </div>
  );
}
