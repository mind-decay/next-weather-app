import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { WeatherInfoList } from './WeatherInfoList';

test('should render WeatherInfoList component', () => {
  const { getByRole, queryAllByRole } = render(<WeatherInfoList city='London' />);

  const list = getByRole('list');
  const listItem = queryAllByRole('listitem')[0];

  expect(list).toBeInTheDocument();
  expect(listItem).toBeInTheDocument();

  expect(list).toHaveClass('weatherInfoList');
  expect(listItem).toHaveClass('weatherInfoItem');

  expect(list).toContainElement(listItem);
});
