import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Text } from './Text';

test('should render Text component', () => {
  const { getByText } = render(<Text variant="p">Text</Text>);
  const text = getByText('Text');

  expect(text).toBeInTheDocument();
  expect(text).toHaveClass('text');
  expect(text).toHaveTextContent('Text');
  expect(text.tagName).toBe('P');
});
