import analyzeArray from './analyzeArray';

test('all positive numbers', () => {
  expect(analyzeArray([4, 2, 2, 4])).toEqual({
    average: 3,
    min: 2,
    max: 4,
    length: 4,
  });
});

test('all negative numbers', () => {
  expect(analyzeArray([-4, -2, -2, -4])).toEqual({
    average: -3,
    min: -4,
    max: -2,
    length: 4,
  });
});

test('positive/negative numbers', () => {
  expect(analyzeArray([4, -2, 2, -4])).toEqual({
    average: 0,
    min: -4,
    max: 4,
    length: 4,
  });
});

test('same number', () => {
  expect(analyzeArray([1, 1, 1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 4,
  });
});

test('variant numbers', () => {
  expect(analyzeArray([12, -3, 4, 5])).toEqual({
    average: 4.5,
    min: -3,
    max: 12,
    length: 4,
  });
});
