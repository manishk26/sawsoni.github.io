		//Note: map() does not execute the function for array elements without values
		//Note: map() does not change the original array.

		var numbers = [4,9,16,25];

		console.log('numbers:['+numbers +']');//printing array

		var mapObj = numbers.map(function(currentValue,index,array){
			console.log('--currentValue: ['+currentValue +']' + '['+index + ']');
		});//printing each array element

		function myFunction(){

			var x = document.getElementById('demo');
			x.innerHTML = numbers.map(Math.sqrt) + ' '+'This is new Array';
		}


/*=================================*/

		//Q:Click the button to get multiply every element in the array with a specific number.
		var arrayElement = [11,20,30,40,50];

			//num will take array element one by one
			function multiplyArrayElement(num){
				return num * document.getElementById('multiplyInput').value;
			}

			function eventFunction(){
				document.getElementById('demo1').innerHTML = arrayElement.map(multiplyArrayElement);

				console.log(arrayElement);
			}

/*================================*/

		//Q:Get the full name for each person in the array:

			var persons = [

				{firstname : 'Soni' ,lastname : 'Saw'},
				{firstname : 'Moni',lastname : 'Kumari'},
				{firstname : 'Toni',lastname : 'Devi'}
			];

			function getFullName(item,index){

				var fullname = [item.firstname,item.lastname].join("*");

				return fullname;
			}

			function eventShowFullName(){

				document.getElementById('demo2').innerHTML = persons.map(getFullName);

				console.log(persons);
			}

	/*================Using Map object=========This is not map()function for array which i used up============*/

			var mapObj =  new Map();

			var keyString = 'a string';
				keyObj = {},
				keyFunc = function(){};

				//setting the value

				mapObj.set(keyString,"value associated with 'a string'");
				mapObj.set(keyObj,"value associated with keyObj");
				mapObj.set(keyFunc,"value associated with keyFun");

				console.log('Map object size: '+mapObj.size);

				//getting the values

				console.log(mapObj.get(keyString));//// "value associated with 'a string'"

				console.log(mapObj.get('a string'));//// "value associated with 'a string'"
                         							// because keyString === 'a string'
                mapObj.get(keyObj);       // "value associated with keyObj"
				mapObj.get(keyFunc);      // "value associated with keyFunc"
				console.log(mapObj.get({}));           // undefined, because keyObj !== {}
				console.log(mapObj.get(function() {}) );// undefined, because keyFunc !== function () {}




