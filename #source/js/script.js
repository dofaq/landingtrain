var d = document.getElementsByClassName('hi__burger');
$(document).ready(function () {
	$('.hi__burger').on('click', function (e) {
		$(d).toggleClass('active');
	});
	$('.hi__menu-link').on('click', function (e) {
		$(d).removeClass('active');
	});
});