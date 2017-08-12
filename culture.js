// FGBG Culture
var culture = [
	{
		title: "FGBG Mission",
		imgPath: "culture-imgs/FGBG-mission.jpg",
		description: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
	},
	{
		title: "FGBG Company Culture",
		imgPath: "culture-imgs/FGBG-culture.jpg",
		description: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
	},
	{
		title: "FGBG Workplace",
		imgPath: "culture-imgs/workplace.jpg",
		description: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
	},
	{
		title: "FGBG Philanthropy",
		imgPath: "culture-imgs/philanthropy.jpg",
		description: "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration."
	}];
var cultureString = "";
for (var i = 0; i < culture.length; i++) {
	cultureString +='<section>';
	cultureString +=  	'<div class="culture-description">';
	cultureString +=		'<h3 class="cult-name">' + culture[i].title + '</h3>';
	cultureString +=		'<p class="cult-blurb">' + culture[i].description + '</p>';
	cultureString +=		'<img src=' + culture[i].imgPath + '>';
	cultureString +=	'</div>'
	cultureString +='</section>'
}
document.getElementById("culture-container").innerHTML = cultureString;
