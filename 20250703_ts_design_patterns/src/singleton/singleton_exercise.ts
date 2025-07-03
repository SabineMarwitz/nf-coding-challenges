// Singleton Exercises
// 1. Global Settings Manager
//
// Task: Create a SettingsManager class using the Singleton pattern that can store and retrieve key-value pairs.

class SettingsManager {
  private static instance: SettingsManager;
  private settings = {
    theme: "",
  };

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new SettingsManager();
    }

    return this.instance;
  }

  set(key: string, value: string) {
    this.settings[key] = value;
  }

  get(key: string) {
    return this.settings[key];
  }
}

// Example usage:
SettingsManager.getInstance().set("theme", "dark");
console.log(SettingsManager.getInstance().get("theme")); // Output: 'dark'
