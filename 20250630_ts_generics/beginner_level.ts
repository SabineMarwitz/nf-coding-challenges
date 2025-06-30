// 1. Generic Identity Function

// TODO: Make this function generic so it returns the same type as its input
function identity<T>(arg: T): T {
  return arg;
}

//***************************************************************************

// 2. Generic Array Function

// TODO: Write a generic function that returns the first element of an array
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const r1 = getFirst<number>([1, 2, 3, 4, 5]);
console.log(r1);
const r2 = getFirst<string>(["Monday", "Tuesday", "Wednesday"]);
console.log(r2);

//***************************************************************************

// 3. Generic Interface

// TODO: Turn this interface into a generic
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 42 }; // This should be allowed

