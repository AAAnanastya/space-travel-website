import Button from './Button';
import styles from './HomeHero.module.css';

export default function HomeHero({ subtitle, title, onButtonClick, children }) {
  return (
    <main className={styles['hero-container']}>
      <div className={styles['representation-container']}>
        <h5>{subtitle}</h5>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
      <Button style={styles['hero-button']} onClick={onButtonClick}>
        EXPLORE
      </Button>
    </main>
  );
}
