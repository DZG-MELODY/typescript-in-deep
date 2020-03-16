interface Dog {
  breed: string;
}

function printDog(dog: Dog): void {
  console.log("Dog: " + dog.breed);
}


const ginger = {
  breed: "Airedale",
  age: 3
};

printDog(ginger);

printDog({
  breed: "Airedale",
  age: 3
});