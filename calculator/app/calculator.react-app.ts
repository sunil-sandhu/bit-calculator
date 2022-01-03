import { ReactAppOptions } from '@teambit/react';

export const CalculatorApp: ReactAppOptions = {
  name: 'calculator',
  entry: [require.resolve('./calculator.app-root')],
  prerenderRoutes: ['/'],
};

export default CalculatorApp;
