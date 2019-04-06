$(document).ready(function(){

	// change of header background color
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		var headerHeight = $("header").outerHeight();
		var headerHeight = $("header").outerHeight();
		var bgScrollValue = 568 - headerHeight;
		if (scroll > bgScrollValue) {
		   $("header").addClass('bg-change');
		}

		 else{
			$("header").removeClass('bg-change');  	
		}
    });
    // end of change of header background color

	// on screen animation
	var animation_elements = $('.animation-element');

	function check_if_in_view() {
	  var window_height = $(window).height();
	  var window_top_position = $(window).scrollTop();
	  var window_bottom_position = (window_top_position + window_height);
	 
	  $.each(animation_elements, function() {
	    var element_height = $(this).outerHeight();
	    var element_top_position = $(this).offset().top;
	    var element_bottom_position = (element_top_position + element_height);
	 
	    //check to see if this current container is within viewport
	    if ((element_bottom_position >= window_top_position) &&
	        (element_top_position <= window_bottom_position)) {
	        $(this).addClass('on_view');
	    }
	  });
	}

	$(window).on('scroll resize', check_if_in_view);
    // end of on screen animation
    
    // responsive menu_bar
	$(".menu_bar").click(function(){
		$("header").toggleClass("nav_open");
	});
	// end of responsive menu_bar
    
});