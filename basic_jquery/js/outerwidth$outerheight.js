/*outerwidth()/outerheight():Get the current computed outer width (including padding, border, and optionally margin) for the first element in the set of matched elements
	innerwidth()/innerheight():Get the current computed inner width (including padding but not border) for the first element in the set of matched elements
	*/

	$(document).ready(function(){

		$('button').on('click',function(){
			//$('button').click(function(){
			var text = "";//declear a empty text to store all value 

			text = text +"width of div: " + $('#div1').outerWidth()+"<br>";//bydefault it is false exclude margin

			text = text + "width of div include margin " + $('#div1').outerWidth(true)+"<br>";//if pass false value it will not include margin

			text += "height of div: "+ $('#div1').outerHeight()+"<br>";

			text += "height of div includes margin "+ $('#div1').outerHeight(true) + "<br>";

			text += "inner width of div with padding only " + $('#div1').innerWidth() + "<br>";//this include padding not border

			text += "inner height of div padding only " + $('#div1').innerHeight()+ "<br>";

			$('#div1').html(text);//get all value with html method
			//so outerWidth(),this method includes padding and border/400+10+10+4+4/get width

			

			
		});



	});