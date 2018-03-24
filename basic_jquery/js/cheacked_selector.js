 
 $(document).ready(function(){

 	// $('#btnSubmit').click(function(){

 	// 	var result = $('input[type="radio"]:checked');//array

 	// 		if(result.length > 0) {

 	// 				$('#divResult').html(result.val() + " is checked. ");

 	// 		}else{

 	// 				$('#divResult').html("no radio button checked");
 	// 		}

//});
// ==========================================

 	$('#btn1submit').click(function(){

 		var resultcheck = $('input[type="checkbox"]:checked');//an array store all checkbox who is checked

 		if(resultcheck.length > 0){

 			var resultString = resultcheck.length + ' : cheackboxes cheacked <br/>';

 			resultcheck.each(function(){

 				resultString = resultString + $(this).val() + '<br/>';

 			});

 			$('#div1result').html(resultString);
 		}
 		else{

 			$('$div1result').html('no checkbox select');
 		}	

 		  




 	});
 	

 });