import Image from 'next/image';

import { Title } from '../Typography/Title/Title';

import { getBgPhoto } from '@/lib/api/getBgPhoto';

import styles from './styles.module.css';

type BgImageProps = {
  city: string;
};

const Fallback = () => {
  return (
    <div className={styles.imageFallback}>
      <Title variant="h2" tag="h3">
        Please provide a valid location name
      </Title>
    </div>
  );
};

export const BgImage = async ({ city }: BgImageProps) => {
  const bgPhoto = await getBgPhoto(city);

  if (!bgPhoto) return <Fallback />;

  const bgPhotoUrl = `${bgPhoto.results[0]?.urls.raw}&auto=format&w=2048`;

  return (
    <div className={styles.imageWrapper}>
      <Image src={bgPhotoUrl} alt={city} fill style={{ objectFit: 'cover' }} />
    </div>
  );
};
