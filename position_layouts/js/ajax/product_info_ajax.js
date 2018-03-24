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

				for(var i = 0; i < products.length; i++ ){
					var prd = products[i];
					var img  = prd.image.trim();
					 // This is called template in es6
					 var div = `<div class="parent">
						<img src='images/${img}' alt="img"/>
						<div class="child">
							<div class="content">
								<a href="#" id='prd_detail'>Quick view</a>
							</div>
							<div class="price_tag">
							<button id='prd_detailBtn' type="button" class="btn btn-info btn-lg" data-toggle="modal" >${prd.name}</button>
								<a href="#" id='prd_detail'>${prd.name}</a>
								<p>$ ${prd.price}.00</p>
							</div>

						</div>
				</div>`;
					 $('#products_content').append(div);
			   }

				
			}
		});	
	}


	$('#products_content').on('click','#prd_detail', (evt)=>{
		//evt.preventDefault();
		console.log('details');


			var divquickView = `<div id="productInfoDiv" class="showHide">
								<h2>Product Information</h2>
									<pre>
										<p>ProductName:NAME</p>
										<p>ProductPrice:PRICE</p>
										<p><a>MoreDtails:</a></p>
									</pre>
								
								</div>`;

		console.log(divquickView);

		$(divquickView).insertAfter('.product_info').show();
		// $(this).toggle();;
	});

	
	

/*	$('#createProductBtn').click(function(){
		$('#formPage').show();
	});*/



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
