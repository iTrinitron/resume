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



};


$("#name").html(info.name);

$("#contact #number").html(info.number);
$("#contact #website").html(info.website);
$("#contact #email").html(info.email);