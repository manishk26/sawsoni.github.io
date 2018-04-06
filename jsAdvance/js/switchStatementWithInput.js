	function checkFruit(fruit){
			var text = "";
			switch(fruit){
				case "Banana":
				text = "Banana is good for health";
				break;

				case "Apple":
				text = "Apple i really like";
				break;

				case "Orange":
				text = "Orange has full vitamin c";
				break;

				default:
				text = "i like all fruit,but i never heard about this name.";
			}

			return text;
		}


	function check(name){
 		if(typeof name === "string" && name !== " " && isNaN(name)){
 			return name;
 		}else {
 			return "please enter fruit  name ";
 		}
 	}


		function clickMe(){
			var fruitName = document.getElementById('myInput').value;

			var outPut = checkFruit(fruitName);
			//var outPut = check(fruitName);

			document.getElementById('demo').innerHTML = "Woow.." + outPut + "...";
		}

		 document.getElementById('btn').addEventListener("click",clickMe);