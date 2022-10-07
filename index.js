const list = [
  "How are you?",
  "How's life?",
  "Hello World!",
  "Happy Learning!",
  "Hey!",
  "Happy Coding!",
  "Never Give Up!",
  "Be Consistent!",
  "Do Hardwork!",
  "Get Going!",
];

function doSomething() {
  let numRandom = Math.floor(Math.random() * 10);
  let pSelected = document.querySelector("p");
  pSelected.textContent = list[numRandom];
}
