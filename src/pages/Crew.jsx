import PageContent from '../components/PageContent';
import { CREW } from '../data';
import styles from './Crew.module.css';

export default function CrewPage() {
  return (
    <div className={styles['crew-page-container']}>
      <PageContent
        pageGrid={styles['content-page-container']}
        pageContentGrid={styles['content-container']}
        contentGrid={styles['crew-representation-hero']}
        pageNumber="02"
        pageTitle="Meet your crew"
        data={CREW}
        initialSelector={Object.keys(CREW)[0]}
        imgStyle={styles['crew-hero-image']}
        imgAdditionalStyling={styles['crew-hero-image-gradient']}
        navElStyle={styles['crew-navigation-list']}
        activeNavElStyle={styles['active-crew-member']}
        heroType="Crew"
      />
    </div>
  );
}
