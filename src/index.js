// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const subtotalElement = product.querySelector('.subtotal span');

  const priceValue = parseFloat(priceElement.textContent) || 0;
  const quantityValue = parseInt(quantityElement.value) || 0;

  const total = priceValue * quantityValue;
  subtotalElement.textContent = total.toFixed(2);
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(element => {
    console.log('element: ', element);
    updateSubtotal(element);
  });

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
