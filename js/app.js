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
		//play sound
		playHadouken();
		
		//show throwing and hadouken
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		
		//animate hadouken to slide across page
		//finish all other animations before starting this one
		$(".hadouken").finish().show()
			//set left property to 500px
			.animate({'left':'500px'}, 700, 
			//callback function. This is called when animate is complete
			function(){
				//After animation completes, set position of
				//hadouken to original position, so next time
				//the animation is triggered, hadouken will
				//be in its original starting point
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

function playHadouken(){
	$('#hadouken-sound')[0].volume = 0.5;	//volume ranges can be from 0-1
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}