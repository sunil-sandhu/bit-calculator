import React from 'react';
import CalculatorButton from './calculator-button';

export const BasicCalculatorNumberButton = () => (
  <CalculatorButton text="1" type="number" />
);

export const BasicCalculatorFunctionButton = () => (
  <CalculatorButton text="%" type="function" />
);

export const BasicCalculatorMemoryButton = () => (
  <CalculatorButton text="M+" type="memory" />
);

export const BasicCalculatorEqualsButton = () => (
  <CalculatorButton text="=" type="equals" />
);
