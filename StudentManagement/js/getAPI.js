
	//create dynamic row
	function getRow(student) {
		if (typeof student != 'object' || Array.isArray(student)) {
			return false;
		}
		var row;
		var name = student.name;
		var columns = `<div><input type="checkbox" id="${student.id}">${student.id}</div>
        				<div>${student.name}</div>
        				<div>${student.class}</div>
        				<div>${student.age}</div>
        				<div class ="deleteDiv"> <button class="deleteBtn" onclick='deleteStudent(${student.id})'>&#215</button> </div>`
        				;
		return row = `<div class="row">${columns}</div>`;
	}
	// create rows of students
	function getRows(students) {
		if (Array.isArray(students)) {
			var rowsOfStudents = '';
			var rows;
			students.forEach((studentObj, index) => {
				rowsOfStudents += getRow(studentObj);
			})

			return rows = `${rowsOfStudents}`;
		}
	}
	//update dom function

	function domUpdateEle(classN, data) {
		// document.querySelector(classN).innerHTML = data;
		$(classN).html(data);
	}

	// $.ajax to get data

	function getStudents(url) {
		$.ajax({
			url: url,
			method: 'GET'
		}).then((response) => {
			var rows = getRows(response);
			domUpdateEle('.rowContainer', rows);
		})
	}

	//click the the button
	/*$('#getData').on('click', () => {
		getStudents('http://demo.soni.com:3000/students');
	})*/
	// $.ajax to get data through input
	function searchStudent() {
		var input = $('#serchByClass').val();
		var url = 'http://localhost:3000/students?q=' + input;
		$.ajax({
			url: url,
			method: 'GET'
		}).then((response) => {
			var rows = getRows(response);
			$('.rowContainer').html('');
			$('.rowContainer').html(rows);
			$('#total').html(response.length);//this will show total no of student
		})
	}


	$('#serchByClass').on(' keyup', function(e) {
		console.log(e.type);
		searchStudent();
	});

	$('#serchButton').on('click', function(e) {
		e.preventDefault();
		searchStudent();
	});

	// $.ajax to delete  data

	function deleteCheckedObject(url){
		var selectedCheackBoxes =  $(":checkbox:checked");//array
		var selectedStudent = [];//in the array will right ajax
		var detetedStudentName = [];
		$.each(selectedCheackBoxes, (index,selectedCheckBox) =>{
			selectedStudent.push(selectedCheckBox.id);
			// detetedStudentName.push(selectedCheckBox.name);
		})

		var s = confirm('Are you sure you want to delete?');
		var deteleFlag = false;

		if(s){
			$.each(selectedStudent, (index,id) => {
				deleteStudent(id)
			})
		}
		// ==
		if(deteleFlag = true){
			var massage = `student '${selectedStudent}' deleted successfully`;
			alert(massage);
		}
	}

	$('#deleteAll').on('click',function(){
		// alert('i will delete all');
		deleteCheckedObject('http://localhost:3000/students/');

	})


function deleteStudent(id){
	var url = 'http://localhost:3000/students';
	url = url + '/'+ id;
	var that = this;
	$.ajax({
					url : url,
					method : 'DELETE'
				})
				.then((response) => {
					alert(`Student ${id} delete successfully.`);
					searchStudent();
				}).catch( (error) => {
					alert('sorry...' + error);
				})
}

var trybtn = $('.tryClick');
	console.log(trybtn);
	for(var i = 0; i < trybtn.length; i++){
		trybtn[i].addEventListener('click',function(){
			alert('i am detele');
		})
	}