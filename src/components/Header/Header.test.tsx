import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Header } from './Header';

test('renders Header component', () => {
  const { getByText, getByPlaceholderText } = render(<Header />);

  const logo = getByText('WT');
  const search = getByPlaceholderText('Search Location...');

  expect(logo).toBeInTheDocument();
  expect(logo).toHaveTextContent('WT');

  expect(search).toBeInTheDocument();
  expect(search).toHaveAttribute('placeholder', 'Search Location...');
});
