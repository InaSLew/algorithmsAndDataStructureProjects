/**
 * Roman Numeral Converter
 * Convert the given number into a roman numeral.
 * All roman numerals answers should be provided in upper-case.
 */
function convertToRoman(num) {
    let romanSymbols = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }, romanNumeral = [], thousands = 0, hundreds = 0, tens = 0, ones, i;
   
    function symbolConverter(base, x, y, z) {
        if (base >= 5 && base < 9) {
            romanNumeral.push(romanSymbols[y])
            for (i = 0; i < base - 5; i += 1) {
                romanNumeral.push(romanSymbols[x])
            }
        } else if (base === 4) {
            romanNumeral.push(romanSymbols[x])
            romanNumeral.push(romanSymbols[y])
        } else if (base === 9) {
            romanNumeral.push(romanSymbols[x])
            romanNumeral.push(romanSymbols[z])
        } else {
            for (i = 0; i < base; i += 1) {
                romanNumeral.push(romanSymbols[x])
            }
        }
    }
   
    if (num >= 1000) {
        thousands = Math.floor(num/1000);
        for (i = 0; i < thousands; i += 1) romanNumeral.push(romanSymbols[1000])
        num = num % 1000;
    }
    if (1000 < num <= 100) {
        hundreds = Math.floor(num/100);
        num = num % 100;
        symbolConverter(hundreds, 100, 500, 1000)
    }
    if (100 < num <= 10) {
        tens = Math.floor(num / 10);
        num = num % 10;
        symbolConverter(tens, 10, 50, 100)
    }
    
    ones = num;
    symbolConverter(ones, 1, 5, 10)
   
    return romanNumeral.join('')
}