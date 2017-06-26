/*complete!!! see panopto*/

const brands = ["bmw :)", "fiat :(", "seat :(", "ferrari :)"];

function multiplier(){ 
const rNumber = getRandomNumber(0, brands.length - 1); /*delimitate min and max value*/
const answerBox = document.getElementById("answer");
const name = document.getElementById("persons_name").value;
answerBox.innerHTML = "Hello, your name is "+ name + "... and you are paired with " + brands[rNumber] + "!";
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min); /*math.round rounds a decimal up to the closest int*/
}