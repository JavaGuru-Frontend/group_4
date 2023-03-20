// https://dummyjson.com/
//  let btn                = document.getElementById('getCategories');
let categoriesSelector = document.getElementById('categories');
let productSelector = document.getElementById('products');



const renderCategories = (categories) => {
if (categories.length === undefined) {
    categoriesSelector.innerHTML += `${categories.message}` 
    
  } else {
    categories.forEach(category => {
        categoriesSelector.innerHTML += `<li class="e-shop__menu-item" data-category="${category}">${category}</li>`
    });
  }
}

const renderProducts = (data) => {
    // показывать продукты только одной категории
    productSelector.innerHTML = '';

    data.products.forEach(product => {
    productSelector.innerHTML += ` 
    <div class="col">
       <div class="card shadow-sm">
          <img src="${product.thumbnail}">
          <div class="card-body">
              <p class="card-text"><b>${product.title}</b></p>
              <div class="d-flex justify-content-between align-items-center">
                  <small class="text-muted">${product.price} $</small>
                  <button data-id=${product.id} type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
              </div>
          </div>
      </div>
      `
  })

}


const getCategories = () => {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(categories => renderCategories(categories));
}

const renderProductByCategory = (event) => {
    //console.log(event)
    let = categoryClicked = event.target.dataset.category;
    fetch(`https://dummyjson.com/products/category/${categoryClicked}`)
   .then(res => res.json())
   //.then(console.log);
   .then(data => renderProducts(data));
}

//btn.addEventListener('click', getCategories);
getCategories()
categoriesSelector.addEventListener('click', renderProductByCategory);