	
	var num1 = 100;
	if(isNaN(num1)){
		document.write(num1 + " is not a number <br/> ");
	}else{
		document.write(num1 + " is a number <br/> ");
	}

	var str ="aspire";

	if(isNaN(str)){
		document.write(str + " is not a number <br/>");
	}else{
		document.write(str + " is a number <br/>");
	}

	var x = "soni";

	if(!isNaN(x)){

		document.write(x + " is  a number <br/>");
		//this will not print beacuse condition is false now after revarsing the function.
	}else{
		document.write(x + " is a name <br/>");
	}