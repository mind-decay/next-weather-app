import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Forecast } from './Forecast';

test('should render Forecast component', () => {
  const { getByRole, queryAllByRole } = render(<Forecast />);

  const list = getByRole('list');
  const listItem = queryAllByRole('listitem')[0];

  expect(list).toBeInTheDocument();
  expect(listItem).toBeInTheDocument();

  expect(list).toHaveClass('forecastList');
  expect(listItem).toHaveClass('forecastItem');

  expect(list).toContainElement(listItem);
});
