
// let url =  "http://localhost:3000/students";
// let jsonUrl = 'https://jsonplaceholder.typicode.com/todos';
/*through XMlHttpRequest*/

function getDataWithXMLObj(method,url){
	var xhr = new XMLHttpRequest();
		xhr.open(method,url,true);
		xhr.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				console.log(this.responseText);
			}else{
				console.log(this.status);
			}
		};
		xhr.send();
	}

// getDataWithXMLObj('GET','https://jsonplaceholder.typicode.com/todos');

/*==through Promise object==*/

function getDataWithPromiseObj(method,url){
	return new Promise(function(resolve,reject){
		var xhr = new XMLHttpRequest();
		xhr.open(method,url);
		xhr.onload = function(){
			if(this.status >= 200 && this.status < 300){
				resolve(xhr.response);
			}else{
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			}
		};
		xhr.onerror = function(){
			reject({
					status: this.status,
					statusText: xhr.statusText
				});
		};
		xhr.send();
	});
}

var p = getDataWithPromiseObj('GET','https://jsonplaceholder.typicode.com/todos');
p.then(function(data){
	// console.log(data);
	let todos = JSON.parse(data);
	let output = '';
	for(let t of todos){
		output += `<div>
					<h3>${t.title}</h3>
					<p>Comleted:${t.completed}</p>
				</div>`;
	}
	document.getElementById('demo').innerHTML = output;
}).catch(function(error){
	console.log(error);
})

/*=======through the fetch api================*/

function getDataWithFetchApi(url, method="GET"){
	let p = fetch(url, {method:method} );
	return p;
}

let url = 'https://jsonplaceholder.typicode.com/todos'
getDataWithFetchApi(url).then(function(data){
	return data.json();
}).then(function(title){
	for(let t of title){
		console.log(t.title);
	}
}).catch(function(error){
	console.log(error);
})
 
/*====througt the ajax when return promise==*/
 
 function getDataWithAjax(method,url){
 	return $.ajax({
 				url:url,
 				method:method,
 				});

 }

 getDataWithAjax('GET','https://jsonplaceholder.typicode.com/todos').then(function(data){
 	for(let t of data){
 		// console.log(t.title);
 	}
 })

 /*====through the ajax with seccuess and error method==*/

 function getDataWithAjaxMethod(method,url){
    return $.ajax({
    	url:url,
    	type:method,
    	dataType:'json',
    	success: function(data,status,obj){
    		for(let t of data){
    			// console.log(t.title);
    		}
    	},
    	error: function(error){
    		console.log(error);
    	}
    })

 }

 getDataWithAjaxMethod('GET','https://jsonplaceholder.typicode.com/todos');

 /*====through the $.getmethod =*/

 function getDataWith$getMethod(url){
 	return $.get(url,
 			function(data){
 				for(let t of data){
 					// console.log(t.title);
 				}
 			}
 		);
 }

 getDataWith$getMethod('https://jsonplaceholder.typicode.com/todos');

