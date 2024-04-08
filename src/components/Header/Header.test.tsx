import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { useRouter } from 'next/navigation';

import { Header } from './Header';

jest.mock('next/navigation');
const replaceMock = jest.fn();

(useRouter as jest.Mock).mockReturnValue({
  replace: replaceMock,
});

test('renders Header component', () => {
  const { getByText, getByPlaceholderText } = render(<Header />);

  const logo = getByText('WT');
  const search = getByPlaceholderText('Search Location...');

  expect(logo).toBeInTheDocument();
  expect(logo).toHaveTextContent('WT');

  expect(search).toBeInTheDocument();
  expect(search).toHaveAttribute('placeholder', 'Search Location...');
});
