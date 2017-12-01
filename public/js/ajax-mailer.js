$(document).ready(function() {

//Cashing the form
var form = $('.form-style-4');

//Prevent form from refreshing the page
$(form).click(function(e) {
	e.preventDefault();
});

//Getting the data from the form in the proper condition for mail.php
var formData = $(form).serialize();

//Transfer the form using AJAX
$.ajax({
	type: 'POST',
	url: $(form).attr('action'),
	data: formData
})
.done(function(response) {
$('.form-style-4').fadeOut(100000);
})
.fail(function(data) {
  console.log('fail');
})

});