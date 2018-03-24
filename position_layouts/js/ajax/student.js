$(function(){

	var URL = 'http://demo.soni.com:3000/students';

	class StudentModel {

		constructor(name, clazz){
			this.name = name;
			this.class = clazz;
		}

	}

	let student = new StudentModel();

	/**
	This handle click event on btn1
	*/
	 $('#getStudentBtn').on('click' ,function(event){
	 	 event.preventDefault();
	 	 getStudents();//
	});//on click end here

 	//after clicking this creatStudent button, form will appear

	$('#creatStudent').on('click',function(){
		$('#studentCreatForm').css("display","block");
		$('#studentName').focus();
		
   	});

	/**
	validate function
	*/
	function validateName(data){

		if(!isNaN(data) || data ==''){
			alert('name should not be number or empty');		
			return false;
		}
		return true;
		
	}

	function validateClass(data){
		if(isNaN(data)|| data == ''){
			alert('it should be  number and cannot be empty');
			
		} else if( data < 1 || data > 12){
			alert('number should be gretter than 12 and less than 1');
			return false;
		}

		return true;
	}


	/**
	The change event occurs when the value of an element has been changed
	*/
	$('#studentName').on('change', function(){
		student.name = $('#studentName').val();
		
		console.log(student);
		validateName(student.name);
		

	});

	$('#stuClass').on('change', function(){
		student.class = $('#stuClass').val();
		$('#stuClass').focus();
		validateClass(student.class);
	});


	/**
	This is POST
	*/
	$('#btnsubmit').on('click',function(event){
		event.preventDefault();
		 if(validateName(student.name) || validate(student.class)){

				$.post({
					url: URL,
					data: student
				})
				.done((data)=> {
						$('#msg').html('student added').css('color','green');
						$('#studentName').focus().val('');
						$('#stuClass').val('');
						getStudents();
				})
		}
	});


	/**
	 Note: The currentTarget property does not necessarily return the element that was clicked on, but the element whose eventlistener triggered the event.
	 The currentTarget event property returns the element whose event listeners triggered the event.
	 This is delete
	*/
 	$("#myTableBody").on("click", ".btndelete", (event) => {
		var ID = event.currentTarget.id;// currentTarget
		var name = event.currentTarget.name;

 	   $.ajax({
	 		url: URL +'/'+ID,// can delete through the id
	 		type: 'DELETE'
	 	})
 	   .done(() => {
	 			$('#massage').html('Student '+ name +' deleted').css('color','blue');

	 		 getStudents(); //after deliting need to call this function to get the student
	 		
		});
	});

	// This is get to get all students
	function getStudents(){
  		$.get({
			url: URL,
			success: (response) => {

				// console.log(response);

				var stringResponse = JSON.stringify(response);
				var arrayResponse = JSON.parse(stringResponse);

				// console.log(arrayResponse); // an array has object in there index

				var tr = '';

				/*for(var i = 0; i < arrayResponse.length; i++){
					tr = tr + '<tr><td>' + arrayResponse[i].name +'</td><td>' +arrayResponse[i].class +'</td></tr>' ;
				}*/

				$.each(arrayResponse ,(index,object) => {
					// alert(object.name);
					tr = tr + '<tr><td>' + object.name +'</td><td>' +object.class +'</td><td>'+
						'<button class =\"btndelete\" name='+object.name+' id = ' + object.id +'>'+ "x" + '</button></td></tr>' ;
				})

					/*in side each loop button id atttribute cab be object.id/and name attribute can be object.name
					so that get it know which object button is this
					*/
				console.log(tr);

				$('#myTableBody').html(tr);

		 }//seccess end

 	 });//$.get end
 
   };//getperson() end



});//document ready end