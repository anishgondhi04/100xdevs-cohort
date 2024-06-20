/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let temp1 = str1.split('');
  let temp = str2.split('');
  
  if(temp1.length != temp.length){
    return false;
  }

  let count  = temp.length;

  for(let i =0 ; i<temp.length;i++){
    for(let j=0; j< temp.length;j++){
      if(temp[i] === temp1[j]){
        count--;
        temp1[j] = "";
      }
    }
  }
  if(count == 0){
    return true;
  }

  return false;
}

module.exports = isAnagram;
