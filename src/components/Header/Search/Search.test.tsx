import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Search } from './Search';

test('should render Search component', () => {
  const { getByPlaceholderText } = render(<Search />);

  const search = getByPlaceholderText('Search Location...');

  expect(search).toBeInTheDocument();
  expect(search).toHaveAttribute('placeholder', 'Search Location...');
  expect(search.tagName).toBe('INPUT');
});
