export function avg(numbers: number[]): number {
  let sum = numbers.reduce((a, b) => a + b, 0);
  let average = (sum / numbers.length) || 0;

  return average;
}