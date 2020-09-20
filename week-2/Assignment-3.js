function avg(data){
  let product = data.products;
  let productTotalPrice = 0;
  for (let productPrice of product) {
    productTotalPrice += productPrice.price;
  }
  return productTotalPrice / data.size;
} 
  
let productsAverage = avg({
  size:3, 
  products:[
    {
      name:"Product 1",
      price:100 
    },
    {
      name:"Product 2",
      price:700 
    },
    {
      name:"Product 3",
      price:250 
    }
  ]
});

// show the average price of all products
console.log(productsAverage);