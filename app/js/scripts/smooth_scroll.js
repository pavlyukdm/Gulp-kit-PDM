// Smooth scroll
$('a[href*="#"]').
not('[href="#"]').
not('[href="#0"]').
not('[data-toggle="collapse"]').
not('[role="tab"]').
click(e => {
	$('html,body').stop().animate({
		scrollTop: $(e.currentTarget.hash).offset().top,
	}, 1000);
	e.preventDefault();
});