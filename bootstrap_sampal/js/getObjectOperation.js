$(document).ready(function(){

	STUDENT.getS();

	var student = {
		id: '',
		name: '',
		class : ''
	};

	// student.name = $('#studentName').val();
	// student.class = $('#stuClass').val();


	$('#getStudentBtn').on('click' ,function(event){
	 	 event.preventDefault();
	 	 STUDENT.getS();//
	});//on click end here

	$('#btnsubmit').on('click',function(event){
		student.name = $('#studentName').val();
		student.class = $('#stuClass').val();
		// event.preventDefault();

		STUDENT.saveS(student);
	});

	$("#myTableBody").on("click", ".btndelete", function(event){
		var ID = event.currentTarget.id;// currentTarget
		var name = event.currentTarget.name;
		console.log(ID);
		STUDENT.deleteS(ID);
		

	});

	

});