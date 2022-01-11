import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicCalculator } from './calculator.composition';

it('should render', () => {
  render(<BasicCalculator />);
  const rendered = screen.getByText('1');
  expect(rendered).toBeInTheDocument();
});
