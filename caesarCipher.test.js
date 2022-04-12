import caesarCipher from './caesarCipher';

test('Single lowercase character', () => {
  expect(caesarCipher('a', 1)).toBe('b');
});

test('Single uppercase character', () => {
  expect(caesarCipher('A', 1)).toBe('b');
});

test('Two characters', () => {
  expect(caesarCipher('ab', 1)).toBe('bc');
});

test('First character in alphabet', () => {
  expect(caesarCipher('a', 1)).toBe('b');
});

test('Last character in alphabet', () => {
  expect(caesarCipher('z', 1)).toBe('a');
});

test('Shift value of 13', () => {
  expect(caesarCipher('z', 13)).toBe('m');
});

test('Shift value of more than 26 (30)', () => {
  expect(caesarCipher('z', 30)).toBe('d');
  expect(caesarCipher('z', 30)).toBe(caesarCipher('z', 4));
});

test('Zero shift value', () => {
  expect(caesarCipher('a', 0)).toBe('a');
});

test('Negative shift value', () => {
  expect(caesarCipher('ba', -1)).toBe('az');
  expect(caesarCipher('abc', -2)).toBe('yza');
});

test('Space character', () => {
  expect(caesarCipher('z z', 2)).toBe('b b');
});

test('German characters', () => {
  expect(caesarCipher('Ö z', 2)).toBe('ö b');
});
