/**
 * Telephone Number Validator
 * Return true if the passed string looks like a valid US phone number.
 * The user may fill out the form field any way they choose as long as it has the format of a valid US number.
 * The following are examples of valid formats for US numbers (refer to the tests below for other variants):
 * 
 * 555-555-5555
 * (555)555-5555
 * (555) 555-5555
 * 555 555 5555
 * 5555555555
 * 1 555 555 5555
 * 
 * For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
 * Your job is to validate or reject the US phone number based on any combination of the formats provided above.
 * The area code is required. If the country code is provided, you must confirm that the country code is 1.
 * Return true if the string is a valid US phone number; otherwise return false.
 */
function telephoneCheck(str) {
    const usPhoneNum = /^[1]?[ ]?\(?[0-9]{3}\)?[ -]?\(?[0-9]{3}\)?[ -]?\(?[0-9]{4}\)?$/
    let counter1 = 0, counter2 = 0, matchedArr;
  
    function checkParenthesis(arr) {
      arr.forEach(element => {
        if (element === '(') counter1 += 1
        else if (element === ')') counter2 += 1
      })
      return counter1 === counter2 ? true : false
    }
  
    if (str.match(usPhoneNum) === null) return false
  
    matchedArr = str.match(usPhoneNum)[0].split('')
    if (!checkParenthesis(matchedArr)) return false
    if (isNaN(parseInt(matchedArr[matchedArr.length - 1]))) return false
  
    return true
    
  }
  
  telephoneCheck("(6054756961)");
  telephoneCheck("-1 (757) 622-7382");
  telephoneCheck("123**&!!asdf#");
  telephoneCheck("1 (555) 555-5555");