// Observer Exercises
// 5. Stock Ticker App
//
// Task: Create a StockTicker class that allows Broker
// observers to subscribe and get notified when the price
// of a stock changes.

class Broker {
  private _name;

  constructor(name: string) {
    this._name = name;
  }

  getName() {
    return this._name;
  }
}

class StockTicker {
  private price: number | undefined;
  private subscribers: Broker[];

  constructor() {
    this.subscribers = [];
  }

  setPrice(price: number) {
    this.price = price;
    this.emit();
  }

  subscribe(name: string) {
    // Todo avoid dublicate entries
    const broker = new Broker(name);
    this.subscribers.push(broker);
  }

  unsubscribe(name: string) {
    this.subscribers = this.subscribers.filter(
      (item) => item.getName() != name
    );
  }

  emit() {
    this.subscribers.forEach((broker) => {
      const name = broker.getName();
      console.log(`${name} notified about new price: ${this.price}`);
    });
  }
}

// Test
const ticker = new StockTicker();

ticker.subscribe("Broker Tom");
ticker.subscribe("Broker John");
ticker.setPrice(500);
ticker.setPrice(490);
ticker.unsubscribe("Broker John");
ticker.setPrice(600);
