var currentRotation = null;
setTimeout(scrollTo,0,0,1);
setInterval(checkOrientAndLocation,1000);

$(document).ready(function() {

  //load team page data
  if ($('#main-rows.team').attr('title') == "http://www.lekarma.fr/mobile/team") {
    $.get("inc/getPage.php", { loadPage: $('#main-rows').attr('title') }, function(data) {
      $('#main-rows').html(data);
      initiateTeamClicks();
    });
  }

  //load careers data
  if ($('#main-rows.careers').attr('title') == "http://www.lekarma.com/mobile/careerss") {
    $.get("inc/getPage.php", { loadPage: $('#main-rows').attr('title') }, function(data) {
      $('#main-rows').html(data);
      initiateCareersClicks();
    });
  }

  //load blogs data
  if ($('#main-rows.blogs').attr('title') == "http://www.lekarma.fr/mobile/blogs") {
    $.get("inc/getPage.php", { loadPage: $('#main-rows').attr('title') }, function(data) {
      $('#main-rows').html(data);
      initiateBlogsClicks();
    });
  }
  
  //load work data
  if ($('#main-rows.work').attr('title') == "http://www.lekarma.fr/mobile/work") {
    $.get("inc/getPage.php", { loadPage: $('#main-rows').attr('title') }, function(data) {
      $('#main-rows').html(data);
      initiateWorkClicks();
    });
  }  
	
});


function initiateTeamClicks(){
  
  $('.slider li a').click(function() {
  
    animateRight();
    
    $.get("inc/getPage.php", { loadPage: 'http://www.lekarma.fr/mobile/team/'+$(this).attr('rel') }, function(data) {
      $('#loader').fadeOut(500, function(){
        $('#main-secondary').html(data);
        //fill top header content
        $('#sub-head h2').html($('#main-secondary #profile-title'));
        $('#sub-head h3').html($('#main-secondary #occupation'));
        initiateBackClick();        
      });//fade
    });//load
    return false;
  }); 
  
}//iniateTeamClicks


function initiateCareersClicks(){
  
  $('.slider li a').click(function() {
  
    animateRight();
    
    $.get("inc/getPage.php", { loadPage: 'http://www.lekarma.fr/mobile/careers/'+$(this).attr('rel') }, function(data) {
      $('#loader').fadeOut(500, function(){
        $('#main-secondary').html(data);
        //fill top header content
        $('#sub-head h2').html($('#main-secondary #job-title'));
        initiateBackClick();        
      });//fade
    });//load
    return false;
  }); 
  
}//iniateCareersClicks



function initiateBlogsClicks(){
  
  $('.slider li a').click(function() {
    
    animateRight();    
  
    $.get("inc/getPage.php", { loadPage: 'http://www.lekarma.fr/mobile/blogs/'+$(this).attr('rel') }, function(data) {
      $('#loader').fadeOut(500, function(){
        $('#main-secondary').html(data);
        //fill top header content
        $('#sub-head h2').html($('#main-secondary #blog-type'));
        // $('#sub-head h3').html($('#main-secondary #occupation'));
        initiateBackClick();        
      });//fade
    });//load
    return false;
  }); 
  
}//iniateBlogsClicks



function initiateWorkClicks(){
  
  $('.slider li a').click(function() {
    
    animateRight();    
  
    $.get("inc/", { loadPage: 'http://www.lekarma.fr/mobile/getPage2.php' }, function(data) {
      $('#loader').fadeOut(500, function(){
        $('#main-secondary').html(data);
        //fill top header content
        // $('#sub-head h2').html($('#main-secondary #blog-type'));
        // $('#sub-head h3').html($('#main-secondary #occupation'));
        initiateBackClick();        
      });//fade
    });//load
    return false;
  }); 
  
}//iniateBlogsClicks

function initiateMenuLes_Entres(){
  
  $('.slider li a').click(function() {
    
    animateRight();    
  
    $.get("inc/getPage3.php", { loadPage: 'http://www.lekarma.fr/mobile/work/'+$(this).attr('rel') }, function(data) {
      $('#loader').fadeOut(500, function(){
        $('#main-secondary').html(data);
        //fill top header content
        // $('#sub-head h2').html($('#main-secondary #blog-type'));
        // $('#sub-head h3').html($('#main-secondary #occupation'));
        initiateBackClick();        
      });//fade
    });//load
    return false;
  }); 
  
}//iniateBlogsClicks






function initiateBackClick(){
  $('p[class*="back"] a').click(function() {
    $('#main-secondary, .slider').css({ 
      '-webkit-transform': 'translate(0px,0px)', 
      '-webkit-transition': 'all 0.40s ease-in-out' 
    });
    $('#main-secondary').html('<div id="loader"></div>');
    $('#sub-head h2').html($('#sub-head').attr('title'));
    $('#sub-head h3').html("");
    scroll(0,0);
    return false;
  });
}

function animateRight(){
  if($('body').attr('orient') == "landscape") {
    animLeft = 490;
  } else {
    animLeft = 330;
  }
  $('#main-secondary, .slider').css({ 
    '-webkit-transform': 'translate(-'+animLeft+'px,0px)', 
    '-webkit-transition': 'all 0.40s ease-in-out'
  });
  scroll(0,0);  
}



function checkOrientAndLocation(){
	if(currentRotation != window.orientation){
		setOrientation();
	}
}

function setOrientation(){
	switch(window.orientation){
		case 0:
			orient = 'portrait';
			break;
		case 90:
			orient = 'landscape';
			break;
		case -90:
			orient = 'landscape';
			break;
	}
	currentRotation = window.orientation;
	document.body.setAttribute("orient",orient);
	setTimeout(scrollTo,0,0,1);
}

