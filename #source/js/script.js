// $(document).ready(function () {
// 	$('.hi__burger').click(function (event) {
// 		$('.hi__burger,.hi__menu').toggleClass('active');
// 	});
// });
var d = document.getElementsByClassName('hi__burger');
// var hml = document.getElementsByClassName('hi__menu-link');
$(document).ready(function () {
	$('.hi__burger').on('click', function (e) {
		$(d).toggleClass('active');
	});
	$('.hi__menu-link').on('click', function (e) {
		$(d).removeClass('active');
	});
});
// $(document).ready(function () {
// 	$('.hi__menu-link').on('click', function (e) {
// 		$(hml).toggleClass('hi__menu-link_active');
// 	});
// });