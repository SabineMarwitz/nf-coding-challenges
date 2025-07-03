// Decorator Exercises
// 4. Text Formatter
//
// Task: Start with a PlainText class and use decorators to add:
// - BoldTextDecorator
// - ItalicTextDecorator
// - UnderlineTextDecorator

class PlainText {
  private _text = "";

  constructor(text: string) {
    this._text = text;
  }

  getText() {
    return this._text;
  }
}

class BoldTextDecorator {
  constructor(private text: PlainText) {}

  getText() {
    return `<b>${this.text.getText()}</b>`;
  }
}

class ItalicTextDecorator {
  constructor(private text: PlainText) {}

  getText() {
    return `<i>${this.text.getText()}</i>`;
  }
}

class UnderlineTextDecorator {
  constructor(private text: PlainText) {}

  getText() {
    return `<u>${this.text.getText()}</u>`;
  }
}

// Test
const thePlainText = new PlainText("Hello");

const boldDecorator = new BoldTextDecorator(thePlainText);
console.log(boldDecorator.getText()); // <b>Hello</b>

const italicDecorator = new ItalicTextDecorator(thePlainText);
console.log(italicDecorator.getText()); // <i>Hello</i>

const underlineDecorator = new UnderlineTextDecorator(thePlainText);
console.log(underlineDecorator.getText()); // <u>Hello</u>
