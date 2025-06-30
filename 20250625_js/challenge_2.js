function maskify(input) {
    const length = input.length;

    if (length < 5) {
        return input;
    }  
    let output = "";
    for (let i = 0; i < input.length - 4; i++) {
        output += "#";
    }
    output += input.substring(length - 4);
    return output;
}

console.log(maskify("1234566789"));
console.log(maskify("abc"));
console.log(maskify(""));
