//Shop Now 


var products = [];
function addProduct (name, imagePath, imageAlt, price){
	products.push ({
		name: name,
		imagePath: imagePath,
		imageAlt: imageAlt,
		price: price
	});
}
addProduct("product1", "img1", "alt1", "price1");
addProduct("product2", "img2", "alt2", "price2");
addProduct("product3", "img3", "alt3", "price3");
addProduct("product4", "img4", "alt4", "price4");
addProduct("product5", "img5", "alt5", "price5");
addProduct("product6", "img6", "alt6", "price6");
addProduct("product7", "img7", "alt7", "price7");
addProduct("product8", "img8", "alt8", "price8");
addProduct("product9", "img9", "alt9", "price9");
addProduct("product10", "img10", "alt10", "price10");
addProduct("product11", "img11", "alt11", "price11");
addProduct("product12", "img12", "alt12", "price12");
var pigString = "";
for (var i =0; i < products.length; i++) {
  	pigString +=  '<section class="product">';
    pigString +=   	 '<div class="image">';
    pigString +=     		'<img src="' + products[i].imagePath + '" alt="' + products[i].imageAlt + '">';
    pigString +=   	 '</div>';
    pigString +=	 '<div class="details">';
    pigString +=        	'<h3>' + products[i].name + '</h3>';
    pigString +=      		'<h5>' + products[i].price + '</h5>';
    pigString +=     '</div>';
    pigString +=    '</section>';
}
console.log(pigString);
document.getElementById("product-container").innerHTML += pigString;
