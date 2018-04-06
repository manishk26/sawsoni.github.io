 
 function printArguments(){
 	document.write("Number of argument = " + arguments.length + "<br>");

 	for(var i = 0; i < arguments.length; i++){
 		document.write('Argument' + i + " = " + arguments[i] + '<br>');
 	}

 	document.write('<br>');
 }

 printArguments();
 printArguments("A","B");
 printArguments(10,20,30,40);

/*==============================*/
//Q : Is it possible to pass variable number of arguments to a javascript functipn
 //a: yes,you can pass as many arguments as you want to any javaSacript function.All the parameters will be stored in the arguments object 


 	function addNumber(){
 		var sum = 0 ;
 		document.write('Count of number = ' + arguments.length + '<br>');
 		for(var i = 0; i < arguments.length; i++){
 			sum = sum + arguments[i];
 		}

 		document.write('sum of Number = ' + sum + '<br><br>');
 		document.write('<br>');
 	}


 	addNumber(10,20,30,40);

 	/*===================change arguments as an proper Array==*/

 	function argumentsArray(){
 		var arrayArguments = [].slice.call(arguments);
 		// var argumentsArray = Array.prototype.slice.call()arguments;
 		console.log(arrayArguments.sort());
 	}

	argumentsArray(60,20,50,10);






