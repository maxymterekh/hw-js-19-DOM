const categoriesList = document.querySelectorAll('#categories .item');

const categoriesLength = categoriesList.length;
console.log(`У списку ${categoriesLength} категорії.`);


for(const category of categoriesList) {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItemLength = category.querySelectorAll('ul li').length;
  
    console.log(`Категорія: ${categoryName}`);
    console.log(`Кількість елементів: ${categoryItemLength}`);
};