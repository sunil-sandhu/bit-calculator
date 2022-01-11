import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicCalculatorContainer } from './calculator-container.composition';

it('should render with the correct text', () => {
  render(<BasicCalculatorContainer />);
  const rendered = screen.getByText('1');
  expect(rendered).toBeInTheDocument();
});
