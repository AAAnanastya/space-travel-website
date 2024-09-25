import { NavLink } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import PlanetsRepresentation from '../components/PlanetsRepresentation';
import { useState } from 'react';
import { PLANETS } from '../data';

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
          <img src={PLANETS[selectedPlanet].image} alt={PLANETS[selectedPlanet].title} />
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
            <PlanetsRepresentation
              planet={PLANETS[selectedPlanet].title}
              distance={PLANETS[selectedPlanet].distance}
              travelTime={PLANETS[selectedPlanet].travelTime}>
              {PLANETS[selectedPlanet].description}
            </PlanetsRepresentation>
          </div>
        </main>
      </div>
    </div>
  );
}
