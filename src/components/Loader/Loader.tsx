import styles from './styles.module.css';

export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader} data-testid="loader" aria-description='Application is loading, please wait...'></div>
    </div>
  );
};
