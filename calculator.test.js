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

test('Add: two floats', () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  expect(calculator.add(0.1, -0.2)).toBeCloseTo(-0.1);
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

test('Subtract: two floats', () => {
  expect(calculator.subtract(0.6, -0.3)).toBeCloseTo(0.9);
  expect(calculator.subtract(-0.3, 0.6)).toBeCloseTo(-0.9);
});

test('Divide: a number and zero', () => {
  expect(calculator.divide(0, 1)).toBe(0);
  expect(calculator.divide(1, 0)).toBe(Infinity);
});

test('Divide: two positive numbers', () => {
  expect(calculator.divide(2, 4)).toBeCloseTo(0.5);
  expect(calculator.divide(4, 2)).toBe(2);
});

test('Divide: two negative numbers', () => {
  expect(calculator.divide(-2, -4)).toBeCloseTo(0.5);
  expect(calculator.divide(-4, -2)).toBe(2);
});

test('Divide: two postive and negative numbers', () => {
  expect(calculator.divide(2, -4)).toBeCloseTo(-0.5);
  expect(calculator.divide(-4, 2)).toBe(-2);
});

test('Divide: two floats', () => {
  expect(calculator.divide(0.3, 0.1)).toBeCloseTo(3);
  expect(calculator.divide(0.1, 0.2)).toBeCloseTo(0.5);
});
