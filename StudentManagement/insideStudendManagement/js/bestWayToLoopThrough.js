
 function processArray(array){
 	// var div = document.getElementById('container');
 	var massage = "";

 	for(var i = 0; i < array.length; i++){
 		massage += array[i];
 		

 		if(i < array.length -1){
 			massage = massage + ",";
 			
 		}

 		// div.innerHTML = massage;
 		console.log(massage);
 	}
 }

 var array = [1,2,3,4,5,6];

 processArray(array);

