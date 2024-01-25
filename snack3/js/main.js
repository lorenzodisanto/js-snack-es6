const bikes = [
  {
    nome: "Pinarello",
    weight: 3500,
  },
  {
    nome: "Colnago",
    weight: 3860,
  },
  {
    nome: "Specialized",
    weight: 3210,
  },
  {
    nome: "Cervelo",
    weight: 5120,
  },
  {
    nome: "Bianchi",
    weight: 4220,
  },
  {
    nome: "Canyon",
    weight: 3880,
  },
];

let minWeight = bikes[0].weight;
let lighterBike;

for (let bike of bikes) {
  if (bike.weight < minWeight) {
    lighterBike = bike;
  }
}

const { nome, weight } = lighterBike;
console.log(`La bici ${nome} è la più leggera e pesa ${weight} grammi`);
