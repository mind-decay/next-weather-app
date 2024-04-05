import { OpenWeatherListResponse, ResponseMain, ResponseWeather, ResponseWind } from './common';

export type ForecastData = {
  dt: number;
  main: ResponseMain & {
    temp_kf: number;
  };
  weather: ResponseWeather[];
  clouds: {
    all: number;
  };
  wind: ResponseWind;
  visibility: number;
  pop: number;
  rain: {
    '3h': number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
};

export type ForecastResponse = OpenWeatherListResponse<ForecastData>;
