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
addProduct("Workout Wear", "./products/Workout.png", "Workout Wear", "$25.00");
addProduct("Sushi Backpack", "./products/Sushi.png", "Sushi Backpack", "$34.99");
addProduct("Derby Hat", "./products/Sunday.png", "Derby Hat", "$55.00");
addProduct("Guinea Gibson", "./products/Rocker.png", "Guinea Gibson", "$325.00");
addProduct("Potter Proud", "./products/Potter.png", "Potter Attire", "$19.99");
addProduct("Ewok Wrap", "./products/Ewok.png", "Ewok Wrap", "$29.99");
addProduct("Guinea Beats", "./products/DJ.png", "Guinea Beats", "$199.00");
addProduct("Ranch Wear", "./products/CowboyHat.png", "Ranch Wear", "$45.00");
addProduct("Couture Chic", "./products/Couture.png", "Couture Chic", "$59.00");
addProduct("Mason Outfitted", "./products/Bowtie.png", "Mason Outfitted", "$44.00");
addProduct("Hipster Vision", "./products/Glasses.png", "Hipster Vision", "$19.99");
addProduct("Blankie", "./products/blanket.png", "Blanket", "$24.99");

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
