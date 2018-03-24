	
	var STUDENT = (function(){

	var URL = 'http://demo.soni.com:3000/students';

	function getStudents(){

  		$.get({
			url: URL,
			success: function(response){

				// console.log(response);

				var stringResponse = JSON.stringify(response);
				var arrayResponse = JSON.parse(stringResponse);

				var tr = '';

				$.each(arrayResponse ,function(index,object){
					// alert(object.name);
					tr = tr + '<tr><td>' + object.name +'</td><td>' +object.class +'</td><td>'+
						'<button class =\"btndelete\" name='+object.name+' id = ' + object.id +'>'+ "x" + '</button></td></tr>' ;
				})


				console.log(tr);

				$('#myTableBody').html(tr);

		 }//seccess end

 	 });//$.get end
 
   };//getperson() end

   			function postStudent(student){

			   		$.post({

			   			url: URL,
			   			data: student,
			   			success : function(object){

			   				console.log('Student saved');

			   				$(location).attr('href','getObject.html'); 

			   			},

			   			error: function(response){

			   				console.log(response);
			   			}
			   		});

			 }// postStudent end

		function deleteStudent(ID){
			   	$.ajax({
			   		url: URL + '/'+ ID,
			   		type: 'DELETE',
			   		success: function(response){
			   			$('#massage').html('Student '+ name +' deleted');
			   			getStudents();
			   		},
			   		error: function(response){
			   			console.log(response);
			   		}
			   	});

		}//deleteStudent end

		return {

			getS: getStudents,

			saveS: postStudent,

			deleteS: deleteStudent
		}




})();//end STUDENT


