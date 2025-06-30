const myNumbers: number[] = [1, 2, 3, 4, 5];
const myWords: string[] = ["Berlin", "Paris", "New York", "Rio"];

// step 1
const step1 = myNumbers.map(n => n + n);
console.log(step1);

// step 2
const step2 = myWords.filter(myWord => myWord.length > 5);
console.log(step2);

// step 3
const step3 = myNumbers.reduce((sum, num) => { return sum += num; }, 0);
console.log(step3);

// step 4
console.log(myNumbers.some(num => num > 10));
console.log([3, 33, 333, 1, 2].some(num => num > 10));



