var social = {
	collapsed_width: 46,
	twitter_width: 306,
	facebook_width: 216,
	twitter : $('.quick-nav > .social > .twitter'),
	facebook : $('.quick-nav > .social > .facebook'),
	duration : 800,

	collapseOpen : function() {
		$('.quick-nav > .social > .open').animate({width: social.collapsed_width}, social.duration, function(){ $(this).removeClass('open'); });
	}

};

$(function() {

	$('.quick-nav > .social > li > a').click(function(e){
		e.preventDefault();
		elem = $(this).closest('li');
		was_open = elem.hasClass('open');

		social.collapseOpen();

		if ( was_open ) {
			return false;
		}

		if ( elem.hasClass('twitter') ) {
			elem.animate({ width: social.twitter_width }, social.duration);
		} else if ( elem.hasClass('facebook') ) {
			elem.animate({ width: social.facebook_width }, social.duration);
		}

		elem.addClass('open');

		return false;
	});

	$('.share-dialog').click(function(){
		window.open($(this).attr('href'), 'share-dialog', 'width=626,height=460');
		return false;
	});

});