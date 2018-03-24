var Students = (function(){
	
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
	function getStudents(url){
		var p = new Promise(function(resolve, reject){
			performXmlHttpRequest(url, 'GET', resolve, reject);
		});
		return p;
	}

	function getStudent(url){
		var p = new Promise(function(resolve, reject){
			performXmlHttpRequest(url, 'GET', resolve, reject);
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

	function deleteStudent(url){
		var p = new Promise(function(resolve, reject){
			performXmlHttpRequest(url, 'DELETE', resolve, reject);
				//resolve('Hey I am resolved');
				// reject('I got an error');
		});
		return p;
	}



return {
	getAll: getStudents,
	get : getStudent,
	save: save,
	update:update,
	del: deleteStudent
	
}

})();
