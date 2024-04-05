import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Title } from './Title';

test('should render Title component', () => {
  const { getByText } = render(<Title variant="h1">Title</Title>);
  const title = getByText('Title');

  expect(title).toBeInTheDocument();
  expect(title).toHaveClass('titleH1');
  expect(title).toHaveTextContent('Title');
  expect(title.tagName).toBe('H1');
});
