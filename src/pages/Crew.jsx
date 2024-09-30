import PageContent from '../components/PageContent';
import { CREW } from '../data';
import './CrewPageStyles.css';

export default function CrewPage() {
  return (
    <div className="crew-page-container">
      <PageContent
        pageGrid="content-page-container"
        pageContentGrid="content-container"
        contentGrid="crew-representation-hero"
        pageNumber="02"
        pageTitle="Meet your crew"
        data={CREW}
        initialSelector={Object.keys(CREW)[0]}
        imgStyle="crew-hero-image"
        imgAdditionalStyling="crew-hero-image-gradient"
        navElStyle="crew-navigation-list"
        activeNavElStyle="active-crew-member"
        heroType="Crew"
      />
    </div>
  );
}
