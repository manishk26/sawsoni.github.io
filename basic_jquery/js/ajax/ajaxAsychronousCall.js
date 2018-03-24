
 $(document).ready(function(){
 	var URL = "http://demo.soni.com:3000/products";
 /*	var student = {
 		id : "",
 		class: "",
 		name: ""
 	};*/
	function getStudent(){
		$.get(
 		{
 		url : URL,
 		success : function(result){
 			var stringResult = JSON.stringify(result);
			var arrayResult = JSON.parse(stringResult);

			var tr = "";
			for(var i = 0 ; i < arrayResult.length; i++)
			{
				tr += '<tr><td>' + arrayResult[i].name + '</td><td>' + 
						arrayResult[i].price+ '</td><td>' + arrayResult[i].id + '</td></tr>';
			}
			$('#myTableBody').html(tr);	
		},catch : function(error){
					document.write("something wrong");
				}
 			}
 		);

	}

	function getStudentInPromise(){
		var products = fetch(URL);
		products.then(function(response){
			return response.json();
		}).then(function(data){
			var tr = "";
			for(var i = 0 ; i < data.length; i++)
			{
				tr += '<tr><td>' + data[i].name + '</td><td>' + 
						data[i].price+ '</td><td>' + data[i].id + '</td></tr>';
			}
			$('#myTableBody').html(tr);	
		}).catch(function(error){ console.log(error)});

	}
 	
 	//click the button to get student

 	$('#getStudentBtn').on('click',function(e){
 		e.preventDefault();
 		getStudent()
 		// getStudentInPromise();

 	});
 });

/*native code */
 	function myAsyncFunction(url){
 		return new Promise(function(resolve,reject){
 			let xhr = new XMLHttpRequest();
 			xhr.open('GET',url);
 			xhr.onload = function(){
 				resolve(xhr.responseText);
 			};
 			xhr.onerror = function(){
 				reject(xhr.statusText);
 			};
 			xhr.send();
 		});
 	}

 /*	function myAsyncFunction1(url) {
 		return new Promise((resolve,reject) => {

 			const xhr = new XMLHttpRequest();

 			xhr.open('GET',url);
 			xhr.onload = () => resolve(xhr.responseText);
 			xhr.onerror = () => reject(xhr.statusText);
 			xhr.send();
 		});
 	}*/