const shiftCharacter = (c, shiftValue) => {
  const charCode = c.charCodeAt(0);

  if (charCode < 97 || charCode > 122) return c;

  if (shiftValue < 0) {
    if (charCode + shiftValue < 97) {
      return String.fromCharCode(charCode + shiftValue + 26);
    } else {
      return String.fromCharCode(charCode + shiftValue);
    }
  }
  return String.fromCharCode(((charCode - 97 + shiftValue) % 26) + 97);
};

const caesarCipher = (string, shiftValue) => {
  return string
    .toLowerCase()
    .split('')
    .map((c) => shiftCharacter(c, shiftValue))
    .join('');
};

export default caesarCipher;
