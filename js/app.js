$(document).ready(function(){
	$(".ryu").mouseenter(function(){
		$(".ryu-ready").show();
		$(".ryu-still").hide();
	})

	.mouseleave(function(){
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})

	.mousedown(function(){
		//show throwing and hadouken
		//play sound
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show();
		//animate hadouken to slide across page
		$(".hadouken").finish().show()
			.animate({'left':'500px'}, 700, 
			//callback function. This is called when animate is complete
			function(){
				$(this).hide();
				$(this).css('left', '-129px');
			});
	})

	.mouseup(function(){
		//show standing
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
		$(".hadouken").hide();
	});
});