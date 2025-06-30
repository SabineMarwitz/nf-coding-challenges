// 6. Generic with Default Type

// TODO: Provide a default type for the generic parameter
function wrapValue<T = string>(val?: T): T[] {
  return [val as T];
}

// test
const defaultWrapped = wrapValue(); // should infer type
console.log(defaultWrapped);

//console.log(wrapValue(123));
//console.log(wrapValue("Test"));
//console.log(wrapValue({ A: 1, B: 2 }));

//*****************************************************************//

// 7. Generic Utility Type

// TODO: Use Partial<T> to make all properties optional
type Todo = {
  title: string;
  completed: boolean;
};

type PartialTodo = Partial<Todo>;

//*****************************************************************//

// 8. Conditional Type with Generics

// TODO: Complete the type to return string if T extends string, else number
type TypeCheck<T> = T extends string ? string : number;

type A = TypeCheck<"hello">; // string
type B = TypeCheck<42>; // number
