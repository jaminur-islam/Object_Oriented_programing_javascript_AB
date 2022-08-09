// polymorphism hocche ekta class er function arekta class e niye overite kora ba edit kora tahole [parent class er function ke child class e niye edit kora ]

class Computer {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  aboutComputer() {
    console.log(
      `this computer name is ${this.name} and the model is ${this.model}`
    );
  }
}

const dell = new Computer("Dell", "dkdjfk", "red");
console.log(dell);

class Hp extends Computer {
  constructor(name, model, color) {
    super(name, model);
    this.color = color;
  }
  aboutComputer() {
    console.log(
      `this computer name is ${this.name} and the model is ${this.model}and this computer color is ${this.color}`
    );
  }
  aboutColor() {
    console.log(`this computer color is ${this.color}`);
  }
}

const myComputer = new Hp("hp", "HH#O", "red");
console.log(myComputer);
myComputer.aboutColor();

//16
