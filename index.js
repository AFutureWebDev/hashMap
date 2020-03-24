// The first step to implement a HashMap is to have a hash function. This function will map every key to its value.
// Actually, there are two ways to build a hashmap: arrays and binary search trees. The most common implementation of hashmaps is using an array and a hash function.
// Step One: create a hash function that will map every key to its value. Keys are mapped into an array of "buckets" using the hash function.
// You might have the case where two different keys will be mapped to the same bucket - this is called a collision. If the underslying data structure is an array, at some point, data that cant fit in a hashmap will reuse data slots.
    // Solution 1: store multiple values in the same bucket  using a linked list or another array.
    // Solution 2: put binary search functions within buckets or even a second hashing function within the bucket.

let myMap = new Map();

myMap.set("Ford", "Focus");
myMap.set("Toyota", "Camry");
myMap.set("Toyota", "Prius");
myMap.set("Porsche", "911");
myMap.set("Porsche", "GT3");
myMap.set("Chevy", "Volt");

console.log(myMap.size);

console.log(myMap.get("Toyota"));
console.log(myMap.get("Toyota"));

