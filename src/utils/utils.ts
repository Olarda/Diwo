export const numberWithDefault = (n: any, defaultValue: number): number =>
  (typeof n === 'number' && !isNaN(n)) ? n : defaultValue