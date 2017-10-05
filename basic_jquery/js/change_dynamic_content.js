$(document).ready(function(){
	$('#btn').click(function(){
		$('p').html(function(a,b){
			return "old text: " + b +" "+ "New text: i am updated text" ;
		});
	});
});