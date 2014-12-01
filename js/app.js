$(document).ready(function(){
	$(".ryu").mouseenter(function(){
		$("[class^='ryu-']").hide();
		$(".ryu-ready").show();
	})

	.mouseleave(function(){
		$("[class^='ryu-']").hide();
		$(".ryu-still").show();
	})

	.mousedown(function(){
		//play sound
		playHadouken();
		
		//hide others, show throwing and hadouken
		$("[class^='ryu-']").hide();
		$(".how-to").hide();
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
		$("[class^='ryu-']").hide();
		$(".hadouken").hide();
		$(".ryu-ready").show();
		$(".how-to").show();
	});

	//show cool pose when user presses 'x' key
	$(document).keydown(function(event){
		if(event.which == 88){
			//hide other classes and show cool
			//select all classes that start with ryu-
			$("[class^='ryu-']").hide();
			$(".ryu-cool").show();
		}
	});
	$(document).keyup(function(event){
		if(event.which == 88){
			//hide cool and show still
			$(".ryu-still").show();
			$(".ryu-cool").hide();
		}
	});
});

function playHadouken(){
	$('#hadouken-sound')[0].volume = 0.5;	//volume ranges can be from 0-1
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}