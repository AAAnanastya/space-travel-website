import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';
import { useEffect, useState } from 'react';

const listStyle = ({ isActive }) => `${isActive ? styles.active : ''} ${styles.list}`;

export default function MainNavigation() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [menuOpened, setMenuOpened] = useState(window.innerWidth < 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      setMenuOpened(window.innerWidth > 767);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function menuOpener() {
    setMenuOpened(!menuOpened);
    console.log('click');
  }

  return (
    <header>
      <img src={`${process.env.PUBLIC_URL}/assets/shared/logo.svg`} alt="Logo" />
      <hr className={styles.styledLine} />
      {isMobile && !menuOpened && (
        <div className={styles['burger-menu']} onClick={menuOpener}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      <nav className={menuOpened ? styles.open : ''}>
        {isMobile && (
          <div className={styles['burger-menu']} onClick={menuOpener}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        <ul>
          <li>
            <NavLink to="/" className={listStyle} onClick={menuOpener}>
              <b>00</b>&ensp;HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination" className={listStyle} onClick={menuOpener}>
              <b>01</b>&ensp;DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" className={listStyle} onClick={menuOpener}>
              <b>02</b>&ensp;CREW
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" className={listStyle} onClick={menuOpener}>
              <b>03</b>&ensp;TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
