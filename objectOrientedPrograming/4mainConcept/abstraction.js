//=========== class diye zokhon ami noton kono Object toiri kori tokhon e class er vitore thaka code execute hoye zay;
// users er kache theke functionality gulo ke hide korai hocche Abstraction er kaj

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
// console.log(softenin.aboutCompany());

class Company2 extends Company {
  constructor(name, found, founder, partner, limit) {
    super(name, found, founder);
    this.partner = partner;
    this.limit = limit;
    console.log("hi");
  }

  aboutPartner() {
    console.log(`this company partner ${this.partner}`);
  }

  //===== Abstraction Work [hide users to functionality]
  CheckLimit(value) {
    console.log(
      `Your company limit was ${this.limit * 12} month now it is  ${
        this.limit * 12 - value
      } month`
    );
  }
}

const klWebco = new Company2(
  "klwebco",
  "2020",
  "Katherine",
  "Hasan all asim",
  5
);
console.log(klWebco.CheckLimit(15));
