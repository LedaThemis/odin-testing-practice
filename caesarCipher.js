const shiftCharacter = (c, shiftValue) => {
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
