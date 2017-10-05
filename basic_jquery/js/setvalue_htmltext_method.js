$(document).ready(function(){
	$('#btn1').click(function(){
		$('#test1').text('hello world!');
	});
// =============

	$('#btn2').click(function(){
		//used including html tag with content 
		$('#test2').html('<b>HELLO WORLD!</b>');
	});
// ==========
	
	$('#btn3').click(function(){
		//$('#test3').val('Dolly Duck');
		$('form input[name=un]').val('Hello world!');
	});

});