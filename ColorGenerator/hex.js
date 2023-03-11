const hex = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
];
const colorBtn = document.getElementById("btn");
const color = document.getElementById("color");
const main = document.querySelector("main");

colorBtn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandom()];
  }
  color.textContent = hexColor;
  main.style.backgroundColor = hexColor;
});

function getRandom() {
  return Math.floor(Math.random() * hex.length);
}
