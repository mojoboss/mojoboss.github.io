var bio = {
	"name": "Mohit Joshi",
	"role": "Software Developer",
	"contacts": {
		"email": "<a href = mailto:mohit.joshi94@outlook.com> mohit.joshi94@outlook.com </a>",
		"github": "<a href = https://twitter.com/_mohit_joshi> Github profile </a>",
		"twitter": "<a href = http://www.github.com/mojoboss> Twitter handle </a>",
		"location": "<a href = http://www.iiitm.ac.in> IIITM Gwalior </a>"
	},
	"picture": "images/me.jpg",
	"welcomeMessage": "I'm currently a pre-final year engineering student at the Indian Institute of Information Technology and Management, Gwalior.  Thanks for stopping by!",
	"skills": ["python developer", "Software Development", "Machine Learning", "Game Developer"]
};

var education = {
	"schools": [
		{ "name": "Indian Institute of Information Technology and Management",
			"datesAttended": "2012 - 2017",
			"location": "Gwalior, Madhya Pradesh, India",
			"degree": "Integrated Post Graduate (B.Tech + M.Tech)",
			"major": "Information Technology",
			"minor": "Information Technology",
			"url": "http://www.iiitm.ac.in"
		}		
	],
	"onlineCourses": [
		{ "school": "Coursera",
			"title": "An Introduction to Interactive Programming in Python",
			"completed": "October 2013",
			"url": "https://www.coursera.org/course/interactivepython1"
		},
		{ "school": "Udacity",
			"title": "Web Development",
			"completed": "August 2014",
			"url": "https://www.udacity.com/course/cs253"
		},
		{ "school": "Udacity",
			"title": "Developing android apps",
			"completed": "December 2014",
			"url": "https://www.udacity.com/course/developing-android-apps--ud853"
		},
		{ "school": "Udacity",
			"title": "UX Design for Mobile Developers",
			"completed": "December 2014",
			"url": "https://www.udacity.com/course/ux-design-for-mobile-developers--ud849"
		},										
		{ "school": "Coursera",
			"title": "Machine Learning",
			"completed": "March 2015",
			"url": "https://www.coursera.org/learn/machine-learning"
		},
		{ "school": "Udacity",
			"title": "Intro to Machine Learning",
			"completed": "May 2015",
			"url": "https://www.udacity.com/course/intro-to-machine-learning--ud120"
		},
		{ "school": "Udacity",
			"title": "Machine Learning: Reinforcement Learning",
			"completed": "June 2015",
			"url": "https://www.udacity.com/course/machine-learning-reinforcement-learning--ud820"
		},
		{ "school": "Udacity",
			"title": "HTML5 Canvas",
			"completed": "September 2015",
			"url": "https://www.udacity.com/course/html5-canvas--ud292"
		},
		{ "school": "Udacity",
			"title": "Full Stack Foundations",
			"completed": "Novenber 2015",
			"url": "https://www.udacity.com/course/full-stack-foundations--ud088"
		}	
		
	]
};

var projects = {
	"projects": [
		{
			"title": "Developing classic Asteroids game in python",
			"datesWorked": "August 2013 - October 2013",
			"description": "This game was made as the final project for Rice University's 'Interactive programming in python' course in coursera.",
			"images": ["images/asteroids.png"],
			"url": "https://github.com/mojoboss/Asteroids-game"
		},
		{
			"title": "Sunshine",
			"datesWorked": "December 2014",
			"description": "A weather app developed for weather updates using content providers",
			"images": ["images/sunshine.png"],
			"url": "https://github.com/mojoboss/Sunshine"
		},
		{
			"title": "Machine Learning to find corporate fraud",
			"datesWorked": "May 2015",
			"description": "Using Machine Learning to Identify Enron Corporate Fraud using enron dataset.",
			"url": "https://github.com/mojoboss/ud120-finalproject"
		},
		{
			"title": "Multi-agent Machine learning for classic MS-pacman",
			"datesWorked": "July 2015 - September 2015",
			"description": "Implementing a simple pacman game in python using Pygame library and then using machine learning to train an autonomous pacman agent using single and multi agent approaches",
			"images": ["images/pacman.png"],
			"url": "https://github.com/mojoboss/pacman"
		},
		{
			"title": "Virtual doctor",
			"datesWorked": "October-30 2015 - November 1 2015",
			"description": "This project was made during a hackathon to assist medical workers by using artificial intelligence. It gives answers to medical queries or problems. Its deployed using IMB bluemix. ",
			"images": ["images/doctor.png"],
			"url": "http://devpost.com/software/inoutprimaryrepo-i0m34t"
		}

	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();

/**
 * Skills Chart
 */
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Skills'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Used (year)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Duration (months)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Used in {point.x} for {point.y} month(s)'
                }
			}
		},
		series: [{
				name: 'Java',
				color: 'rgba(223, 83, 83, .5)',
				data: [[2013, 1],[2013, 2],[2014, 6],[2014, 7],[2014, 12]]
			},
			{
				name: 'python',
				color: 'rgba(119, 152, 191, .5)',
				data: [[2013, 4],[2013, 5],[2013, 6],[2013, 7],[2013, 8], [2013, 9], [2015, 5], [2015, 6], [2015, 7], [2015, 8], [2015, 9], [2015, 10]]
			},
			{
				name: 'SQL',
				color: 'rgba(119, 152, 80, .5)',
				data: [[2013, 9], [2013, 10], [2014, 5], [2014, 6] [2015, 9], [2015, 10]]
			},
			{
				name: 'C++',
				color: 'rgba(0, 102, 0, .5)',
				data: [[2012, 9], [2012, 10], [2013, 10], [2013, 11], [2015, 7], [2015, 8], [2015, 8], [2015, 9]]
			},
			{
				name: 'C',
				color: 'rgba(0, 102, 0, .5)',
				data: [[2012, 6], [2012, 7]]
			},
			{
				name: 'Javascript',
				color: 'rgba(204, 0, 0, .5)',
				data: [[2013, 6], [2015, 9], [2015, 10]]
			},
			{
				name: 'HTML/CSS',
				color: 'rgba(153, 51, 0, .5)',
				data: [[2013, 5], [2013, 6], [2015, 8], [2015, 9], [2015, 10]]
			},
			{
				name: 'Web Development',
				color: 'rgba(0, 153, 102, .5)',
				data: [[2015, 7]]
			}
			
			]
	});
});



