$(document).ready(function(){
 var fruits = ['banana','apple','pineapple'];

   fruits.push('lemon');//The easiest way to add a new element to an array is using the push method:
   fruits.pop();// The pop() method removes the last element from an array
   fruits.shift();//The shift() method removes the first array element and "shifts" all other elements to a lower index.
   fruits.unshift('lemon');//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
   fruits[0]='kiwi';// Changes the first element of fruits to 
   fruits[fruits.length] = 'papaya';//The length property provides an easy way to append a new element to an array
   //delete fruits[0];//Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:
   					//Using delete may leave undefined holes in the array. Use pop() or shift() instead.

 var text = '<ul>';

for(var i = 0; i < fruits.length; i++){

	text = text + '<li>' + fruits[i] + '</li>';
}

 text = text + '</ul>';

 // fruits.push('lemon'); if i push here this will not come in  var text

 console.log(text);

 $('#demo').html(text);
 // document.getElementById('demo').innerHTML= text;
 // document.getElementById("demo").innerHTML = fruits.toString();
 //document.getElementById("demo").innerHTML = fruits.join(" * ");
 $('#demo1').html(fruits.join('*'));// can write join()or join('*') ;
 $('#demo2').html(fruits.toString());// (,)default  /cannot write toString('*')

 var cars = ['BMW','FARARI',"RIZE"];

  $('#demo3').html(cars.join('*'));

$('#btn').click(function(){
  
  	cars.splice(2,0,'ALTO','SWIFT');
  
	// $('#demo3').html(cars);
		$('#demo3').html(cars.join('*'));
	/*1:TThe first parameter (2) defines the position where new elements should be added (spliced in).


	2:The second parameter (0) defines how many elements should be removed.
	3:The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added
	*/	
});

$('#btn2').click(function(){
	cars.splice(0,1);
	$('#demo4').html(cars.join('*'));
	/*
	1:The first parameter (0) defines the position where new elements should be added (spliced in).
	2:The second parameter (1) defines how many elements should be removed.
	3:The rest of the parameters are omitted. No new elements will be added.
	*/
});
	

});