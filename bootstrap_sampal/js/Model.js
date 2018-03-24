
class Person{

	constructor(fName, lName, age, address, phone){
		this.fName = fName;
		this.lName = lName;
		this.age = age,
		this.address = address;
		this.phone = phone;
		
	}

}

//=====
 class Address {
    constructor(streetAdress, city, state, postalCode){
    	this.type = '';
        this.streetAddress = streetAddress;
		this.city = city;
		this.state = state;
		this.postalCode = postalCode;
    }
 }

//====
 class PhoneNumber {
    constructor(type, number){
        this.type = type;
        this.number = number;
    }
 }


 	/*
 	var address = new Address('Kanakapura','Bangalore','Karnanaka',560062);
 	var phoneno = new PhoneNumber('Personal',9611765027);
 	var p1 = new PersonModel('soni','saw',30, address,phoneno);
	var address = new Address('$('#streetAddress').val()','$(#)')
	*/