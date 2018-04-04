



function tableCreate(){
	var y = ['<td><input type="text" id="col_1"></td>','<td>col_2</td>','<td>col_3</td>'];

	var row_1 = {
		'name':'row1',
		'columns': y
	}
	var row_2 = {
		'name':'row2',
		'columns': y
	}
	var row_3 = {
		'name':'row3',
		'columns': y
	}

	var x = [row_1,row_2,row_3];
	var myTable = document.getElementById('myTable').innerHTML;

	var rows = "";
	for (var i = 0;i < x.length; i++) {
	
		   var obj =  x[i];

		   rows = rows + "<tr>";

		   for(var j = 0; j < obj.columns.length; j++){

		   	 var objCol = obj.columns[j];
		   	 rows = rows + objCol;

		   }
		   rows  = rows + "</tr>";
		
		
		 

	}
	console.log(rows);
	document.getElementById('myTable').innerHTML += rows;
	
	

}

	