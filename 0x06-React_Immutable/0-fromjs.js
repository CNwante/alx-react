import { fromJS } from "immutable";

export default function getImmutableObject(object) {
  return fromJS(object)
}

// Example usage:
const sampleObject = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

const immutableMap = getImmutableObject(sampleObject);
console.log(immutableMap);
