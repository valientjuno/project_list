// // NOTE: PLEASE READ EACH INSTRUCTION COMMENT CAREFULLY TO HELP YOU PROCESS THIS PROJECT
// // IF YOU ARE STUCK ASK AN INSTRUCTOR FOR HELP, ALWAYS WRITE THE CODE BELOW THE ASSIGNMENTS.

// productArray = [];

// let product = "We all Learn at a Pace";

// function learnAtWill(product) {
//   return `In class ${product}`;
// }
// console.log(learnAtWill(product));

// let learn = "You will be a Success!";

// function motivation(learn) {
//   return `Don't give up persuing your Dream ${learn}`;
// }
// console.log(motivation(learn));
let input = document.getElementById("product");
let output = document.getElementById("output");
let productArray = [];

function addProduct() {
  const newProductValue = input.value;
  if (newProductValue === "") {
    return;
  }
  productArray.push(newProductValue);
  console.log(productArray);

  // Clear previous output to prevent duplicates
  output.innerHTML = "";

  // Use forEach to iterate over the entire array and append each item
  productArray.forEach((product) => {
    const p = document.createElement("p");
    p.textContent = product;
    output.append(p);
  });

  input.value = "";
}
