const products = [
    { id:0,category: "cars", name : "bmw",price:10 },
    { id:1,category: "phones", name : "iphone",price:100 },
    { id:2,category: "laptops", name : "maacbook pro",price:1000 },
    { id:3,category: "phones", name : "oneplus 8t",price:10000 },
    { id:4,category: "phones", name : "samsung s21",price:100000 },
    { id:5,category: "cars", name : "kia",price:10000000 },
    { id:6,category: "cars", name : "honda",price:100000000 }, 
  ]
  
  // write code that use high order functinos 
  // 1. find the product with id = 1 ( don't use filter )
  // 2. return the total price for all products ( without using loops )
  
const FindID = products.forEach(function(element) {
    
    if(element.id===1) {

        console.log(element)
    }
    
});

// simpler solution using find method 
// find will try to find the first element that match the condition, if not match it will return undefined
// products.find(p => p.id === 1 )


  console.log(FindID)
  
/////////////////////////////////////////

  const ProductsSum = products.reduce((sum,ite)=>
  sum + ite.price, 0
  )
  console.log(ProductsSum)
  
  
  
