"use strict";

$(document).ready(function() {
  
  /***********************
      NAVBAR TOGGLE     
  ***********************/

  var $navBarToggle = $('.navbar-toggle');
  var $generalContainer = $('.general-container');
  var $swiperContainer = $('.swiper-container');

  $navBarToggle.on('click', function() {
    $('#body').toggleClass('nooverflow');
    $generalContainer.css('z-index', '-1');
    $swiperContainer.css('z-index', '-1');
    $('.navbar-collapse').toggleClass('blackbcg');
    $('.nav-collapsed').toggleClass('collapse').toggleClass('in');
  });



  //Cashing DOM
  var $overlay = $('.overlay');
  var $whoIs = $('.who-is');
  var $whatican = $('.whatican');
  var $whatiwant = $('.whatiwant');
  var $sendMessage = $('.sendmessage');

  var $swiperSlide = $('.swiper-slide');

  var $tapPanel = $('.tab-panel-container');
  //var $navTab = $('.nav-tab');
  var $navTab1 = $('.nav-tab-1');
  var $navTab2 = $('.nav-tab-2');
  var $navTab3 = $('.nav-tab-3');
  var $navTab4 = $('.nav-tab-4');
  var $navTab5 = $('.nav-tab-5');

  //var $tabContent = $('.tab-content-element');
  var $tabContent1 = $('.tab-content-element-1');
  var $tabContent2 = $('.tab-content-element-2');
  var $tabContent3 = $('.tab-content-element-3');
  var $tabContent4 = $('.tab-content-element-4');
  var $tabContent5 = $('.tab-content-element-5');


  /***************************
      PopUp sectors on main
  ***************************/    

  //PopUp Triggers

  $whoIs.on('click', function() {
     $overlay.fadeIn(500);
     $('.popup-section1').fadeIn(500);
  });


$(document).mouseup(function (e)
{
    var $container = $(".popup-section1");
    var $overlay = $(".overlay");

    if (!$container.is(e.target) // if the target of the click isn't the container...
        && $container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $container.fadeOut(500);
        $overlay.fadeOut(500);
    }
});

  $whatican.on('click', function() {
     $overlay.fadeIn(500);
     $('.popup-section2').fadeIn(500);
  });

$(document).mouseup(function (e)
{
    var $container = $(".popup-section2");
    var $overlay = $(".overlay");

    if (!$container.is(e.target) // if the target of the click isn't the container...
        && $container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $container.fadeOut(500);
        $overlay.fadeOut(500);
    }
});


$whatiwant.on('click', function() {
     $overlay.fadeIn(500);
     $('.popup-section3').fadeIn(500);
  });

$(document).mouseup(function (e)
{
    var $container = $(".popup-section3");
    var $overlay = $(".overlay");

    if (!$container.is(e.target) // if the target of the click isn't the container...
        && $container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $container.fadeOut(500);
        $overlay.fadeOut(500);
    }
});


$sendMessage.on('click', function() {
     $overlay.fadeIn(500);
     $('.form-style-4').fadeIn(500);
  });

$(document).mouseup(function (e)
{
    var $container = $(".form-style-4");
    var $overlay = $(".overlay");

    if (!$container.is(e.target) // if the target of the click isn't the container...
        && $container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $container.fadeOut(250);
        $overlay.fadeOut(500);
    }
});


/*****************
  TAB PANEL
*****************/


$navTab1.on('click', function() {
  //Choosing the tab
   $navTab1.not(this).removeClass('tab-active');
   $(this).addClass('tab-active');

  //Showing the corresponding content

  //hide all content except the first one
    $tabContent1.not(":first").hide();


  //Define the index
    var number = $(this).index();  

  //Hide is the index is not for $(this)
    $tabContent1.hide().eq(number).fadeIn(500);  

});

$navTab2.on('click', function() {
  //Choosing the tab
   $navTab2.not(this).removeClass('tab-active');
   $(this).addClass('tab-active');

  //Showing the corresponding content

  //hide all content except the first one
 
    $tabContent2.not(":first").hide();


  //Define the index
    var number = $(this).index();  

  //Hide is the index is not for $(this)

    $tabContent2.hide().eq(number).fadeIn(500); 
  


});

$navTab3.on('click', function() {
  //Choosing the tab
   $navTab3.not(this).removeClass('tab-active');
   $(this).addClass('tab-active');

  //Showing the corresponding content

  //hide all content except the first one
 
    $tabContent3.not(":first").hide();


  //Define the index
    var number = $(this).index();  

  //Hide is the index is not for $(this)

    $tabContent3.hide().eq(number).fadeIn(500); 
  


});

$navTab4.on('click', function() {
  //Choosing the tab
   $navTab4.not(this).removeClass('tab-active');
   $(this).addClass('tab-active');

  //Showing the corresponding content

  //hide all content except the first one
 
    $tabContent4.not(":first").hide();


  //Define the index
    var number = $(this).index();  

  //Hide is the index is not for $(this)

    $tabContent4.hide().eq(number).fadeIn(500); 
  


});

$navTab5.on('click', function() {
  //Choosing the tab
   $navTab5.not(this).removeClass('tab-active');
   $(this).addClass('tab-active');

  //Showing the corresponding content

  //hide all content except the first one
 
    $tabContent5.not(":first").hide();


  //Define the index
    var number = $(this).index();  

  //Hide is the index is not for $(this)

    $tabContent5.hide().eq(number).fadeIn(500); 
  


});

    

//Before-After Slider

$('.ba-slider').beforeAfter();  


/******************************************
************Translation page**************
******************************************/

//Translate-area 
var $translateBtnUs = $('.translate-btn-us');
var $titleUs = $('.title-us');
var $titleRu = $('.title-ru');
var $textUs = $('.text-us');
var $textRu = $('.text-ru');

$translateBtnUs.on('click', function() {
  if (this.innerHTML == "Оригинал статьи") {
    this.innerHTML = "Русский перевод";
    $titleRu.addClass('invisible');
    $textRu.addClass('invisible');
    $titleUs.removeClass('invisible');
    $textUs.removeClass('invisible');
  } else {
      this.innerHTML = "Оригинал статьи";
      $titleUs.addClass('invisible');
      $textUs.addClass('invisible');
      $titleRu.removeClass('invisible');
      $textRu.removeClass('invisible');
  }

  
});

//Choose-article
var $article1 = $('.article-1');
var $article2 = $('.article-2');
var $articleBtn1 = $('.choose-article-1');
var $articleBtn2 = $('.choose-article-2');

$articleBtn2.on('click', function() {
  $article1.addClass('invisible');
  $article2.removeClass('invisible');

  $translateBtnUs.innerHTML = "Оригинал статьи";

  $titleUs.addClass('invisible');
    $textUs.addClass('invisible');
    $titleRu.removeClass('invisible');
    $textRu.removeClass('invisible');
});

$articleBtn1.on('click', function() {
  $article2.addClass('invisible');
  $article1.removeClass('invisible');

  $translateBtnUs.innerHTML = "Оригинал статьи";

   $titleUs.addClass('invisible');
    $textUs.addClass('invisible');
    $titleRu.removeClass('invisible');
    $textRu.removeClass('invisible');
});



});//$(document).ready(function() {})

