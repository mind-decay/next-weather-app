import { ReactNode } from 'react';

import { getDiffTag } from './utils';

import { TitleTags, TitleVariants } from './types';

import styles from './styles.module.css';

type TitleProps = {
  variant?: TitleVariants;
  tag?: TitleTags;
  children: ReactNode;
};

export const Title = ({ variant, tag, children }: TitleProps) => {
  switch (variant) {
    case 'h1':
      return <h1 className={getDiffTag(styles, variant, tag)}>{children}</h1>;
    case 'h2':
      return <h2 className={getDiffTag(styles, variant, tag)}>{children}</h2>;
    case 'h3':
      return <h3 className={getDiffTag(styles, variant, tag)}>{children}</h3>;
    case 'h4':
      return <h4 className={getDiffTag(styles, variant, tag)}>{children}</h4>;
    default:
      return <h2 className={styles.titleH2}>{children}</h2>;
  }
};
