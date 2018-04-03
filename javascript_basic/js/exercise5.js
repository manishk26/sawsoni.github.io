
	function myFunction(){
		var greeting;
		var time = new Date().getHours();
		if(time < 10){
			greeting = "Good morning";

		} else if(time < 20){
			greeting = "good afternoon";

		}else{
			greeting = "Good evening";
		}
		//this massase have to see in p element which has id="demo" 
		document.getElementById("demo").innerHTML = greeting;

	}

	/*This example will write a link to 
	either W3Schools or to the World Wildlife 
	Foundation (WWF). By using a random number,
	 there is a 50% chance for each of the links.*/

	 //in this case when open the browser 1st time see the w3 link.
	 // 2sed time wwf link
	 var text;
	 if(Math.random() < 0.5) {
	 	text = "<a href='https://w3schools.com'> Visit W3School </a>";

		}else {
			text = "<a href='http://wwf.org'>Visit WWF</a>";
		}

		document.getElementById("demo1").innerHTML = text;


