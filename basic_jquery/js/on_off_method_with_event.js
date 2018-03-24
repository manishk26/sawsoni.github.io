
//syntex: : $(selector).on(event,childSelector,data,function,map)
/*event: Required. Specifies one or more event(s) or namespaces to attach to the selected elements.
		 Multiple event values are separated by space. Must be a valid event*/
$(document).ready(function(){


	$('#clickMe1').click(function(e){
		console.log(e);
		alert('You clicked me. My target is: '+e.currentTarget.id);
	});

	$('#clickMe2').on('click', function(){
		
		var rows = $('#tableRows').html();//get empty value
		//console.log($('#tableRows').html());
		rows += "<tr><td> Soni </td> <td> 30 </td></tr>";
		
		//update DOM#tableRows
		$('#tableRows').html(rows);//set value
		//console.log($('#tableRows').html(rows));
	});

	//How to attach multiple events to an element

	$('#text').on('mouseover mouseout', function(){
		$(this).toggleClass('intro');
	});

//How to attach multiple event handlers to the selected elements using the map parameter.
/*map: Specifies an event map ({event:function, event:function, ...}) containing one or more event to attach to the selected elements, and functions to run when the events occur
*/
	$('#btn1').on({

		mouseover:function(){
			$('#div1').css('background-color','lightgray');
		},
		mouseout:function(){
			$('#div2').css('background-color','lightblue');
		},
		click:function(){
			$('#div3').css('background-color','yellow');
		}


	});


	//3:How to attach a customized namespace event on an element?will do later

	//useing on() and off() method in button

	//$('#btnclickme').on('click',function(event){
		$('#btnclickme').on('click mouseover mouseout',function(event){

			if(event.type == 'click'){
				$('#divResult').html('button clicked at x = ' +event.pageX  + ' '+'y = '+ event.pageY);

			}else if(event.type == 'mouseover'){

				$(this).addClass('ButtonStyle');//this represent to #btnclickme

			}else{
				$(this).removeClass('ButtonStyle');
			}

	});
	
	$('#btnEnableMouseOverEffect').click(function(){

		$('#btnclickme').on('mouseover',function(){
			$(this).addClass('ButtonStyle');
		});
	});

	$('#btnDisableMouseOverEffect').click(function(){

		$('#btnclickme').off('mouseover');
		
	});
});