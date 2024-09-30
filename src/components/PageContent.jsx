import { useState } from 'react';
import ContentText from './ContentText';
import PageTitle from './PageTitle';
import ContentImg from './ContentImg';
import ContentNavigation from './ContentNavigation';

export default function PageContent({
  pageGrid,
  pageContentGrid,
  contentGrid,
  pageNumber,
  pageTitle,
  data,
  initialSelector,
  imgStyle,
  imgAdditionalStyling,
  navElStyle,
  activeNavElStyle,
  heroType,
}) {
  const [selected, setSelected] = useState(initialSelector);

  let selectedElement = data[selected];

  function handleSelector(selector) {
    setSelected(selector);
  }

  return (
    <div className={pageGrid}>
      <PageTitle pageNumber={pageNumber}>{pageTitle}</PageTitle>

      <section className={pageContentGrid}>
        <ContentImg imgStyle={imgStyle} element={selectedElement} imgAdditionalStyling={imgAdditionalStyling} />

        <div className={contentGrid}>
          <ContentNavigation
            data={data}
            activeElement={selected}
            onClick={handleSelector}
            activeNavStyle={activeNavElStyle}
            navStyle={navElStyle}
          />

          <ContentText heroType={heroType} element={selectedElement}>
            {selectedElement.description}
          </ContentText>
        </div>
      </section>
    </div>
  );
}
