const Profile = {
	firstName : "",
	lastName: "",
	setname : function(name){

		 let splitName = function(n){

		 	let nameArray = n.split('');

		 	this.firstName = nameArray[0];
		 	this.lastName = nameArray[1];
		 }

		 splitName(name);
	}
}


	Profile.setName('soni saw');
	console.log(Profile.firstName);