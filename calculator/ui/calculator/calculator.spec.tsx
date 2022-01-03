import React from 'react';
import { render } from '@testing-library/react';
import { BasicCalculator } from './calculator.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCalculator />);
  const rendered = getByText('hello from Calculator');
  expect(rendered).toBeTruthy();
});
