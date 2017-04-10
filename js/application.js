$(document).ready(function(){
  $('.collapsible').collapsible();
});

$(document).ready(function(){
  // jQuery for icons mouseover
	$(".js-logo").hover(function() {
		$(this).attr("src","img/logo1.png");
			}, function() {
		$(this).attr("src","img/logo.png");
	});
  $(".js-social1").hover(function() {
		$(this).attr("src","img/instagram.png");
			}, function() {
		$(this).attr("src","img/instagram-logo.png");
	});
  $(".js-social2").hover(function() {
		$(this).attr("src","img/facebook2.png");
			}, function() {
		$(this).attr("src","img/facebook.png");
	});
});

$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({fullWidth: true});
});

$(document).ready(function(){
  // jQuery for arrow up on click
  // Marche pas pourtant pas loin (marche avec le hover)
  $(".js-arrow").click(function() {
		$(this).attr("src","img/up-arrow.png");
			}, function() {
		$(this).attr("src","img/arrow-down.png");
	});
});
