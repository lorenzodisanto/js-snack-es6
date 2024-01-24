const students = [
  {
    id: 213,
    name: "Marco della Rovere",
    grades: 78,
  },
  {
    id: 110,
    name: "Paola Cortellessa",
    grades: 96,
  },
  {
    id: 250,
    name: "Andrea Mantegna",
    grades: 48,
  },
  {
    id: 145,
    name: "Gaia Borromini",
    grades: 74,
  },
  {
    id: 196,
    name: "Luigi Grimaldello",
    grades: 68,
  },
  {
    id: 102,
    name: "Piero della Francesca",
    grades: 50,
  },
  {
    id: 120,
    name: "Francesca da Polenta",
    grades: 84,
  },
];

// Array nomi in maiuscolo
const studentsName = students.map((student) => {
  return student.name.toUpperCase();
});
console.log(studentsName);

// Array di oggetti "studente" che hanno un totale di voti superiore a 70
const studentsVote = students.filter((student) => {
  return student.grades > 70;
});
console.log(studentsVote);

// array di oggetti "studente" che hanno un totale di voti superiore a 70 e id superiore a 120
const studentsVoteId = students.filter((student) => {
  return student.grades > 70 && student.id > 120;
});
console.log(studentsVoteId);
