var allProducts = [];

var product1 = {
  name: "product name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product2 = {
  name: "product name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product3 = {
  name: "product name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product4 = {
  name: "product name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product5 = {
  name: "product name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product6 = {
  name: "product name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product7 = {
  name: "product name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product8 = {
  name: "product name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product9 = {
  name: "product name",
  imagePath: "",
  imageAlt: "",
  price: 0 
};

var product10 = {
  name: "product name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product11 = {
  name: "product name",
  imagePath: "",
  imageAlt: "",
  price: 0
};

var product12 = {
  name: "product name",
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

console.log("FGBG Product Line: ", allProducts);

var productContainer = document.getElementById("product-container");


function buildDomString(product){
  var domString = "";

  domString +=  '<section class="product">';
    domString +=    '<div class="title">';
    domString +=          '<h2>' + product.name + '</h2>';
    domString +=      '</div>';
    domString +=      '<div class="image">';
    domString +=      '<img src="' + product.imagePath + '" alt="' + product.imageAlt + '">';
    domString +=    '</div>';
    domString +=      '<h6>$' + product.price + '</h6>';
    domString +=    '</div>';
    domString +=    '</section>';
    return domString;
}