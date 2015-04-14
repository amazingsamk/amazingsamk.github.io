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
		alert("a");
		var elements = 
		["firstName",
		"lastName",
		// "grade",
		"studentDOB",
		"studentSchool",
		"studentEmail"];

		// var check = true;
		var badElement;
		for(var i = 0; i < elements.length; i++)
		{
			if(!checkForm(elements[i]))
			{
				$('html, body').animate({
					scrollTop: $("#" + elements[i] + "-label").offset().top
				}, 650);
				break;

			}
		}


	});
});


function checkForm()
{
	if(!validate(element))
	{

		return false;
	}
	else
	{

		return true;
	}
}

function validate(id)
{
	var type = $("#" + id).attr("type");
	console.log(type);
	switch(type)
	{
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


function print()
{
	for(var i in radioStore)
	{
		console.log(i + ": " + radioStore[i]);
	}
	// return console.log(radioStore['session']);
}




/* var associative_array = new Array();
associative_array["one"] = "Lorem";
associative_array["two"] = "Ipsum";
associative_array["three"] = "dolor";
for (i in associative_array) { alert(i) };*/