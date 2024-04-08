import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Forecast } from './Forecast';

test('should render Forecast component', async () => {
  const { getByRole, queryAllByRole } = await render(<Forecast city="London" />);

  const list = getByRole('list');
  const listItem = queryAllByRole('listitem')[0];

  expect(list).toBeInTheDocument();
  expect(listItem).toBeInTheDocument();
});
