interface StringMap {
  [key: string]: string;
}

function printValues(obj: StringMap): void {
  console.log(obj);
}

printValues({ foo: "bar", baz: "qux" });
//printValues({ foo: "bar", err: 99 });
