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

  output.innerHTML = "";

  productArray.forEach((product) => {
    const p = document.createElement("p");
    p.textContent = product;
    output.append(p);
  });

  input.value = "";
}
