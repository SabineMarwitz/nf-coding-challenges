// Objective: Use private, public, and protected for encapsulation.

// Task: Create a `BankAccount` class with:
// - private balance: number
// - public readonly accountNumber: string
// - public deposit(amount: number): void
// - public withdraw(amount: number): void
// - public getBalance(): number

class BankAccount {
  public readonly accountNumber: string;
  private _balance: number;

  constructor(accountNumber: string, private balance: number) {
    this.accountNumber = accountNumber;
    this._balance = balance;
  }

  public deposit(amount: number): void {
    this._balance += amount;
  }

  public withdraw(amount: number): void {
    this._balance -= amount;
  }

  public getBalance(): number {
    return this._balance;
  }
}

// Test
const account = new BankAccount("123ABC", 500);
account.deposit(200);
account.withdraw(100);
console.log(account.getBalance()); // Should log: 600
