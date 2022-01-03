import React from 'react';
import CalculatorButton from '@sunilsandhu/calculator.ui.calculator-button';
import styles from './calculator.module.scss';
import classNames from 'classnames';
import CalculatorContainer from '@sunilsandhu/calculator.ui.calculator-container';

export default function Calculator() {
  return (
    <div>
      <CalculatorContainer>
        {/* row 1 */}
        <CalculatorButton text="M+" type="memory" />
        <CalculatorButton text="M-" type="memory" />
        <CalculatorButton text="MR" type="memory" />
        <CalculatorButton text="MC" type="memory" />
        <CalculatorButton text="+/-" type="memory" />
        {/* row 2 */}
        <CalculatorButton text="sqrt" type="function" />
        <CalculatorButton text="7" type="number" />
        <CalculatorButton text="8" type="number" />
        <CalculatorButton text="9" type="number" />
        <CalculatorButton text="/" type="function" />
        {/* row 3 */}
        <CalculatorButton text="%" type="function" />
        <CalculatorButton text="4" type="number" />
        <CalculatorButton text="5" type="number" />
        <CalculatorButton text="6" type="number" />
        <CalculatorButton text="x" type="function" />
        {/* row 4 */}
        <CalculatorButton text="1/x" type="function" />
        <CalculatorButton text="1" type="number" />
        <CalculatorButton text="2" type="number" />
        <CalculatorButton text="3" type="number" />
        <CalculatorButton text="-" type="function" />
        {/* row 5 */}
        <CalculatorButton text="CE" type="function" />
        <CalculatorButton text="0" type="number" />
        <CalculatorButton text="." type="function" />
        <CalculatorButton text="=" type="equals" />
        <CalculatorButton text="+" type="function" />
      </CalculatorContainer>
    </div>
  );
}
