import React from 'react';
import CalculatorButton, {
  calculatorButtons,
} from '@sunilsandhu/calculator.ui.calculator-button';
import CalculatorContainer from '@sunilsandhu/calculator.ui.calculator-container';

export default function Calculator() {
  return (
    <CalculatorContainer>
      {calculatorButtons.map((button) => (
        <CalculatorButton
          type={button.type}
          onClick={button.func}
          value={button.value}
        />
      ))}
    </CalculatorContainer>
  );
}
