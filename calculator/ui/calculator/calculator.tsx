import React from 'react';
import CalculatorButton from '@sunilsandhu/calculator.ui.calculator-button';
import styles from './calculator.module.scss';
import classNames from 'classnames';

export default function Calculator() {
  return (
    <div>
      {/* row 1 */}
      <CalculatorButton
        text="M+"
        className={classNames(styles.calculatorButton, styles.memory)}
      />
      <CalculatorButton
        text="M-"
        className={classNames(styles.calculatorButton, styles.memory)}
      />
      <CalculatorButton
        text="MR"
        className={classNames(styles.calculatorButton, styles.memory)}
      />
      <CalculatorButton
        text="MC"
        className={classNames(styles.calculatorButton, styles.memory)}
      />
      <CalculatorButton
        text="+/-"
        className={classNames(styles.calculatorButton, styles.memory)}
      />
      {/* row 2 */}
      <CalculatorButton
        text="sqrt"
        className={classNames(styles.calculatorButton, styles.function)}
      />
      <CalculatorButton
        text="7"
        className={classNames(styles.calculatorButton, styles.number)}
      />
      <CalculatorButton
        text="8"
        className={classNames(styles.calculatorButton, styles.number)}
      />
      <CalculatorButton
        text="9"
        className={classNames(styles.calculatorButton, styles.number)}
      />
      <CalculatorButton
        text="/"
        className={classNames(styles.calculatorButton, styles.function)}
      />
      {/* row 3 */}
      <CalculatorButton
        text="%"
        className={classNames(styles.calculatorButton, styles.number)}
      />
      <CalculatorButton
        text="4"
        className={classNames(styles.calculatorButton, styles.number)}
      />
      <CalculatorButton
        text="5"
        className={classNames(styles.calculatorButton, styles.number)}
      />
      <CalculatorButton
        text="6"
        className={classNames(styles.calculatorButton, styles.number)}
      />
      <CalculatorButton
        text="x"
        className={classNames(styles.calculatorButton, styles.function)}
      />
      {/* row 4 */}
      <CalculatorButton
        text="1/x"
        className={classNames(styles.calculatorButton, styles.function)}
      />
      <CalculatorButton
        text="1"
        className={classNames(styles.calculatorButton, styles.number)}
      />
      <CalculatorButton
        text="2"
        className={classNames(styles.calculatorButton, styles.number)}
      />
      <CalculatorButton
        text="3"
        className={classNames(styles.calculatorButton, styles.number)}
      />
      <CalculatorButton
        text="-"
        className={classNames(styles.calculatorButton, styles.function)}
      />
      {/* row 5 */}
      <CalculatorButton
        text="CE"
        className={classNames(styles.calculatorButton, styles.function)}
      />
      <CalculatorButton
        text="0"
        className={classNames(styles.calculatorButton, styles.number)}
      />
      <CalculatorButton
        text="."
        className={classNames(styles.calculatorButton, styles.function)}
      />
      <CalculatorButton
        text="="
        className={classNames(styles.calculatorButton, styles.equals)}
      />
      <CalculatorButton
        text="+"
        className={classNames(styles.calculatorButton, styles.function)}
      />
    </div>
  );
}
