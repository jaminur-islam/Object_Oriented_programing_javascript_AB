function Computer(name, model) {
  this.name = name;
  this.model = model;
}
Computer.prototype.aboutComputer = function () {
  console.log(`this computer name is ${this.name} , model is ${this.model}`);
};
const hp = new Computer("hp", "DD123");
const dell = new Computer("Dell", "22bc");
console.log(hp, dell);
console.log(hp.aboutComputer());
// 4 roles of function constructor
// 1. create an empty object {}
// 2. function is called this = {}
// 3. {} linked to the prototype
// 4. {} will return automatically

Array.prototype.sagor = function () {
  let arr = [];
  for (i = 0; i < this.length; i++) {
    if (this[i] % 2 === 0) {
      arr.push(this[i]);
    }
  }
  return arr;
};

console.log([10, 20, 30, 1].filter((element) => element % 2 === 0));
