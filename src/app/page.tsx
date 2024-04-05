import { Header } from '@/components/Header/Header';
import { WeatherDisplay } from '@/components/WeatherDisplay/WeatherDisplay';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { BgImage } from '@/components/BgImage/BgImage';

import { ENV } from '@/lib/env';

type HomeProps = {
  searchParams: {
    city?: string;
  };
};

export default async function Home({ searchParams }: HomeProps) {
  const getCity = searchParams?.city || ENV.DEFAULT_LOCATION;

  return (
    <div className="pageWrapper">
      <Header />

      <main className="main">
        <WeatherDisplay city={getCity} />

        <Sidebar city={getCity} />
      </main>

      <BgImage city={getCity} />
    </div>
  );
}
