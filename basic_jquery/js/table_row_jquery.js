
//$('td') //select all td element
//$("div a") //select all anchor element that are descendent of div element
//$('div,span,a')// select all div,span,and anchor element

$(document).ready(function(){

	//alert($('td').length);//15

	//change all tr color

	//$('tr').css('backgroung-color', 'yellow');

	//want to alert entaire html table content

	//alert($('table').html());

	//want to alert only tr content which is in side the table
	// going through each loop
	//this will alert each row td
	/*$('table tr').each(function(){
		alert($(this).html());
	});*/

	//want to change all element background color

	//$('span, div, a').css('backgroung-color','red');
	$('span, div, a').css('font-size','20px');

	$('div a').css({'backgroung-color':'red','font-size':'30px'});//select a who is a child of div

	//want to change even row color

	// $('tr:even').css('background','blue');
		 $('tr:even').css('color','blue'); // same odd

		 $('#table1 tr:odd').css('color', 'yellow');//this will select the table who has id


});