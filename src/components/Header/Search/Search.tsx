'use client';

import { ChangeEvent } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

import { useDebounce } from './hooks/useDebounce';

import styles from './styles.module.css';

export const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const defaultValue = searchParams?.get('city')?.toString();

  const handleSearch = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    const params = new URLSearchParams(searchParams?.toString());

    if (query) {
      params.set('city', query);
    } else {
      params.delete('city');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 700);

  return (
    <div className={styles.searchWrapper}>
      <input
        name="search"
        className={styles.searchInput}
        placeholder="Search Location..."
        type="text"
        onChange={handleSearch}
        defaultValue={defaultValue}
      />

      <div className={styles.searchIcon}>
        <Image priority src="/searchIcon.svg" alt="Search Icon" width={28} height={28} />
      </div>
    </div>
  );
};
