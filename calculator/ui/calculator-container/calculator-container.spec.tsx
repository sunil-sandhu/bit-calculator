import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicCalculatorContainer } from './calculator-container.composition';

describe('<BasicCalculatorContainer>', () => {
  it('should render with the correct text', () => {
    render(<BasicCalculatorContainer />);
    const rendered = screen.getByRole('button', { name: '1' });
    expect(rendered).toBeInTheDocument();
  });
  it('should render the correct number of buttons', () => {
    render(<BasicCalculatorContainer />);
    const rendered = screen.queryAllByRole('button');
    expect(rendered.length).toBe(25);
  });
});
