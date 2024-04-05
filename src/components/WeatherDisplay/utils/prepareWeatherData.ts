import { formatDate } from '@/lib/utils/formatDate';

import { CurrentWeatherResponse } from '@/lib/types/api/weatherApi/currentWeather';

export const prepareWeatherData = (data: CurrentWeatherResponse) => {
  const { weather, main, name } = data;
  const description = weather?.[0].description;

  const temp = `${Math.floor(main.temp)}°C`;
  const date = formatDate(new Date());

  return { temp, date, name, description };
};
