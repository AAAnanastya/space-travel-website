import { PLANETS } from '../data';
import PageContent from '../components/PageContent';
import styles from './Destination.module.css';

export default function DestinationPage() {
  return (
    <div className={styles['destination-page-container']}>
      <PageContent
        pageGrid={styles['content-page-container']}
        pageContentGrid={styles['content-container']}
        contentGrid={styles['planets-description-container']}
        pageNumber="01"
        pageTitle="Pick your destination"
        data={PLANETS}
        initialSelector={Object.keys(PLANETS)[0]}
        imgStyle={styles['planet-image']}
        navElStyle={styles['planet-list']}
        activeNavElStyle={styles['active-planet']}
        heroType="Planet"
      />
    </div>
  );
}
