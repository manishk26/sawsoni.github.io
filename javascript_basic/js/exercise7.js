
 function cheack(name){
 	if(typeof name === "string"){
 		return name;
 	}else{
 		return "please enter your name ";
 	}
 }

 //another function in this functin i am going to call cheack()fun

 function collectName(){
 	var f = document.getElementById('fname').value;
 	var l = document.getElementById('lname').value;
 	var p = cheack(f) +" "+ cheack(l);
 	   
 	document.getElementById('demo').innerHTML = p;
 }

  

