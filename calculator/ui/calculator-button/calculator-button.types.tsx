export enum CalculatorButtonTypes {
  Number = 'number',
  Function = 'function',
  Equals = 'equals',
  Memory = 'memory',
}

export type CalculatorValues = {
  ['0']: true;
  ['1']: true;
  ['2']: true;
  ['3']: true;
  ['4']: true;
  ['5']: true;
  ['6']: true;
  ['7']: true;
  ['8']: true;
  ['9']: true;
  ['M+']: true;
  ['M-']: true;
  ['MR']: true;
  ['MC']: true;
  ['+/-']: true;
  ['sqrt']: true;
  ['%']: true;
  ['1/x']: true;
  ['CE']: true;
  ['.']: true;
  ['/']: true;
  ['x']: true;
  ['-']: true;
  ['+']: true;
  ['=']: true;
};
