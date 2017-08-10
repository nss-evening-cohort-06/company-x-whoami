///  **** JOBS PAGE ****  ///
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

var jobContainer = document.getElementById("job-container");

for (var i = 0; i < allJobs.length; i++){

	var currentJob = allJobs[i];

	var domString = "";

	domString += '<article class="job">';
	domString += 	'<h3>' + currentJob.title + '</h3>';
	domString += 	'<h4>' + currentJob.location + '</h4>';
	domString += 	'<p>' + currentJob.description + '</p>';
	domString +=	'<p>' + currentJob.apply + '</p>';
	domString += '</article>';

	jobContainer.innerHTML += domString;
	console.log("test:", domString);

}