import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import CheckoutState from "../state/checkOutState";
import CoreProviders from "../../di/coreproviders";
import ShippingInfo from "../../data/models/shippingInfo";
import CheckoutForm from "../forms/checkoutForm";
import AuthProviders from "@/apps/auth/di/authProviders";
import Order from "../../data/models/order";
import Artwork from "../../data/models/artwork";
import OrderPricing from "../../data/models/orderPricing";
import { lstat } from "fs";


export default class CheckoutViewModel extends AsyncViewModel<CheckoutState>{

	private orderRepository = CoreProviders.provideOrderRepository()
	private shippingInfoRepository = CoreProviders.provideShippingRepository()
	private itemRepository = CoreProviders.provideArtworkRepository()
	private paymentRepository = CoreProviders.providePaymentRepository()
	
	private async createShippingInfo(form: CheckoutForm): Promise<ShippingInfo>{
		let shippingInfo = new ShippingInfo(
			null,
			form.firstName.getValue()!,
			form.lastName.getValue()!,
			form.address.getValue()!,
			form.address2.getValue()!,
			form.country.getValue()!,
			form.city.getValue()!,
			form.region.getValue()!,
			form.zipCode.getValue()!,
			form.phoneNumber.getValue()!,
			(await AuthProviders.provideCurrentClient())!.getPK()!
		) 
		await this.shippingInfoRepository.create(shippingInfo)
		return shippingInfo;
	}

	private async createOrder(shippingInfo: ShippingInfo, item: Artwork, pricing: OrderPricing): Promise<Order>{
		let order = new Order(
			null,
			item.getPK()!,
			shippingInfo.getPK()!,
			(await AuthProviders.provideCurrentClient())!.getPK()!,
			pricing,
			
		)
		await this.orderRepository.create(order)
		return order
	}

	private async processCheckout(){
		if(this.state.shippingInfo === undefined){
			this.state.shippingInfo = await this.createShippingInfo(this.state.form);
		}
		let order = await this.createOrder(this.state.shippingInfo, this.state.item!, this.state.pricing!);
		this.state.order = order;
	}

	public async onInit(): Promise<void> {
		super.onInit()
		this.state.item = await this.itemRepository.getByPrimaryKey(this.state.itemId)
		this.state.pricing = new OrderPricing(
			this.state.item.price,
			2000, // TODO,
		)
	}

	public async saveShippingInfo(){
		this.asyncCall(
			async () => {
				await this.state.form.validate(true)
				this.state.shippingInfo = await this.createShippingInfo(this.state.form)
			},
			this.state.shippingInfoState
		)
	}

	private async initializePayment(form: CheckoutForm, pricing: OrderPricing){
		let response = await this.paymentRepository.chapaPayment(
			{
				firstName: form.firstName.getValue()!,
				lastName: form.lastName.getValue()!,
				email: form.email.getValue()!,
				amount: pricing.getTotal(),
				returnUrl: `http://localhost:5173/complete-payment/${this.state.order!.getPK()}/`.replaceAll(" ", "%20")
			}
		);
		this.state.paymentLink = response.checkoutUrl;
		this.state.order!.transactionId = response.transactionId;
		await this.orderRepository.save(this.state.order!);
	}

	public async checkout(){
		this.asyncCall(
			async () => {
				await this.state.form.validate(true)
				await this.processCheckout()
				await this.initializePayment(this.state.form, this.state.pricing!);
			}
		)
	}

}