import ViewModel from "@/lib/viewmodel/viewmodel";
import PaymentState from "../state/paymentState";
import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import CoreProviders from "../../di/coreproviders";


export default class PaymentViewModel extends AsyncViewModel<PaymentState>{

	private orderRepository = CoreProviders.provideOrderRepository();

	public async onInit(): Promise<void> {
		super.onInit()
		this.state.order = await this.orderRepository.getByPrimaryKey(this.state.orderId);
	}

	public async confirmPayment(){
		this.asyncCall(
			async () => {
				this.state.order!.isPaymentComplete = true
				await this.orderRepository.save(this.state.order!)
			}
		)
	}
	
}