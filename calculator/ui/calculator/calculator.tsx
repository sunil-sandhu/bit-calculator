import React from 'react';
import CalculatorButton, {
  calculatorButtons,
} from '@sunilsandhu/calculator.ui.calculator-button';
import styles from './calculator.module.scss';
import classNames from 'classnames';
import CalculatorContainer from '@sunilsandhu/calculator.ui.calculator-container';

export default function Calculator() {
  return (
    <div>
      <CalculatorContainer>
        {calculatorButtons.map((button) => (
          <CalculatorButton
            type={button.type}
            onClick={button.func}
            value={button.value}
          />
        ))}
      </CalculatorContainer>
    </div>
  );
}
