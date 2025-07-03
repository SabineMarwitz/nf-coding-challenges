class MyPlainText {
  getText() {
    return "Hello";
  }
}

class BoldDecorator {
  constructor(private text: MyPlainText) {}

  getText() {
    return `<b>${this.text.getText()}</b>`;
  }
}
