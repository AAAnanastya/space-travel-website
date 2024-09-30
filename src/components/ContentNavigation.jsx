import { NavLink } from 'react-router-dom';

export default function ContentNavigation({ data, activeElement, onClick, activeNavStyle, navStyle }) {
  return (
    <nav>
      <ul>
        {Object.keys(data).map((element) => (
          <li key={element}>
            <NavLink onClick={() => onClick(element)} className={`${activeElement === element ? activeNavStyle : ''} ${navStyle}`}>
              {data[element].navTitle}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
