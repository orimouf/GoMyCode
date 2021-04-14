/*---------------------------------- Exo 1 ---------------------------------

- We ask to read a sentence, which ends with a point, character by character and to determine:
  The length of the sentence (the number of characters).
  The number of words in the sentence (assuming that the words are separated by a single space).
  The number of vowels in the sentence.

--------------------------------------------------------------------------*/
console.log("---------------------- EXO 01 ----------------------");
const sentance = "whose cost per day is ins.";

function lengthSentence(sentance) {
  let array = sentance.split("");
  let numberOfChar = 0;

  for(let i=0; i < array.length; i++) {
    if(array[i] !== " " && array[i] !== "."){
      numberOfChar++;
    }
  }
  return numberOfChar;
}

function wordsInSentence(sentance) {
  let array = sentance.split(".");
  array = array[0].split(" ");
  let numberOfChar = array.length;

  return numberOfChar;
}

function vowelsInSentence(sentance) {
  let array = sentance.split("");
  let numberOfChar = 0;

  for(let i=0; i < array.length; i++) {
    if(array[i] === "a" || array[i] === "e" || array[i] === "i" || array[i] === "o" || array[i] === "u"){
      numberOfChar++;
    }
  }
  return numberOfChar;
}

console.log("the number of characters in the sentence : " + lengthSentence(sentance)); //without space and point
console.log("The number of words in the sentence : " + wordsInSentence(sentance));
console.log("The number of vowels in the sentence : " + vowelsInSentence(sentance));

/*---------------------------------- Exo 2 ---------------------------------

- A car rental organization offers two rental formulas:
   Rental by the kilometer:
    - for the first 100 kilometers: rate r1 per km,
    - for the kilometers from 101 to 1000: rate r2 per km,
    - beyond 1000 kilometers: rate r3 per km.
   Daily rate: Unlimited mileage at the price per day p_d.

  In both cases, it is necessary to add an insurance (whose cost per day is ins) and the value-added tax (VAT) .
  The quantities r1, r2, r3, p_d, ins as well as the rate of VAT are considered as constants.
  Take, for example: r1 = 0.7 r2 = 0.4 r3 = 0.2 p_d = 100 ins= 0.3 (expressed in dinars) and rate VAT = 0.18.
  Write a function which, given the total number of kilometers and the number of days of location,
   calculates the total costs of the two tariffs and indicates by a label the most 
   suitable solution advantageous for the client.

--------------------------------------------------------------------------*/
console.log("---------------------- EXO 02 ----------------------");
const r1 = 0.7, r2 = 0.4, r3 = 0.2, p_d = 100, ins= 0.3, VAT = 0.18;

function kilometerRate(km, day){
  let totalPriceKm = 0,vatPriceKm = 0,priceKm = 0;
  let totalPrice = 0,vatPrice = 0,price = 0;
  // Price per km
  if(km <= 100){
    priceKm = (km * r1) + (day * 0.3);
    vatPriceKm = priceKm * VAT;
    totalPriceKm = priceKm + vatPriceKm;
  } else if(km <= 100){
    priceKm = (km * r2) + (day * 0.3);
    vatPriceKm = priceKm * VAT;
    totalPriceKm = priceKm + vatPriceKm;
  } else {
    priceKm = (km * r3) + (day * 0.3);
    vatPriceKm = priceKm * VAT;
    totalPriceKm = priceKm + vatPriceKm;
  }
  // Price per day
  price = (p_d * day) + (day * 0.3);
  vatPrice = price * VAT;
  totalPrice = price + vatPrice;
  
  console.log("Price per km : " + totalPriceKm.toFixed(2) + " DA");
  console.log("Price per day : " + totalPrice.toFixed(2) + " DA");

  if(totalPriceKm < totalPrice){
    console.log("the most suitable solution advantageous for the client is : kilometer rate");
  } else {
    console.log("the most suitable solution advantageous for the client is : Daily rate");
  }

}
kilometerRate(99,1);
kilometerRate(9999,3);
/*---------------------------------- Exo 3 ---------------------------------

- Interval is defined as [start, end]- the start of an interval to the end of the interval. Given a list of Intervals. Your task is to check if any two intervals overlap.
  Example:
   Given Interval: [[1,5], [6,10], [12,15], [3,7]]
   Intervals are overlapping

   Given Interval: [[1,5], [6,10], [12,15]]
   No intervals overlap

--------------------------------------------------------------------------*/
console.log("---------------------- EXO 03 ----------------------");
const array_1 = [[1,5], [6,10], [12,15], [3,7]];
const array_2 = [[1,5], [6,10], [12,15]];

function checkOverlap(array) {
  var isOverlap = false;

  for (let i=0; i < array.length; i++) {
    for (let j=0; j < array.length; j++) {
      if((array[i][0] < array[j][0]) && (array[j][0] < array[i][1]) ) {
        isOverlap = true;
        break;
      }
    }
  }
  
  if(isOverlap === true) {
    console.log("Intervals are overlapping");
  } else {
    console.log("No intervals overlap");
  }
}
checkOverlap(array_1);
checkOverlap(array_2);
/*---------------------------------- Exo 4 ---------------------------------

- Given a string, write a function to find the longest substring with at most K characters.
  Example:
   Input: aabbaacdeeeeddded, K = 3
   Output: Longest substring with 3 most unique characters is: cdeeeeddded with length 11
   Input: abcddefabc, K = 4
   Output: Longest substring with 4 most unique characters is: abcdd with length 5
   Input: aaaabbbb, K = 4
   Output: Not enough unique character is present in the input string

--------------------------------------------------------------------------*/
console.log("---------------------- EXO 04 ----------------------");
const string1 = "aabbaacdeeeeddded", K1 = 3;
const string2 = "abcddefabc", K2 = 4;
const string3 = "aaaabbbb", K3 = 4;

function checkString(string, array) {
  var found = false;
  for(let i=0; i < array.length; i++){
    if(string === array[i]){
      found = true;
      break;
    }
  }
  return found;
}
function longestSubstring(str,num) {
  const array = str.split("");
  const newArray = array;
  const substring = [];
  let arrayStr_1 = [];
  var uniqueChar = 0, notEnough = false;
  
  for(let j=0; j < newArray.length; j++){
    arrayStr_1 = [];uniqueChar = 0;
    for(let i=0; i < array.length; i++){ 
      const found = checkString(array[i], arrayStr_1);
      
      if(found === true){
        arrayStr_1.push(array[i]);
      } else if((found === false) && uniqueChar < num){
        uniqueChar++;
        arrayStr_1.push(array[i]);
      } else {
        break;
      }
    }

    if(uniqueChar === num){
      newArray.shift();
      substring.push(arrayStr_1);
    } else {
      if(substring.length === 0){
        notEnough = true;
        console.log("Not enough unique character is present in the input string");
        break;
      }
    }
  }

  if(notEnough === false){
    var maxStr,max = 0;
    for(let o=0; o < substring.length;o++) {
      max = Math.max(max ,substring[o].length);
      if(max === substring[o].length) {
        maxStr = substring[o];
      }
    }
    
    console.log("Longest substring with "+num+" most unique characters is: "+maxStr.join('')+" with length "+max);
  }
}
longestSubstring(string1,K1);
longestSubstring(string2,K2);
longestSubstring(string3,K3);


/*---------------------------------- Exo 5 ---------------------------------

- Given an array of positive and negative integers, write a function to find the two elements such their sum is closest to zero.
   a = {1, 4, -5, 3, -2, 10, -6, 20}; Output: Sum close to zero in the given array is : 1
   a = {-5, 5}; Output: Sum close to zero in the given array is : 0
   a = {5, 8}; Output: Sum close to zero in the given array is : 13
   a = {-5,-5}; Sum close to zero in the given array is : -10

--------------------------------------------------------------------------*/
console.log("---------------------- EXO 05 ----------------------");
a1 = [1, 4, -5, 3, -2, 10, -6, 20];
a2 = [-5, 5];
a3 = [5, 8];
a4 = [-5,-5];
function sumClosestToZero(array) {
  let sum = Math.abs(array[0] + array[1]);
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (Math.abs(array[i] + array[j]) < sum) {
        sum = Math.abs(array[i] + array[j]);
      }
    }
  }
  return sum;
}
console.log("Sum close to zero in the given array is : " + sumClosestToZero(a1));
console.log("Sum close to zero in the given array is : " + sumClosestToZero(a2));
console.log("Sum close to zero in the given array is : " + sumClosestToZero(a3));
console.log("Sum close to zero in the given array is : " + sumClosestToZero(a4));




