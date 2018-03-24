$(document).ready(function(){

	
// invoked when GetPersonsButton is clicked
// $('#GetPersonsButton').on('click', function(){
	// console.log('clicked');

	// retrieve all person from REST API Endpoint
	// it returns data in JSON format
	// url is http://demo.soni.com:3000/persons
	var URL = 'http://demo.soni.com:3000/persons';
	// 

	$.get( {url: URL, success:function(result){

		// success callback is called when server returns the data in JSON form
		// we need to strigfy and parse JSON data to convert into javascript object/array
		var stringResult = JSON.stringify(result);
		// now parse the data
		// parsedData is nothing but a Javascript array
		var persons = JSON.parse(stringResult);

		var tr;
		/*
		for(var i = 0 ; i<persons.length; i++){
			var person = persons[i];
			tr = tr + '<tr><td><a href="#" class="deleteRow">1</a></td></td><td>'+person.firstName+'</td><td>'+person.lastName+'</td><td>'+person.age+'</td><td><button id="deletePerson">X</button></tr>';

		}*/

		$.each(persons,function(index,object){
			tr = tr + '<tr><td>' + object.id + '</td><td>'+ object.firstName + '</td><td>' + object.lastName + '</td><td>' + object.age + '</td><td> <button class=\"deleteRow\" onclick="deletePerson(this)" id="'+object.id+'">Delete</button>'+'</td></tr>';
		});
		
		// now udpate the DOM element
		
		$('#pBody').html(tr);

	} } );
	



});


