// // -hover comprises both events .The first callback function is for mouseeneter event and the second callback function is for mouseleave event
// -Four events exist namely mouseover,mouseenter,mouseover,mouseout
// -mouseover fires when the pointer moves into the child element as well, while mouseenter fires only when the pointer moves into the bound element
// -multi line comments--ctrl+/
$(document).ready(function(){

	$("#mybutton1").dblclick(function(){
      $("#dbl").fadeToggle(3000);
  });
// ===========================
var n = 0;
var m = 0;

// $('#p1').mouseleave(function(){

// 	console.log("n" + n++);//n = n + 1
// });

$('#p1').mouseenter(function(){

	console.log("n" + n++);//n = n + 1
});

// =============

// $('#p11').mouseout(function(){

// 	console.log("m" + m++);//m = m + 1
// });

$('#p11').mouseover(function(){

	console.log("m" + m++);//m = m + 1
});

// ======================================================

 $('#p1').hover(function(){
 	 //console.log("You entered p1!");
 	$(this).css('color','green'); },

    //writting 2 function in side  hover

 	//console.log("Bye! You now leave p1!");
 	function(){$(this).css('color','red');}

 );//hover close

 // =====================events for input field=========================

 	$('input').focus(function(){

 		$(this).css({'font-size':'20px','color':'green'});
 	});

 	// ===

 	$('input').blur(function(){

 		$(this).css('font-size','10px');
 	});






});