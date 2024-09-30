import { PLANETS } from '../data';
import PageContent from '../components/PageContent';
import './DestinationPageStyles.css';

export default function DestinationPage() {
  return (
    <div className="destination-page-container">
      <PageContent
        pageGrid="content-page-container"
        pageContentGrid="content-container"
        contentGrid="planets-description-container"
        pageNumber="01"
        pageTitle="Pick your destination"
        data={PLANETS}
        initialSelector={Object.keys(PLANETS)[0]}
        imgStyle="planet-image"
        navElStyle="planet-list"
        activeNavElStyle="active-planet"
        heroType="Planet"
      />
    </div>
  );
}
