class Car {
  constructor() {
    this.type = 'Car';
  }

  start() {
    return 'Car started!';
  }
}

class Truck {
  constructor() {
    this.type = 'Truck';
  }

  start() {
    return 'Truck started!';
  }
}

class Motorcycle {
  constructor() {
    this.type = 'Motorcycle';
  }

  start() {
    return 'Motorcycle started!';
  }
}

// Factory class
class VehicleFactory {
  createVehicle(vehicleType) {
    switch (vehicleType) {
      case 'car':
        return new Car();
      case 'truck':
        return new Truck();
      case 'motorcycle':
        return new Motorcycle();
      default:
        throw new Error('Vehicle type not supported');
    }
  }
}

// Example usage
const factory = new VehicleFactory();

const car = factory.createVehicle('car');
console.log(car.type); // Output: Car
console.log(car.start()); // Output: Car started!

const truck = factory.createVehicle('truck');
console.log(truck.type); // Output: Truck
console.log(truck.start()); // Output: Truck started!

const motorcycle = factory.createVehicle('motorcycle');
console.log(motorcycle.type); // Output: Motorcycle
console.log(motorcycle.start()); // Output: Motorcycle started!
