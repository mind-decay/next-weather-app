import { WeatherStaticData } from '../types';
import { CurrentWeatherResponse } from '@/lib/types/api/weatherApi/currentWeather';

const staticData: WeatherStaticData[] = [
  {
    name: 'maxTemp',
    description: 'Max temperature',
    iconPath: '/maxTempIcon.svg',
  },
  {
    name: 'minTemp',
    description: 'Min temperature',
    iconPath: '/minTempIcon.svg',
  },
  {
    name: 'humidity',
    description: 'Humidity',
    iconPath: '/humidityIcon.svg',
  },
  {
    name: 'cloudsPercentage',
    description: 'Cloudy',
    iconPath: '/cloudyIcon.svg',
  },
  {
    name: 'windSpeed',
    description: 'Wind',
    iconPath: '/windIcon.svg',
  },
] as const;

export const prepareWeatherData = (data: CurrentWeatherResponse) => {
  const { main, clouds, wind } = data;

  const maxTemp = `${Math.floor(main.temp_max)}°C`;
  const minTemp = `${Math.floor(main.temp_min)}°C`;
  const humidity = `${main.humidity}%`;
  const cloudsPercentage = `${clouds.all}%`;
  const windSpeed = `${wind.speed}m/s`;

  return { maxTemp, minTemp, humidity, cloudsPercentage, windSpeed };
};

export const prepareRenderWeatherData = (data: CurrentWeatherResponse) => {
  const preparedData = prepareWeatherData(data);

  const preparedForRender = staticData.map(({ name, description, iconPath }) => {
    const currentValue = preparedData[name];

    return { name, description, iconPath, value: currentValue };
  });

  return preparedForRender;
};
