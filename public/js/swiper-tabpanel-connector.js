<<<<<<< HEAD
   
"use strict";

//$(document).ready(function() {
    //initial view
   //mySwiper.on('onInit', function () {

            $('#tab-panel-container-2').hide();
            $('#tab-panel-container-3').hide();
            $('#tab-panel-container-4').hide();
            $('#tab-panel-container-5').hide();

      // });     
   
   var $showPanel = function() {

      if ( $('#slide1').is('.swiper-slide-active') ) {

            $('#tab-panel-container-1').show();
            $('#tab-panel-container-2').hide();
            $('#tab-panel-container-3').hide();
            $('#tab-panel-container-4').hide();
            $('#tab-panel-container-5').hide();


   }  else if ( $('#slide2').is('.swiper-slide-active') ) {

            $('#tab-panel-container-1').hide();
            $('#tab-panel-container-2').show();
            $('#tab-panel-container-3').hide();
            $('#tab-panel-container-4').hide();
            $('#tab-panel-container-5').hide();


   } else if ( $('#slide3').is('.swiper-slide-active') ) {

            $('#tab-panel-container-1').hide();
            $('#tab-panel-container-2').hide();
            $('#tab-panel-container-3').show();
            $('#tab-panel-container-4').hide();
            $('#tab-panel-container-5').hide();

        
   } else if ( $('#slide4').is('.swiper-slide-active') ) {

            $('#tab-panel-container-1').hide();
            $('#tab-panel-container-2').hide();
            $('#tab-panel-container-3').hide();
            $('#tab-panel-container-4').show();
            $('#tab-panel-container-5').hide();


   } else if ( $('#slide5').is('.swiper-slide-active') ) {

    $('#tab-panel-container-1').hide();
    $('#tab-panel-container-2').hide();
    $('#tab-panel-container-3').hide();
    $('#tab-panel-container-4').hide();
    $('#tab-panel-container-5').show();


};


 };



  mySwiper.on('slideChangeStart', $showPanel);

  mySwiper.on('onSliderMove', $showPanel);


   //swiper.on('onTouchStart', function() {

    


   //});//swiper.on

=======
   
"use strict";

//$(document).ready(function() {
    //initial view
   //mySwiper.on('onInit', function () {

            $('#tab-panel-container-2').hide();
            $('#tab-panel-container-3').hide();
            $('#tab-panel-container-4').hide();
            $('#tab-panel-container-5').hide();

      // });     
   
   var $showPanel = function() {

      if ( $('#slide1').is('.swiper-slide-active') ) {

            $('#tab-panel-container-1').show();
            $('#tab-panel-container-2').hide();
            $('#tab-panel-container-3').hide();
            $('#tab-panel-container-4').hide();
            $('#tab-panel-container-5').hide();


   }  else if ( $('#slide2').is('.swiper-slide-active') ) {

            $('#tab-panel-container-1').hide();
            $('#tab-panel-container-2').show();
            $('#tab-panel-container-3').hide();
            $('#tab-panel-container-4').hide();
            $('#tab-panel-container-5').hide();


   } else if ( $('#slide3').is('.swiper-slide-active') ) {

            $('#tab-panel-container-1').hide();
            $('#tab-panel-container-2').hide();
            $('#tab-panel-container-3').show();
            $('#tab-panel-container-4').hide();
            $('#tab-panel-container-5').hide();

        
   } else if ( $('#slide4').is('.swiper-slide-active') ) {

            $('#tab-panel-container-1').hide();
            $('#tab-panel-container-2').hide();
            $('#tab-panel-container-3').hide();
            $('#tab-panel-container-4').show();
            $('#tab-panel-container-5').hide();


   } else if ( $('#slide5').is('.swiper-slide-active') ) {

    $('#tab-panel-container-1').hide();
    $('#tab-panel-container-2').hide();
    $('#tab-panel-container-3').hide();
    $('#tab-panel-container-4').hide();
    $('#tab-panel-container-5').show();


};


 };



  mySwiper.on('slideChangeStart', $showPanel);

  mySwiper.on('onSliderMove', $showPanel);


   //swiper.on('onTouchStart', function() {

    


   //});//swiper.on

>>>>>>> a9478deeaa78fc58070394eb466903ae7262264c
  // });//$(document).ready(function() {})