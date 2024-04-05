import { NextRequest } from 'next/server';

import { prepareUrl } from '@/lib/utils/apiClient';

import { ENV } from '@/lib/env';
import { serverEndpoints } from '@/lib/endpoints';
import { API_URL, UNSPLASH_API } from '@/urls';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');

  const url = prepareUrl(
    serverEndpoints.searchPhotos(),
    {
      query: query || '',
    },
    UNSPLASH_API,
  );

  const response = await fetch(url, {
    headers: {
      'Cache-Control': 'max-age=900, stale-while-revalidate=60',
      Authorization: `Client-ID ${ENV.UNSPLASH_API_KEY}`,
      'Accept-Version': 'v1',
    },
    credentials: 'same-origin',
  });

  return new Response(response.body, {
    status: response.status,
    headers: {
      'Access-Control-Allow-Origin': API_URL,
      Vary: 'Origin',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
