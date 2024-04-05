import Image from 'next/image';

import { Title } from '../Typography/Title/Title';

import { getCurrentWeather } from '@/lib/api/getCurrentWeather';
import { getWeatherIcon } from '@/lib/utils/getWeatherIcon';
import { prepareWeatherData } from './utils/prepareWeatherData';
import { formatDate } from '@/lib/utils/formatDate';

import { MaybeUndef } from '@/lib/types/helpers';

import styles from './styles.module.css';

type WeatherDisplayProps = {
  city: MaybeUndef<string>;
};

const Fallback = () => {
  const date = formatDate(new Date());

  return (
    <div className={styles.weather}>
      <Title variant="h1">NA</Title>

      <div className={styles.weatherInfo}>
        <Title variant="h2">Unknown</Title>

        <p className={styles.weatherLocation}>{date}</p>
      </div>

      <div className={styles.weatherIcon}>
        <Image width={70} height={70} src="/fewCloudsIcon.svg" alt="Please provide valid location name" />
      </div>
    </div>
  );
};

export const WeatherDisplay = async ({ city }: WeatherDisplayProps) => {
  const getWeather = await getCurrentWeather(city);

  if (!getWeather) return <Fallback />;

  const { temp, name, description, date } = prepareWeatherData(getWeather);

  const weatherIcon = getWeatherIcon(description);

  return (
    <div className={styles.weather}>
      <Title variant="h1">{temp}</Title>

      <div className={styles.weatherInfo}>
        <Title variant="h2">{name}</Title>

        <p className={styles.weatherLocation}>{date}</p>
      </div>

      <div className={styles.weatherIcon}>
        <Image width={70} height={70} src={weatherIcon} alt={description} />
      </div>
    </div>
  );
};
