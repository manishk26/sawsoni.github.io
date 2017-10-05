
$(document).ready(function(){
	$('#btn').click(function(){
		// select anchor with class selector
		$('a.valid').attr("id",function(index,current_val){
			return index + "_upd_" + current_val;
		});
	});

	// 

	$('a').click(function(){
		var anchor = $(this).attr('href');//now this is an object
		//console.log(this);
		//console.log($(this).attr('class');
		$(anchor).show();
		//console.dir($('div'));
		//hide all other div except the matching id.
		// we are passing the maching id with anchor value like #starters1, #starters2 etc
		$('div').not(anchor).hide();//hide other div who doesnot have anchor ('href') value

	});


});