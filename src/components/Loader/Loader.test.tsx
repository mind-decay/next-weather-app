import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Loader } from './Loader';

test('should render Loader component', () => {
  const { getByTestId } = render(<Loader />);

  const loader = getByTestId('loader');

  expect(loader).toBeInTheDocument();
  expect(loader).toHaveClass('loader');
  expect(loader.tagName).toBe('DIV');
  expect(loader).toHaveAttribute('data-testid', 'loader');
});
