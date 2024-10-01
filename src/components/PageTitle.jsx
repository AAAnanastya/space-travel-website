import styles from './PageTitle.module.css';

export default function PageTitle({ pageNumber, children }) {
  return (
    <div className={styles.pageTitleContainer}>
      <h5 className={styles.pageNumber}>{pageNumber}</h5>
      <h5 className={styles.pageTitle}>{children}</h5>
    </div>
  );
}
