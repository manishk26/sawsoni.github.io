
//$ is the short form of jQuery 
//text() and html() are used for retreiving content of any element whereas val() retreives value of form input elements
//a callback function is executed only after the outer method/event is completed

 $(document).ready(function(){

 	console.log($('#demo').html('<b>paragraph content</b>'));//set static value
 	//we can write html element in side html()

 	console.log($('#demo').html());//get the value


 	var listitem = $('li');

 	console.log(listitem); // get the value

 	console.log($('form input:text').eq(1).val());
 	// get value of a form 1stchild who has input text type 


 	// ==============================================================

 	//$( 'li' ).html("updated");
  //In the callback the 1st param is the index and the second param is the content of the selected element
  //this is a keyword in jquery that refers to the current element

 	$('li').html(function(a,b){

 	return a+ "_<i>" + b +"</i>_upd";

 	//return "<li>" + $(this). attr("class")+"</i>";

 	//dynamicaly i am changing li value
 });

 	//==============================================================
 	console.log("text content");
 	console.log($('li').text());//get text content

 	console.log("html content");
 	console.log($('li').html());//get html only one content

 	//=========================get all li content=====================================

 	/*the callback function has two parameters:
 		the 1st parameter is the index of the element,
 		the second parameter refers to the current element*/

 		var x = "";

 		$('li').each(function(index,object){

 			x = x + $(object).html();
 			//console.log("HTML: " +  index + ": " + $(object).html());

 		});

 		console.log(x);

 		//=========================select the child=====================================

 		//first object using javascript,it gives row object

 		var theFirstBodyChild = document.body.children[0];

 		//console.log(theFirstBodyChild);

 		var myJQobject = $(document.body).children().eq(1);
 		 //first object using jquery

 		//console.log(myJQobject);


 		var myJQobject1 = $('h1',$(document.body).children().eq(0));
 		 console.log("h1 inside div ");
 		 console.log(myJQobject1);

 		 //=====select parent and child

 		 var paragraph = $('p');//store p element in a variable

 		 console.log('debug');
 		 // here a is a chidren of p
 		  var myJQobject2 =  $('a',paragraph) ;

 		 //var myJQobject2 =  $(paragraph,'a') ;

 		  console.log(myJQobject2);
 		  console.log("anchor: " +$(myJQobject2).text());// a content

 		  // each element of in side a element

 		  $(myJQobject2).each(function(index,object){

 		  	console.log($(object).html());
 		  });

 		  //==============================================================

 		  $('#clickme').click(function(){
 		  	alert('popup');
 		  	console.log($('h1').text());

 		  });

 });