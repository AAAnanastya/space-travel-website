import { NavLink } from 'react-router-dom';
import Button from './Button';

export default function ContentNavigation({ data, activeElement, onClick, activeNavStyle, navStyle, buttonNav }) {
  return (
    <nav>
      <ul>
        {Object.keys(data).map((element) => (
          <li key={element}>
            {buttonNav ? (
              <Button onClick={() => onClick(element)} style={`${activeElement === element ? activeNavStyle : ''} ${navStyle}`}>
                {data[element].navTitle}
              </Button>
            ) : (
              <NavLink onClick={() => onClick(element)} className={`${activeElement === element ? activeNavStyle : ''} ${navStyle}`}>
                {data[element].navTitle}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
