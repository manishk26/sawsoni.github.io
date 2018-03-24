
	//logical separation
	//model
	class ProductModel{

		constructor(){
			this.name =  '';
			this.price = '';
			this.img = '';
		}

		getProductInfo(){
			return this.name + ' '+ this.price;
		}

		getProductOption(){
			let option = ['Elecrtroninc','Book','Furniture'];
		}
	}
	