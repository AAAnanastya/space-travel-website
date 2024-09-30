import PageContent from '../components/PageContent';
import { TECHNOLOGIES } from '../data';
import './TechnologyPageStyles.css';

export default function TechnologyPage() {
  return (
    <div className="technology-page-container">
      <PageContent
        pageGrid="technology-page-content-container"
        pageContentGrid="technology-page-content"
        contentGrid="technology-hero"
        pageNumber="03"
        pageTitle="Space Launch 101"
        data={TECHNOLOGIES}
        initialSelector={Object.keys(TECHNOLOGIES)[0]}
        imgStyle="technology-img-container"
        buttonNav
        navElStyle="technology-navigation-button-inactive"
        activeNavElStyle="technology-navigation-button-active"
        heroType="Technology"
      />
    </div>
  );
}
