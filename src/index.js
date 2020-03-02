const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const morseObj = () => {
  let morse = {'**********': ' '};
  return Object.keys(MORSE_TABLE)
    .reduce((obj, key) => {
      let decoded = key.replace(/\./g, '10').replace(/-/g, '11');
      obj[`0000000000${decoded}`.substr(decoded.length, decoded.length + 10)] = MORSE_TABLE[key];
      return obj;
    }, morse);
};

function decode(expr) {
  let morseTable = morseObj();
  return expr
    .match(/.{1,10}/g)
    .map(str => morseTable[str])
    .join('');
}

module.exports = {
  decode
}
