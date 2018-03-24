$(document).ready(function(){
	$('#showTemplate').on('click', function(){
		var source   = $("#entry-template").html();
		var template = Handlebars.compile(source);
		var obj = {name:'Hello Handlebar', description:'This is my first example'}

		$('#templateData').html(template(obj));
	})
}) 