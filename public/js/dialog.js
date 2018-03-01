<<<<<<< HEAD
$(document).ready(function() {

  //Cashing DOM
  var $leftwing = $('.left-wing');
  var $rightwing = $('.right-wing');
  var $laptop = $('.laptopMsg');
  var $coffee = $('.coffeeMsg');
  var $phone = $('.phoneMsg');
  var $mockup = $('.mockupMsg');
  var $title = $('.titleMsg');
  var $quoteAuthor = $('.quoteAuthor');
  var $empty = $('.empty-click');
  var $body = $('body');
  var $camera = $('.cameraMsg');
  var $notebook = $('.notebookMsg');
  var $bamboo = $('.bambooMsg');
  var $emblem = $('.emblemMsg');
  var $profilepic = $('.profile-pic');
  var $profileMsg = $('.profileMsg');

  //Messaging
  
  $body.bind('click', function(e) {
  	
  	 if (e.target !== this)
  	
    return; else {

    $empty.css('display','inline');
    $empty.fadeOut(2000);
    }

  });//Body.message

  $title.bind('click', function() {

    $quoteAuthor.css('display', 'inline');
    $quoteAuthor.fadeOut(2000);
  
  });
    


  $leftwing.bind('click', function(e) {

    $laptop.css('display', 'inline');
    $laptop.fadeOut(2000);
    /*setTimeout(function() {

    	$coffee.css('display', 'inline');
    	$coffee.fadeOut(3000);

  }, 3000);

    setTimeout(function() {

    	$phone.css('display', 'inline');
    	$phone.fadeOut(3000);

  }, 6000);

    setTimeout(function() {

    	$mockup.css('display', 'inline');
    	$mockup.fadeOut(3000);

  }, 9000);*/

  });//LeftWing.message


  $rightwing.bind('click', function() { 
    
    $camera.css('display', 'inline');
    $camera.fadeOut(2000);
    /*setTimeout(function() {

    	$notebook.css('display', 'inline');
    	$notebook.fadeOut(3000);

  }, 3000);

    setTimeout(function() {

    	$bamboo.css('display', 'inline');
    	$bamboo.fadeOut(3000);

  }, 6000);*/

  });//rightWing.message

$profilepic.bind('click', function() { 
    
    $profileMsg.css('display', 'inline');
    $profileMsg.fadeOut(2000);

  });//profile pic message


=======
$(document).ready(function() {

  //Cashing DOM
  var $leftwing = $('.left-wing');
  var $rightwing = $('.right-wing');
  var $laptop = $('.laptopMsg');
  var $coffee = $('.coffeeMsg');
  var $phone = $('.phoneMsg');
  var $mockup = $('.mockupMsg');
  var $title = $('.titleMsg');
  var $quoteAuthor = $('.quoteAuthor');
  var $empty = $('.empty-click');
  var $body = $('body');
  var $camera = $('.cameraMsg');
  var $notebook = $('.notebookMsg');
  var $bamboo = $('.bambooMsg');
  var $emblem = $('.emblemMsg');
  var $profilepic = $('.profile-pic');
  var $profileMsg = $('.profileMsg');

  //Messaging
  
  $body.bind('click', function(e) {
  	
  	 if (e.target !== this)
  	
    return; else {

    $empty.css('display','inline');
    $empty.fadeOut(2000);
    }

  });//Body.message

  $title.bind('click', function() {

    $quoteAuthor.css('display', 'inline');
    $quoteAuthor.fadeOut(2000);
  
  });
    


  $leftwing.bind('click', function(e) {

    $laptop.css('display', 'inline');
    $laptop.fadeOut(2000);
    /*setTimeout(function() {

    	$coffee.css('display', 'inline');
    	$coffee.fadeOut(3000);

  }, 3000);

    setTimeout(function() {

    	$phone.css('display', 'inline');
    	$phone.fadeOut(3000);

  }, 6000);

    setTimeout(function() {

    	$mockup.css('display', 'inline');
    	$mockup.fadeOut(3000);

  }, 9000);*/

  });//LeftWing.message


  $rightwing.bind('click', function() { 
    
    $camera.css('display', 'inline');
    $camera.fadeOut(2000);
    /*setTimeout(function() {

    	$notebook.css('display', 'inline');
    	$notebook.fadeOut(3000);

  }, 3000);

    setTimeout(function() {

    	$bamboo.css('display', 'inline');
    	$bamboo.fadeOut(3000);

  }, 6000);*/

  });//rightWing.message

$profilepic.bind('click', function() { 
    
    $profileMsg.css('display', 'inline');
    $profileMsg.fadeOut(2000);

  });//profile pic message


>>>>>>> a9478deeaa78fc58070394eb466903ae7262264c
});//Jquery