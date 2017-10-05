 
 $(document).ready(function(){

 	$('#btn').click(function(){
 		$(this).attr('id','id_updated');
 		$('form input').attr('name',function(index,curr_val){
 			return curr_val + "_new";
 		});
 	});

 });