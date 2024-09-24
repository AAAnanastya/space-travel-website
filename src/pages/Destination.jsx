import { NavLink } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import PlanetsRepresentation from '../components/PlanetsRepresentation';
import { useState } from 'react';

export default function DestinationPage() {
  const [selectedPlanet, setSelectedPlanet] = useState('moon');

  function handleSelector(selector) {
    setSelectedPlanet(selector);
  }
  return (
    <div className="destination-page-container">
      <div className="content-page-container">
        <PageTitle pageNumber="01">Pick your destination</PageTitle>
        <main className="content-page-content">
          <img src={`${process.env.PUBLIC_URL}/assets/destination/image-moon.png`} alt="Moon" />
          <div className="planets-description-container">
            <nav>
              <ul>
                <li>
                  <NavLink
                    onClick={() => handleSelector('moon')}
                    className={`${selectedPlanet === 'moon' ? 'active-planet' : ''} planet-list`}>
                    Moon
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => handleSelector('mars')}
                    className={`${selectedPlanet === 'mars' ? 'active-planet' : ''} planet-list`}>
                    Mars
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => handleSelector('europa')}
                    className={`${selectedPlanet === 'europa' ? 'active-planet' : ''} planet-list`}>
                    Europa
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => handleSelector('titan')}
                    className={`${selectedPlanet === 'titan' ? 'active-planet' : ''} planet-list`}>
                    Titan
                  </NavLink>
                </li>
              </ul>
            </nav>
            <PlanetsRepresentation planet="Moon" distance="384,400 km" travelTime="3 days">
              See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back
              refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
            </PlanetsRepresentation>
          </div>
        </main>
      </div>
    </div>
  );
}
