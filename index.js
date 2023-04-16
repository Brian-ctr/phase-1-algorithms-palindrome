// function to reverse a string
function reversedString(str) {
  // convert string to array
  const charArray = str.split("");
  // reverse the array
  const reversedCharArray = charArray.reverse();
  // convert the array back to string
  const reversedString = reversedCharArray.join("");
  // return the reversed string
  return reversedString;
}

// function to check if a string is a palindrome
function isPalindrome(str) {
  // reverse the input string
  const reversedStr = reversedString(str);
  // check if the original string and the reversed string are the same
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
}

// pseudocode for reversedString function
/*
  declare a function called reversedString that takes a string as an argument
  convert the string to an array of characters
  reverse the array
  convert the array back to a string
  return the reversed string
*/

// pseudocode for isPalindrome function
/*
  declare a function called isPalindrome that takes a string as an argument
  reverse the input string
  check if the original string and the reversed string are the same
  if they are the same, return true
  otherwise, return false
*/

// explanation of solution
/*
  The reversedString function takes a string and reverses it by converting it to an array of characters,
  reversing the array, and then converting it back to a string.

  The isPalindrome function takes a string and checks if it is a palindrome by calling the reversedString function
  to get the reversed version of the string, and then checking if the original string and the reversed string are the same.

  The pseudocode for both functions is written in a clear and concise way, with each step described in detail.
  The explanation of the solution provides a high-level overview of how the functions work and what they do.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;
