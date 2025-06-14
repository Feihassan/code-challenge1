function calculateChaiIngredients(numberOfCups) {
const water = numberOfCups *200;
const milk = numberOfCups * 50;
const tealeaves = numberOfCups * 1;
const sugar = numberOfCups * 2;

console.log (`Here's what you need to make ${numberOfCups} cup(s) of Chai Bora:`);
console.log (`${water} ml of water`);
console.log (`${tealeaves} teaspons of tealeaves`);
console.log (`${sugar} teaspons of sugar`);
}
let input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
let numberOfCups = Number(input);
calculateChaiIngredients(numberOfCups);