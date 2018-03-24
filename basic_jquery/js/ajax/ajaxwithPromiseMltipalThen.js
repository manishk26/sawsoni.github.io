
 $(document).ready(function(){
 	function getProduct(){
 	var promise = $.ajax({url:"http://demo.soni.com:3000/students",type:'GET',dataType:'json'});

 		promise
 		.then(function(response){
 			console.log('success',response);
 			// return response.json();
 			return response;//testing prepose extra then writting
 		})
 		.then(function(data){
 			
 			var tr = "";
				for(var i = 0 ; i < data.length; i++)
				{
					tr += '<tr><td>' + data[i].name + '</td><td>' + 
							data[i].class+ '</td><td>' + data[i].age + '</td></tr>';
				}
				$('#myTableBody').html(tr);	
				return data;
 		})
 		.then(function(r){
 			console.log('Thank you',r);
 			var p = "";
 			//[{…}, {…}, {…}, {…}, {…}, {…}]
 			$.each(r,function(key,value){
 				p += '<p>' +key +':'+ value.name + '</p>';
 			});

 			$('#onlyName').html(p);
 			return r;
 		})
 		.then(function(r){
 			console.log('ho!..',r);
 			var p = "";
 			//[{…}, {…}, {…}, {…}, {…}, {…}]
 			$.each(r,function(key,value){
 				p += '<p>' +key +':'+ value.class + '</p>';
 			});

 			$('#onlyClass').html(p);
 			return r;

 		})
 		.then(function(r){
 			console.log('last...',r);
 			var p = "";
 			//[{…}, {…}, {…}, {…}, {…}, {…}]
 			$.each(r,function(key,value){
 				p += '<p>' +key +':'+ value.age + '</p>';
 			});

 			$('#onlyAge').html(p);
 			
 		})
 		.catch(function(e){
 			console.log('error',e);
 		})
	}


 		$('#getStudentBtn').on('click',function(e){
 		e.preventDefault();
 		getProduct();
 		
 	});
 });