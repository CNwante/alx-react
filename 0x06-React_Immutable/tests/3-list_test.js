import { getListObject, addElementToList } from '../3-list.js';

// Step 1: Convert a plain array to an Immutable.js List
const array = ['alpha', 'beta'];
const immutableList = getListObject(array);

console.log(immutableList); // List [ "alpha", "beta" ]

// Step 2: Add a new element to the immutable list
const updatedList = addElementToList(immutableList, 'gamma');

console.log(updatedList); // List [ "alpha", "beta", "gamma" ]

// Verify immutability
console.log(immutableList); // List [ "alpha", "beta" ] (unchanged)
