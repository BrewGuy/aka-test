$(document).ready(function() {
	// for the FAQs 
	$('.question').click(function() {
		if ($(this).hasClass('open')) {
			$(this).next('.answer').slideUp();
			$(this).removeClass('open');
			$(this).parent('li').removeClass('open');
		} else {
			$(this).next('.answer').slideDown();
			$(this).addClass('open');
			$(this).parent('li').addClass('open');
		} 
	});

	// for the on-states to remain on after they're clicked in the sub-menu

	$('li.submenu').click(function() {
		$('li.submenu').removeClass('blue');
		$(this).addClass('blue');
		$('.second-menu').removeClass('on');
		$(this).children('.second-menu').addClass('on');
		console.log('clicked');
	});
});