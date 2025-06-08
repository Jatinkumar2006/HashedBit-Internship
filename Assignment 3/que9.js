/*
Write a function to count the number of words in a paragraph.

*/

function countWords(paragraph) {
  return paragraph.trim().split(' ').length;
}

// Example:
const para = "This is a sample paragraph with multiple words.";
console.log(countWords(para)); // Output: 8
