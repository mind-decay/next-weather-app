import Image from 'next/image';

import { Text } from '@/components/Typography/Text/Text';

import { getForecast } from '@/lib/api/getForecast';
import { prepareRenderForecastData } from '../utils/prepareRenderForecastData';

import styles from './styles.module.css';

type ForecastProps = {
  city: string;
};

export const Forecast = async ({ city }: ForecastProps) => {
  const forecast = await getForecast(city);

  if (!forecast) return null;

  const renderData = prepareRenderForecastData(forecast);

  return (
    <ul className={styles.forecastList}>
      {renderData.map(({ date, description, temp, iconPath }) => {
        return (
          <li key={date} className={styles.forecastItem}>
            <div className={styles.forecastItemInfo}>
              <div className={styles.forecastItemIcon}>
                <Image width={48} height={48} src={iconPath} alt={description} />
              </div>

              <div className={styles.forecastItemData}>
                <Text variant="span">{date}</Text>

                <Text variant="span">{description}</Text>
              </div>
            </div>

            <Text variant="span">{temp}</Text>
          </li>
        );
      })}
    </ul>
  );
};
