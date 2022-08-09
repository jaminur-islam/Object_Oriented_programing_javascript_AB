//============= functional constructor static method ========//
// class er nam dhore use korte parbo ta chara parbo na

/* function Home(home, amount) {
  this.home = home;
  this.amount = amount;

  Home.about_home = function () {
    return "my home is Rongpur";
  };
}

const myHome = new Home("Dhaka", 5000);
console.log(Home.about_home());
 */

//============= Class static method ============//
// static function er vitore this ke paoya jabe na | baire theke perametter dite parbo //
class Home {
  constructor(home, amount) {
    this.home = home;
    this.amount = amount;
  }
  static about_home() {
    return `my home is ${this.home} and amount is ${this.amount}`;
  }
}
console.log(Home.about_home());
const myHome = new Home("Dhaka", 5000);
