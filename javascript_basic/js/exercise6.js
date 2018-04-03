	
	function checkFruit(fruits) {
		// body...
		var text;
		
		switch(fruits){
			case "Banana":
			text = "Banana is good";
			break;

			case "Orange":
			text = "i like Orange";
			break;

			case "Apple":
			text = "How you like them apples?";
			break;

			default:
			text ="i have never heard of that fruit.";
		}

		return text;

	}

	function checkName(namecheck){
		var text;

		switch(namecheck){
			case "Soni" || 'soni':
			text = 'she is Soni Saw.';
			break;

			case "Reeene" || 'reena':
			text = 'she is Reena chandra.';
			break;

			default:
			text = 'wrong name.';
		}

		return text;
	}

	 function checkName(){
	 	var name = document.getElementById('name').value;
	 	var callectName = checkName(name);
	 	document.getElementById('demo1').innerHTML = callectName; 
	 }

	 btn2.addEventListener('click', checkName);