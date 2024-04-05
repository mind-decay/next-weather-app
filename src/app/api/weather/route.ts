import { NextRequest } from 'next/server';

import { prepareUrl } from '@/lib/utils/apiClient';

import { serverEndpoints } from '@/lib/endpoints';
import { ENV } from '@/lib/env';
import { API_URL, WEATHER_API } from '@/urls';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city');

  const url = prepareUrl(
    serverEndpoints.weather(),
    {
      q: city || '',
      units: 'metric',
      appid: ENV.WEATHER_KEY,
    },
    WEATHER_API,
  );

  const response = await fetch(url, {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return new Response(response.body, {
    status: response.status,
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
