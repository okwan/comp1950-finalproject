
// global variables
$navOverlayTrigger = $(".nav-overlay-trigger");
$navOverlay = $(".nav-overlay");
$navOverlayTriggerClose = $(".nav-overlay-trigger-close");


// navigation toggle add & remove
$($navOverlayTrigger).click(function() {
	$navOverlay.addClass('nav-open');
});

$($navOverlayTriggerClose).click(function() {
	$navOverlay.removeClass('nav-open');
});




