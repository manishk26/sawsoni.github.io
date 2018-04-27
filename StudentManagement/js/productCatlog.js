var prd1 = {id:1, name:"xxxx", price:2200, description:"xxxxxxx"};
var products = [prd1, prd1, prd1, prd1, prd1, prd1, prd1, prd1]

$(document).ready(function(){
	console.log('dom is ready');
	// will get products from REST Api and pass to this function
	createDivOfProducts(products);
});

/**
* create div of products
*/
function createDivOfProducts(products){

	var divs = "";
	products.forEach( (product) => {
	var prd = `<div style="flex: 1 1 10%; border: 1px solid red;">
					<div class="figureDivContainer">
						<figure class="">
							<div><span>wishlisticon</span></div>
							<div>
								<div>
									<p>Quick view</p>
								</div>
							</div>
	 						<img src="image/girl-dress.jpg" height="400px" alt="img">	
						</figure>
					</div>
				
					<div class="product-info">
						<span>New</span>
						<button type="button">btn</button>
						<div>
							<span>Band Collar 3/4Th Sleeves Embroidered dress</span>
						</div>
						<div>
							<span>2000</span>
						</div>
						<div>
							<span>size-label</span>
							<span>M</span>
						</div>
					</div>
				</div>`;
			divs = divs + prd;	

	} );


	$('#productParentDiv').html(divs);

}

