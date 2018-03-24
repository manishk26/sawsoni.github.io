var Products = (function(){
	
	/**
	*/
	function performXmlHttpRequest(url, methodName, resolveFunction, rejectFunction){
		let xhr = new XMLHttpRequest();
 			xhr.open(methodName, url);
 			xhr.onload = function(){
 				resolveFunction(xhr.responseText);
 			};
 			xhr.onerror = function(){
 				rejectFunction(xhr.statusText);
 			};
 			xhr.send();
	}

	/**
	*/
	function getProducts(url){
		var p = new Promise(function(resolve, reject){
			performXmlHttpRequest(url, 'GET', resolve, reject);
		});
		return p;
	}

	function getProduct(url, id){
		var p = new Promise(function(resolve, reject){
			performXmlHttpRequest(url+id, 'GET', resolve, reject);
		});
		return p;
	}

	function save(url){
		var p = new Promise(function(resolve, reject){
				//resolve('Hey I am resolved');
				reject('I got an error');
		});
		return p;
	}

	function update(url){
		var p = new Promise(function(resolve, reject){
				//resolve('Hey I am resolved');
				reject('I got an error');
		});
		return p;
	}

	function deleteProduct(url){
		var p = new Promise(function(resolve, reject){
				//resolve('Hey I am resolved');
				reject('I got an error');
		});
		return p;
	}



return {
	getAll: getProducts,
	get : getProducts,
	save: save,
	update:update,
	del: deleteProduct
	
}

})();
