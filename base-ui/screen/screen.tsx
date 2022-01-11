import React, { ReactNode } from 'react';

export type ScreenProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Screen({ children }: ScreenProps) {
  return (
    <div>
      {children}
    </div>
  );
}
