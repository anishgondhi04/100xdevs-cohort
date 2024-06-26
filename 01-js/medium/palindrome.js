/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {


  const punctuations = ".,:!? "
  for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
    let flag = 0;
    if (punctuations.indexOf(str[i]) != -1) {
      j++;
      flag++;
    }
    if (punctuations.indexOf(str[j]) != -1) {
      i--;
      flag++;
    }
    if (flag != 0) {
      continue;
    }
    if (str[i].toLowerCase() != str[j].toLowerCase()) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
