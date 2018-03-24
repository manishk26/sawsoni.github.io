var URL = 'http://demo.soni.com:3000/students';

function getStudentd() {
    var getStudents = fetch(URL, {
        method: 'GET'
    });
    getStudents.then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
        var student;
        for (var i = 0; i < data.length; i++) {
            student = data[i];
            var ID = student.id;
            var Name = student.name;
            var Class = student.class;
            var Age = student.age;
            var template = `<div class="temlateDiv"><span> ID 👉 ${ID} <input type="checkbox" id= ${ID} title="delete" name="delete" class="deleteCheckBox"></span><span style="float:right"><button id= ${ID} class="delete">x</button></span>
 	  						<span> Name: ➡️ ${Name} </span>
 	  						<span> Class: ➡️ ${Class} </span>
 	  						<span>Age: ➡️ ${Age} </span></div><hr> `;
            document.getElementById('gettingData').innerHTML += template;
        }
    }).catch(function(error) {
        document.getElementById('gettingData').innerHTML = "can not fetch the data";
    })
}
getStudentBTN.addEventListener('click', getStudentd);
// getStudentBTN.addEventListener('click', function(){getStudentd(),showAndHide('.parentBtnDiv>button','gettingData')});
/*Dom updata Show student and new student button, show and hide content function*/
function showAndHide(eleBtn, showDiv) {
    var elementButton = document.querySelectorAll(eleBtn);
    console.log(elementButton);
    for (var i = 0; i < elementButton.length; i++) {
        elementButton[i].classList.toggle('active');
        var showStudentDiv = document.getElementById(showDiv);
        if (showStudentDiv.style.display) {
            showStudentDiv.style.display = 'none';
        } else {
            showStudentDiv.style.display = 'block';
        }
    }
}
showAndHide();
/*========================create student========================*/
function createStudents() {
    var id = document.getElementById('ID').value;
    var name = document.getElementById('name').value;
    var classS = document.getElementById('class').value;
    var age = document.getElementById('age').value
    var newStudent = {
        id: id,
        name: name,
        class: classS,
        age: age
    };
    var createStudent = fetch(URL, { 
        method: 'POST',
        body: JSON.stringify(newStudent),
        headers: {
            'user-agent': 'mozilla/4.0 MDN example',
            'content-type': 'application/json'
        }
    });

    createStudent.then(function(respone){
    	var mms = document.getElementById('mms');
    	mms.innerHTML = 'Welcome to the Student Management';
    	mms.style.color = 'green';

    }).catch(function(error){
    	document.getElementById('mms').innerHTML = 'Sorry...';
    });

}

	createStudentBtn.addEventListener('click',createStudents);



	/*=============================deleteStudent===================================*/

		function deleteCheckedStudent(){
			var checkedStudent = document.querySelectorAll(".temlateDiv > span > input[type='checkbox']:checked");
			console.log(checkedStudent);
			var selectedBox = [];
			for(var i = 0; i < checkedStudent.length; i++){
				var allBox = selectedBox.push(checkedStudent[i].id);
			}

			for(var j = 0 ; j < allBox; i++){
				var d = allBox[j];
				var u = URL +'/'+ id;
				d = fetch(u,{method:'DELETE'});
				d.then(function(response){
					getStudentd();
					console.log('student deleted'+response);

				}).catch(function(e){
					console.log('error...' + e);
				})
			}
		}

		// deleteCheckedStudent();

		// function domDeleteFun(){
		var deleteButton = document.querySelectorAll('button.delete');
		console.log(deleteButton);
		for(var i = 0; i < deleteButton.length; i++){
			deleteButton[i].id.addEventListener('click',deleteCheckedStudent);
		}

	// }

	



