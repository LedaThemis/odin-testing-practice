import calculator from './calculator';

test('Add: a number and zero', () => {
  expect(calculator.add(1, 0)).toBe(1);
});

test('Add: two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('Add: positive and negative numbers', () => {
  expect(calculator.add(2, -3)).toBe(-1);
});
