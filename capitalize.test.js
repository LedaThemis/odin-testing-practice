import capitalize from './capitalize';

test('All lowercase string', () => {
  capitalize('sample').toBe('Sample');
});

test('All uppercase string', () => {
  capitalize('SAMPLE').toBe('SAMPLE');
});

test('Only first letter lowercase', () => {
  capitalize('sAMPLE').toBe('SAMPLE');
});

test('Only first letter uppercase', () => {
  capitalize('Sample').toBe('Sample');
});

test('Mix of upper/lower case', () => {
  capitalize('SaMpLe').toBe('SaMpLe');
});
