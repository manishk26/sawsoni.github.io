var PERSON = (function(){
	
	var URL = 'http://demo.soni.com:3000/persons';

	function getPersons(){
		$.ajax( {
			url: URL, 
			type : 'GET',
			success:function(result){

			// success callback is called when server returns the data in JSON form
			// we need to strigfy and parse JSON data to convert into javascript object/array
			var stringResult = JSON.stringify(result);
			// now parse the data
			// parsedData is nothing but a Javascript array
			var persons = JSON.parse(stringResult);

			var tr;
			
			$.each(persons,function(index,object){
				tr = tr + '<tr><td>' + object.id + '</td><td>'+ object.firstName + '</td><td>' + object.lastName + '</td><td>' + object.sex + '</td><td>' + object.age + '</td><td> <button class=\"deleteRow\" onclick="PERSON.delete(this)" id="'+object.id+'">X</button>'+'</td></tr>';
			});
			
			// now udpate the DOM element
			$('#pBody').html(tr);

		} } );
	}

	function savePerson(person){
		console.log(person);
		$.ajax({
			url : URL,
			type : 'POST',
			data : person,
			success: function(object){
				console.log('Person saved');
				// redirect to list page
				$(location).attr('href','person.html'); 
			},
			error: function(response){
				// show error on same page
				console.log(response);
			}
		})
	}

	function deletePerson(evt){
		var ID = evt.id;
		$.ajax({
			url : URL+'/'+ID,
			type : 'DELETE',
			success: function(response){
				$('#message').html('Person with '+ ID +' deleted');
				getPersons();
			}, 
			error : function(response){
				console.log(response);
			}
		});
	}

	return {
		get: getPersons,
		save: savePerson,
		delete: deletePerson
	}
})();