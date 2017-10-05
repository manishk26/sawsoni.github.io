
//A callback function is executed after the current effect is 100% finished.

$(document).ready(function(){
	console.log('dom loaded....');
	$('#btn1').click(function(){
		//before():Insert content, specified by the parameter, before each element in the set of matched elements.
		$('#img1').before("<b id='aa'>img1</b>");

		$('#img1').insertBefore('#insert');
		//insertrbefore():Insert every element in the set of matched elements before the target.
		//so img1 will before insert-img
	});

	$('#btn2').click(function(){
		$('#img2').after('<i>After</i>');//
		// ====
		$('<b>element</b>').insertAfter('#img1');//can write element here
		// ==== but insertAfter(element) and insertBefore(element) only element

		//$('#img1').insertAfter('<b>element</b>');//this will not work

		$('#aa').insertAfter('#insert');

	})






});