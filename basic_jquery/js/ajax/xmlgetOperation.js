/*=====direct creating promise object=====*/
 var directPromise = new Promise(function(resolve,reject){
 	var URL = 'http://demo.soni.com:3000/students';
 	var xmlObject = new XMLHttpRequest();
 		xmlObject.open('GET',URL);
 		xmlObject.onload = function(){
 			resolve(xmlObject.responseText);
 		};
 		xmlObject.onerror = function(){
 			reject(xmlObject.statusText);
 		};
 		xmlObject.send();
 });

 	directPromise.then(function(response){
 		return JSON.parse(response);
 	}).then(function(student){
 		var tr = "";
			for(var i = 0; i < student.length; i++){
				tr += '<tr><td>' + student[i].id +': '+ '</td><td>' + student[i].name + '</td></tr><br>';
			};
			
			document.getElementById('demo').innerHTML = tr;
 	}).catch(function(e){
 		document.getElementById('demo').innerHTML = e;
 	});

 /*======================function return promise object as closure============*/

 	function returnPromisefun(){

 		var pro = new Promise(function(resolve,reject){

 			var URL = 'http://demo.soni.com:3000/students';
 			var xml = new XMLHttpRequest();
 			xml.open('GET',URL);
 			xml.onload = function(){
 				resolve(xml.responseText);
 			};
 			xml.onerror = function(){
 				reject(xml.statusText);
 			};
 			xml.send();
 		});
 			return pro;
		}
/*=======function end==*/
		var storeOuterfun = returnPromisefun();
		console.log(storeOuterfun);

		storeOuterfun.then(function(r){
			return JSON.parse(r);
		}).then(function(data){

			var tr = "";
			for(var i = 0; i < data.length; i++){
				tr += '<tr><td>:-- '+ '</td><td>' + data[i].name + '</td></tr><br>';
			};
			
			document.getElementById('demo1').innerHTML = tr;

		}).catch(function(e){

			document.getElementById('demo1').innerHTML = e;
		}) 
/*===========================self invok function==============================*/

		var selfInvokPromise = (function(){
           
           var pro = new Promise(function(resolve,reject){
           	var URL = 'http://demo.soni.com:3000/students';
           	var xml = new XMLHttpRequest();
           	xml.open('GET',URL);
           	xml.onload = function(){
           		resolve(xml.responseText);
           	};
           	xml.onerror = function(){
           		reject(xml.statusText);
           	};
           	xml.send();

           });

           return pro;

		})();

		console.log(selfInvokPromise);

		selfInvokPromise.then(function(result){
			return JSON.parse(result);
		}).then(function(data){
			console.log(data);
			var tr = "";
			for(var i = 0; i < data.length; i++){
				tr += '<tr><td>:-- '+ '</td><td>' + data[i].class + '</td></tr><br>';
			}
				document.getElementById('demo2').innerHTML = tr;
			}).catch(function(e){
				document.getElementById('demo2').innerHTML = e;
			})

		/*========================use====fetch api=====*/

    
    	var fetchAPIObj = fetch('http://demo.soni.com:3000/students');
    	console.log(fetchAPIObj);
    	fetchAPIObj.then(function(result){
    		// console.log(result.json());
    		return result.json();
    	}).then(function(data){
    		var tr = "";
			for(var i = 0; i < data.length; i++){
				tr += '<tr><td>:-- '+ '</td><td>' + data[i].age + '</td></tr><br>';
			}
			document.getElementById('demo3').innerHTML = tr;
    	}).catch(function(e){
    		document.getElementById('demo3').innerHTML = e;
    	})
	

    
