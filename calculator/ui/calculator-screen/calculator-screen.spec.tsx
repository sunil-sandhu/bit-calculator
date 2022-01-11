import React from 'react';
import { render } from '@testing-library/react';
import { BasicCalculatorScreen } from './calculator-screen.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCalculatorScreen />);
  const rendered = getByText('hello from CalculatorScreen');
  expect(rendered).toBeTruthy();
});
