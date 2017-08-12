///  **** JOBS PAGE ****  ///
var allJobs = [];

var job1 = {
	title: "Graphic Designer",
	location: "Parsippany, NJ",
	description: "This position works on the design of digital assets, printed promotional materials, social media content, blog graphics, and other projects in conjunction with our marketing and e-commerce team. Conceptualizes and develops innovative designs that maintain brand consistency. Reporting to the Creative Director, you will support the Product and Marketing teams to execute modern, beautiful, mobile-first designs that help push the brand’s digital presence forward. You are a strategic, out-of-the-box thinker with a passion for keeping up with the latest design trends, but you also stay laser-focused on the details of executing individual tasks in a tactical, efficient manner. You’re comfortable with meeting deadlines, working fast, responding to feedback, and collaborating closely with different teams. You’ll be a critical part of bringing our content, shop, and brand vision to life by creating meaningful experiences for users across multiple platforms and channels. ", 
}

var job2 = {
	title: "Executive Assistant",
	location: "Parsippany, NJ",
	description: "The Executive Assistant supports the office of the CEO and oversees all aspects of the executive office’s schedule, meetings, board interaction and meetings, including Executive team meetings and projects.  The position requires broad knowledge of organization operations and policy, a high level of executive experience, discretion, solid technical skill and a dedication to the mission of the FGBG.  The Executive Assistant must be able to interact positively and diplomatically with a wide range of senior executives, as well as with FGBG Board members, vendors, staff and patrons.",
}

var job3 = {
	title: "Clothier",
	location: "San Diego, CA",
	description: "Reporting to the Lead Designer; cut, trim and stitch clothes or pieces of clothes (or at other’s times shoes and bags) together. Design and draw clothes and/or shoes or bags and present ideas to the company. Create patterns custom to the unique guinea pig figure. Communicate with leadership and marketing to determine the type of material, designs and decorative items to put on the garment.  Sew clothes with a sewing machine or by hand as the design and material requires like edges and linings. Check the finished products for imperfections. Fit, alter, repair according to the desires of the clients as needed. Press the finished product with hand irons or with pressing machines. Replace or repair defective garment parts. Examine the garments carefully for some other alterations to be made. Attend to clients complaints professionally.",
}

var job4 = {
	title: "Social Media Specialist",
	location: "San Diego, CA",
	description: "Reporting to the Marketing Director the goal of this role is to gradually achieve superior customer engagement and intimacy, website traffic and revenue by strategically exploiting all aspects of the social media marketing roadmap. The guinea selected for this role should have a solid understanding of how each social media channel works and how to optimize content so that it is engaging on those channels. You are responsible for joining relevant conversations on behalf of the brand and “soft selling” the product by providing support to current and prospective customers. Build and execute social media strategy through competitive research, platform determination, benchmarking, messaging and audience identification. Generate, edit, publish and share daily content (original text, images, video or HTML) that builds meaningful connections and encourages community members to take action. Set up and optimize company pages within each platform to increase the visibility of company’s social content. Moderate all user-generated content in line with the moderation policy for each community. Create editorial calendars and syndication schedules. Continuously improve by capturing and analyzing the appropriate social data/metrics, insights and best practices, and then acting on the information. Collaborate with other departments (customer relations, sales etc) to manage reputation, identify key players and coordinate actions.",
}

allJobs.push(job1);
allJobs.push(job2);
allJobs.push(job3);
allJobs.push(job4);

console.log(allJobs);

var workImages = [];
function addWorkImage (imagePath, imageAlt, location){
	workImages.push ({
		imagePath: imagePath,
		imageAlt: imageAlt,
		location: location
	});
}

addWorkImage("fgbgcorp.jpg", "Corporate Headquarters", "Corporate Headquarters");
addWorkImage("guineaoffice.jpg", "Parsippany, NJ Office", "Parsippany, NJ Office");
addWorkImage("guinearec.jpg", "Outdoor Workspaces", "Outdoor Workspaces");



var imgString = "";
for (var i = 0; i < workImages.length; i++) {
	imgString += '<article class="pig-work">';
  	imgString +=  '<img class="work-image" src=' + workImages[i].imagePath + ' alt=' + workImages[i].imageAlt + '>';
    imgString +=  '<h5 class="work-description">' + workImages[i].location + '</h5>';
    imgString += '</article>'
}

document.getElementById("images-container").innerHTML += imgString;
 		

var jobContainer = document.getElementById("job-container");


for (var i = 0; i < allJobs.length; i++){

	var currentJob = allJobs[i];

	var domString = "";

	domString += '<article class="job">';
	domString += 	'<h3 class="title">' + currentJob.title + '</h3>';
	domString += 	'<h4>' + currentJob.location + '</h4>';
	domString += 	'<p class="description">' + currentJob.description + '</p>';
	domString +=	'<button type="button" id="apply-button">' + '<a href="mailto:guineatalent@fgbg.com">' + "Apply Today" + '</button>' + '</a>'
	domString += '</article>';

	jobContainer.innerHTML += domString;
	console.log("test:", domString);

}


document.getElementById("apply-button").addEventListener("click", function (){
	applyScroll;
});






