import React from 'react';
import FlexRow from '@sunilsandhu/calculator.flex-row';
import classNames from 'classnames';
import styles from './calculator-container.module.scss';

export type CalculatorContainerProps = {
  /**
   * a text to be rendered in the component.
   */
  children: any;
};

export default function CalculatorContainer({
  children,
}: CalculatorContainerProps) {
  return (
    <div className={classNames(styles.container)}>
      <FlexRow>{children}</FlexRow>
    </div>
  );
}
