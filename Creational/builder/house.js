class House {
  constructor() {
    this.rooms = null;
    this.windows = null;
    this.roof = null;
  }

  toString() {
    return `House with ${this.rooms} rooms, ${this.windows} windows, and a ${this.roof} roof.`;
  }
}

class HouseBuilder {
  constructor() {
    this.house = new House();
  }

  setRooms(rooms) {
    this.house.rooms = rooms;
    return this;
  }

  setWindows(windows) {
    this.house.windows = windows;
    return this;
  }

  setRoof(roofType) {
    this.house.roof = roofType;
    return this;
  }

  build() {
    return this.house;
  }
}

class HouseDirector {
  constructor(builder) {
    this.builder = builder;
  }

  constructSimpleHouse() {
    this.builder.setRooms(1).setWindows(2).setRoof("simple");
    return this.builder.build();
  }

  constructLuxuryHouse() {
    this.builder.setRooms(5).setWindows(10).setRoof("luxury");
    return this.builder.build();
  }
}

const builder = new HouseBuilder();
const director = new HouseDirector(builder);

const simpleHouse = director.constructSimpleHouse();
console.log(simpleHouse.toString());

const luxuryHouse = director.constructLuxuryHouse();
console.log(luxuryHouse.toString());
