//Shop Now 


var products = [];
function addProduct (name, imagePath, imageAlt, description, price){
	products.push ({
		name: name,
		imagePath: imagePath,
		imageAlt: imageAlt,
        description: description,
		price: price
	});
}
addProduct("Workout Wear", "./products/Workout.png", "Workout Wear", "Headband and weights for getting fit", "$25.00");
addProduct("Sushi Backpack", "./products/Sushi.png", "Sushi Backpack", "It is a backpack that looks like sushi", "$34.99");
addProduct("Derby Hat", "./products/Sunday.png", "Derby Hat", "A beautiful hat to wear to the races", "$55.00");
addProduct("Guinea Gibson", "./products/Rocker.png", "Guinea Gibson", "When Guineas want to rock", "$325.00");
addProduct("Potter Proud", "./products/Potter.png", "Potter Attire", "Already for the first day at Hogwarts", "$19.99");
addProduct("Ewok Wrap", "./products/Ewok.png", "Ewok Wrap", "Vacation to the forest moon of Endor", "$29.99");
addProduct("Guinea Beats", "./products/DJ.png", "Guinea Beats", "It's all about that bass", "$199.00");
addProduct("Ranch Wear", "./products/CowboyHat.png", "Ranch Wear", "Take 'er easy there Pilgram", "$45.00");
addProduct("Couture Chic", "./products/Couture.png", "Couture Chic", "When you have more issues than Vogue", "$59.00");
addProduct("Mason Outfitted", "./products/Bowtie.png", "Mason Outfitted", "Be the Grand Master of your lodge", "$44.00");
addProduct("Hipster Vision", "./products/Glasses.png", "Hipster Vision", "Have a better outlook than everyone else", "$19.99");
addProduct("Blankie", "./products/blanket.png", "Blanket", "Straight up coziness", "$24.99");

var pigString = "";
for (var i =0; i < products.length; i++) {
  	pigString +=  '<section class="product">';
    pigString +=   	 '<div class="image">';
    pigString +=     		'<img src="' + products[i].imagePath + '" alt="' + products[i].imageAlt + '">';
    pigString +=   	 '</div>';
    pigString +=	 '<div class="details">';
    pigString +=        	'<h3>' + products[i].name + '</h3>';
    pigString +=            '<p>' + products[i].description + '</p>'
    pigString +=      		'<h5>' + products[i].price + '</h5>';
    pigString +=     '</div>';
    pigString +=    '</section>';
}
console.log(pigString);
document.getElementById("product-container").innerHTML += pigString;
