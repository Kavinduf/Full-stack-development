// // var generateName = require("sillyname");
// import generateName from "sillyname";

// var sillyName = generateName();
// console.log(`My name is ${sillyName}.`);

// import { randomSuperhero } from "superheroes";

// randomSuperhero();

// // console.log(`I am ${name}!`);

// // console.log(` I am ${name}.`);
import superheroes from "superheroes";

const name = superheroes.random();
console.log(`I am ${name}!`);
