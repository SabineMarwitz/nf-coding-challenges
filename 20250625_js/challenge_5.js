function whoLikes(input) {
    let result = "???";
    let number = input.length;

    switch (number) {
        case 0:
            result = "no one likes this";
            break;
        case 1:
            result = input[0] + " likes this";
            break;  
        case 2:
            result = input[0] + " and " + input[1] + " like this";
            break;
        case 3:
            result = input[0] + ", " + input[1] + " and " + input[2] + " like this";
            break;    
        default:
            result = input[0] + ", " + input[1] + ` and ${number - 2} others like this`;
            break;  
    }
      
    return result;
} 

console.log(whoLikes([]));
console.log(whoLikes(["Peter"]));
console.log(whoLikes(["Jacob", "Alex"]));
console.log(whoLikes(["Max", "John", "Mark"]));
console.log(whoLikes(["Alex", "Jacob", "Mark", "Max"]));
