import React from 'react';
import Button from '@teambit/base-ui.input.button';
import styles from './calculator-button.module.scss';
import classNames from 'classnames';
import {
  CalculatorButtonTypes,
  CalculatorValues,
} from './calculator-button.types';

export type CalculatorButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  type: CalculatorButtonTypes;
  // value: keyof CalculatorValues;
  value:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | 'M+'
    | 'M-'
    | 'MR'
    | 'MC'
    | '+/-'
    | 'sqrt'
    | '%'
    | '1/x'
    | 'CE'
    | '.'
    | '/'
    | 'x'
    | '-'
    | '+'
    | '='
    | string;
  onClick: () => void;
};

export default function CalculatorButton({
  value,
  type = CalculatorButtonTypes.Number,
  onClick,
}: CalculatorButtonProps) {
  return (
    <Button
      onClick={onClick}
      value={value}
      className={classNames(styles.calculatorButton, styles[type])}
    >
      {value}
    </Button>
  );
}
