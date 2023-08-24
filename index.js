

// Question 1: .
console.log(`Question 1: Create an array called ages that contains the following values; 3, 9, 23, 64, 2, 8, 28, 93 `);
const ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages) 
                
//A. Programmatically subtract the first element from the last element:
console.log(`--------------
Question 1-A: Programmatically subtract the first element from the last element: `);
const lastIndex = ages.length - 1; //  this is how we find the last number 
const ageDifference = ages[lastIndex] - ages[0]; //  this subtracts the first number from the last number
console.log(`Age difference: ${ageDifference}`); // this prints the age difference to the console
 
// B. Add a new age to your array and repeat the step above to ensure it is dynamic.
// (works for arrays are different length).

console.log(`-------------
Question 1-B: Add a new age to your array and repeat the step above to ensure it is dynamic.
(works for arrays are different length).`);
ages.push(69);  //  here we add new age to the array
const newLastIndex = ages.length - 1; //  
const newAgeDifference = ages[newLastIndex] - ages[0];
console.log(`New age difference: ${newAgeDifference}`);

// C. Use a loop to iterate through the array and calculate the average age.

console.log(`-------------
Question 1-C: Use a loop to iterate through the array and calculate the average age. `);
let sums = 0;
for (let i = 0; i < ages.length; i++) {
    sums += ages[i];
}
const averageAge = sums / ages.length;
console.log(`Average age: ${averageAge}`);

// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

console.log(`------------
Question 2: Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'`);
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//      A. Use a loop to iterate through the array and calculate the average number of letters per name.

console.log(`------------
Question 2-A: Use a loop to iterate through the array and calculate the average number of letters per name.`);
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
var averageLetters = totalLetters / names.length;
console.log(`Average letters per name: ${averageLetters}`);

//      B. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

console.log(`------------
Question 2-B: Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
`);
const allNames = names.join(" ");
console.log(`allNamesTogether: ${allNames}`);

// 3. How do you access the last element of an array?

console.log(`------------
Question 3: How do you access the last element of an array? `);
const array1 = [1, 2, 3, 4, 5];
const toLastIndex = array1.length - 1;
const lastElement = array1[lastIndex];

console.log(lastElement); // this will output: 5

// 4. How do you access the first element of an array?

console.log(`-----------
Question 4: How do you access to first element? `);
const array2 = [1, 2, 3, 4, 5];
const firstElement = array2[0];
console.log(firstElement); // this will output: 1

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and
// add the length of each name to the name lengths array.

console.log(`------------
Question 5: Create a new array called nameLengths. Write a loop to iterate over the previously created names array and
add the length of each name to the name lengths array.`);

// previously created names: const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
const nameLengths = []; // this creates an empty array of name lengths

for (let i = 0; i < names.length; i++) {
    const name = names[i]; // gets the current name
    const length = name.length; // this gets the length of the current name
    nameLengths.push(length); // this adds the length to the nameLengths array
}
console.log(nameLengths); // 3,5,3,5,4,3

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

console.log(`------------
Question numbers 6: 
Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. `);

// const nameLengths = [3, 5, 3, 5, 4, 3];
let sum = 0; // Create a variable to store the sum
for (let i = 0; i < nameLengths.length; i++){
    sum += nameLengths[i]; // Add the current element to the sum

}
console.log(`sum of elements: ${sum}`); // Sum of elements: 23

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word 
//concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect 
//the function to return 'HelloHelloHello').

console.log(`------------
Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word 
//concatenated to itself n number of times.`);

function greetings(word, n) {
    let result = ""; 

    for (let i = 0; i < n; i++){
        result+=word;
    } 
        return result;
}
    const concatenated = greetings("Hello", 3);
    console.log(concatenated); 


//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

console.log(`-----------
Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space. `);

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

console.log(`------------
Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`);

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

console.log(`------------
Question 10:  Write a function that takes an array of numbers and returns the average of all the elements in the array.
`);

//11.Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

console.log(`------------
Question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
`);

//12.Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

console.log(`------------
Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`);


//13.Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

console.log(`------------
Question 13: Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
`);

