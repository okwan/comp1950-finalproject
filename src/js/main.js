
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



