import { ReactNode } from 'react';

import styles from './styles.module.css';

type TextProps = {
  variant?: 'p' | 'div' | 'span';
  children: ReactNode;
};

export const Text = ({ variant, children }: TextProps) => {
  switch (variant) {
    case 'p':
      return <p className={styles.text}>{children}</p>;
    case 'div':
      return <div className={styles.text}>{children}</div>;
    case 'span':
      return <span className={styles.text}>{children}</span>;
    default:
      return <p className={styles.text}>{children}</p>;
  }
};
