// Objective: Encapsulate data using getter and setter methods.

// Task: Create a `UserProfile` class with a private property `_email`.
// Use getter and setter for `email` with basic validation (must include '@').

class UserProfile {
  private _email: string;

  constructor(private emailAddress: string) {
    this._email = emailAddress;
  }

  // Getter
  get email(): string {
    return this._email;
  }

  // set should throw error
  set email(address: string) {
    throw new Error("Email address cannot be changed");
  }
}

// Test
const user2 = new UserProfile("john@example.com");
console.log(user2.email); // Should return valid email
user2.email = "wrongemail"; // Should throw an error
