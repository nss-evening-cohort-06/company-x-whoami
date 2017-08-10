var domString;
var awards = [
	{
		imgPath: "award-images/Award1.jpg",
		awardName: "The American Guinea Pig Public Service Award",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum ut tellus eget sagittis. Ut semper augue justo, vel pellentesque risus lacinia ut. Duis eget sem luctus, venenatis ligula tristique, aliquam purus. Phasellus lobortis molestie massa vitae consectetur. Nam ac ipsum ut urna mollis luctus sed in ex. Phasellus finibus semper elit, non dapibus diam tincidunt sit amet."
	},
	{
		imgPath: "award-images/Award2.jpg",
		awardName: "Tony Award for Costume Design on HAMilton",
		description: "Aliquam sit amet ullamcorper lectus. Nullam volutpat purus ultricies tempus viverra. Ut scelerisque, turpis in lacinia vulputate, magna nibh commodo justo, vel suscipit arcu quam in odio. Duis sagittis ligula vitae odio molestie finibus. In imperdiet ultrices mauris, sed porttitor arcu blandit sollicitudin. Praesent eget ligula sed ipsum dignissim euismod sit amet eu nulla. Sed justo mi, varius ut sagittis id, sollicitudin aliquet urna."
	},
	{
		imgPath: "award-images/Award3.jpg",
		awardName: "New York Times Fashion: Brand of the Millennium",
		description: "Vestibulum tempus consectetur dolor, ullamcorper maximus orci posuere sit amet. Vivamus dapibus lacinia ante vel rhoncus. Pellentesque in ligula a dolor cursus aliquet eu eu ante. Donec ac sem mattis, tincidunt nibh sit amet, facilisis sem. Pellentesque eros augue, interdum vel rhoncus et, varius euismod est. Donec ac magna quis odio congue ultrices. Nunc fringilla turpis hendrerit risus tempus, ac mattis metus tincidunt. Donec lobortis ultricies viverra. Proin sem ex, cursus et nunc ac, consequat ornare orci."
	}];
for (var i = 0; i < awards.length; i++) {
	domString +='<section>';
	domString +=  '<img src=' + awards[i].imgPath + '>';
	domString +=	'<div class="award-description">';
	domString +=		'<h3 class="award-name">' + awards[i].awardName + '</h3>';
	domString +=		'<p class="award-blurb">' + awards[i].description + '</p>';
	domString +=	'</div>'
	domString +='</section>'
}
document.getElementById("press-container").innerHTML = domString;