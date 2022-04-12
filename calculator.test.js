import calculator from './calculator';

test('Add: a number and zero', () => {
  expect(calculator.add(1, 0)).toBe(1);
  expect(calculator.add(0, 1)).toBe(1);
});

test('Add: two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(3, 2)).toBe(5);
});

test('Add: positive and negative numbers', () => {
  expect(calculator.add(2, -3)).toBe(-1);
  expect(calculator.add(-3, 2)).toBe(-1);
});

test('Subtract: a number and zero', () => {
  expect(calculator.subtract(0, 2)).toBe(-2);
  expect(calculator.subtract(2, 0)).toBe(2);
});

test('Subtract: two positive numbers', () => {
  expect(calculator.subtract(6, 3)).toBe(3);
  expect(calculator.subtract(3, 6)).toBe(-3);
});

test('Subtract: two negative numbers', () => {
  expect(calculator.subtract(-6, -3)).toBe(-3);
  expect(calculator.subtract(-3, -6)).toBe(3);
});

test('Subtract: positive and negative numbers', () => {
  expect(calculator.subtract(6, -3)).toBe(9);
  expect(calculator.subtract(-3, 6)).toBe(-9);
});
