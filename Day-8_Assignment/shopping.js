
let products=[
  {
    id: 1,
    name: "Indian Dress",
    size: "M",
    color: "Dark Blue",
    price: 3200,
    image: "product1.jpeg",
    description: "Beautiful Indian Wedding Wear",
  },
  {
    id: 2,
    name: "Plain Gown",
    size: "S",
    color: "Violet",
    price: 2200,
    image: "product2.jpeg",
    description: "Good looking and nice violet dress",
  },
  {
    id: 3,
    name: "Red Dress",
    size: "L",
    color: "Red",
    price: 1200,
    image: "product3.jpeg",
    description: "Beautiful and nice ling dress",
  },
  {
    id: 4,
    name: "Floral Dress",
    size: "M",
    color: "White",
    price: 1300,
    image: "product4.jpeg",
    description: "Good looking and beautiful floral dress",
  },
  {
    id: 5,
    name: "Black and White Shirt",
    size: "L",
    color: "Black and White",
    price: 1200,
    image: "product5.jpeg",
    description: "Good looking black and white floral shirt",
  },
  {
    id: 6,
    name: "Indian Wedding Outfit",
    size: "L",
    color: "Blue",
    price: 5000,
    image: "product6.jpeg",
    description: "Good looking and beautiful Indian Wedding outfit",
  },
  {
    id: 7,
    name: "Navy Blue Tshirt",
    size: "L",
    color: "Navy Blue",
    price: 2200,
    image: "product7.jpeg",
    description: "Good looking navy blue tshirt",
  },
  {
    id: 8,
    name: "Black Jerkin for Men",
    size: "L",
    color: "Black",
    price: 1500,
    image: "product8.jpeg",
    description: "Nice black jerking for rainy season",
  },
  {
    id: 9,
    name: "Black Jacket for Men",
    size: "M",
    color: "Black",
    price: 1000,
    image: "product9.jpeg",
    description: "Good looking black jacket",
  },
  {
    id: 10,
    name: "Black Winter Coat for Women",
    size: "L",
    color: "Black",
    price: 2500,
    image: "product10.jpeg",
    description: "Beautiful and shiny winter coat for ladies",
  },
  {
    id: 11,
    name: "Ethnic Dress",
    size: "S",
    color: "Orange",
    price: 2800,
    image: "product11.jpeg",
    description: "Beautiful and nice ethnic dress",
  },
  {
    id: 12,
    name: "Black Tshirt",
    size: "L",
    color: "Black",
    price: 1100,
    image: "product12.jpeg",
    description: "Good looking black tshirt",
  },
];

cart = [];

function displayProducts(productData, who = "productwrapper"){
  let productString = "";

  productData.forEach(function(product, index){
    let{id, name, image, color, size, price, description} = product;

    if(who == "productwrapper"){
      productString += `<div class="product">
      <div class="prodimg">
      <img src="images/${image}" width=100% />
      </div>
      <h3>${name}</h3>
      <p>Price: ${price}</p>
      <p>Size: ${size}</p>
      <p>Color: ${color}</p>
      <p>${description}</p>
      <p>
        <button onclick="addToCart(${id})">Add to cart</button>
      </p>
      </div>`;
    }
    else if(who == "cart"){
      productString += `<div class="product">
      <div class="prodimg">
      <img src="${image}" width=100% />
      </div>
      <h3>${name}</h3>
      <p>Price: ${price}</p>
      <p>Size: ${size}</p>
      <p>Color: ${color}</p>
      <p>${description}</p>
      <p>
        <button onclick="removeFromCart(${id})">Remove from cart</button>
      </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productString;
}

displayProducts(products);

function searchProduct(searchValue){
  let searchProducts = products.filter(function(product, index){
    let searchString = product.name + " " + product.color + " " + product.description;
    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchProducts);
}

function filterByMinPrice(){
  let min = document.getElementById('min-price').value;
  let filterPrice = products.filter(function(product){
    return product.price>=min;
  });
  displayProducts(filterPrice);
}

function filterByMaxPrice(){
  let max = document.getElementById('max-price').value;
  let filterPrice = products.filter(function(product){
    return product.price<=max;
  });
  displayProducts(filterPrice);
}

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}

function addToCart(id) {
  // getting the product
  let pro = getProductByID(products, id);

  //   putting in cart
  if(pro.id == cart.id)
  {
    alert("This product is already in the cart..");
  }
  else{
    cart.push(pro);
  }
  displayProducts(cart, "cart");
}

function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  displayProducts(cart, "cart");
}

function countCartItems(){
  let cnt = cart.length;
  document.getElementById('cart-count').innerHTML = cnt;
}
countCartItems();
