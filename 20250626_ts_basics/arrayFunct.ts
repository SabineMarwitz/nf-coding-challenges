const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

list.sort((a, b) => b - a);
//console.log(list);

const square = list.map(n => n * n);
//console.log(square);

const sli = square.slice(4, -2);
//console.log(sli);

const fil = sli.filter(num => num % 4 !== 0);
//console.log(fil);

const sum = fil.reduce((sum, num) => { return sum += num; }, 0);
console.log(sum);
