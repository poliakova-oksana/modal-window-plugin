$.fn.modal = function (options) {
	// Vars
	var params = $.extend({
		animationSpeed: 300,
		dataAttr: 'data-modal'
	}, options);

	var $selector = this;

	// Controllers
	function modalController(target) {
		if (target == 'close') {
			$selector.removeClass('active');
			$selector.find('.modal').removeClass('active');
		} else {
			$selector.addClass('active');
			$selector.find('.modal' + target).addClass('active');
		}
	}

	// Init
	$selector.append('<div class="overlay" ' + params.dataAttr + '="close"></div>');
	$selector.css('transition', 'all ' + params.animationSpeed + 'ms ease');
	$selector.find('.modal').css('transition', 'all ' + params.animationSpeed + 'ms ease');

	// Actions
	$('[' + params.dataAttr + ']').click(function () {
		var target = $(this).attr(params.dataAttr);
		modalController(target);
	});
}