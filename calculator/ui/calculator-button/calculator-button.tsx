import React from 'react';
import Button from '@teambit/base-ui.input.button';
import styles from './calculator-button.module.scss';
import classNames from 'classnames';

export type CalculatorButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
  type: 'number' | 'function' | 'equals' | 'memory';
};

export default function CalculatorButton({
  text,
  type = 'number',
}: CalculatorButtonProps) {
  return (
    <Button className={classNames(styles.calculatorButton, styles[type])}>
      {text}
    </Button>
  );
}
