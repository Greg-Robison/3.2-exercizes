/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the
//largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(num1, num2){
    "use strict";

    if(num1 > num2){
      return(num1);
    } else{
      return(num2);
    }
}
console.assert(max(1, 2) == 2)
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and
//returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    "use strict";
    //...
    if(num1 > num2 && num1 > num3){
      return(num1);
    }
    if(num2 > num3 && num2 > num1){
      return(num2);
    }if(num3 > num2 && num3 > num1){
      return(num3);
    }
}
console.assert(maxOfThree(2, 12, 13) == 13);
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and
//returns true if it is a vowel, false otherwise.
// ---------------------
function isVowel(char){
    "use strict";
    var vowel = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < vowel.length; i++){
    if(char === vowel[i]){
      return true;
    }

  }
  return false;
}
console.assert(isVowel("a") === true);
console.assert(isVowel("u") === true);
console.assert(isVowel("b") === false);
// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket".
//That is, double every consonant and place an occurrence of "o" in between.
//For example, translate("this is fun") should return the string "tothohisos isos
//fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";

    var string = phrase.toLowerCase();
    var vowels = ["a", "e", "i", "o", "u", " "];
    var y = "";

    for (var i = 0; i < string.length; i++){
      var current = string.charAt(i);

      if(isVowel(current) || current == " "){
        y = (y + (current));
      }else{
        y = (y + (current + "o" + current));
      }
  }

  return y;
}
console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon");
// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies
//(respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4])
//should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numbers){
    "use strict";
    var amount = 0;
    for (var i = 0; i < numbers.length; i++) {
      amount = amount + numbers[i]
    }
    return amount;
  }
console.assert(sum([1, 2, 3, 4]) === 10);

function multiply(numbers){
    "use strict";
    var amount = 1;
    for (var i = 0; i < numbers.length; i++) {
      amount = (amount * numbers[i]);
    }
    return amount;
}
console.assert(multiply([1, 2, 3, 4]) === 24);

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example,
//reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
    "use strict";
    var splitString = str.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");

    return joinArray;
}
console.assert(reverse("jag testar") === "ratset gaj");



// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the
//length of the longest one.
// ---------------------

function findLongestWord(str){
    "use strict";
    var strSplit = str.split(' ');
    var longestWord = 0;

    for (var i = 0; i < strSplit.length; i++) {
      if(strSplit[i].length > longestWord){
        longestWord = strSplit[i].length;
      }
    }
    return longestWord;
}
console.assert(findLongestWord("the doorway is dark") === 7);

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer
//i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing
//of the characters contained in it. Represent the frequency listing as a Javascript
//object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
