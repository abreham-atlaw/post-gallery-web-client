import Model from "@/lib/models/model";
import { Item } from "firebase/analytics";
import Artwork from "./artwork";
import OrderPricing from "./orderPricing";


export default class Order implements Model<string>{

	public id: string | null;

	public itemId: string;
	public shippingInfoId: string;
	public clientId: string;

	public orderDateTime: Date;
	public isPaymentComplete: boolean;

	public pricing: OrderPricing;

	public transactionId: string | null;

	public item?: Artwork;


	constructor(
		id: string | null = null,
		itemId: string,
		shippingInfoId: string,
		clientId: string,
		orderPricing: OrderPricing,
		orderDateTime: Date | null = null ,
		isPaymentComplete: boolean = false,
		transactionId: string | null = null
	){
		this.id = id;
		this.itemId = itemId;
		if(orderDateTime === null){
			orderDateTime = new Date(Date.now())
		}
		this.orderDateTime = orderDateTime
		this.isPaymentComplete = isPaymentComplete
		this.shippingInfoId = shippingInfoId
		this.clientId = clientId
		this.pricing = orderPricing
		this.transactionId = transactionId
	}

	getPK(): string | null {
		return this.id;
	}
	setPK(pk: string): void {
		this.id = pk;
	}

}