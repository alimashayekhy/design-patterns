class Singleton {
  // Static variable to hold the single instance
  static #instance;

  // Private constructor to prevent direct instantiation
  constructor() {
    if (Singleton.#instance) {
      return Singleton.#instance; // Return the existing instance
    }

    Singleton.#instance = this; // Set the singleton instance
    this.timestamp = new Date(); // Example property
  }

  // Example method
  getTimestamp() {
    return this.timestamp;
  }

  // Example method to demonstrate functionality
  static getInstance() {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton();
    }
    return Singleton.#instance;
  }
}

// Usage
const instance1 = Singleton.getInstance();
console.log(instance1.getTimestamp()); // Outputs the timestamp when the instance was created

const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // Outputs: true, both instances are the same
