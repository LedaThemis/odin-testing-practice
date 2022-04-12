import reverseString from './reverseString';

test('Empty string', () => {
  expect(reverseString('')).toBe('');
});

test('Single character string', () => {
  expect(reverseString('A')).toBe('A');
});

test('String with even length (1)', () => {
  expect(reverseString('AB')).toBe('BA');
});

test('String with even length (2)', () => {
  expect(reverseString('ABCD')).toBe('DCBA');
});

test('String with even length (upper/lower case)', () => {
  expect(reverseString('AbCd')).toBe('dCbA');
});

test('String with odd length (1)', () => {
  expect(reverseString('ABC')).toBe('CBA');
});

test('String with odd length (2)', () => {
  expect(reverseString('ABCDE')).toBe('EDCBA');
});

test('String with odd length (upper/lower case)', () => {
  expect(reverseString('AbCdE')).toBe('EdCbA');
});

test('String with space in middle', () => {
  expect(reverseString('AB CD')).toBe('DC BA');
});

test('String with space not in middle', () => {
  expect(reverseString('A BCD')).toBe('DCB A');
});
