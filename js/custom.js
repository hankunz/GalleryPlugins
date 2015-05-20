
	
	$(document).ready(function() {
	
		if ($.cookie('count') == 1)
			$(".fancybox").fancybox();
			
		if($.cookie('count') == 0)
			$(".fancybox").colorbox({rel:'group'});
		else
			$(".fancybox").fancybox();
			
		$( "#ColorBox" ).click(function( event ) {
	
		$.cookie("count", "0",{ expires: 7 });
		location.reload();
		});
		
		$( "#FancyBox" ).click(function( event ) {
		
		$.cookie("count", "1",{ expires: 7 });
		location.reload();
		
		});
	});
	
	
	


	