/*---------------------------------- Exo 1 ---------------------------------

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes(), which must take in input array, containing the names of people who 
like an item. It must return the display text as shown in the examples:

likes([]) -- must be "no one likes this"
likes(["Peter"]) -- must be "Peter likes this"
likes(["Jacob", "Alex"]) -- must be "Jacob and Alex like this"
likes(["Max", "John", "Mark"]) -- must be "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"]) -- must be "Alex, Jacob and 2 others like this"

*/

function likes(array){
  let text = "";
  if (array.length === 0) {
    text = "no one likes this";
  } else if (array.length === 1){
    text = array[0] + " likes this";
  } else if (array.length === 2){
    text = array[0] + " and " + array[1] + " likes this";
  } else if (array.length === 3){
    text = array[0] + ", " + array[1] + " and " + array[2] + " likes this";
  } else {
    text = array[0] + ", " + array[1] + " and " + (array.length - 2) + " others like this";
  }
  return text;
}
console.log("--------------- EXO 1 --------------");

console.log(likes([])); // must be "no one likes this"
console.log(likes(["Peter"])); // must be "Peter likes this"
console.log(likes(["Jacob", "Alex"])); // must be "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])); // must be "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // must be "Alex, Jacob and 2 others like this"


/*
---------------------------------- Exo 2 -----------------------------------

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.Finish the solution so that it returns the sum of all the 
multiples of 3 or 5 below the number passed in.

*/

function multiples(){
  let sum3 = 0,sum5 = 0,sumAll = 0;
  //const arr = [];
  for(let i=0; i < 10; i++){
    if(i%3 === 0){
      sum3 = sum3 + i;
    }
    if(i%5 === 0){
      sum5 = sum5 + i;
    }
  }
  sumAll = sum3 + sum5;
  return sumAll;
}
console.log("--------------- EXO 2 --------------");

console.log(multiples());

/*
---------------------------------- Exo 3 -----------------------------------

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing 
in this way until a single-digit number is produced. The input will be a non-negative integer.

Exemples : 

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/


function digitalRoot(number) {
  let sum = number;
  let arr = [];
  let reducer = (a,b) => parseInt(a) + parseInt(b);

  while (sum > 9) {
    arr = sum.toString().split("");
    sum = arr.reduce(reducer);
  }

  console.log("the digital Root of "+number+" is : " + sum);
}
console.log("--------------- EXO 3 --------------");

digitalRoot(16); // 1 + 6 = 7
digitalRoot(942); // 9 + 4 + 2 = 15  -->  1 + 5 = 6
digitalRoot(132189); // 1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
digitalRoot(493193); // 4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 


/*
---------------------------------- Exo 4 -----------------------------------

You are given an array (which will have a length of at least 3, but could be very large) containing 
integers. The array is either entirely comprised of odd integers or entirely comprised of even integers 
except for a single integer N. Write a method that takes the array as an argument and returns this 
"outlier" N.

Examples :

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/
arr1 = [2, 4, 0, 100, 4, 11, 2602, 36];
arr2 = [160, 3, 1719, 19, 11, 13, -21];
arr3 = [165, 7, 2219, 57, 17, 177, -7689];
arr4 = [2, 4, 0, 100, 4, 11, 2601, 36];

function singeleInteger(array){
  let result,type = "",msg = "",oddArray = [],evenArray = [];

  for(let i=0; i < array.length; i++) {
    if(array[i]%2 === 0){
      evenArray.push(array[i]);
    } else {
      oddArray.push(array[i]);
    }  
  }

  if (evenArray.length === 1 || oddArray.length === 1){
    if(evenArray.length === 1){
      result = evenArray[0];
      type = "even";
    } else if(oddArray.length === 1){
      result = oddArray[0];
      type = "odd";
    }
    msg = "the only "+type+" number : "  + result;
  } else {
    msg = "there is no single even integers or odd integers";
  }
  return msg;
}

console.log("--------------- EXO 4 --------------");

console.log(singeleInteger(arr1)); // the only odd number : 11
console.log(singeleInteger(arr2)); // the only even number : 160
console.log(singeleInteger(arr3)); // there is no single even integers or odd integers
console.log(singeleInteger(arr4)); // there is no single even integers or odd integers
/*
---------------------------------- Exo 5 -----------------------------------

Write a function that takes in a string of one or more words, and returns the same string, but with 
all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist 
of only letters and spaces. Spaces will be included only when more than one word is present.

Examples :

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

spinWords( "This is a test") => returns "This is a test"

spinWords( "This is another test" )=> returns "This is rehtona test"

*/

function spinWords(string) {
  let arrayWords = string.split(" ");
  for (let i = 0; i < arrayWords.length; i++) {
    if (arrayWords[i].length >= 5) {
      let word = arrayWords[i].split("");
      let reverseWord = [];
      
      for (let j = word.length; j > 0; j--) {
        reverseWord.push(word[j-1]);
      }
      arrayWords[i] = reverseWord.join('');
    }
  }
  return arrayWords.join(" ");
}

console.log("--------------- EXO 5 --------------");
console.log("Hey fellow warriors  ==> " + spinWords( "Hey fellow warriors" )); // "Hey wollef sroirraw"
console.log("This is a test  ==> " + spinWords( "This is a test")); // "This is a test"
console.log("This is another test  ==> " + spinWords( "This is another test" )); // "This is rehtona test"


