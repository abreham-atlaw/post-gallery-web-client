import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import OrderDetailState from "../states/orderDetailState";
import OrderRepository from "@/apps/core/data/repositories/orderRepository";
import { OrderStatus } from "@/apps/core/data/models/order";



export default class OrderDetailViewModel extends AsyncViewModel<OrderDetailState>{

	private repository = new OrderRepository();

	public async onInit(): Promise<void> {
		await super.onInit();
		this.state.order = await this.repository.getByPrimaryKey(this.state.orderId);
	}

	public async sendAcceptedEmail(){

	}

	public async sendRejectedEmail(){

	}

	public async sendShippedEmail(){

	}


	public async acceptRequest(): Promise<void>{

		await this.asyncCall(
			async () => {
				this.state.order!.status = OrderStatus.accepted;
				await this.repository.save(this.state.order!);
				await this.sendAcceptedEmail();
			}
		)

	}

	public async rejectRequest(): Promise<void>{
		await this.asyncCall(
			async () => {
				this.state.order!.status = OrderStatus.rejected;
				await this.repository.save(this.state.order!);
				await this.sendRejectedEmail();
			}
		)
	}

	public async confirmShipment(): Promise<void>{
		await this.asyncCall(
			async () => {
				this.state.order!.status = OrderStatus.waitingShipment;
				await this.repository.save(this.state.order!);
				await this.sendShippedEmail();
			}
		)
	}
	
}