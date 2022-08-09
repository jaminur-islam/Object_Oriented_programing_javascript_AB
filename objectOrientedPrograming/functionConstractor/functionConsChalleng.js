function MyHome(amount) {
  this.amount = amount;
}

MyHome.prototype.increaseAmount = function () {
  this.amount += 1000;
};
MyHome.prototype.decreaseAmount = function () {
  this.amount -= 1000;
};

const home = new MyHome(5000);
home.increaseAmount();
home.increaseAmount();
home.increaseAmount();
home.increaseAmount();
home.decreaseAmount();

console.log(home);
