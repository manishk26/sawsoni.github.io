
// how do we write in javascript if i want to add a event handler in button

//  window.onload = function(){

//    var button = document.getElementById('button1');

//    button.addEventListener('click', clickMeFunction);
// };

//  function clickMeFunction(){
//  	alert('lerning jquery');
//  }

// =======================

//now using jquery

 //jquery = $ (name_space)

  $(document).ready(function(){
  	/*1	passing Dom a document object with ready method/function,
  	  2	we want to execute a anoynimous function with in ready method,
  	    when dom will be fully loaded or ready
  	    so, ready()function ensures that the DOM is fully loaded*/

  	    $('#button1').click(function(){
  	    	//attech a event handler in id button
  	    	// when click event occur, here click is a event handler 
  	    	// in side click i want to execute a function
  	    	alert('jQuery lernning');	
  	    });

  });