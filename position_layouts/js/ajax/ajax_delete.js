
	var URL = 'http://demo.soni.com:3000/persons';

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
				tr = tr + '<tr><td>' + object.id + '</td><td>'+ object.firstName + '</td><td>' + object.lastName + '</td><td>' + object.age + '</td><td> <button class=\"deleteRow\" onclick="deletePerson(this)" id="'+object.id+'">Delete</button>'+'</td></tr>';
			});
			
			// now udpate the DOM element
			$('#pBody').html(tr);

		} } );
	}



