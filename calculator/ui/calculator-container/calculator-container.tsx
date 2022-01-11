import React, { ReactNode } from 'react';
import FlexRow from '@sunilsandhu/base-ui.flex-row';
import classNames from 'classnames';
import styles from './calculator-container.module.scss';
import { CalculatorScreen } from '@sunilsandhu/calculator.ui.calculator-screen';

export type CalculatorContainerProps = {
  /**
   * a text to be rendered in the component.
   */
  children: ReactNode | any;
};

export default function CalculatorContainer({
  children,
}: CalculatorContainerProps) {
  return (
    <div className={classNames(styles.container)}>
      <CalculatorScreen>1234567890</CalculatorScreen>
      <FlexRow>{children}</FlexRow>
    </div>
  );
}
