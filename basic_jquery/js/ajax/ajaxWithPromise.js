
 $(document).ready(function(){
 	var URL = "http://demo.soni.com:3000/products";

 	 function getProduct(){
 	 	$.ajax({
 	 		url: URL,
 	 		type: "GET",
 	 		// method:"GET"
 	 		dataType: 'json',
 	 		})//this is returnnning promise object
 	 		.then(function(data){//can use .done() or .then()
 	 			console.log('success',data);
 	 			var tr = "";
				for(var i = 0 ; i < data.length; i++)
				{
					tr += '<tr><td>' + data[i].name + '</td><td>' + 
							data[i].price+ '</td><td>' + data[i].id + '</td></tr>';
				}
				$('#myTableBody').html(tr);	
 	 		})
 	 		.catch(function(e){ //can use .fail() or .catch()
 	 			console.log('error',e);
 	 		})
		}
 	 

 	 $('#getStudentBtn').on('click',function(e){
 		e.preventDefault();
 		getProduct();
 		// getStudentInPromise();

 	});
 });
 
 /*Usually I write a ajax call like below

  $.ajax({
    url: URL,
    method: "GET",
    data: { 
      a: "a"
    },
    success: function(data) {
      console.log('success', data) 
    },
    error: function(xhr) {
      console.log('error', xhr);
    }
  })*/