//5000 miliseconds taken to show the p.
//The other values can be "slow" or "fast"
	$(document).ready(function(){
		$('#btn').click(function(){
			$('p').show(5000,function(){
				alert('The paragaraph is now visible');
				 //$("p").show(5000);
    			 //alert("The paragraph is now visible");
			});//callback function close here
		});
	});