/*In this example, the inner function plus() has access to the counter variable in the parent function*/
/*function add(){
	var counter = 0;
	function plus(){
		counter = counter + 1;
	}
	plus();
	return counter;
}
document.getElementById('demo').innerHTML = add();*/

/*===========================*/
	 
	 /*var add = (function(){
	 	var counter = 0;
	 	return function(){
	 		return counter = counter + 1;
	 	}
	 })();*/

	   function storeAdd(){
	 	var counter	= 0;

	 	  function plus(){
	 		  counter = counter + 1;
	 		  console.log(counter);
	 		  
	 	}
	 	return plus;
	}	

		var add = storeAdd()();


	 

	 function clickCallFunction(){
	 	document.getElementById('demo').innerHTML = add();
	 }