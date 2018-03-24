$('#fileUpload').on('onchange', function() {
	console.log('clicked');

	var selectedFile = document.getElementById('fileUpload').files[0];
	console.log(selectedFile);

})

function handleFiles(files){
	console.log(files);
}