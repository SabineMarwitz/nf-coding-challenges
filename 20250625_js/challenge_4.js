// Find the missing letter
// Example:
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MyMap = new Map();

for (let i = 0; i < alphabet.length; i++) {
  MyMap.set(alphabet[i], i);
}

function findMissingLetter(inputString) {
  const input = inputString.toUpperCase();
  for (let i = 1; i < input.length; i++) {
    const curLetter = input[i];
    const lastLetter = input[i - 1];
    const curLetterIdx = MyMap.get(curLetter);
    const lastLetterIdx = MyMap.get(lastLetter);

    const check = curLetterIdx - lastLetterIdx;
    if (check > 1) {
      // get the missing letter
      const missingLetter = alphabet.charAt(lastLetterIdx + 1);
      return missingLetter;
    }
  }
  return "No missing letter found";
}

// Test
console.log(findMissingLetter("ABCDF"));
console.log(findMissingLetter("xz"));
