$(function() {
	$('#success').hide();
	$('#failled').hide();
});

$('#formContact').submit(function(e) {
	if (validate()) {
		$('#success').fadeIn(400);
		$('#failled').hide();
	} else {
		$('#success').hide();
		$('#failled').fadeIn(400);
	}
	e.preventDefault();
});

$('#reset').click(function(e) {
	$('#success').hide();
	$('#failled').hide();
});

const validate = () => {
	const name = $('#name').val().trim();
	const email = $('#email').val().trim();
	const gender = $('[name="gender"]:checked').length;
	const from = $('#from').val();
	const message = $('#message').val().trim().length;
	//console.log("name " + name + " email " + email + " gender " + gender + " from " + from);
	
	return (name == null || name == "" || 
					email == null || email == "" || 
					gender == 0 || from == 0 ||
				 message < 3) ? false : true;
}