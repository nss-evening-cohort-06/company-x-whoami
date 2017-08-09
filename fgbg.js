// create array of 3 employees
var employees = [
	{
		imgPath: "glasses pic",
		name: "Jerry Swinefield",
		title: "CEO",
		bio: "Lorem Ipsum"
	},
	{
		imgPath: "bowie pic",
		name: "Diggy Bundy",
		title: "Creative Director",
		bio: "Lorem Ipsum"
	},
	{
		imgPath: "artist",
		name: "Amy Swinehouse",
		title: "Lead Designer",
		bio: "Lorem Ipsum"
	}];
	console.log(employees[0]);
// create function to add employees
	// accept 4 arguements: name, title, imgPath, bio
function addEmployee (imagePath, name, title, bio) {
	employees.push({
		imgPath: imagePath,
		name: name,
		title: title,
		bio: bio
	});
}
// call the function
addEmployee("pic", "Guineath Paltro", "title", "about");
// call the function again
addEmployee("pic", "Lindsay Loham", "title", "about");
// write and Print to domString
	var domString;
for (var i = 0; i < employees.length; i++) {
	domString +=	'<div>';
	domString +=  	'<div>' + employees[0].imgPath + '</div>';
	domString +=		'<h2>' + employees[1].name + '</div>';
	domString +=		'<h3>' + employees[2].title + '</h3>';
	domString +=		'<p>' + employees[3].bio + '<p>';
	domString +=	'</div>'
}
