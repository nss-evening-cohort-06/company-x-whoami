//Employee Array
// create array of 3 employees
var employees = [
	{
		imgPath: "employees/Nerd.png",
		name: "Jerry Swinefield",
		title: "CEO",
		bio: "Lorem Ipsum"
	},
	{
		imgPath: "employees/Bowie.png",
		name: "Diggy Bundy",
		title: "Creative Director",
		bio: "Lorem Ipsum"
	},
	{
		imgPath: "employees/Artist.png",
		name: "Amy Swinehouse",
		title: "Lead Designer",
		bio: "Lorem Ipsum"
	}];
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
addEmployee("employees/Baker.png", "Guineath Paltro", "title", "about");
// call the function again
addEmployee("employees/Nutkin.png", "Lindsay Loham", "title", "about");
// write and Print to domString
	var domString = "";
for (var i = 0; i < employees.length; i++) {
	domString +=	'<div class="employee">';
	domString +=  	'<img src=' + employees[i].imgPath + '>';
	domString +=		'<h2>' + employees[i].name + '</div>';
	domString +=		'<h3>' + employees[i].title + '</h3>';
	domString +=		'<p>' + employees[i].bio + '<p>';
	domString +=	'</div>'
}
document.getElementById("employee-container").innerHTML = domString;
//Jobs Array

var allJobs = [];

var job1 = {
	title: "Graphic Designer",
	location: "Parsippany, NJ",
	description: "This position works the design of digital assets, printed promotional materials, social media content, blog graphics, and other projects in conjunction with our marketing and e-commerce team. Conceptualizes and develops innovative designs that maintain brand consistency.", 
	apply: "",
}

var job2 = {
	title: "Executive Assistant",
	location: "Parsippany, NJ",
	description: "",
	apply: "",
}

var job3 = {
	title: "",
	location: "San Diego, CA",
	description: "",
	apply: "",
}

var job4 = {
	title: "",
	location: "San Diego, CA",
	description: "",
	apply: "",
}

allJobs.push(job1);
allJobs.push(job2);
allJobs.push(job3);
allJobs.push(job4);

console.log(allJobs);