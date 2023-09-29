const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];
  
  const ulIngredients = document.querySelector("#ingredients");

  for (const ingredient of ingredients) {
    const li = document.createElement('li');
    li.textContent = ingredient;
    ulIngredients.appendChild(li);
  }
  