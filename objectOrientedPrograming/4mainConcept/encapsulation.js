// encapsulation mane hocche privet variable / method zegulo ke amara class er vitore access korte parbo ; class er baire access korte parbo na ; seita korar jonno amara method / property er same (#) use korbo eta use kora mane oi jinis ta privet;

class Computer {
  #warranty;
  constructor(name, model, warranty) {
    this.name = name;
    this.model = model;
    this.#warranty = warranty;
  }

  aboutComputer() {
    this.#aboutWarranty();
    console.log(
      `this computer name is ${this.name} and the model is ${
        this.model
      } it warranty is ${this.#warranty}`
    );
  }
  #aboutWarranty() {
    console.log(`my warranty is ${this.#warranty}`);
  }
}

const hp = new Computer("hp", "hp203", 5);
console.log(hp.aboutComputer());
console.log(hp.warranty);
