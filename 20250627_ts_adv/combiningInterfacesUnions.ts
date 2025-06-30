interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

function getArea(shape: Shape): number {
  let result;
  switch (shape.kind) {
    case "square":
      result = shape.size * shape.size;
      break;
    case "rectangle":
      result = shape.width * shape.height;
      break;
    default:
      result = -1;
  }
  return result;
}

const mySquare: Square = {
  kind: "square",
  size: 5,
};

const myRectangle: Rectangle = {
  kind: "rectangle",
  width: 10,
  height: 20,
};

console.log(getArea(mySquare));
console.log(getArea(myRectangle));
