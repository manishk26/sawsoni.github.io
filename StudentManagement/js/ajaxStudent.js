function updateStudentList() {
    var promise = $.ajax({
        url: 'http://demo.soni.com:3000/students',
        method: 'GET',
        datatype: 'json'
    });
    promise.then(function(response) {
        return response;
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
            var template = `<tr>
				  <td><div><input type="checkbox" class='myCheckbox' id=${id} name=${name}></div></td>
				  <td>${name}</td>
				  <td>${stClass}</td>
				  <td>${age}</td>
				  </tr>`;
            tr = tr + template;
        });
        $('#studentList').html(tr);
    }).catch(function(error) {
        $('#studentList').html(error);
    })
}
/*=======*/
function newStudentBtnClick() {
    var c = $('#createStudent');
    c.css('display', 'block'); // show div to create 
    // hide student list div
    var studentList = $('#students');
    studentList.css('display', 'none');
}

function detailLinkClick(id) {
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
 * Delete students 
 */
function deleteCheckedObject() {
    var selectedCheckboxes = $("#studentList > tr > td > div > input[type='checkbox']:checked");
    var selectedIds = []; //will push checked item through id pro in this array
    var selectedName = []; //will puch checked item through name pro in this array
    $.each(selectedCheckboxes, function(index, studentCheckBox) {
        selectedIds.push(studentCheckBox.id);
        selectedName.push(studentCheckBox.name);
    })
    var s = confirm('Are you sure you want to delete?');
    var deletedFlag = false;
    if (s) {
        $.each(selectedIds, function(index, id) {
            var d = $.ajax({
                url: 'http://demo.soni.com:3000/students/' + parseInt(id),
                method: 'DELETE',
                datatype: 'text'
            });
            d.then(function(data) {
                updateStudentList();
                deletedFlag = true;
            }).catch(function(e) {
                deletedFlag = false;
                console.log(e);
                alert('sorry..error' + e);
            });
        })
    }
    if (deletedFlag = true) {
        var massage = `Students '${selectedName}' Deleted Successfully.`;
        alert(massage);
    }
}
/*=======Delete selected students=========*/

	$('#deleteStudentBtn').on('click', function(event) {
		deleteCheckedObject();
	});

/*
 * ========post/create student====
 */

 function createStudent(){
 	var url = "http://localhost:3000/students";
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

	var createStudent = $.ajax({url:url,
								method:'POST',
								body:JSON.stringify(newStudentData),
								headers:{
									'user-agent':'Mozilla/4.0 MDN Example',
									'content-type':'application/json'
								}
							});

	createStudent.then(function(response){
		document.getElementById('mms').innerHTML = 'Student creaeted.';
		window.location = "students.html";
	}).catch(function(error){
		document.getElementById('mms').innerHTML = error;
	})

 }

