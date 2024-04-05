import Image from 'next/image';

import { Text } from '@/components/Typography/Text/Text';

import { prepareRenderWeatherData } from '../utils/prepareRenderWeatherData';
import { getCurrentWeather } from '@/lib/api/getCurrentWeather';

import styles from './styles.module.css';

type WeatherInfoListProps = {
  city: string;
};

export const WeatherInfoList = async ({ city }: WeatherInfoListProps) => {
  const getWeather = await getCurrentWeather(city);

  if (!getWeather) return null;

  const renderData = prepareRenderWeatherData(getWeather);

  return (
    <ul className={styles.weatherInfoList}>
      {renderData.map(({ name, description, iconPath, value }) => (
        <li className={styles.weatherInfoItem} key={name}>
          <Text variant="span">{description}</Text>

          <div className={styles.weatherInfoItemInfo}>
            <Text variant="span">{value}</Text>

            <div className={styles.weatherInfoItemIcon}>
              <Image width={22} height={22} src={iconPath} alt={description} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
