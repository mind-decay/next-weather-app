import { ResponseMain, ResponseWeather, ResponseWind } from './common';

type ResponseSys = {
  country: string;
  sunrise: number;
  sunset: number;
};

export type CurrentWeatherResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: ResponseWeather[];
  base: string;
  main: ResponseMain;
  visibility: number;
  wind: ResponseWind;
  rain: {
    '1h': number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: ResponseSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type CurrentWeatherKeys = keyof CurrentWeatherResponse;
