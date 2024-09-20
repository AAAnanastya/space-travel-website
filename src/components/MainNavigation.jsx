import { NavLink } from 'react-router-dom';
import '../index.css';

const listStyle = ({ isActive }) => `${isActive ? 'active' : ''} list`;

export default function MainNavigation() {
  return (
    <header>
      <img src={`${process.env.PUBLIC_URL}/assets/shared/logo.svg`} alt="Logo" />
      <hr className="styled-line" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={listStyle}>
              <b>00</b>&ensp;HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination" className={listStyle}>
              <b>01</b>&ensp;DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" className={listStyle}>
              <b>02</b>&ensp;CREW
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" className={listStyle}>
              <b>03</b>&ensp;TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
