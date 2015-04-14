var radio
$(document).ready(function(){
	$(".session").change(function(e){
		var id = e.target.id;
		// get id, class of parent function, and update array of specific id 
		console.log("id: " + id + "       parent: " + $("#" + id).parents("div").attr('class'));
			// $("#" + id).parents("div").attr('class') gives classes of div, 
			// so need to parse to get specific radio group, and then put it into an array
		$("#" + id).parents("div.form-group").addClass("has-error");
			// makes form-group have error
	});
});