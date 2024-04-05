import { apiClient } from '../utils/apiClient';

import { ForecastResponse } from '../types/api/weatherApi/forecast';

import { endpoints } from '../endpoints';

export const getForecast = async (city: string) => {
  if (!city) return null;

  try {
    const response = await apiClient.get<ForecastResponse>(endpoints.forecast(), {
      city,
    });

    return response;
  } catch (err) {
    return null;
  }
};
