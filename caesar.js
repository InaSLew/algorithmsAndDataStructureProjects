/**
 * Caesar Cipher
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
 * In a shift cipher the meanings of the letters are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */
function rot13(str) {

    const matchChar = /[A-Z\s!?\.]/g, plaintextArr = str.match(matchChar), A = 'A'.charCodeAt(), key = 13
  
    function isUpperChar(element) {
      return element.length === 1 && element.match(/[A-Z]/) ? true : false
    }
  
    return plaintextArr.map(char => {
      if (isUpperChar(char)) {
        return String.fromCharCode(((char.charCodeAt() - A) + 13) % 26 + A)
      }
      return char
    }).join('')
    
  }
  
  // Change the inputs below to test
  console.log(rot13("LBH QVQ VG!"));