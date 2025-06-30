//step 1 - 3
let age: number = 22;

for (let i = 1; i <= age; i++) {
    console.log(i);
}

if(age > 18) {
    console.log("Age > 18");
}
else {
    console.log("Age <= 18");
}

// step 4 - 6
let score: number = 0;

if (score != 0) {
    console.log("Score is available.");
}

if (score) {
    console.log("Score is evaluated as truthy");
}
else {
    console.log("Score is evaluated as falsy");
}

// step 7 - 9
let username: string = "";
if (username.length > 0) {
    console.log("Username is available: " + username)
}

if (username) {
    console.log("Username is evaluated as truthy");
}
else {
    console.log("Username is evaluated as falsy");
}

// step 10 -12
let isAdmin: boolean = false;

if (isAdmin) {
    console.log("isAdmin is considered as truthy");
}
else {
    console.log("isAdmin is considered as falsy");
}

if (isAdmin === false) {
    console.log("isAdmin is false");
}



