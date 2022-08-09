// code run howar sathe sathe kono kichu run korte caile tahole take constructor function er vitore likhi dibo kono actual object create hoile seita run hoye jabe
class Car {
  constructor(name, tier) {
    this.name = name;
    this.tier = tier;
  }
  aboutCar() {
    return `this car name is ${this.name} and have ${this.tier} tiers`;
  }

  carPrice(quantity) {
    if (quantity) {
      let price = 3000;
      let totalPrice = price * quantity;
      return `per car price ${price} You buy Car ${quantity} Your total price ${totalPrice}`;
    } else {
      return "Please select a Car";
    }
  }

  static staticMethod() {
    return `ami eta ke access nite parbo Class er name diye {Car} tachara etar access nei`;
  }
  // eki name get / set korte parbo zokhon set korbo tar vitore value dilei se bujbe eita set korte hbe
  get carName() {
    return `this car name is ${this.name}`;
  }

  set carName(val) {
    this.name = val;
  }
}

// new diye object banano ke bole [instantiate] r eta korar ze object toiri hbe tar moddhe prototype paoya jabe na take pete hole __proto__ dite hbe
const myCar = new Car("Ferrari", 5);
console.log(myCar.carPrice(1000));
/* console.log(myCar);
console.log(myCar.aboutCar()); */
myCar.carName = "BMW CAR";
console.log(myCar.carName);
/* console.log(Car.prototype);
console.log(myCar.__proto__);
console.log(myCar.__proto__.__proto__); */
