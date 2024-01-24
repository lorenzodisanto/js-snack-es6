const vips = [
  "Dwayne Johnson",
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

const tableVip = vips.map((vip, index) => {
  return { tavolo: "Tavolo Vip", nome: vip, posto: `${index + 1}` };
});

console.log(tableVip);
