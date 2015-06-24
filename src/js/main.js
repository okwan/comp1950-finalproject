
// global variables
$navOverlayTrigger = $(".nav-overlay-trigger");
$navOverlay = $(".nav-overlay");
$navOverlayTriggerClose = $(".nav-overlay-trigger-close");
$body = $("body");
$floatingButton = $(".button");

$navLectures = $(".nav-lectures");
$navExercises = $(".nav-exercises");

// navigation toggle add & remove
$($navOverlayTrigger).click(function() {
	$navLectures.addClass('nav-open');
	$navLectures.addClass('.bounceOutUp');
	$body.css('overflow', 'hidden');
});

$($navOverlayTriggerClose).click(function() {
	$navLectures.removeClass('nav-open');
	$navExercises.removeClass('nav-open');
	$body.css('overflow', 'auto');
});

$($floatingButton).click(function() {
	$navExercises.addClass('nav-open');
	$body.css('overflow', 'hidden');
});

$('a').click(function(e)
{
    // Special stuff to do when this link is clicked...

    // Cancel the default action
    e.preventDefault();
});

$(document).ready(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
              $navLectures.removeClass('nav-open');
              $navExercises.removeClass('nav-open');
             $body.css('overflow', 'auto');

        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});
