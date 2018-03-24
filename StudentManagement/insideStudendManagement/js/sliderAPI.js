/*
* Slider object is available as global object when this .js file is include in am html
* So client has to call Slider.setData(d) with array function on Slider object
*/
var Slider = (function() {
	var i = 0;
	var data;


	/* 
	This function store d parameter/object in data
	* Data is nothing but an array of objects
	* The slide function works on this data
	*/
	function setData(d){
		data = d; 
	}

	function increaseCounter(){
		return i++;
	}

	function resetCounter(){
		if(i > data.length - 1){
			i = 0;
		}
	}

	function slide(){
		resetCounter();
		var elem = data[i];
		increaseCounter();
		return elem;
	}

	return {
		slide:slide,
		setData:setData
	};

})();