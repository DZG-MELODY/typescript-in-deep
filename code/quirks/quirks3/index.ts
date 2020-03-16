interface Dog {
  taxonomy: {
    species: "Canis familiaris";
  };
  bark: string;
}

interface Cat {
  taxonomy: {
    species: "Felis catus";
  };
  meow: string;
}

type Animal = Cat | Dog;

function animalNoise(animal: Animal): string {
  if (animal.taxonomy.species == "Canis familiaris") {
    return animal.bark;
  } else {
    return animal.meow;
  }
}