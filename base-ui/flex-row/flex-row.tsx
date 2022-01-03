import React from 'react';
import classNames from 'classnames';
import styles from './flex-row.module.scss';

export type FlexRowProps = {
  /**
   * a text to be rendered in the component.
   */
  children: JSX.Element | HTMLElement;
};

export default function FlexRow({ children }: FlexRowProps) {
  return <div className={classNames(styles.flexRow)}>{children}</div>;
}
