interface Button {
  render(): void;
}

class HTMLButton implements Button {
  render() {
    console.log("Rendering HTML Button");
  }
}

class NativeButton implements Button {
  render() {
    console.log("Rendering Native Button");
  }
}

class ButtonFactory {
  static createButton(type: "html" | "native"): Button {
    if (type === "html") return new HTMLButton();
    return new NativeButton();
  }
}
