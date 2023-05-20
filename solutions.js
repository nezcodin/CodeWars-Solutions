// This file has solutions for JavaScript problems.


// 1) Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// start with an empty array to push numbers to
// need to separate each number and make it its own number to be pushed (do this in some sort of while loop?)
// for the amount of digits in n, separate each digit and push it to the array
// return a reversed array

function digitize(n) {
  let arrayReverse = []

  if (n === 0) {
    return [0];
  }

  while (n > 0) {
    let digit = n % 10
    arrayReverse.push(digit)
    n = Math.floor(n / 10)
  }

  return arrayReverse
}

// 2) Remove First and Last Character

//pop first and last character
//str.pop(0) AND str.pop(-1)
//.pop() only works with arrays, use .slice() instead!

// removes first char (0, 0) and adds the rest of the string together minus the last char (str.length - 1)

function removeChar(str) {
  const updatedStr = str.slice(0, 0) + str.slice(1, (str.length - 1))
  return updatedStr
};
