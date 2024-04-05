import { Search } from './Search/Search';

import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.headerLogo}>WT</div>

        <Search />
      </div>
    </header>
  );
};
