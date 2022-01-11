import React from 'react';
import { CalculatorButtonTypes } from './calculator-button.types';
import CalculatorButton from './calculator-button';

export const BasicCalculatorNumberButton = () => (
  <CalculatorButton
    value="1"
    onClick={() => null}
    type={CalculatorButtonTypes.Number}
  />
);

export const BasicCalculatorFunctionButton = () => (
  <CalculatorButton
    value="%"
    onClick={() => null}
    type={CalculatorButtonTypes.Function}
  />
);

export const BasicCalculatorMemoryButton = () => (
  <CalculatorButton
    value="M+"
    onClick={() => null}
    type={CalculatorButtonTypes.Memory}
  />
);

export const BasicCalculatorEqualsButton = () => (
  <CalculatorButton
    value="="
    onClick={() => null}
    type={CalculatorButtonTypes.Equals}
  />
);
