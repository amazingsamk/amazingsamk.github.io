$(document).ready(function(){
	$(".session").change(function(e){
		var id = e.target.id;
		// get id, class of parent function, and update array of specific id 
		console.log("id: " + id + "       parent: " + $("#" + id).parents("div").attr('class'));
		$("#" + id).parents("div.form-group").addClass("has-error")
	});
});