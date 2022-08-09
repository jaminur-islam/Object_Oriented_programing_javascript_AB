//====== object create =====
// object create mane hocce age prototype er function gulo ekta object er moddhe rakha and then oi object ta ke Object.create(computer) function er moddhe pera meter hisabe diye deya ;
// ekhane computer holo prototype r actual object holo [dell]
const computer = {
  name: "",
  model: "",
  aboutComputer() {
    console.log(
      `this computer name is ${this.name} , and the model is ${this.model}`
    );
  },
};

const dell = Object.create(computer);
dell.name = "sagor";
dell.model = 20;
console.log(dell.aboutComputer());

const hp = Object.create(computer);
hp.name = "hp";
hp.model = "http2";
console.log(hp.aboutComputer());
