
// marged this code in get_object.js

//this is post

$(document).ready(function(){
	$('#creatStudent').on('click',function(){
		$('#studentCreatForm').css("display","block");
		
   });

 	$('#btnsubmit').on('click',function(event){

 		event.preventDefault();
		/*var nameValue = $('#studentName').val();
		var classValue = $('#stuClass').val();
*/
		var student = {
			id :  '',
			/*name : nameValue,
			class : classValue*/
			name : $('#studentName').val(),
			class : $('#stuClass').val()
		}

		 console.log(student);

		$.post({
			url: 'http://demo.soni.com:3000/students',
			data: student,
			success : function(data, status){

				$('#msg').html('student added');
			},

			error : function(response){

				console.log(response);
			}
	});
});

});	