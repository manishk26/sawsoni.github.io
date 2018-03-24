
 $(document).ready(function(){
 	$('#rowButton').on('click',function(){

 		$('table').each(function(index,obj){ //not using parameter

 			var tableRow = '<tr>';//start the row

 				$('tr:last td').each(function(ind,object){ //not useing parameter

 					tableRow = tableRow + '<td>' + $(this).html()  + '</td>';

 				}); //to make the copy of same td which u have in html page use $(this).html(),to get the value

 				tableRow = tableRow + '</tr>';

 				console.log(tableRow );

 				$(this).append(tableRow);

 				/* if tbody is not in the table

					if($('tbody',this).length > 0){
						$('tbody',this).append(tableRow);
					}else{
						$(this).append(tableRow);
					}

 					*/
 		});



 	});
 });
 