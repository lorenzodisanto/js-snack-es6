const teams = [
  {
    name: "Team Turtle",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Frog",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Penguin",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Hippopotamus",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Seal",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Crocodile",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Dolphin",
    score: 0,
    foul: 0,
  },
];

teams.forEach((team) => {
  team.foul = genRandomNumber(1, 10);
  team.score = genRandomNumber(1, 50);
});

const newTeams = teams.map((team) => {
  const { name, foul } = team;
  return { name, foul };
});

console.log(newTeams);

// funzione genera numero random
function genRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
