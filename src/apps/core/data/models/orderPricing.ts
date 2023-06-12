
export default class OrderPricing{

	artPrice: number;
	shippingPrice: number;
	vat: number;
	
	constructor(artPrice: number, shippingPrice: number, vat: number){
		this.artPrice = artPrice;
		this.shippingPrice = shippingPrice;
		this.vat = vat;
	}

	public getTotal(){
		return this.artPrice + this.shippingPrice + this.vat;
	}

}