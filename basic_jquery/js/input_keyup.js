
/*
Text inputs do not fire the "change" event until they lose focus.

If the callback should fire before the text input loses focus, use the .keyup() event.
*/
 $(document).ready(function(){
 	$('form input[name=mytext]').keyup(function(){
 		console.log($(this).val());
 	});


 //getting content as text

 $('#btn1').click(function(){
 	alert('text: ' + $('#test').text());
 });

 // ========================

 $('button').click(function(){
 	$(this).attr('id','newId');
 	//alert($(this).attr('id'));

// ==============================
  //setting a dynamic value as attribute value.
  //The callback function below is in the context of the attr() method.
   //When callback is used inside attr(),
   //the second parameter contains the current value
   // of the attribute whereas in case of callback inside html()/text()
   // the second parameter contains the current content
//===========
   // $('a').attr('id',function(a,b){
   // 		return a + b + " updated";//this will update when i press any button
   //});

	}); // button close  here
// ==============
 	$('#changeAttribute').click(function(){
 		$('a').attr('id',function(a,b){
   		return a + b + " updated";
 		});
 	});
 	  //resetting form parameter

	$('#btn3').click(function(){
		$('#input1').val(""); //give empty string value to set empty value
	});

	//getting form parameter

	$('#btn4').click(function(){
		alert($('#input1').val());// to get value
	});






	


 });