import { prepareWeatherData } from './utils/prepareRenderWeatherData';

export type PreparedWeatherDataKeys = keyof ReturnType<typeof prepareWeatherData>;

export type WeatherStaticData = {
  name: PreparedWeatherDataKeys;
  description: string;
  iconPath: string;
};

export type WeatherRenderData = WeatherStaticData & {
  value: string;
};

export type PreparedForecastData = {
  date: string;
  temp: string;
  description: string;
};

export type ForecastRenderData = PreparedForecastData & {
  iconPath: string;
};
