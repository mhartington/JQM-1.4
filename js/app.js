/*
    // Called to navigate to the main app
  var startApp = function() {
    $location.path('/main');

    // Set a flag that we finished the tutorial
    window.localStorage['didTutorial'] = true;
  };

  // Check if the user already did the tutorial and skip it if so
  if(window.localStorage['didTutorial'] === "true") {
    startApp();
  }
*/


$(function () {
	FastClick.attach(document.body);
});

$(function () {
	$("[data-role=panel]").panel().enhanceWithin();
	
});


$('body').on("swiperight", function (ev) {
	if (!$(ev.target).closest('.product').length) {
		$('.ui-panel').panel('open');
	}
});

$('body').on("swipeleft", function () {
	$('.ui-panel').panel('close');
});


$(document).on('pageshow', function () {
	$('.product').delay(250).animate({
		opacity: 1
	}, 1000);
$('.panelOpen').on('click', function(){
		$("[data-role=panel]").panel('open');
	});


});




$(document).on('pageshow', '#a','#a1',  function () {
	var mySwiper;
	mySwiper = new Swiper('.swiper', {
		pagination: '.pagination',
		paginationClickable: true,

	});

	$('.prevSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper.swipePrev();
	});


	$('.nextSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper.swipeNext();
	});


});



