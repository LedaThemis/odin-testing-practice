import capitalize from './capitalize';

test('All lowercase string', () => {
  expect(capitalize('sample')).toBe('Sample');
});

test('All uppercase string', () => {
  expect(capitalize('SAMPLE')).toBe('SAMPLE');
});

test('Only first letter lowercase', () => {
  expect(capitalize('sAMPLE')).toBe('SAMPLE');
});

test('Only first letter uppercase', () => {
  expect(capitalize('Sample')).toBe('Sample');
});

test('Mix of upper/lower case', () => {
  expect(capitalize('SaMpLe')).toBe('SaMpLe');
});
