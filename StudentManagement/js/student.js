var URL  = 'https://my-json-server.typicode.com/SawSoni/sawsoni.github.io/students/';
var URL = "http://demo.soni.com:3000/students/";
function newStudentBtnClick(){
        var c = $('#createStudent');
        c.css('display','block'); // show div to create 
       
        // hide student list div
        var studentList = $('#students');
        studentList.css('display', 'none');
}

function detailLinkClick(id){
    console.log(id);
   
   // call this function to update the studentDetail div
    getStudentDetail(id);
    // hide student list div
    var studentList = $('#students');
    studentList.css('display', 'none');
}

/**
 * handle cancel 
 */
function cancel() {
	window.location = "students.html";
}


/**
* Update student lists
 */
function updateStudentList() {
	var p = Students.getAll(URL);
	p.then(function(response) {
		return JSON.parse(response);
	}).then(function(data) {
		let tr = "";
		let id;
		let name;
		let stClass;
		let age;

		$.each(data, function(index, student) {
			id = student.id;
			name = student.name;
			stClass = student.class;
			age = student.age;

			var template = `
				<tr>
				<td><div>
					
					<input type='checkbox' class='myCheckbox' id=${id} name=${name} >
					<span>
					${id}
					</span>

					</div>
				</td>
				<td><a class="detailLink" onclick=detailLinkClick(${id})> ${name} </a></td>
				<td> ${stClass} </td><td>${age}</td>
				</tr>
			`;
			
			tr += template;
		})
		$('#studentList').html(tr);
	}).catch(function(error) {
		console.log(error);
	})
}

/** 
* Delete students 
*/

function deleteCheckedObject() {
	var selectedCheckboxes = document.querySelectorAll("#studentList > tr > td > div > input[type='checkbox']:checked");
	console.log(selectedCheckboxes);
	var selectedStudents = [];
	var toBeDeletedNames = [];
	$.each(selectedCheckboxes, function(index, selectedCheckbox) {
		toBeDeletedNames.push(selectedCheckbox.name);
		selectedStudents.push(selectedCheckbox.id); //id is the property
	})
	var s = confirm('Are you sure you want to delete?');
	var deletedFlag = false;
	
	// var that = this;
	if (s) {
		$.each(selectedStudents, function(index, id) {
			var d = Students.del('http://demo.soni.com:3000/students/' + id);
			d.then(function(data) {
				updateStudentList();
				deletedFlag = true;
			}).catch(function(error) {
				deletedFlag = false;
				alert('sorry..error ' + error);
			});
		})
	}
	if (deletedFlag = true) {
		var message = `Student '${toBeDeletedNames}' Deleted Successfully.`;
		alert(message);
	}
	
}

/**
 * Delete selected students
 */
$('#deleteStudentBtn').on('click', function(event) {
	var ID = event.currentTarget;
	console.log(ID);
	deleteCheckedObject();
});

/**
 * Get student details 
 */
function getStudentDetail(id) {
	//var id = window.location.href.substr(window.location.href.lastIndexOf('?') + 1, window.location.href.length);
	// console.log(id);
	var p = Students.get(URL + id);
	p.then(function(response) {
		return JSON.parse(response);
	}).then(function(data) {
		var name = data.name;
		var className = data.class;
		var age = data.age;
		var id = data.id;
		var template = `<div style='margin:30px' class="detailFieldsetDiv">
		 		 <fieldset style='display:block' class="detailFieldset"> 
		 		 <legend class="detailLegend"> Details of <span>'${name}'</span></legend>
			 		 <table class="detailTable">
			 		 	<tr>
				 		 	<td><label> ID: </lable></td>
				 		 	<td><input type='text' id='ID' value='${id}' disabled> </td>
			 		 	</tr>
			 		 	<tr>
				 		 	<td><label> Name: </lable></td>
				 		 	<td><input type='text' id='name' value='${name}'></td>
			 		 	</tr>
			 		 	<tr>
				 		 	<td><label> Class: </lable></td>
				 		 	<td><input type='text' id='class' value=${className}> </td>
			 		 	</tr>
			 		 	<tr>
				 		 	<td><label> Age: </lable></td>
				 		 	<td><input type='text'  id='age' value=${age}> </td>
			 		 	</tr>
			 		 	<tr class = "detailTrBtn">
				 		 	<td><button onclick='cancel(this)'> Cancel </button></td>
				 		 	<td><button onclick='updateStudent(this)'> Save </button></td>
			 		 	</tr>
			 		 </table>
		 		 </fieldset>
		 		 </div>
		 		 `;
		
		$('#studentDetail').html(template).css('display', 'block');

	}).catch(function(error) {
		console.log(error);
	})
}


/*========post/UPDATE student====*/
function updateStudent() {

	var ID = document.getElementById('ID').value;
	var nameS = document.getElementById('name').value;
	var classN = document.getElementById('class').value;
	var age = document.getElementById('age').value;

	var url = URL + ID;


	var newStudentData = {
		id: ID,
		name: nameS,
		class: classN,
		age: age
	};

	// POST adds a random id to the object sent
	$.ajax(url, {
	  method: 'PUT',
	  data: newStudentData
	}).then(function(data) {
	  console.log(data);
	  window.location = "students.html";
	});
	/**
	var createStudent = fetch(url, {
		body: JSON.stringify(newStudentData),
		headers: {
			'user-agent': 'Mozilla/4.0 MDN Example',
			'content-type': 'application/json'
		},
		method: 'PUT'
	});
	createStudent.then(function(response) {
		//document.getElementById('mms').innerHTML = 'Student creaeted.';
		window.location = "students.html";
		//after clicking create button, window.location will take me to the student.html page
	}).catch(function(error) {
		console.log(error);
	})*/
}


/*
 * ========post/create student====
 */
function createStudent() {
	var url = URL;

	var ID = document.getElementById('ID').value;
	var nameS = document.getElementById('name').value;
	var classN = document.getElementById('class').value;
	var age = document.getElementById('age').value;

	var newStudentData = {
		id: ID,
		name: nameS,
		class: classN,
		age: age
	};
	//var newStudentData = {id:8, name:'Soni Kumari', class:'Nursery', age:5};
	var createStudent = fetch(url, {
		body: JSON.stringify(newStudentData),
		headers: {
			'user-agent': 'Mozilla/4.0 MDN Example',
			'content-type': 'application/json'
		},
		method: 'POST'
	});
	createStudent.then(function(response) {
		document.getElementById('mms').innerHTML = 'Student creaeted.';
		window.location = "students.html";
		//after clicking create button, window.location will take me to the student.html page
	}).catch(function(error) {
		console.log(error);
	})
}