$(document).ready(function() {
	function sendEmails()
	{
		// alert(email);
		if($("#email-input").val().length != 0)
		// if($("#emailInput").val().length != 0 && IsEmail($("#emailInput").val()))
		{
			var data = "email=" + $("#email-input").val();
	
			$.ajax({
				type: "POST",
				data: data,
				url:"assets/php/addEmailsMailChimp.php",
				success:function(result)
				{
					console.log(result);
					$("#form-div").html("<h4>Thanks for submitting your email! " + 
						"We'll put you on the email list for updates!</h4>");
				}
			});
		}
	}

	$("#submit").click(function(e) {
		// alert("a");
		e.preventDefault();
		sendEmails();
	});

});