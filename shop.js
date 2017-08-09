var allProducts = [];

var product1 = {
  name: "product 1 name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product2 = {
  name: "product 2 name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product3 = {
  name: "product 3 name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product4 = {
  name: "product 4 name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product5 = {
  name: "product 5 name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product6 = {
  name: "product 6 name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product7 = {
  name: "product 7 name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product8 = {
  name: "product 8 name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product9 = {
  name: "product 9 name",
  imagePath: "",
  imageAlt: "",
  price: 0 
};

var product10 = {
  name: "product 10 name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product11 = {
  name: "product 11 name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product12 = {
  name: "product 12 name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

allProducts.push(product1);
allProducts.push(product2);
allProducts.push(product3);
allProducts.push(product4);
allProducts.push(product5);
allProducts.push(product6);
allProducts.push(product7);
allProducts.push(product8);
allProducts.push(product9);
allProducts.push(product10);
allProducts.push(product11);
allProducts.push(product12);

//try to shorten code on Arrays

// var name = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
// var imagePath = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
// var imageAlt = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
// var price = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

console.log("FGBG Product Line: ", allProducts);

var productContainer = document.getElementById("product-container");


function buildPigString(product){
  var pigString = "";

  	pigString +=  '<section class="product">';
    pigString +=   	 '<div class="image">';
    pigString +=     		'<img src="' + product.imagePath + '" alt="' + product.imageAlt + '">';
    pigString +=   	 '</div>';
    pigString +=	 '<div class="details">';
    pigString +=        	'<h3>' + product.name + '</h3>';
    pigString +=      		'<h5>' + product.price + '</h5>';
    pigString +=     '</div>';
    pigString +=    '</section>';
    return pigString;
}

function printProductArrayToDom(productArray){
  for (var i = 0; i < productArray.length; i ++) {
    var currentProduct = productArray[i];
    var productPigString = buildPigString(currentProduct)
    productContainer.innerHTML += productPigString; 
  }
}

printProductArrayToDom(allProducts);