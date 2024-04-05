import { ErrorCodeType } from '../errors';

export type ResponseMain = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

export type WeatherTypes = 'clear' | 'clouds' | 'rain' | 'thunderstorm' | 'snow' | 'drizzle' | 'mist' | 'fog';

export type ResponseWeather = {
  id: number;
  main: WeatherTypes;
  description: string;
  icon: string;
};

export type ResponseWind = {
  speed: number;
  deg: number;
  gust: number;
};

export type OpenWeatherListResponse<T> = {
  cod: ErrorCodeType;
  message: number;
  cnt: number;
  list: T[];
};
