function getLength(input: string | number) {
  let myType = typeof input;
  if (myType === "string") {
    return (input as string).length;
  }
  return input;
}
console.log(getLength("4242"));
console.log(getLength(42));
console.log(getLength("Hello World"));
