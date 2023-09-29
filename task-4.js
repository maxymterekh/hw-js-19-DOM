const valueCount = document.querySelector("#value");
const incrementCount = document.querySelector('[data-action="increment"]');
const decrementCount = document.querySelector('[data-action="decrement"]');


let counterValue = 0;

function updateValue() {
  valueCount.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  updateValue();
}

function decrement() {
  counterValue -= 1;
  updateValue();
}

incrementCount.addEventListener('click', increment);
decrementCount.addEventListener('click', decrement);