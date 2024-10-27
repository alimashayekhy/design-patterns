const carPrototype = {
  clone() {
    const clone = Object.create(this);
    clone.color = this.color;
    clone.model = this.model;
    return clone;
  },
  display() {
    console.log(`Car Model: ${this.model}, Color: ${this.color}`);
  }
};

// Creating a new instance by cloning the prototype
const car1 = Object.create(carPrototype);
car1.model = "Toyota";
car1.color = "Red";

const car2 = car1.clone();
car2.color = "Blue";

car1.display(); // Output: Car Model: Toyota, Color: Red
car2.display(); // Output: Car Model: Toyota, Color: Blue
