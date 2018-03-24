//Q:add event handlers for future elements
//show that the on() method also works for elements not yet created
$(document).ready(function(){

	$('#div1').on('click','p',function(){

		$(this).slideToggle().css('background-color','pink');//this is p element here 
		console.log(this);
	});

	$('#insertPBtn').click(function(){

		$("<p class='newP'>This is new paragraph</p>").insertAfter('#insertPBtn');

	     $('<button id="changeColorBtn">ChangeColorBTN</button>').css('color','red').insertAfter('.newP');

	});

	$('#div1').on('click','#changeColorBtn',function(){
		$("#div1").css({'background-color':'#ABC','border':'2px solid red'});
	});

	/**To creat feature element have to select parent which is pargent in Html document*/

	$('#btnDiv').on('click','#featureButton',function(){
		$(this).slideToggle().css({'background-color':'red','color':'white'});
	})

	$('#featureButtonInsert').on('click',function(){
		$('<button id="featureButton">i am featureButton click me</button>').insertAfter(this);
	});

	 
	//Q:Remove an event handler?
	//how to remove an event handler using the off()method?

	/*if want to off event select parent*/
	$('#div1').on('mouseout', '.newP',function(){

		$(this).css('color','white');

	});

	$('#offEvent').on( 'click',function(){
		$('#div1').off('mouseout');
	});

	//Q:pass along data to the function
	//how to pass along data to the function

	$('#passDataFunctionInEvent').on('click',{msg:"you just clicked me!"},handlerName);

		function handlerName(event){
			console.log(event);
 			alert(event.data.msg);// data  is the property of event
 		}


 	/*Q:Attach a custom event on an element
 		How to attach a customized namespace event on an element.
	*/	

	$('#triggerCustomEventPara').on('myOwnEvent',function(event,showName){
		$(this).text(showName + '!What a beautiful name!').show();
	});
	//===
	$('#triggerCustomEvent').on('click' ,function(){
		$('#triggerCustomEventPara').trigger('myOwnEvent',['Avika']);
	});
	
});



