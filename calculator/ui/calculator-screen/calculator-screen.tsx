import React, { ReactNode } from 'react';
import Screen from '@sunilsandhu/base-ui.screen';
import styles from './calculator-screen.module.scss';
import classNames from 'classnames';
export type CalculatorScreenProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function CalculatorScreen({ children }: CalculatorScreenProps) {
  return (
    <div>
      <Screen className={classNames(styles.calculatorScreen)}>
        {children}
      </Screen>
    </div>
  );
}
