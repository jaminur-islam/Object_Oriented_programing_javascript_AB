// class Computer {
//   constructor(name, model) {
//     this.name = name;
//     this.model = model;
//   }

//   aboutComputer() {
//     console.log(
//       `this computer name is ${this.name} and the model is ${this.model}`
//     );
//   }
// }

// class Hp extends Computer {
//   constructor(name, model, warranty) {
//     super(name, model);
//     this.warranty = warranty;
//   }
//   /* aboutComputer() {
//     console.log(
//       `this computer name is ${this.name} and the model is ${this.model}`
//     );
//   } */

//   aboutwarranty() {
//     console.log(
//       `this computer name is ${this.name} this warranty ${this.warranty}`
//     );
//   }
// }

// const myPc = new Hp("hp", "2abc", "5 years");
// // myPc.aboutComputer();

class Company {
  constructor(name, found, founder) {
    this.name = name;
    this.found = found;
    this.founder = founder;
  }
  aboutCompany() {
    console.log(
      `this company name is ${this.name} , this company founder by ${this.founder} this company founder by ${this.found}`
    );
  }
}

const softenin = new Company("softenin", "2020", "Hasan all asim");
console.log(softenin.aboutCompany());

class Company2 extends Company {
  constructor(name, found, founder, partner) {
    super(name, found, founder);
    this.partner = partner;
  }

  aboutPartner() {
    console.log(`this company partner ${this.partner}`);
  }
}

const klWebco = new Company2("klwebco", "2020", "Katherine", "Hasan all asim");
console.log(klWebco.aboutCompany());
console.log(klWebco.aboutPartner());
