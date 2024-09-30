import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import RepresentationText from './RepresentationText';

export default function PageContent({
  pageGrid,
  pageContentGrid,
  contentGrid,
  pageNumber,
  pageTitle,
  data,
  initialSelector,
  imgStyle,
  imgAddintionalStyling,
}) {
  const [selected, setSelected] = useState(initialSelector);

  function handleSelector(selector) {
    setSelected(selector);
  }

  return (
    <div className={pageGrid}>
      {/* Page Title */}
      <section className="page-title-container">
        <h5 className="page-number">{pageNumber}</h5>
        <h5 className="page-title">{pageTitle}</h5>
      </section>
      {/* Page Content */}
      <section className={pageContentGrid}>
        {/* Content Image */}
        <div className={imgStyle}>
          <img src={data[selected]?.image} alt={data[selected]?.title} />
          {imgAddintionalStyling ? <div className={imgAddintionalStyling}></div> : undefined}
        </div>
        <div className={contentGrid}>
          {/* ContentNavigation */}
          <nav>
            <ul>
              {Object.keys(data).map((element) => (
                <li key={element}>
                  <NavLink onClick={() => handleSelector(element)} className={`${selected === element ? 'active-planet' : ''} planet-list`}>
                    {data[element].navTitle}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          {/* Content Text */}
          <RepresentationText planet={data[selected]?.title} distance={data[selected]?.distance} travelTime={data[selected]?.travelTime}>
            {data[selected]?.description}
          </RepresentationText>
        </div>
      </section>
    </div>
  );
}
