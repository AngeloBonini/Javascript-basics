const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const moreNumbers = new Array(5);
// console.log(moreNumbers);

const listItems = document.querySelectorAll("li");
// console.log(listItems);

const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

const hobbies = ["cooking", "beatbox"];
const personalData = [20, "Angelo", { moreDetails: [] }];

const analyticsData = [
  [1.4, 2.2],
  [3.1, -5.7],
  [2.4, 5.6],
];

for (const data of analyticsData) {
  for (const datPoint of data) {
    //   console.log(datPoint);
  }
}

const otherHobbies = ["cooking", "beatbox", "sports"];
otherHobbies.unshift("coding");
const popedItem = otherHobbies.pop();
const shifted = otherHobbies.shift();
// console.log(otherHobbies);
// console.log(popedItem);
// console.log(shifted);

otherHobbies[1] = "BEATBOX";
otherHobbies[5] = "Reading";
// console.log(otherHobbies, otherHobbies[3]);

otherHobbies[1] = "coding";
// console.log(otherHobbies, otherHobbies[4]);

otherHobbies.splice(1, 0, "Good");

// console.log(otherHobbies);

const testsResults = [1, 7, 3, 7, 5.9, -10, 8.5, 7];
// const storedResults = testsResults.slice(-6, -1);
const storedResults = testsResults.concat([2.99, 4]);
testsResults.push(6.53);

// console.log(testsResults.includes(8.5));
// console.log(testsResults, storedResults)
//  console.log(testsResults.indexOf(7));
//  console.log(testsResults.lastIndexOf(7));
const personData = [{ name: "Gelo" }, { name: "Max" }];
/**
 * indexOf doesnot work for obejcts as they are references to values.
 * this method creates a new array and cause of that, the reference is lost
 * @author: Angelo.
 */
// console.log(personData.indexOf({name: "Max"}));

const Max = personData.find((person, index, persons) => {
  return person.name === "Max";
});
Max.name = "Anna";
// console.log(Max, personData);

const maxIndex = personData.findIndex((person, index, persons) => {
  return person.name === "Gelo";
});
// console.log(maxIndex);

/**
 * ForEach alternative
 */
const prices = [9.99, 3.26, 2.1, 7.56, 4.86];
const tax = 0.23;
const taxAdjustedPrices = [];

prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});
console.log(prices);

const taxAdjustedPricesMap = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

console.log(taxAdjustedPricesMap);
/**
 * reverse() and sort() methods
 * using functions inside sort to avoid string default sorting.
 */
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(sortedPrices);
console.log(sortedPrices.reverse());

/**
 * Original way with arrow functions.
 */
const filteredArr = prices.filter((price, index, prices) => {
  return price > 6;
});
/**
 * Only arrow functions way.
 */
const filteredArr2 = prices.filter((price) => price > 6);

console.log(filteredArr2);

/**
 * Reduce method
 */
const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

console.log(sum);

const data = "bauru:10:45235235235.5";

const transformedData = data.split(":");
console.log(transformedData);

const nameFragments = ["Angelo", "Bonini"];
const names = nameFragments.join(" ");
console.log(names);

const copyArr = [...nameFragments];
nameFragments.push("Mr");
console.log(nameFragments, copyArr);

console.log(Math.min(...prices));

const persons2 = [
  { name: "Gelo", age: 20 },
  { name: "Lcuia", age: 27 },
];

const copiedPersons = [...persons2.map(person =>({name: person.name, age: person.age}))];

persons2.push({name:'Ann', age:23});
console.log(copiedPersons);
persons2[0].age = 31;
console.log(persons2);


const nameData = ["Gelo", "Bonini", "Benags", "Barn", "Umdois"];

const [firstName, LastName, ...otherStuff] = nameData;

console.log(firstName, LastName, otherStuff);