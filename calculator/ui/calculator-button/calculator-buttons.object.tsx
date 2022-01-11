import { CalculatorButtonTypes } from './calculator-button.types';

export const calculatorButtons = [
  // row 1
  { func: () => null, type: CalculatorButtonTypes.Memory, value: 'M+' },
  { func: () => null, type: CalculatorButtonTypes.Memory, value: 'M-' },
  { func: () => null, type: CalculatorButtonTypes.Memory, value: 'MR' },
  { func: () => null, type: CalculatorButtonTypes.Memory, value: 'MC' },
  { func: () => null, type: CalculatorButtonTypes.Memory, value: '+/-' },
  // row 2
  { func: () => null, type: CalculatorButtonTypes.Function, value: 'sqrt' },
  { func: () => null, type: CalculatorButtonTypes.Number, value: '7' },
  { func: () => null, type: CalculatorButtonTypes.Number, value: '8' },
  { func: () => null, type: CalculatorButtonTypes.Number, value: '9' },
  { func: () => null, type: CalculatorButtonTypes.Function, value: '/' },
  // row 3
  { func: () => null, type: CalculatorButtonTypes.Function, value: '%' },
  { func: () => null, type: CalculatorButtonTypes.Number, value: '4' },
  { func: () => null, type: CalculatorButtonTypes.Number, value: '5' },
  { func: () => null, type: CalculatorButtonTypes.Number, value: '6' },
  { func: () => null, type: CalculatorButtonTypes.Function, value: 'x' },
  // row 4
  { func: () => null, type: CalculatorButtonTypes.Function, value: '1/x' },
  { func: () => null, type: CalculatorButtonTypes.Number, value: '1' },
  { func: () => null, type: CalculatorButtonTypes.Number, value: '2' },
  { func: () => null, type: CalculatorButtonTypes.Number, value: '3' },
  { func: () => null, type: CalculatorButtonTypes.Function, value: '-' },
  // row 5
  { func: () => null, type: CalculatorButtonTypes.Function, value: 'CE' },
  { func: () => null, type: CalculatorButtonTypes.Number, value: '0' },
  { func: () => null, type: CalculatorButtonTypes.Function, value: '.' },
  { func: () => null, type: CalculatorButtonTypes.Equals, value: '=' },
  { func: () => null, type: CalculatorButtonTypes.Function, value: '+' },
];
