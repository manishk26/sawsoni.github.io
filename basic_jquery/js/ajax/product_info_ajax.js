$(document).ready(function(){

		
	//$.ajaxSetup({
		//url: 'http://demo.soni.com:3000/product';
	//});

	getProducts();

	function getProducts(){
			$.ajax({

			url: 'http://demo.soni.com:3000/products',
			type : 'GET',
			success: function(result){
				//console.log(result);
				var productsAsString = JSON.stringify(result);
				var products = JSON.parse(productsAsString);

				//console.log(products);

				// $.each(result, function(index, product){
				// 	var tr =  '<tr><td>'+ product.category + '</td><td>' + products.name + '</td><td>' + product.Price + ' INR </td></tr>';

				// })
				var tr = '';
				for(var i = 0; i < products.length; i++ ){
					 tr +=  '<tr><td>'+ products[i].category + '</td><td>' + products[i].name + '</td><td>' + products[i].price + ' INR </td></tr>';	

			   }

				$('#tableBody').html(tr);
			}
		});	
	}

	$('#createProductBtn').click(function(){
		$('#formPage').show();
	});



	//save product
	$('#btnSave').on('click', function(){

		var nameInput = $('#name').val();
		if(nameInput == ''){
			$('#error').html('Name should not be blank');
			return;
		}

		var priceInput = parseInt($('#price').val());
		if(typeof priceInput == 'string'){
			$('#error').html('Price should be number');
			return;
		}

		var selecteCat = $('#pCategory').val();
	

		var product = {
			category : selecteCat,
			name : nameInput,
			price : parseInt(priceInput)
		}
		
		console.log(product);
		$.post({
			url: 'http://demo.soni.com:3000/products',
			data: product,
			success : function(data, status){
				// update message div
				$('#msg').html('product added successfully');
				// clear error message div
				$('#error').html();
				$('#formPage').hide();
				$('#name').val("");
				$('#price').val("");
				getProducts();
				
			}, 
			error: function(status){
				console.log(status);
			}
		});


	});
});
