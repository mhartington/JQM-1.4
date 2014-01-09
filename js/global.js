$(function() {
    FastClick.attach(document.body);
});



$(document).on('pageshow', function () {

	$('.product').delay(250).animate({
		opacity: 1
	}, 1000);

$('.ui-page').on('swiperight', function(ev) {
 if ( !$(ev.target).closest('.product').length ) {
    $('.ui-panel-position-left').panel('open');
  }

else{
}
});
	
//	$('.ui-page').on('swipeleft', function(ev) {
//		$('.ui-panel.ui-panel-position-right').panel('open');
//	});
	
	$('.panelOpen').on('click', function(){
		$('.ui-panel').panel('open');
	});
	
});

$(document).on('pagebeforehide', function(){
		$('.ui-panel').panel( "close" );
});

$(document).on('deviceready', function () {
	if (parseFloat(window.device.version) === 7.0) {
		StatusBar.show();
		// $('body').css('margin-top','20px')
		//$('<link rel="stylesheet" href="ios.css" type="text/css" />').appendTo('head');

	} else {
		//nothing..
	}


	var networkState = navigator.connection.type;
	if (networkState == "none") {
		//nothing..
	} else {
		registerPushwoosh();
		app.initialize();
	}

});


//a1 swipers
$(document).on('pageshow', '#a1', function () {
	var mySwiper;
	mySwiper = new Swiper('.swiper902', {
		pagination: '.pagination902',
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



//b1 swipers
$(document).on('pageshow', '#b1', function () {
	var mySwiper4;
	mySwiper4 = new Swiper('.swiper903', {
		pagination: '.pagination-3',
		paginationClickable: true,
	});

	$('.prevSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper4.swipePrev();
	});


	$('.nextSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper4.swipeNext();
	});

});


//c1 swipers
$(document).on('pageshow', '#c1', function () {
	var mySwiper22;
	mySwiper22 = new Swiper('.swiper4522', {
		pagination: '.pagination-4522',
		paginationClickable: true,
	});

	$('.prevSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper22.swipePrev();
	});

	$('.nextSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper22.swipeNext();
	});

});



//d1 swipers
$(document).on('pageshow', '#d1', function () {
	var mySwiper8;
	mySwiper8 = new Swiper('.swiper845', {
		pagination: '.pagination-4',
		paginationClickable: true,
	});

	$('.prevSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper8.swipePrev();
	});


	$('.nextSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper8.swipeNext();
	});

});



//e1 swipers
$(document).on('pageshow', '#e1', function () {

	var mySwiper11;
	mySwiper11 = new Swiper('.swiper987', {
		pagination: '.pagination-5',
		paginationClickable: true,
	});

	$('.prevSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper11.swipePrev();
	});


	$('.nextSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper11.swipeNext();
	});


});


//f1 swipers
$(document).on('pageshow', '#f1', function () {
	var mySwiper13;
	mySwiper13 = new Swiper('.swiper982', {
		pagination: '.pagination-6',
		paginationClickable: true,
	});

	$('.prevSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper13.swipePrev();
	});


	$('.nextSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper13.swipeNext();
	});

});


$(document).on('pageshow', '#pb3', function () {
	var mySwiper17;
	mySwiper17 = new Swiper('.swiperProbe', {
		pagination: '.pagination-7',
		paginationClickable: true,
	});


});


//G1 swipers
$(document).on('pageshow', '#g1', function () {
	var mySwiper20;
	mySwiper20 = new Swiper('.swiperEdge', {
		pagination: '.pagination-8',
		paginationClickable: true,

	});


	$('.prevSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper20.swipePrev();
	});


	$('.nextSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper20.swipeNext();
	});
});


//G2 swipers
$(document).on('pageshow', '#g2', function () {
	var mySwiper21;
	mySwiper21 = new Swiper('.swiperEdge2', {
		pagination: '.pagination-9',
		paginationClickable: true,

	});

	$('.prevSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper21.swipePrev();
	});


	$('.nextSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper21.swipeNext();
	});
});


//H1 swipers
$(document).on('pageshow', '#h1', function () {
	var mySwiper22;
	mySwiper22 = new Swiper('.swiper904', {
		pagination: '.pagination904',
		paginationClickable: true,

	});

	$('.prevSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper22.swipePrev();
	});


	$('.nextSlide').on('click', function (e) {
		e.preventDefault();
		mySwiper22.swipeNext();
	});


});



$(document).on('pageshow', '#i4', function () {
	    $('a.native-anchor').bind('click', function(ev) {
         $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -50
   		 }, 1000);
		  $('.ui-panel.ui-panel-position-right').panel( "close" );
         return false();
     });
	
	
	(function(){
 var data =[
{SKU: 'HI700',
Parameter: 'Ammonia Low Range',
Range: '0.00 to 3.00 ppm NH3-N',
Resolution: '0.01 ppm',
Accuracy: '±0.05ppm ± 5% of reading',
Light: 'Photodiode @470 nm',
AutoOff: 'After 10 min. of inactivity',
Method: 'Adaptation of the ASTM Manual of Water and Environmental Technology:  D1426-92:  Nessler method. The reaction between ammonia and reagents causes a yellow tint in the sample.'
},

{
SKU: 'HI715',
Parameter: 'Ammonia Medium Range',
Range: '0.00 to 9.99 ppm NH3-N',
Resolution: '0.01 ppm',
Accuracy: '±0.05ppm ±5% of reading',
Light: 'Photodiode @470nm',
AutoOff: 'After 10 min. of inactivity',
Method: 'Adaptation of the ASTM Manual of water and Enviromental Technology D1426-92:  Nessler Method.  The reaction between ammonia and reagents causes a yellow tint in the sample.'
},

{
SKU: 'HI733',
Parameter: 'Ammonia High Range',
Range: '0.0 to 99.9 ppm as NH4+',
Resolution: '0.1 ppm',
Accuracy: '±1.0ppm ±5% of reading',
Light: 'Photodiode @470nm',
AutoOff: 'After 10 min. of inactivity',
Method: 'Adaptation of the ASTM Manual of water and Enviromental Technology D1426-92:  Nessler Method.  The reaction between ammonia and reagents causes a yellow tint in the sample.'
},

{
SKU: 'HI755',
Parameter: 'Alkalinity',
Range: '0 to 300 ppm (mg/L)',
Resolution: '1 ppm (mg/L)',
Accuracy: '±5 ppm (mg/L) ±5% of reading',
Light: 'LED @ 610 nm',
AutoOff: 'After 10 min. of inactivity',
Method: 'Colorimetric method. The reaction causes a distinctive range of colors from yellow to blue to develop. This meter has been developed to work with fresh water samples.',
},

{
SKU: 'HI775',
Parameter: 'Alkalinity for fresh water',
Range: '0 to 500 ppm',
Resolution: '1 ppm',
Accuracy: '±5ppm ± 5% of reading',
Light: 'Photodiode @610 nm',
AutoOff: 'After 10 min. of inactivity',
Method: 'Colorimetric method. The reaction causes a distinctive range of colors from yellow to blue to develop. This meter has been developed to work with fresh water samples.',
},

{ 
SKU: 'HI716',
Parameter: 'Bromine',
Range: '0.0 to 8.0 ppm',
Resolution: '0.1 ppm',
Accuracy: '±0.1 ppm ±5% of reading',
Light: 'Photodiode @525 nm',
AutoOff: 'After 10 min. of inactivity',
Method: 'Adaptation of the Standard Methods for the Examination of Water and Wastewater:  18th edition:  DPD method. The reaction between bromin and the reagent causes a pink tint in the sample.'
},

{
SKU: 'HI758',
Parameter: 'Calcium',
Range: '200 to 600 ppm (mg/L)',
Resolution: '1 ppm (mg/L)',
Accuracy: '±6% of reading',
Light: 'LED @ 610 nm',
AutoOff: 'After 10 min. of inactivity',
Method: 'Adaptation of the zincon method',
},

{
SKU: 'HI701',
Parameter: 'Free Chlorine',
Range: '0.00 to 2.50 ppm (mg/L)',
Resolution: '0.01 ppm (mg/L)',
Accuracy: '±0.03 ppm ±3% of reading',
Light: 'LED @ 525 nm',
AutoOff: 'After 2 min. of of inactivity or 10 seconds after reading',
Method: 'Adaptation of USEPA method 330.5:  DPD method. The reaction between the chlorine and DPD reagent causes a pink tint in the sample.',
}, 

{ 
SKU: 'HI761',
Parameter: 'Total Chlorine Ultra Low Range',
Range: '0 to 500 ppb',
Resolution: '1 ppb',
Accuracy:' ±5ppb ± 5% of reading',
Light:' Photodiode @525 nm',
AutoOff: 'After 10 min. of inactivity',
Method: 'Adaptation of the USEPA method 330.5. The reaction between the chlorine and DPD reagent causes a pink tint in the sample.',
},

{
SKU: 'HI711',
Parameter: 'Total Chlorine',
Range: '0.00 to 3.50 ppm (mg/L)',
Resolution:' 0.01 ppm (mg/L)',
Accuracy:' ±0.03 ppm ±3% of reading',
Light: 'LED @ 525 nm',
AutoOff: 'After 2 min. of inactivity or 10 seconds after reading',
Method: 'Adaptation of USEPA method 330.5:  DPD method. The reaction between the chlorine and DPD reagent causes a pink tint in the sample.'
},
 
{
SKU: 'HI771',
Parameter: 'Total Chlorine Ultra High Range',
Range: '0 to 500 ppm',
Resolution: '1 ppm',
Accuracy: '±3 ppm  ± 5% of reading',
Light:' Photodiode @525 nm',
AutoOff: 'After 10 min. of inactivity',
Method: 'Adaptation of The standard methods for water and wastwater 4500CI.'
},

{
SKU: 'HI749',
Parameter: 'Chromium VI Low Range',
Range: '0 to 300 ppb',
Resolution: '1 ppb',
Accuracy:' ±3 ppb ±5% of reading',
Light: 'Photodiode @525 nm',
AutoOff: 'After 10 min. of inactivity',
Method: 'Adaptation of the ASTM Manual of Water and Environmental Technology:  D1687-92:  Diphenylcarbohydrazide method. The reaction between chromium VI and the reagent causes a purple tint in the sample.'
},

{ 
SKU: 'HI723',
Parameter: 'Chromium High Range',
Range:' 0 to 999 ppb (µg/L)',
Resolution: '1 ppb',
Accuracy: '±5 ppb ±5% of reading',
Light: 'LED @ 525 nm',
AutoOff: 'After 10 min. of inactivity',
Method: 'Adaptaion of the ATSM:  Manual of Water and Enviornmental Technology:  D 1687-92:  Diphenylcarbohydrazide method'
},

{
SKU: 'HI727',
Parameter: 'Color of Water',
Range: '0 to 500 PCU',
Resolution: '5 PCU',
Accuracy: '±10 PCU ±5% of reading',
Light:' LED @ 470 nm',
AutoOff: 'After 10 min. of inactivity ',
Method: 'Adepton of Standard Method for the Examination of Water and Wastewater:  21st edition:  Colorimetric Platinum Cobalt method'
},

{ 
SKU: 'HI729',
Parameter: 'Fluoride Low Range',
Range: '0.00 to 2.00 ppm (mg/L)',
Resolution: '0.01 ppm',
Accuracy: '±0.10 ppm ±5% of reading',
Light: 'LED @ 575 nm',
AutoOff: 'After 2 min. of inactivity or 10 seconds after reading ',
Method: 'Adaptation of the EPA method 340.1 and Standard Methods for the Examination of Water and Wastewater:  20th Edition:   SPADNS method'
},

{ 
SKU: 'HI739',
Parameter: 'Fluoride High Range',
Range: '0.0 to 20.0 ppm (mg/L)',
Resolution: '0.1 ppm',
Accuracy: '±0.5 ppm ± 5% of reading',
Light: 'LED @ 575 nm',
AutoOff: 'After 2 min. of inactivity or 10 seconds after reading',
Method: 'Adaptation of SPADNS method'
},

{
SKU: 'HI718',
Parameter: 'Iodine',
Range: '0.0 to 12.5 ppm (mg/L)',
Resolution: '0.1 ppm (mg/L)',
Accuracy: '±0.1 ppm ±5% of reading',
Light: 'LED @ 525 nm',
AutoOff: 'After 2 min. of inactivity or 10 seconds ',
Method: 'Adaptation of the Standard Methods for the Examination of Water and Wastewater:  18th edition:  DPD method.'
},

{
SKU: 'HI721',
Parameter: 'Iron',
Range: '0.00 to 5.00 ppm (mg/L)',
Resolution: '0.01 ppm (mg/L)',
Accuracy: '±0.04 ppm ±2% of reading',
Light: 'LED @ 525 nm',
AutoOff: 'After 3 min. of inactivity or 10 seconds after reading',
Method: 'Adaptation of the EPA. Phenantroline method 315 B:  for natural and treated waters.'
},

{ 
SKU: 'HI726',
Parameter: 'Nickel High Range',
Range:' 0.00 to 7.00 g/L',
Resolution: '0.01 g/L',
Accuracy: '±0.010 g/L ±5% of reading',
Light: 'LED @ 575 nm',
AutoOff: 'After 3 min. of inactivity or 10 seconds  after reading',
Method:'Adaptation of the photometric method'
},

{ 
SKU: 'HI764',
Parameter:'Nitrite Ultra Low Range',
Range: '0 to 200 ppb',
Resolution: '1 ppb',
Accuracy: '±10 ppb ±4% of reading',
Light: 'LED @ 525 nm',
AutoOff: 'After 2 min. of inactivity',
Method: 'Adaptation of the EPA Diazotization method 354.1',
},

{ 
SKU: 'HI707',
Parameter: 'Nitrite Low Range',
Range: '0 to 600 ppb NO2 -N',
Resolution: '1 ppb',
Accuracy:' ±20 ppb ± 5% of reading',
Light: 'Photodiode @470 nm',
AutoOff:' After 10 min. of inactivity',
Method: 'Adaptation of EPA diazotization method 354.1. The reaction between nitrite and the reagent causes a pink tint in the sample.'
},

{
SKU: 'HI708',
Parameter: 'Nitrite High Range',
Range: '0 to 150 ppm',
Resolution: '1 ppm',
Accuracy: '±3 ppm ±5% of reading',
Light: 'Photodiode @575 nm',
AutoOff: 'After 10 min. of inactivity',
Method: 'Adaptation of the Ferrous Sulfate method. The reaction between nitrite and the reagent causes a greenish/brown tint in the sample'
},

{ 
SKU: 'HI713',
Parameter:' Phosphate Low Range',
Range:' 0.00 to 2.50 ppm (mg/L)',
Resolution: '0.01 ppm (mg/L)',
Accuracy: '±0.04 ppm (mg/L) ±4% of reading',
Light: 'LED @ 525 nm',
AutoOff:' After 2 min. of inactivity or 10 seconds after reading',
Method: 'Adaptation of the Standard Methods for the Examination of Water and Wastewater:  20th edition:  Ascorbic Acid method'
},

{
SKU: 'HI717',
Parameter: 'Phosphate High Range',
Range: '0.0 to 30.0 ppm (mg/L)',
Resolution: '0.1 ppm (mg/L)',
Accuracy: '±1.0 ppm (mg/L) ; ±5% of reading ',
Light: 'LED @ 525 nm',
AutoOff: 'After 2 min. of inactivity or 10 seconds after reading',
Method: 'Adaptation of the Standard Methods for the Examination of Water and Wastewater:  18th edition:  Amino Acid method'
},

{
SKU: 'HI736',
Parameter: 'Phosphorus Ultra Low Range',
Range:' 0 to 200 ppb',
Resolution: '1 ppb',
Accuracy: '±5 ppb ±5% of reading',
Light: 'LED @ 525 nm',
AutoOff: 'After 2 min. of inactivity or 10 seconds after reading',
Method: 'Adaptation of the Standard Methods for the Examination of Water and Wastewater:  20th edition:  Ascorbic Acid method'
},

{
SKU: 'HI706',
Parameter: 'Phosphorus High Range',
Range: '0.0 to 15.0 ppm',
Resolution: '0.1 ppm',
Accuracy: '±0.3 ppm ±5% of reading',
Light: 'LED @ 525 nm',
AutoOff: 'After 2 min. of inactivity or 10 seconds after reading',
Method: 'Adaptation of the Standard Methods for the Examination of Water and Wastewater:  18th Edition:  Heteropoly-molybdenum Blue method.'
},

{
SKU: 'HI705',
Parameter: 'Silica Low Range',
Range: '0.00 to 2.00 ppm',
Resolution:' 0.01 ppm',
Accuracy:' ±0.03ppm ± 5% of reading',
Light: 'Photodiode @610 nm',
AutoOff: 'After 10 min. of inactivity',
Method: 'Adaptation of the ASTM D859 method of heteropoly blue method. The reaction  between silica and reagents causes a blue tint in the sample'
},

{
SKU: 'HI770',
Parameter: 'Silica High Range',
Range: '0 to 200 ppm',
Resolution: '1 ppm',
Accuracy: '±2 ppm ±5% of reading',
Light: 'LED @ 470 nm',
AutoOff: 'After 2 minutes of inactivity',
Method: 'Adaptation of the USEPA METHOD 370.1 for drinking:  surface and saline waters:  domestic and industrial wastes and Standard Method 4500-SiO2 C'
}
];

var template = Handlebars.compile($('.template').html() );


var temp = template(data);

$('.specs').append(template(data));


})();
});