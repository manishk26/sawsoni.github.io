$(document).ready(function(){

	PERSON.get();

	var person = {
		firstName: '',
		lastName : '',
		sex:'Male',
		age:0
	};

	function validate(){

		if(person.firstName == ''){
			alert('First Name should not be blank');
			return false;
		}
		if(person.lastName == ''){
			alert('Last Name should not be blank');
			return false;
		}
		if(person.sex == ''){
			alert('Sex should not be blank');
			return false;
		}

		if(person.age == ''){
			alert('Age should not be blank');
			return false;
		}
		return true;
	}

	/**
	Event handler for click on save button
	*/
	$('#save').on('click', function(){
		if(validate()){
			PERSON.save(person);
		}
	})

	/** 
	Event handler for Enter key press
	*/
	$('#firstName, #lastName, #age').on('keypress', function(evt){
		
		// shortcut of if-else condition
		// we read like this
		/**
		var keycode;
		if(evt.keyCode){
			keycode = evt.keyCode;
		}else {
			keycode = evt.which;
		}
		*/

		var keycode = (evt.keyCode ? evt.keyCode : evt.which);
			if(keycode == '13'){ // 13 is keycode for enter key 
					if(validate()){
						PERSON.save(person);
					}
			}
	})


	/**
		Event handler on keypress
		update person object's property
	 */
	$('#firstName, #lastName, #age').on('keypress', function(evt){
		person.firstName  = $('#firstName').val();
		person.lastName = $('#lastName').val();
		person.age = $('#age').val();
		console.log(person);

	})

	/**
	Event handler for select
	*/
	$('#sex').on('change', function(){
		person.sex = $('#sex').val();
	})

})