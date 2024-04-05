import { Nullable } from '@/types/helpers';
import { urlParams } from '@/types/api';

const removeDashes = (str: string) => str.replace(/-/g, '+');

export const stringifyUrlParams = (obj: Nullable<urlParams>) => {
  if (!obj || Object.keys(obj).length === 0) {
    return '';
  }

  const keys = Object.keys(obj);

  const strArray = keys.map((key) => removeDashes(`${key}=${obj[key]}`));
  const result = strArray.join('&');

  return result;
};
