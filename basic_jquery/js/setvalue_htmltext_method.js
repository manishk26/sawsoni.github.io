$(document).ready(function(){
	$('#btn1').click(function(){
		$('#test1').text('hello world!');
		console.log($('#test').html());
	});
// =============

	$('#btn2').click(function(){
		//used including html tag with content 
		$('#test2').html('<b>HELLO WORLD!</b>');
	});
// ==========
	
	$('#btn3').click(function(){
		//$('#test3').val('Dolly Duck');
		$('form input[name=un]').val('Hello world!');
	});

	// ================

	$('#btnclick').on('click', function(){
	//1: first way
		//var rows = $('#appendRow').html();//get empty value
		
		//rows += "<tr><td> Naresh </td> <td> 40 </td></tr>";
		
		//update DOM#tableRows
		//$('#appendRow').html(rows); //set the value
	//2: second way
	// 	$('#appendRow').html(function(a,b){
	// 		return  b + '<tr><td> Naresh </td> <td> 40 </td></tr>';
	// 	});
	// });
	//*3: third way
	$('table').each(function(index,object){
  var tds = '<tr>';
	$('tr:last td').each(function(ind,obj){
		tds = tds + '<td>' + $(this).html() +                      '</td>';
	
     });
		tds = tds + '</tr>';
		$('tbody', this).append(tds);
     
   });

  });
	
});	