	
	function PersonAction(person){

			var persons = [
			{
				id:1,
				name:'Naresh',
				age:40
			},
			{
				id:2,
				name:'Soni',
				age:30
			},
			{
				id:3,
				name:'Avinash',
				age:10
			},
			{
				id:4,
				name:'Avika',
				age:3
			},
			{
				id:5,
				name:'Tulsi',
				age:28
			}

			]

			function getPerson(id){
				return persons[id];
			}

			function getPersons(){
				return persons;
			}

			function savePerson(){
				persons.push(person);
			}

			function updatePerson(){
				persons[person.id] = person;
			}

			function deletePerson(){
				persons.pluck(person.id);
			}

			return {

				get:   getPerson,
				getAll: getPersons,
				save:   savePerson,
				update: deletePerson
			}
	}