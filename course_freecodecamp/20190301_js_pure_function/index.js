// The Checklist

// A function must pass two tests to be considered “pure”:
// - Same inputs always return same outputs
// - No side-effects

// Let’s zoom in on each one.

// 1. Same Input => Same Output

// Compare this: (Pure Functions = Consistent Results)

const add = (x, y) => x + y;
console.log(add(2, 4)); // 6
console.log(add(2, 4)); // 6

// To this:      (Impure Functions = Inconsistent Results)

let x = 2;
const add = (y) => {
  return x += y;
};
console.log(add(4));    // x ===  6 (the first time)
console.log(add(4));    // x === 10 (the second time)


// Here’s an impure function with a side-effect.

const impureDouble = (x) => {
    console.log('doubling', x); // doubling 4
    return x * 2;
  };
const result = impureDouble(4);
console.log({ result });       // { result: 8 }
// console.log is the side-effect here but, in all practicality, 
// it won’t harm us. We’ll still get the same outputs, given the same inputs.

// “Impurely” Changing an Object

const impureAssoc = (key, value, object) => {
    object[key] = value;
  };

const person = {
  name: 'Bobo'
};

const result = impureAssoc('shoeSize', 400, person);

console.log({
  person,
  result
}); // { person: { name: 'Bobo', shoeSize: 400 }, result: undefined }

// We can purify impureAssoc by simply returning a new object with our desired properties.

const pureAssoc = (key, value, object) => ({
    ...object,
    [key]: value,
});
  
const person = {
  name: 'Bobo'
};

const result = pureAssoc('shoeSize', 400, person);

console.log({
  person,
  result
}); // { person: { name: 'Bobo' }, result: { name: 'Bobo', shoeSize: 400 } }

// Another Pure Way

const pureAssoc = (key, value, object) => {
    const newObject = { ...object };
  
    newObject[key] = value;
  
    return newObject;
};

const person = {
  name: 'Bobo'
};

const result = pureAssoc('shoeSize', 400, person);

console.log({
  person,
  result
}); // { person: { name: 'Bobo' }, result: { name: 'Bobo', shoeSize: 400 } }


// Deep-Cloning Objects

// Heads up! Using the spread operator "..." creates a shallow copy of an object. 
// Shallow copies aren’t safe from nested mutations.

// Unsafe Nested Mutation
const person = {
    name: 'Bobo',
    address: { street: 'Main Street', number: 123 }
};

const shallowPersonClone = { ...person };
shallowPersonClone.address.number = 456;

console.log({ person, shallowPersonClone });
// {
//     person: { name: 'Bobo', address: { street: 'Main Street', number: 456 } },
//     shallowPersonClone: { name: 'Bobo', address: { street: 'Main Street', number: 456 } }
// }
// >>>>> Both person and shallowPersonClone were mutated because their children share the same reference!

// Safe Nested Mutation
// To safely mutate nested properties, we need a deep clone.
const person = {
    name: 'Bobo',
    address: { street: 'Main Street', number: 123 }
};

const deepPersonClone = JSON.parse(JSON.stringify(person));
deepPersonClone.address.number = 456;

console.log({ person, deepPersonClone });
// {
//     person: { name: 'Bobo', address: { street: 'Main Street', number: 123 } },
//     deepPersonClone: { name: 'Bobo', address: { street: 'Main Street', number: 456 } }
// }
// >>>>> Now you’re guaranteed safety because they’re truly two separate entities!