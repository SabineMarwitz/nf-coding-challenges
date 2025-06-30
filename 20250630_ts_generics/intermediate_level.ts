// 4. Generic Constraint

// TODO: Only allow types that have a 'length' property
function printLength<T extends { length: number }>(item: T): number {
  return item.length;
}

// test
console.log(printLength("hello")); // OK
console.log(printLength([1, 2, 3])); // OK
//printLength(42); // Error: number has no .lengthS;

//*****************************************************************//

// 5. Using Multiple Type Parameters

// TODO: Complete the function to return a key-value tuple
function createPair<k, v>(key: k, value: v): [k, v] {
  return [key, value];
}

//test
console.log(createPair<string, number>("level", 10));
console.log(createPair<string, string>("day", "Monday"));

//*****************************************************************//


