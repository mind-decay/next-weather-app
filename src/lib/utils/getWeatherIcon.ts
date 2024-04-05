import { WeatherIcon } from '@/lib/types/common';

const weatherIcons: WeatherIcon[] = [
  {
    name: 'clear',
    icon: '/sunnyIcon.svg',
  },
  {
    name: 'scattered clouds',
    icon: '/scatteredCloudsIcon.svg',
  },
  {
    name: 'few clouds',
    icon: '/fewCloudsIcon.svg',
  },
  {
    name: 'broken clouds',
    icon: '/brokenCloudsIcon.svg',
  },
  {
    name: 'shower rain',
    icon: '/showerRainIcon.svg',
  },
  {
    name: 'rain',
    icon: '/rainIcon.svg',
  },
  {
    name: 'thunderstorm',
    icon: '/thunderstormIcon.svg',
  },
  {
    name: 'snow',
    icon: '/snowIcon.svg',
  },
  {
    name: 'mist',
    icon: '/fogIcon.svg',
  },
] as const;

const isNameContainsDescription = (name: string, description: string) => {
  const parsedName = name.toLowerCase().split(' ');
  const parseDescription = description.toLowerCase().split(' ');

  return parsedName.some((item) => parseDescription.includes(item));
};

export const getWeatherIcon = (description: string) => {
  const weather = weatherIcons.find((item) => isNameContainsDescription(item.name, description));

  return weather?.icon || '';
};
