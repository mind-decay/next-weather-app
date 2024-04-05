import { MaybeUndef } from '@/lib/types/helpers';
import { StylesType, TitleTags, TitleVariants } from './types';

export const getDiffTag = (styles: StylesType, variant: TitleVariants, tag: MaybeUndef<TitleTags>) => {
  if (tag) {
    const preparedTag = tag.toUpperCase();

    return styles[`title${preparedTag}`];
  }

  const preparedVariant = variant.toUpperCase();

  return styles[`title${preparedVariant}`];
};
