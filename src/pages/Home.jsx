import { useNavigate } from 'react-router-dom';

import HomeHero from '../components/HomeHero';
import './HomePageStyles.css';

export default function HomePage() {
  const navigate = useNavigate();

  function moveToDestinationPage() {
    navigate('/destination');
  }
  return (
    <div className="home-page-container">
      <HomeHero subtitle="So, you want to travel to" title="Space" buttonStyle="hero-button" onButtonClick={moveToDestinationPage}>
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
        Well sit back, and relax because we’ll give you a truly out of this world experience!
      </HomeHero>
    </div>
  );
}
