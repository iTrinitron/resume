var info = {
	"name" : "Michael Chin",
	"number" : "(425) 922 8767",
	"email" : "michael.chin425@gmail.com",
	"website" : "www.michaelrchin.com",

	"college" : {
		"name" : "University of California, San Diego",
		"date" : "2012 - Present",
		"location" : "San Diego, CA"
	}

	"experience" : [
		{
			"name" : "Blizzard Entertainment",
			"location" : "Irvine, CA",
			"description" : "Developing and designing a web application to host online competitive collegiate 
			gaming tournaments. Servicing high profile events such as the NACHO and NACC to over 10,000+ 
			competitors",
			"date" : "2014"
		}
	]

};


$("#name").html(info.name);

$("#contact #number").html(info.number);
$("#contact #website").html(info.website);
$("#contact #email").html(info.email);

$("#experience").html(function())