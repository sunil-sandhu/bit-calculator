import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  BasicCalculatorEqualsButton,
  BasicCalculatorFunctionButton,
  BasicCalculatorMemoryButton,
  BasicCalculatorNumberButton,
} from './calculator-button.composition';

it('should render with the correct value', () => {
  render(<BasicCalculatorNumberButton />);
  const rendered = screen.getByRole('button', { name: '1' });
  expect(rendered).toBeInTheDocument();
});

it('should render with the correct value', () => {
  render(<BasicCalculatorFunctionButton />);
  const rendered = screen.getByRole('button', { name: '%' });
  expect(rendered).toBeInTheDocument();
});

it('should render with the correct value', () => {
  render(<BasicCalculatorMemoryButton />);
  const rendered = screen.getByRole('button', { name: 'M+' });
  expect(rendered).toBeInTheDocument();
});

it('should render with the correct value', () => {
  render(<BasicCalculatorEqualsButton />);
  const rendered = screen.getByRole('button', { name: '=' });
  expect(rendered).toBeInTheDocument();
});
