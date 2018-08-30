$('#FOODS').hide();
var hashes = ['#HOME','#ABOUT', '#PROJECTS', '#CONTACT' ]
$('body').scrollspy({target: "", offset: 50});

$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});
//$(".arrow").on('click', function(event) {
//  if (this.hash !== "") {
//    event.preventDefault();
//    var hash = this.hash;
//    var index = hashes.indexOf(hash);
//    if (index == 3) {
//      return null;
//    }
//    index += 1;
//    var newhash = hashes[index];
//    $('html, body').animate({
//      scrollTop: $(newhash).offset().top
//    }, 800, function(){
//      window.location.hash = newhash;
//    });
//  }
//});
	
$('#OFF').on('click', function(e) {
 
  if ($(this).hasClass('on')) {
    $('#HOME').css('background-color', 'white');
  $('.random').css('color', 'cornflowerblue');
  $(this).css('color', 'cornflowerblue');
  }
  else {
    $('#HOME').css('background-color', 'cornflowerblue');

  $(this).css('color', 'white');
  }
  $(this).toggleClass('on');
  
})
$('.slideshow-block').hover(function(){
  $(this).find('.slides').addClass('active').cycle('resume');
}, function(){
		$(this).find('.slides').removeClass('active').cycle('pause');
	});
$('.foodslides').cycle({
	    fx: 'turnDown',
        speed: 175,
        timeout: 1000
	}).cycle("pause");
	$('.slideshow-block').hover(function(){
		$(this).find('.foodslides').addClass('active').cycle('resume');
	}, function(){
		$(this).find('.foodslides').removeClass('active').cycle('pause');
	});
