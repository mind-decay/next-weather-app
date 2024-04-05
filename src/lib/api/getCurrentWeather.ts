import { apiClient } from '../utils/apiClient';

import { CurrentWeatherResponse } from '../types/api/weatherApi/currentWeather';
import { MaybeUndef } from '../types/helpers';

import { endpoints } from '../endpoints';

export const getCurrentWeather = async (city: MaybeUndef<string>) => {
  if (!city) return null;

  try {
    const response = await apiClient.get<CurrentWeatherResponse>(
      endpoints.weather(),
      {
        city: city,
      },
      {
        cache: 'no-store',
      },
    );

    return response;
  } catch (err) {
    return null;
  }
};
