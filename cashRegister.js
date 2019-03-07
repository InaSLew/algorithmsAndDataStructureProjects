/**
 * Cash Register
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
 * payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 * cid is a 2D array listing available currency.
 * The checkCashRegister() function should always return an object with a status key and a change key.
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
 * */
function checkCashRegister(price, cash, cid) {

  let dueChange = cash - price, result = {status: 'OPEN',  change: []}, totalFunds = 0, cidLength = cid.length, changeAvailable;
  const twoDecimal = x => Math.round(x * 100) / 100, faceValues = {
    'PENNY': '0.01',
    'NICKEL': '0.05',
    'DIME': '0.1',
    'QUARTER': '0.25',
    'ONE': '1.0',
    'FIVE': '5.0',
    'TEN': '10.0',
    'TWENTY': '20.0',
    'ONE HUNDRED': '100.0'
  }

  // Check if totalFunds are greater than or equal to dueChange
  cid.forEach(availableCurrency => totalFunds += availableCurrency[1])
  // Round the float to 2 decimal places
  totalFunds = twoDecimal(totalFunds)
  if (totalFunds < dueChange) return {status: 'INSUFFICIENT_FUNDS', change: []}
  else if (totalFunds === dueChange) return {status: 'CLOSED', change: cid}

  cid.reverse().forEach(availableCurrency => {
    if (parseFloat(faceValues[availableCurrency[0]]) < dueChange) {

      if (availableCurrency[1] < dueChange) {
        result['change'].push(availableCurrency)
        dueChange -= twoDecimal(availableCurrency[1])
        dueChange = twoDecimal(dueChange)
      } else {
         dueChange = twoDecimal(dueChange)
         let temp = 0
         while(temp < dueChange) {
           temp += parseFloat(faceValues[availableCurrency[0]])
         }
         if (temp > dueChange) temp = twoDecimal(temp - parseFloat(faceValues[availableCurrency[0]]))
         
         result['change'].push([availableCurrency[0], temp])
         dueChange -= twoDecimal(temp)
      }
    }
  })
 
 // Finally, check if changeAvailable can make dueChange
 changeAvailable = result['change'].reduce((acc, val) => acc += val[1], 0)
 if (changeAvailable < dueChange) return {status: 'INSUFFICIENT_FUNDS', change: []}
 
 return result;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])