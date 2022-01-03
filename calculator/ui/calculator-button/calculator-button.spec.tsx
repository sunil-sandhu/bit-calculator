import React from 'react';
import { render } from '@testing-library/react';
import { BasicCalculatorButton } from './calculator-button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCalculatorButton />);
  const rendered = getByText('hello from CalculatorButton');
  expect(rendered).toBeTruthy();
});
