import React from 'react';
import { render } from '@testing-library/react';
import { BasicFlexRow } from './flex-row.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicFlexRow />);
  const rendered = getByText('hello from FlexRow');
  expect(rendered).toBeTruthy();
});
