function sortString(input) {
    let result = "";
    let regex = /\d/;
    
    const myArea = input.split(" ");
    const tmp = []
    for (let i = 0; i < myArea.length; i++) {
        let testStr = myArea[i];
        
        tmp.push([testStr.match(regex)[0], myArea[i]]);
        tmp.sort();
    }
    for (let i = 0; i < tmp.length; i++) {
        result += tmp[i][1];
        if (i < tmp.length -1) {
            result += " ";
        }  
    }
    return result;
}

console.log(sortString("is2 Thi1s T4est 3a"));
console.log(sortString("4of Fo1r pe6ople g3ood th5e the2"));


