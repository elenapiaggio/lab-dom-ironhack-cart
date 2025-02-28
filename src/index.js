// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const subtotalElement = product.querySelector('.subtotal span');

  const priceValue = parseFloat(priceElement.textContent) || 0;
  const quantityValue = parseInt(quantityElement.value) || 0;

  const total = priceValue * quantityValue;
  subtotalElement.textContent = total.toFixed(2);

  return total;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let total = 0;

  allProducts.forEach(element => {
    total += updateSubtotal(element);
  });

  // ITERATION 3
  const totalSelector = document.querySelector('#total-value span');
  totalSelector.textContent = total.toFixed(2);
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
