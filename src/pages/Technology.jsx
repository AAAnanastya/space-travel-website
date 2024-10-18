import PageContent from '../components/PageContent';
import { TECHNOLOGIES } from '../data';
import styles from './Technology.module.css';

export default function TechnologyPage() {
  return (
    <div className={styles['technology-page-container']}>
      <PageContent
        pageGrid={styles['technology-page-content-container']}
        pageContentGrid={styles['technology-page-content']}
        contentGrid={styles['technology-hero']}
        pageNumber="03"
        pageTitle="Space Launch 101"
        data={TECHNOLOGIES}
        initialSelector={Object.keys(TECHNOLOGIES)[0]}
        imgStyle={styles['technology-img-container']}
        buttonNav
        navElStyle={styles['technology-navigation-button-inactive']}
        activeNavElStyle={styles['technology-navigation-button-active']}
        heroType="Technology"
      />
    </div>
  );
}
