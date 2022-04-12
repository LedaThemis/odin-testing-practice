const shiftCharacter = (c, shiftValue) => {
  if (c.charCodeAt(0) < 97 || c.charCodeAt(0) > 122) return c;

  return String.fromCharCode(((c.charCodeAt(0) - 97 + shiftValue) % 26) + 97);
};

const caesarCipher = (string, shiftValue) => {
  return string
    .toLowerCase()
    .split('')
    .map((c) => shiftCharacter(c, shiftValue))
    .join('');
};

export default caesarCipher;
