import { useState } from 'react';
import { TECHNOLOGIES } from '../data';
import Button from './Button';

export default function TechnologyRepresentation() {
  const [selectedTechnology, setSelectedTechology] = useState('technologyA');

  function handleSelector(selector) {
    setSelectedTechology(selector);
  }

  return (
    <div className="technology-page-content">
      <div className="technology-hero">
        <nav className="technology-hero-navigation">
          <ul>
            <li>
              <Button
                style={
                  selectedTechnology === 'technologyA' ? 'technology-navigation-button-active' : 'technology-navigation-button-inactive'
                }
                onClick={() => handleSelector('technologyA')}>
                1
              </Button>
            </li>
            <li>
              <Button
                style={
                  selectedTechnology === 'technologyB' ? 'technology-navigation-button-active' : 'technology-navigation-button-inactive'
                }
                onClick={() => handleSelector('technologyB')}>
                2
              </Button>
            </li>
            <li>
              <Button
                style={
                  selectedTechnology === 'technologyC' ? 'technology-navigation-button-active' : 'technology-navigation-button-inactive'
                }
                onClick={() => handleSelector('technologyC')}>
                3
              </Button>
            </li>
          </ul>
        </nav>
        <div className="technology-hero-story">
          <h4>The terminology...</h4>
          <h3>{TECHNOLOGIES[selectedTechnology].title}</h3>
          <p className="p-4">{TECHNOLOGIES[selectedTechnology].description}</p>
        </div>
      </div>
      <div className="technology-img-container">
        <img src={TECHNOLOGIES[selectedTechnology].image} alt={TECHNOLOGIES[selectedTechnology].title} />
      </div>
    </div>
  );
}
