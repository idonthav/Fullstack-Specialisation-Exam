
// To run this file
// type "node AlgorithmQuestions.js" on terminal in current file directory 

// Explanation asnwers are save in Word file same as Redux answers.

// TASK 1 
// Make a judgement about if the looped char of the 'word' is a letter/symbol/number？
function isAlphanum(c) {
  return (
    (c >= 'A' && c <= 'Z') ||
    (c >= 'a' && c <= 'z') ||
    (c >= '0' && c <= '9')
  );
}
// Two Pointer
const isPalindrome = (word) => {
  let l = 0;
  let r = word.length - 1;

  while (l < r) {
    while (l < r && !isAlphanum(word[l])) {
      l++;
    }

    while (r > l && !isAlphanum(word[r])) {
      r--;
    }

    if (word[l].toLowerCase() !== word[r].toLowerCase()) {
      return false;
    }

    l++;
    r--;
  }
  return true 
}

console.log(isPalindrome("abcdcba")) // TRUE 
console.log(isPalindrome("aba")) // TRUE 
console.log(isPalindrome("c")) // TRUE
console.log(isPalindrome("radar")) // TRUE
console.log(isPalindrome("level")) // TRUE 
console.log(isPalindrome("pencil")) // FALSE
console.log(isPalindrome("ark")) // FALSE
console.log(isPalindrome("aa")) // TRUE



// TASK 2

 const isMissing = (arrayInput) => {
    // const missing = 0
   // return `${missing} is missing`
   if (arrayInput.some(num => typeof num !== 'number')) {
      return "Invalid input, non-numeric value detected";
   } else if(arrayInput.some(num => num < 0)){
     return "Invalid input, negative number detected";
    }

  arrayInput.sort((a, b) => a - b);

  for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i] !== i + 1) {
            return `${i + 1} is missing`;
        }
  }
  return "Nothing is missing";
}

// Test case 4: Should throw error "Invalid input, negative value detected" ?
console.log(isMissing([1, 2, 3, 4, 5])) // nothing is missing 
console.log(isMissing([4,5,1,3, 5, 6])) // 2 is missing 
console.log(isMissing([ 1, 3, 7, 5, 6, 2 ])) // 4 is missing
console.log(isMissing([4,5,-1,3, 5])) // THROW ERROR Invalid input, non-numeric value detected 
console.log(isMissing([ 1, 3, 7, 5, 6, 2,'cfg' ])) // THROW ERROR Invalid input, non-numeric value detected
