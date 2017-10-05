
	$(document).ready(function(){
		console.log('DOM ready');

		//append():Insert content, specified by the parameter, to the end of each element in the set of matched elements.
		$('#btn1').click(function(){
			$('p').append('<b>Appended text</b>');
		});



		//prepend():Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.

		$('#btn3').click(function(){
			$('p').prepend('<b>Prepended text</b>');
		});


		$('#btn2').click(function(){
			$('ol').append('<li>appended item</li>');
		});

		$('#btn4').click(function(){
			$('ol').prepend('<li>prepend list item</li>');
		});

		// ======================

		$('#btn5').click(function(){
			$('.test').appendTo('.inner');

			//$('<b>abcdefghzk</b>').prependTo('.inner');
			//$('.test').prependTo('.inner');
			 //$('<b>abcdefghi</b>').appendTo('.inner');

		});


	});