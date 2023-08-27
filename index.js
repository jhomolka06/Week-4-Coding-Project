

// Question 1: .
console.log(`Question 1: Create an array called ages that contains the following values; 3, 9, 23, 64, 2, 8, 28, 93 `);
const ages = [3, 9, 23, 64, 2, 8, 28, 93] // this creates an array of ages
console.log(ages); // this prints the output of the ages to the console
                
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
const newLastIndex = ages.length - 1; //  this adds the new age to the array
const newAgeDifference = ages[newLastIndex] - ages[0]; // this step finds the new difference
console.log(`New age difference: ${newAgeDifference}`); // this step gives the new output to the cancel (the difference between the new last age in the first age)

// C. Use a loop to iterate through the array and calculate the average age.

console.log(`-------------
Question 1-C: Use a loop to iterate through the array and calculate the average age. `);

 // This uses a loop to find the average age in the array
let sums = 0; // gives a variable to hold the sum of ages
for (let i = 0; i < ages.length; i++) { // this dep loops through each age in the array
    sums += ages[i]; // the step adds the current age to the sum
}
const averageAge = sums / ages.length; // this step finds the average age by dividing the total sum by the number of ages
console.log(`Average age: ${averageAge}`); // this step logs the average age to the console and prints what it found to the console

// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

console.log(`------------
Question 2: Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'`);
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; // this creates an array of names with the provided names
console.log(names); // this prints the names from the array that was made to the console

//      A. Use a loop to iterate through the array and calculate the average number of letters per name.

console.log(`------------
Question 2-A: Use a loop to iterate through the array and calculate the average number of letters per name.`);

// This step is making a variable to store the total number of letters
let totalLetters = 0;  // this string starts it off with a total of 0 letters
for (let i = 0; i < names.length; i++) { // this step is looping through each name in the names array  // added the length of the name to the total
    totalLetters += names[i].length; // this is adding the length of the current name to the total
}
var averageLetters = totalLetters / names.length; // this step is calculating the number of letters per name and dividing the total by the number of names 
console.log(`Average letters per name: ${averageLetters}`); // this prints the output to the console

//      B. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

console.log(`------------
Question 2-B: Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
`);

// This variable will join all the names in the array into a single string
const allNames = names.join(" ");
console.log(`allNamesTogether: ${allNames}`);// with this step it uses the join method which combines all the names in the array with the space between them and stores the result in allNames

// 3. How do you access the last element of an array?

console.log(`------------
Question 3: How do you access the last element of an array? `);

// This makes an array of numbers
const array1 = [1, 2, 3, 4, 5];
const toLastIndex = array1.length - 1; // this is how to find the index of the last element. // this toLastIndex variable now holds the index of the last element
const lastElement = array1[toLastIndex]; // This is how to get the value of the last element using the index. // this toLastIndex variable now holds the index of the last element to the array

console.log(lastElement); // this will output: 5

// 4. How do you access the first element of an array?

console.log(`-----------
Question 4: How do you access to first element? `);

// This is the array of numbers i created
const array2 = [1, 2, 3, 4, 5]; // use this to find the value of the first element. // 
const firstElement = array2[0]; // the first element variable now holds the value of the first element in the array
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
Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.`);
// this.is defining a function called greetings that takes two parameters; word and n
function greetings(word, n) { 
    let result = ""; // this step is making an empty string to keep the result

    for (let i = 0; i < n; i++){ // this step is looping n
        result += word; // this step is concatenating 'word' to the 'reslt' string 
    } 
        return result; // and this step returns the final string after the loop
}
    const concatenated = greetings("Hello", 3); // this step is using the greetings function with the word hello and the number 3
    console.log(concatenated); // this is printing the output of the concatenated variable 


//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

console.log(`-----------
Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space. `);

    // This is a function to create a full name from a first than last name
function getFullName(firstName, lastName) {
    // this will put together the first name, a space, and last name
    const fullName = firstName + " " + lastName; 
    return fullName; // give the full name
}

const firstName = "John"; // random names for example
const lastName = "Doe";

const fullNameResult = getFullName(firstName, lastName); // use the function with the names end of the result

console.log("full name: ", fullNameResult); // print the result to the console

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

console.log(`------------
Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`);

// This is a function to see if the sum of the in an array is more than 100 & if it is it will be true 
function sumGreaterThan100(numbersArray) {
    let sum = 0; // The starts with the sum of 0

    // loop through each number in the array 
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i]; // Add the current number to the sum
    }
    
    // looks if the sum is greater than 100
    if (sum > 100) {
        return true; // If this is greater, return true
    } else {
        return false; // If this is not greater than, return false
    }
}
    

 const numbers = [50, 30, 20]; // test numbers

 const results = sumGreaterThan100(numbers); // uses the function with the numbers array and makes result

 console.log("Is the sum greater than 100?" , results); // print the result to the console

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

console.log(`------------
Question 10:  Write a function that takes an array of numbers and returns the average of all the elements in the array.
`);

    //  This is a function to find the average of the numbers in an array
function calculatedAverage(numbersArray) {
    let sum = 0; // starting with the sum zero 
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];  // This adds the current number to the sum
    }

    // This calculates the average by defining the sum by the number of items in the array
    const average = sum / numbersArray.length;
    return average; // This returns their calculated average
}

const number = [10, 20, 30, 40, 50]; // sample numbers

const product = calculatedAverage(number); // puts together the function with the numbers array & gives the result

console.log("average:", product); // This prints the average to the console
// had to use the were product instead of return because I use result earlier in the code

//11.Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

console.log(`------------
Question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
`);

// This is a function that compares the average of two arrays
function compareAverage(ar1, ar2) {
    let sum1 = 0; // start with a sum of 0 for the first array
    let sum2 = 0; // start with the sum of zero for the second array
    
    for (let i = 0; i < ar1.length; i++) { // this makes a loop through each number in the first array
        sum2 += ar2[i]; // This adds the current number to the sum1
    }

    for (let i = 0; i < ar2.length; i++) { // this loops through each number in the second array
        sum2 += ar2[i]; // This adds the current number of to sum two
    }

// This calculates the average of both arrays one & two
    const average1 = sum1 / ar1.length;
    const average2 = sum2 / ar2.length;


    return average1 > average2; // This compares the averages and will return a true if the average of the first is greater than the second
}


const aray1 = [10, 20, 30]; // sample numbers
const aray2 = [5, 15, 25];

const resulted = compareAverage(aray1, aray2); // uses the function with that arrays and gives a output

// prints the output to the cancel, false
console.log("Is the average of the first array greater than the second array?", resulted);

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

console.log(`------------
Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`);

// This is a function that helps you decide if you should buy a drink
function willBuyDrink(isHotOutside, moneyInPocket) { // this part of the function checks if it is hot enough outside hand if we have enough money to buy a drink
    if (isHotOutside && moneyInPocket > 10.50) {  // if both = true then it returns true
        return true;
    } else {
        return false; // when either of these conditions is not met it returns false
    }
}

const isHot = false; // sample numbers/conditions
const money = 1.00;

const output = willBuyDrink(isHot, money) // this runs the function with the sample number/conditions and gives the result

console.log('Should I buy a drink?', output); // this is were it prints the output to the console

//13.Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

console.log(`------------
Question 13: Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
`);


// check if a number is even
function isEven(number) {
    if(number % 2 === 0) {  // check if the number is divisible by two without a remainder
        return true;    // if even, return true
    } else {
        return false;   // if not even, return false
    }

}

const inputNumber = 10; // test number
const result = isEven(inputNumber); // check the isEven function

if (result) {   // find the result and print the choice even or not even 
    console.log(`The  answer is: ${inputNumber} is even`);

} else {
    console.log(`The  answer is: ${inputNumber} is not even`); // this prints output and whether or not it's even and the number
}

