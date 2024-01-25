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

const bikeResult = document.getElementById("bike");
const bikeLighterResult = document.getElementById("bike-lighter");

let minWeight = bikes[0].weight;
let lighterBike;

for (let bike of bikes) {
  const bikeHtml = `
    <div class = "col-md-6 col-lg-4">
    <div class = "card text-center">
    <p class="fw-bold fs-5">${bike.nome}</p>
    <p>${bike.weight} grammi</p>
    </div>
    </div>`;

  bikeResult.innerHTML += bikeHtml;

  if (bike.weight < minWeight) {
    lighterBike = bike;
    const bikeLighterHtml = `
    <div class = "col">
    <div class = "card bg-primary text-white text-center">
    <p class="fw-bold fs-5">${lighterBike.nome}</p>
    <p>${lighterBike.weight} grammi</p>
    </div>
    </div>`;

    bikeLighterResult.innerHTML = bikeLighterHtml;
  }
}

const { nome, weight } = lighterBike;
console.log(`La bici ${nome} è la più leggera e pesa ${weight} grammi`);
