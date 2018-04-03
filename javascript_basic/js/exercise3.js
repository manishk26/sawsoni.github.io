	function myFunction(e) {
	
		 var x = e.clientX;
	   	 var y = e.clientY;
	   	 var ball = document.getElementById('ball');
	   	 ball.style.top = y+"px";
	   	 ball.style.left = x+"px";

		var randomText = "I'm visible now....!!";
	    document.getElementById("ex_4").innerHTML = randomText;
		}
		function secFunc() {
	    document.getElementById("ex_4").innerHTML = "";
	}				