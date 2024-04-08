import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WeatherDisplay } from './WeatherDisplay';

test('should render WeatherDisplay component', () => {
  const { getByText } = render(<WeatherDisplay city="London" />);

  const weatherDisplay = getByText('London');

  expect(weatherDisplay).toBeInTheDocument();
  expect(weatherDisplay).toHaveTextContent('London');
  expect(weatherDisplay.tagName).toBe('H2');
});
