	 
	 var intervalID;
	 function startClock(){
	 	intervalID = setInterval(dateTime,1000);// in this variable id will generat
	 }
	 
	 function stopClock(){
	 	clearInterval(intervalID);
	 }


	 function dateTime(){
	 	document.getElementById('timeText').value = new Date();
	 }

	 document.getElementById('btn').addEventListener('click',startClock);
	 document.getElementById('btn1').addEventListener('click',stopClock);

/*===================================*/
 
var intervalId;
 	function setTimer(controlId){

 		var control = document.getElementById(controlId);
 		var seconds = control.value;

 		seconds = seconds - 1;

 		if(seconds == 0){
 			control.value = "Done";
 			return;
 		}else{
 			control.value = seconds;
 		}

 		intervalId = setTimeout(function(){setTimer('textTimer')},1000);//due to parameter have to use call back function in setTimeout
 	}

 	/* function startTimer(){
 	  intervalId = setTimeout(function(){setTimer('textTimer')},1000);
	}*/

 	 function stopTimer(){
 	 	clearTimeout(intervalId);
 	 }


 	 document.getElementById('start').addEventListener('click',function(){setTimer('textTimer')});
 	 document.getElementById('stop').addEventListener('click',stopTimer);


