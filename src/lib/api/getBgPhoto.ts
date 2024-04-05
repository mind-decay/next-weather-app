import { apiClient } from '../utils/apiClient';

import { Photos } from '../types/api/unsplashApi/photos';

import { endpoints } from '../endpoints';

export const getBgPhoto = async (query: string) => {
  if (!query) return null;

  try {
    const response = await apiClient.get<Photos>(endpoints.photos(), {
      query,
    });

    if (response.results.length > 0) {
      return response;
    }
  } catch (err) {
    return null;
  }
};
