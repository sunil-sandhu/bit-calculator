import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './screen.module.scss';

export type ScreenProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  className?: any;
};

export default function Screen({ children, className }: ScreenProps) {
  return <div className={classNames(styles.screen, className)}>{children}</div>;
}
