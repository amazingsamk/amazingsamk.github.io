var radioStore = {"session":"", "gender":"", "shirt":""};
$(document).ready(function(){
	$(".radio-group").change(function(e){
		var id = e.target.id;
		var targetClass = $("#" + id).parents("div").attr('class').substring(9);
		console.log(targetClass);
		console.log("id: " + id);
		// get id, class of parent function, and update array of specific id 
		// console.log("id: " + id + "       parent: " + $("#" + id).parents("div").attr('class'));
		// console.log(radioStore[0][1]);
		radioStore[targetClass] = id;
			// $("#" + id).parents("div").attr('class') gives classes of div, 
			// so need to parse to get specific radio group, and then put it into an array
		// $("#" + id).parents("div.form-group").addClass("has-error");
			// makes form-group have error
	});

	$("#submitButton").click(function(e){
		e.preventDefault();
		// alert("a");
		// var elements = 
		// ["firstName",
		// "lastName",
		// "studentDOB",
		// "studentSchool",
		// "studentEmail"];

		var allElements = 
		[
			["session","radio"],
			["firstName","text"],
			["lastName","text"],
			["gender","radio"],
			["grade","select"],
			["studentDOB","dob"],
			["studentSchool","text"],
			["studentEmail","email"],
			["shirt","radio"],
			["studentStreet","text"],
			["studentCity","text"],
			["studentState","text"],
			["studentZip","number-zip"],
			["homePhone","phone"],
			["parent1Name","text"],
			["parent1Phone","phone"],
			["parent1Email","email"]
		];



		var check = true;
		var badElement;
		for(var i = 0; i < allElements.length; i++)
		{
			console.log(allElements[i][0] + "   " + allElements[i][1]);
			if(!checkForm(allElements[i][0], allElements[i][1]) && check)
			{
				console.log("BAD");
				badElement = allElements[i][0];
				check = false;
			}
		}
		console.log("BAD ELEMENT:" + badElement);
		if(!check)
		{
			$('html, body').animate({
				scrollTop: $("#" + badElement).offset().top
			}, 650);
		}
		else
		{
			alert("form okay, all inputs good")
		}

	});
});


function checkForm(element, type)
{
	if(!validate(element, type))
	{
		$("#" + element).parents("div.form-group").addClass("has-error");

		return false;
	}
	else
	{
		$("#" + element).parents("div.form-group").removeClass("has-error");

		return true;
	}
}
	
	// types: radio, text, select, dob, email, phone, number-zip
function validate(id, type)
{
	console.log(type);
	switch(type)
	{
		case "radio":
			return validateRadio(id);
			break;
		case "select":
			return validateSelect(id);
			break;
		case "phone":
			return /^\d{10}$/.test($("#" + id).val());
			// return validatePhone(id);
			break;
		case "number-zip":
			return /^\d{5}$/.test($("#" + id).val());
			break;
		case "dob":
			return /^\d{6}$/.test($("#" + id).val());
			break;
		case "text":
			return /^[A-Za-z0-9]+$/.test($("#" + id).val());
			break;
		case "email":
			return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($("#" + id).val());
			break;
	}
	return false;
	// return regex.test($("#" + id).val());
}

function validateRadio(element)
{
	if(radioStore[element] === "")
		return false;
	return true;
}

function validateSelect(element)
{
	if($("#" + element).val().trim().length === 0)
		return false;
	return true;
}

function validatePhone(element)
{
	// FOR TESTING: IF LENGTH != TO 0, THEN PHONE IS OKAY
	if($("#" + element).val().trim.length === 0)
		return false;
	return true;
}

function print()
{
	for(var i in radioStore)
	{
		console.log(i + ": " + radioStore[i]);
	}
	// return console.log(radioStore['session']);
}
