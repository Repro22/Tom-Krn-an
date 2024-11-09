// calculate net month salary for a senior developer for 1 year
// net = cleared from taxes

// Camel notation: thisIsVar : Java, C#, JS
// Snake notation: this_is_var : Python
// Yelling snake notation: THIS_IS_CONSTANT : everywhere for example Java

const weeksInYear = 52;
const hourRate = 1000; // CZK
const hoursPerDay = 8;
const daysPerWeek = 5;
const taxRate = 0.15; // 15%

const hoursPerWeek = daysPerWeek * hoursPerDay;
const hoursPerYear = hoursPerWeek * weeksInYear;
const grossAmountPerYear = hoursPerYear * hourRate;

console.log("gross amount per year = " + grossAmountPerYear + " CZK");

const nextAmountPerYear = (1 - taxRate) * grossAmountPerYear;
console.log("net amount per year = " + nextAmountPerYear + " CZK");

// inline calculations
console.log("net amount per month = " + (nextAmountPerYear / 12)  + " CZK");
