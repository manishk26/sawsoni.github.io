$(document).ready(function(){
	var girls = ['Avika', 'Soni','Vincy','Reena' ];
	var boys = ['Avinash','Naresh','Tulsi','Manish'];
	var otherGirl = ['Meena','Madhu'];

	// var allChildren = girls.concat(boys);
	var allChildren = girls.concat(boys,otherGirl);
	
	//The concat() method can take any number of array argument
	//The concat() method does not change the existing arrays. It always returns a new array.
	

	var allWomens = otherGirl.concat(['Yashoda','Priyanka']);
	////The concat() method can also take values as arguments:

	$('#demo').html(allChildren.join('*'));

	$('#demo1').html(allWomens);

})