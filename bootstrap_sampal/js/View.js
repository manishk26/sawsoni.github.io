$(document).ready(function(){

	

	
	
	
	$('#btnsubmit').on('click', function(evt){
		evt.preventDefault();
		var fName = $('#fName').val();
		var lName = $('#lName').val();
		var age = $('#age').val();
		var person = new Person(fName,lName,age);
		setAddresses(person);
		setPhoneNumbers(person);
		// var person = new Person(fName,lName,age,address,phone);
		console.log(person);
		
	});

	/**
		set phone numbers
	*/
	function setPhoneNumbers(person){
		var phoneNumbers = [];
	
		var personal_num = $('#personal').val();
		if(personal_num != ''){
			var personal = new PhoneNumber();
			personal.type = 'Personal';
			personal.number =  personal_num;
			phoneNumbers.push(personal);
		}

		var fax_num = $('#fax').val();
		if(fax_num != ''){
			var fax = new PhoneNumber();
			fax.type = 'Fax';
			fax.number =  fax_num;
			phoneNumbers.push(fax);
		}
		if(phoneNumbers.length > 0){
			person.phone = phoneNumbers;
		}

	}
	// =============validation===============

function setAddresses(person){

		var addresses = [];

		var streetAddress = $('#streetAddress').val();
		console.log(streetAddress);
		var	city = $('#city').val();
		var state = $('#state').val();
		var postalCode = $('#postalCode').val();

		if(streetAddress != '' || city != '' || state != '' || isNaN(postalCode) || postalCode != ''){
			var currentAddress = new Address(streetAddress, city, state, postalCode);
			currentAddress.type = 'CurrentAddress';
			currentAddress.streetAddress = streetAddress;
			addresses.push(currentAddress);//first object
		}
		

		
		var streetAddress1 = $('#streetAddress1').val();
		console.log(streetAddress1);
		var city1 = $('#city1').val();
		var state1 = $('#state1').val();
		var postalCode1 = $('#postalCode1').val();

		if(streetAddress1 != '' || city1 != '' || state1 != '' || isNaN(postalCode1) || postalCode1 != ''){
		var permanentAddress = new Address(streetAddress1, city1, state1, postalCode1);
			permanentAddress.type = 'PermanentAddress';
			permanentAddress.streetAddress = streetAddress1;
			addresses.push(permanentAddress);//2nd object
		}
		

		if(addresses.length > 0){
			person.address = addresses;
		}
	}






})