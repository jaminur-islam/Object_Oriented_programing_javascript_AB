/* // class expression
const myClass = class{

}
// class declaration
class MyClass {

} */

class Home {
  constructor(home, amount) {
    this.home = home;
    this.amount = amount;
  }
  increaseAmount() {
    this.amount += 1000;
  }
  decreaseAmount() {
    this.amount -= 1000;
  }
  getAmount() {
    return myname();
  }
}

function myname() {
  return "sagor";
}

const myHome = new Home("Dhaka", 5000);
myHome.increaseAmount();
myHome.increaseAmount();
myHome.decreaseAmount();
console.log(myHome.getAmount());
