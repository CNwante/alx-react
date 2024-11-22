import getImmutableObject from '../1-map.js'

// Example usage:
const sampleObject = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

const immutableMap = getImmutableObject(sampleObject);
console.log(immutableMap);
