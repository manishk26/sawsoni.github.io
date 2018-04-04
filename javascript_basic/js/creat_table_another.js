function creatTable(){
//var columns = ['<td><input type="text" id="col_1"></td>','<td><input type="text" id="col_2"></td>'];
//for(var j = 0; j < columns.length; j++) if we use this variable	

 	var rowObject = ['row_1','row_2'];


 	//var domObj = document.getElementById('myAnotherTable').innerHTML;

 	var rows = '';

 	for(var i = 0; i < rowObject.length; i++){

 			//var storeObject = rowObject[i]; //1st execute: we will get row_1={} ,2nd execute:row_2={}
 											//we exses this var to get columns length next for loop
 											// first-time row_1={}
 			rows += '<tr>';// start the tr tag here first execution 

 				for(var j = 0; j < 2; j++){//this will execute 2time when i get row_1={} because we have two obj in columns

 					 rows = rows + '<td><input type="text" id="col_'+j+'"></td>' ;

 					//var column = columns[j];//1st:coulmns[0],2nd:coulmn[1]
 																//<td><input></td> ,<td><input></td>
 					//rows += column;//<tr><td><input></td> ,<td><input></td>

 				}

 				rows += '</tr>';//<tr><td><input></td> ,<td><input></td></tr> 1st:execution got one row,



 	}
 	console.log(rows);

 	document.getElementById('myAnotherTable').innerHTML +=  rows;

 	 //domObj = storeRowObject;


}//function end brace