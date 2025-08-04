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
