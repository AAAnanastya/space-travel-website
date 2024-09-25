import { useState } from 'react';
import { CREW } from '../data';
import { NavLink } from 'react-router-dom';

export default function CrewRepresentation() {
  const [selectedMember, setSelectedMember] = useState('commander');

  function handleSelector(selector) {
    setSelectedMember(selector);
  }

  return (
    <div className="content-page-content">
      <div className="crew-representation-hero">
        <h4>{CREW[selectedMember].position}</h4>
        <h3>{CREW[selectedMember].name}</h3>
        <p className="p-4">{CREW[selectedMember].story}</p>
        <nav className="crew-navigation-container">
          <ul className="crew-navigation">
            <li className={selectedMember === 'commander' ? 'active-crew-member' : 'inactive-crew-member'}>
              <NavLink onClick={() => handleSelector('commander')} className="crew-navigation-list">
                01
              </NavLink>
            </li>
            <li className={selectedMember === 'spacialist' ? 'active-crew-member' : 'inactive-crew-member'}>
              <NavLink onClick={() => handleSelector('spacialist')} className="crew-navigation-list">
                02
              </NavLink>
            </li>
            <li className={selectedMember === 'pilot' ? 'active-crew-member' : 'inactive-crew-member'}>
              <NavLink onClick={() => handleSelector('pilot')} className="crew-navigation-list">
                03
              </NavLink>
            </li>
            <li className={selectedMember === 'engineer' ? 'active-crew-member' : 'inactive-crew-member'}>
              <NavLink onClick={() => handleSelector('engineer')} className="crew-navigation-list">
                04
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="crew-hero-image">
        <img src={CREW[selectedMember].image} alt={CREW[selectedMember].title} />
        <div className="crew-hero-image-gradient"></div>
      </div>
    </div>
  );
}
