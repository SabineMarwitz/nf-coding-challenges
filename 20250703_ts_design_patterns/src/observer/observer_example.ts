class EventEmitter {
  private subscribers: (() => void)[];

  constructor() {
    this.subscribers = [];
  }

  subscribe(fn: () => void) {
    this.subscribers.push(fn);
  }

  emit() {
    this.subscribers.forEach((fn) => fn());
  }
}

// Test
const emitter = new EventEmitter();

emitter.subscribe(() => console.log("Please inform me if anything happens"));
emitter.subscribe(() => console.log("Mee too"));

emitter.emit();

