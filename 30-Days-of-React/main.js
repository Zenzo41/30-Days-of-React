const numbers = [1, 2, 3, 4, 5];
numbers[3] = 11;

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

countries[0] = "Nepal";

let lastIndex = countries.length - 1;
countries[lastIndex] = 'Sri Lanka';

console.log(countries);