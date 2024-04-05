import { Title } from '../Typography/Title/Title';
import { WeatherInfoList } from './WeatherInfoList/WeatherInfoList';
import { Forecast } from './Forecast/Forecast';

import { getCurrentWeather } from '@/lib/api/getCurrentWeather';

import styles from './styles.module.css';

type SidebarProps = {
  city: string;
};

const Fallback = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContainer}>
        <Title variant="h2" tag="h3">
          Please provide a valid location name...
        </Title>
      </div>
    </aside>
  );
};

export const Sidebar = async ({ city }: SidebarProps) => {
  const getWeather = await getCurrentWeather(city);

  if (!getWeather) return <Fallback />;

  const { weather } = getWeather;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContainer}>
        <Title variant="h3" tag="h4">
          Weather Details...
        </Title>

        <div className={styles.weatherInfo}>
          <Title variant="h4" tag="h3">
            {weather[0].description.toUpperCase()}
          </Title>

          <WeatherInfoList city={city} />
        </div>
        <div className={styles.forecast}>
          <Title variant="h4" tag="h4">
            Weather Forecast...
          </Title>

          <Forecast city={city} />
        </div>
      </div>
    </aside>
  );
};
