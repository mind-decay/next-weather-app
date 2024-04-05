import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BgImage } from './BgImage';

test('renders BgImage component', () => {
  const city = 'London';
  const { getByAltText } = render(<BgImage city={city} />);

  const bgImage = getByAltText(city);

  expect(bgImage).toBeInTheDocument();
});
