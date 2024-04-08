import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Search } from './Search';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation');
const replaceMock = jest.fn();

(useRouter as jest.Mock).mockReturnValue({
  replace: replaceMock,
});

test('should render Search component', () => {
  const { getByPlaceholderText } = render(<Search />);

  const search = getByPlaceholderText('Search Location...');

  expect(search).toBeInTheDocument();
  expect(search).toHaveAttribute('placeholder', 'Search Location...');
  expect(search.tagName).toBe('INPUT');
});
