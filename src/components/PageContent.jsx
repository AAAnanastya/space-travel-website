import { NavLink } from 'react-router-dom';

export default function PageContent({
  pageGrid,
  pageContentGrid,
  contentGrid,
  pageNumber,
  pageTitle,
  data,
  selected,
  imgAddintionalStyling,
}) {
  return (
    <div className={pageGrid}>
      <div className={pageContentGrid}>
        {/* Page Title */}
        <section className="page-title-container">
          <h5 className="page-number">{pageNumber}</h5>
          <h5 className="page-title">{pageTitle}</h5>
        </section>
        {/* Page Content */}
        <section className={contentGrid}>
          {/* Content Image */}
          <div className="img-container">
            <img src={data[selected].image} alt={data[selected].title} />
            {imgAddintionalStyling ? <div className={imgAddintionalStyling}></div> : undefined}
          </div>
          {/* ContentNavigation */}
          <nav>
            <ul>
              {Object.keys(data).map((element) => (
                <li>
                  <NavLink></NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <ContentText />
        </section>
      </div>
    </div>
  );
}
