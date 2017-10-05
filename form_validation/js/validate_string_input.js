	
	// function checkStringValue(name){
	// 	if(typeof name === "number"){

	// 	   alert("please enter your name ") ;

	// 	   return false;

	// 	}else{

 // 		   return  name;

 // 		}
	// }
 function validateStringInput(){

 	var firstName = document.getElementById('fname').value;
 	var lastName = document.getElementById('lname').value;

 	if(firstName == "" || lastName == ""){
 		alert("Please fill all fields");
 	 	return false;
 	}else if(!isNaN(firstName) || !isNaN(lastName)){
 		alert('Field should not be number');
 		return false;
 	}else {
 		alert('Welcome '+firstName +' '+lastName);
 		return true;
 	}


 }