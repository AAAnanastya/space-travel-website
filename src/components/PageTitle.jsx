import styles from './PageTitle.module.css';

export default function PageTitle({ pageNumber, children }) {
  return (
    <div className={styles.pageTitleContainer}>
      <h1 className={styles.pageNumber}>{pageNumber}</h1>
      <h1 className={styles.pageName}>{children}</h1>
    </div>
  );
}
