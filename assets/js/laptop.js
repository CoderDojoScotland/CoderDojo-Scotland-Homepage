var laptop_code = $('#banner .laptop pre');
var laptop_height;
var laptop_pos;

$(document).ready(function(){
	laptop_height = laptop_code.innerHeight();
	laptop_pos = laptop_code.offset().top + laptop_code.height();
});

$(window).scroll(function(){
	scroll_top = $(document).scrollTop();
	visible = ( scroll_top < laptop_pos );
	math = ( scroll_top / laptop_height );
	console.log(visible);
	console.log(scroll_top+' '+math);
	if ( visible ) {
		laptop_code.scrollTop( laptop_height * math );
	}
});