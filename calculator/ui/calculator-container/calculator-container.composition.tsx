import CalculatorButton, {
  calculatorButtons,
} from '@sunilsandhu/calculator.ui.calculator-button';
import React from 'react';
import CalculatorContainer from './calculator-container';

export const BasicCalculatorContainer = () => (
  <CalculatorContainer>
    {calculatorButtons.map((button) => (
      <CalculatorButton
        key={button.value}
        type={button.type}
        onClick={button.func}
        value={button.value}
      />
    ))}
  </CalculatorContainer>
);

export const SimpleCalculatorContainer = () => (
  <CalculatorContainer>
    <CalculatorButton
      type={calculatorButtons[0].type}
      onClick={calculatorButtons[0].func}
      value={calculatorButtons[0].value}
    />
    <CalculatorButton
      type={calculatorButtons[5].type}
      onClick={calculatorButtons[5].func}
      value={calculatorButtons[5].value}
    />
    <CalculatorButton
      type={calculatorButtons[10].type}
      onClick={calculatorButtons[10].func}
      value={calculatorButtons[10].value}
    />
  </CalculatorContainer>
);

export const CalculatorContainerWithTextInstead = () => (
  <CalculatorContainer>Hi, I'm an empty calculator</CalculatorContainer>
);
