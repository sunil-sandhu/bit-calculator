import React from 'react';
import Button from '@teambit/base-ui.input.button';
import classNames from 'classnames';

export type CalculatorButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  className?: string;
  text: string;
};

export default function CalculatorButton({
  text,
  className,
}: CalculatorButtonProps) {
  return <Button className={classNames(className)}>{text}</Button>;
}
