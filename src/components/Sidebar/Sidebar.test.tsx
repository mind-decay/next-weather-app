import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Sidebar } from './Sidebar';

test('should render Sidebar component', () => {
  const { getByText } = render(<Sidebar city="London" />);

  const sidebar = getByText('Weather Details...');

  expect(sidebar).toBeInTheDocument();
  expect(sidebar).toHaveTextContent('Weather Details...');
});
