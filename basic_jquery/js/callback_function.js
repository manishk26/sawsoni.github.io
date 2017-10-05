
	$(document).ready(function(){
		//the first parameter.i.e a denotes the index of the element selected and the second parameter .i.e b denotes the content
  		//static content passed to text()
  		//$("p").text("dummy");

  		//dynamic content passed to text()
  		$('#btn1').click(function(){
  			// $("p").text("dummy");// this is static funcion execute only in one click 

  			$('p').text(function(a,b){ // this is dynamic function will execute in my click i can click multipal time
			//return "oldtext:" +b + "new text:(index: " + a  + ")";
			return "old text " + b + ("index: " + a);
		});
  	});

		
	});