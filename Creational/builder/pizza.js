class Pizza {
  constructor() {
    this.size = '';
    this.cheese = false;
    this.pepperoni = false;
    this.mushrooms = false;
  }

  describe() {
    return `Pizza - Size: ${this.size}, Cheese: ${this.cheese}, Pepperoni: ${this.pepperoni}, Mushrooms: ${this.mushrooms}`;
  }
}

// Builder class
class PizzaBuilder {
  constructor(size) {
    this.pizza = new Pizza();
    this.pizza.size = size; // Set the size when initializing
  }

  addCheese(shouldAdd) {
    this.pizza.cheese = shouldAdd;
    return this; // Return this to allow method chaining
  }

  addPepperoni(shouldAdd) {
    this.pizza.pepperoni = shouldAdd;
    return this;
  }

  addMushrooms(shouldAdd) {
    this.pizza.mushrooms = shouldAdd;
    return this;
  }

  build() {
    return this.pizza; // Return the constructed Pizza object
  }
}

// Usage example
const main = () => {
  const pizza = new PizzaBuilder('Large')
    .addCheese(true)      // Client decides to add cheese
    .addPepperoni(false)  // Client decides not to add pepperoni
    .addMushrooms(true)   // Client decides to add mushrooms
    .build();

  console.log(pizza.describe()); // Output: Pizza - Size: Large, Cheese: true, Pepperoni: false, Mushrooms: true
};

main();
