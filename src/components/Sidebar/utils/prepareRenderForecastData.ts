import { getWeatherIcon } from '@/lib/utils/getWeatherIcon';
import { formatDate } from '@/lib/utils/formatDate';

import { ForecastResponse } from '@/lib/types/api/weatherApi/forecast';

const prepareForecastData = (data: ForecastResponse) => {
  const forecastItems = data.list;

  const preparedData = forecastItems.map(({ dt, main, weather }) => {
    const date = formatDate(dt * 1000);
    const temp = `${Math.floor(main.temp)}°C`;
    const description = weather[0].description;

    return { date, temp, description };
  });

  return preparedData;
};

export const prepareRenderForecastData = (data: ForecastResponse) => {
  const preparedData = prepareForecastData(data);

  const forecastRenderData = preparedData.map((data) => {
    const icon = getWeatherIcon(data.description);

    return { ...data, iconPath: icon };
  });

  return forecastRenderData;
};
