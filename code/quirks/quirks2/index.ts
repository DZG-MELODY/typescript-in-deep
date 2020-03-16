class Dog {
  breed: string;
  constructor(breed: string) {
    this.breed = breed;
  }
}

function printDog(dog: Dog): void {
  console.log("Dog: " + dog.breed);
}

class Cat {
  breed: string;
  constructor(breed: string) {
    this.breed = breed;
  }
}

const shasta = new Cat("Maine Coon");
printDog(shasta);