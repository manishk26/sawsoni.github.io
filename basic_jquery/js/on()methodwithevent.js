
//syntex: : $(selector).on(event,childSelector,data,function,map)
/*event: Required. Specifies one or more event(s) or namespaces to attach to the selected elements.
		 Multiple event values are separated by space. Must be a valid event*/
$(document).ready(function(){
	//How to attach multiple events to an element

	$('p').on('mouseover mouseout', function(){
		$(this).toggleClass('intro');
	});

//How to attach multiple event handlers to the selected elements using the map parameter.
/*map: Specifies an event map ({event:function, event:function, ...}) containing one or more event to attach to the selected elements, and functions to run when the events occur
*/
	$('p').on({

		mouseover:function(){
			$('body').css('background-color','lightgray');
		},
		mouseout:function(){
			$('body').css('background-color','lightblue');
		},
		click:function(){
			$('body').css('background-color','yellow');
		}


	});


	//How to attach a customized namespace event on an element

	

});