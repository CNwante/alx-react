import accessImmutableObject from "../2-nested.js";


// Example test
const sampleObject = {
  name: {
    first: 'Guillaume',
    last: 'Salva',
  },
};


const result = accessImmutableObject(sampleObject, ['name', 'first']);
console.log(result);
